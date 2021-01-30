import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';
export default function QuizDaGaleraPage({ dbExterno }) {
    return (
        <ThemeProvider theme={dbExterno.theme}>
            <QuizScreen 
            externalQuestion={dbExterno.questions}
            externalBg={dbExterno.bg}
            />
        </ThemeProvider>
    );
}

export async function getServerSideProps(context)  {
    /*
    query: { id: 'qualquercoisa' },
    resolvedUrl: '/quiz/qualquercoisa?id=qualquercoisa',
    params: { id: 'qualquercoisa' },
    */
   
   const [projectName, user] = context.query.id.split('___');
   const dbExterno = await fetch(`https://${projectName}.${user}.vercel.app/api/db`)
   .then((respostaDoServer) => {
        if(respostaDoServer.ok) {
            return respostaDoServer.json();
        }
        throw new Error('Falha em pegar os dados');
   })
   .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
   .catch((err) => {
        console.error(err);
   });

   
    return {
        props: {
            dbExterno,
        },
    };
}
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';
import Link from '../src/components/Link';


// eslint-disable-next-line no-lone-blocks
/* // const BackgroundImage = styled.div`
//  background-image: url(${db.bg});
//  flex: 1;
//  background-size: cover;
 // background-position: center;
//`;
*/



export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz- StarWars</title>
      </Head>
      <QuizContainer>
        <QuizLogo
           
        />
        <Widget 
          as={motion.section}
          transition={{
            delay: 0.5,
            duration: 0.8
          }}
          variants={{
            show: {opacity: 1, y: '0' },
            hidden: {opacity: 0, y:'100%' },
          }}
          initial="hidden"
          animate="show"
        
        >
          <Widget.Header>
            <Widget.Logo>Quiz Star Wars</Widget.Logo>
          </Widget.Header>
          <Widget.Content>
           
            <form onSubmit={function (event) { //ou ()=>
              // Para evitar comportamento de reload da pagina
              event.preventDefault();
              // Forma de navegar no next
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Nome do Jogador"
                value={name}
              />
              <Button 
                  type="submit" 
                  disabled={!name}
                  as={motion.button}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
              >
               {`Jogador ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
       
        <Widget
        as={motion.section}
        transition={{
          delay: 0.5,
          duration: 1.2
        }}
        variants={{
          show: {opacity: 1, y: '0' },
          hidden: {opacity: 0, y:'100%' },
        }}
        initial="hidden"
        animate="show"
        >
        <Widget.Header>
            <Widget.Logo>Quiz da Galera</Widget.Logo> 
        </Widget.Header>
          <Widget.Content>
            <ul >
              {db.external.map((linkExterno) => {
                const [check, setCheck] = React.useState(false) 
                const [projectName, user] =  linkExterno
                .replace('https://', '')
                .replace('.vercel.app/', '')
                .replace('/', '')
                .split('.');

              return (
                    <li onClick={()=>{
                      !!name ? setCheck(true) : setCheck(false)   
                      }}
                     key={linkExterno}  >
                      <Widget.Galera
                        as={Link}
                       href={`/quiz/${projectName}___${user}`}
                       >
                        <Widget.Galera>{`${user}/${projectName}`} {!!name == true && check} </Widget.Galera>
                      </Widget.Galera>
                    </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer
        as={motion.section}
        transition={{
          delay: 0.5,
          duration: 1.4
        }}
        variants={{
          show: {opacity: 1, y: '0' },
          hidden: {opacity: 0, y:'100%' },
        }}
        initial="hidden"
        animate="show"
        />

        <GitHubCorner projectUrl="https://github.com/Wfelipe2011" />
      </QuizContainer>

    </QuizBackground>

  );
}

/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import Head from 'next/head';
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

        <QuizLogo />
        <Widget>
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
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Nome do Jogador"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quiz a Galera </h1>

            <p>
              Este exemplo demonstra diferentes alturas de linha. Você pode alterar
              a altura da linha clicando em uma das propriedades da altura da linha à esquerda.
              Este texto é onde você verá o resultado da propriedade de altura de linha selecionada.
            </p>
          </Widget.Content>
        </Widget>
        <Footer />

        <GitHubCorner projectUrl="https://github.com/Wfelipe2011" />
      </QuizContainer>

    </QuizBackground>

  );
}

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


// eslint-disable-next-line no-lone-blocks
/* // const BackgroundImage = styled.div`
//  background-image: url(${db.bg});
//  flex: 1;
//  background-size: cover;
 // background-position: center;
//`;
*/

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

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
           
            <form onSubmit={function (event) {
              // Para evitar comportamento de reload da pagina
              event.preventDefault();
              // Forma de navegar no next
              router.push(`/quiz?name=${name}`);
            }}
            >
              <input
                onChange={function (event) {
                // Usar o useStage para react ver as modificaçoes.
                  setName(event.target.value);
                }}
                placeholder="Digite o seu nome"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogador: <span> </span>{name}
                
              </button>
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

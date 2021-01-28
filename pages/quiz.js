import React from 'react';
import { QuizContainer } from '.';
import styled from 'styled-components';
import Head from 'next/head';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
export default function QuizPage() {
  return (

    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz- StarWars</title>
      </Head>
      <QuizContainer>

        <QuizLogo />
        <Widget>
          <Widget.Header>
            <Widget.Logo>Quiz Star Wars</Widget.Logo>
          </Widget.Header>
          <Widget.Content>
            <h1>Pergunta 1</h1>

                <p>
                Este exemplo demonstra diferentes alturas de linha. Você pode alterar
                a altura da linha clicando em uma das propriedades da altura da linha à esquerda.
                Este texto é onde você verá o resultado da propriedade de altura de linha selecionada.
                </p>
           
                
             
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Pergunta 2 </h1>

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

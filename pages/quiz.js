import React from 'react';
import Head from 'next/head';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';

function LoadingWidget() {


  return(
    <Widget>
      <Widget.Header>
        <Widget.Logo>
          Carregando...
        </Widget.Logo>
      </Widget.Header>
      <Widget.Content>
        [Desafio do loading]
      </Widget.Content>
    </Widget>
  )
}

function QuestionWidget ({
  question, 
  totalQuestion,
  questionIndex,
  onSubmit,
}) {
    const questionId = `question__${questionIndex}`;
    return (
      <Widget>
      <Widget.Header>
        <Widget.Logo>
           {`Pergunta ${questionIndex + 1} de ${totalQuestion}`}
        </Widget.Logo>
        
      </Widget.Header>
        <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
        />
      <Widget.Content>
        <h2>
        {question.title}
        </h2>
        <p>
        {question.description}
        </p>

        <form onSubmit={(event) => {
          event.preventDefault();
          onSubmit();
        }}>
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic
              as="label"
                htmlFor={alternativeId}
              >
                
                <input
                //style={{ display: 'none'}}
                id={alternativeId}
                name={questionId}
                type="radio"
                />
                {alternative}
              </Widget.Topic>
            );  
          })}
              {/*} <pre>
            {JSON.stringify(question, null, 4)}
            </pre>
          */}
            <Button type="submit">
              Confirmar
            </Button>
        </form>
        

       
      </Widget.Content>
    </Widget>
    );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

  
/* Ciclo de vida de um componete React:
nasce (didMount) === ele é montado na tela { vai fazer algo programado}
cresce[vai atualizar] (willUpdate)=== vai fazer outra coisa durante um tempo {atualizado like, curtiu }
vai morre (willUnmount)=== vai sair da tela {pode fazer algo programado}
React.useEffect
*/
export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const totalQuestion = db.questions.length;
  const [currentQuestion, setCurrentQuestion]  = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  React.useEffect(()=>{
    setTimeout(() =>{
      setScreenState(screenStates.QUIZ);
    }, 1 * 2000);
    //nasce (didMount)
  }, []);

  function handleSubmitQuiz() {
  const nextQuestion = questionIndex + 1;
  if (nextQuestion < totalQuestion) {
    setCurrentQuestion(nextQuestion);
  }else{
    setScreenState(screenStates.RESULT);
  }

  }

  return (

    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz- StarWars</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget 
          question={question}
          questionIndex={questionIndex}
          totalQuestion={totalQuestion}
          onSubmit={handleSubmitQuiz}
          />
        )} 
        {screenState === screenStates.LOADING &&  <LoadingWidget />}
       {screenState === screenStates.RESULT &&  <Widget.Logo>Você acertou x questoes</Widget.Logo>}
      </QuizContainer>
    </QuizBackground>
  );
}

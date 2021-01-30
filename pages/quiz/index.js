import React from 'react';
import Head from 'next/head';
import {motion} from 'framer-motion';
import db from '../../db.json';
import Widget from '../../src/components/Widget';
import QuizBackground from '../../src/components/QuizBackground';
import QuizLogo from '../../src/components/QuizLogo';
import QuizContainer from '../../src/components/QuizContainer';
import Button from '../../src/components/Button';
import AlternativesForm from '../../src/components/AlternativesForm';
import BackLinkArrow from '../../src/components/BlackLinkArrow';

function LoadingWidget() {


  return(
    <Widget>
      <Widget.Header>
        <Widget.Logo>
          <Widget.Carregando>
          {db.description}
          </Widget.Carregando>
          
        </Widget.Logo>
          </Widget.Header>
          <Widget.Content>
          <img
            alt="Loading"
            style={{
              borderRadius: '80px',
              width: '100%',
              height: '230px',
              objectFit: 'cover',
            }}
            src={db.loading}
            />
          </Widget.Content>
    </Widget>
  )
}

function ResultWidget( { results }) {
  return(
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
        <Widget.Logo>
         Tela de Resultado:
        </Widget.Logo>
      </Widget.Header>
      <Widget.Content>
        <p>Você acertou 
          {' '}
           {/* Umar forma de fazer usando reduce do JavaScript
              {results.reduce((somatoriaAtual, resultAtual) => {
              const isAcerto = resultAtual === true;
              if (isAcerto){
                return somatoriaAtual + 1;
              }
                return somatoriaAtual;
          }, 0)} 
          Ou usar tipo e dados. Filtrar apenas os trues e colocar novo array. */}
           {results.filter((x) => x).length}
          {' '}
          perguntas
          </p>
        <ul>
          {results.map((result, index)=> (
            <li key={`result__${result}`}>
              
              #
              {index + 1}
              {' '}
               Resultado:{' '}
              {result === true ? 'Acertou' : 'Errou'}
              
            </li>
          )) }
          
        </ul>
      </Widget.Content>
    </Widget>
  )
}

function QuestionWidget ({
  question, 
  totalQuestion,
  questionIndex,
  onSubmit,
  addResult,
}) {
    const questionId = `question__${questionIndex}`;
    const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
    const [isQuestioSubmit, setIsQuestionSubmit] = React.useState(false);
    const isCorrect = selectedAlternative === question.answer;
    const hasAlternativeSelected = selectedAlternative !== undefined;
    
    return (
      <Widget
      as={motion.section}
        transition={{
          delay: 0.5,
          duration: 1.2
        }}
        variants={{
          show: {opacity: 1, x: '0' },
          hidden: {opacity: 0, x:'100%' },
        }}
        initial="hidden"
        animate="show"
      >
      <Widget.Header>
      <BackLinkArrow href="/"/>
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
      <Widget.Content
       
      >
        <h2>
        {question.title}
        </h2>
        <p>
        {question.description}
        </p>
        {/*Para fazer logica de acerto e mostrar na tela com delei de 3 segundos*/}
        <AlternativesForm 
        onSubmit={(event) => {
          event.preventDefault();
          setIsQuestionSubmit(true);
          setTimeout(()=>{
            addResult(isCorrect);
            onSubmit();
            setIsQuestionSubmit(false);
            setSelectedAlternative(undefined);
          }, 4 * 1000);
          
        }}>
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus =  isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestioSubmit && alternativeStatus}
                as={motion.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                
                <input
                style={{ display: 'none'}}
                id={alternativeId}
                name={questionId}
                onChange={()=> setSelectedAlternative(alternativeIndex)}
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
            <Button type="submit" disabled={!hasAlternativeSelected}
             as={motion.button}
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
            >
              Confirmar
            </Button>
            {/*
             {isQuestioSubmit && isCorrect && <p>Você acertou!</p>}
            {isQuestioSubmit && !isCorrect && <p>Você errou!</p>}
             */}
           
        </AlternativesForm>
        

       
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
  const [results, setResult] = React.useState([]);
  const totalQuestion = db.questions.length;
  const [currentQuestion, setCurrentQuestion]  = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  function addResult(result) {
    setResult([
      ...results,
      result,
    ])
  }

  React.useEffect(()=>{
    setTimeout(() =>{
     setScreenState(screenStates.QUIZ);
    }, 1 * 6000);
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
          addResult={addResult}
          />
        )} 
        {screenState === screenStates.LOADING &&  <LoadingWidget />}
       {screenState === screenStates.RESULT &&  <ResultWidget results={results}/>}
      </QuizContainer>
    </QuizBackground>
  );
}

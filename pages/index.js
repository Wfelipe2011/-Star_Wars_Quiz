import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'



//const BackgroundImage = styled.div`
//  background-image: url(${db.bg});
//  flex: 1;
//  background-size: cover;
 // background-position: center;
//`;

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
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget.Logo>
            Quiz Star Wars
        </Widget.Logo>
        <Widget>
          <Widget.Content>
            <h1>Vamos começar! </h1>

            <p>
            Este exemplo demonstra diferentes alturas de linha. Você pode alterar 
            a altura da linha clicando em uma das propriedades da altura da linha à esquerda. 
            Este texto é onde você verá o resultado da propriedade de altura de linha selecionada.
            </p>
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
        <Footer>

        </Footer>

        <GitHubCorner projectUrl="" />
      </QuizContainer>
    
    
    </QuizBackground>
       
  )
}

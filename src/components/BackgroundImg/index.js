import styled from 'styled-components'
import db from '../../../db.json'

const BackgroundImg = styled.main`
   flex: 1;
   background-size: cover;
   background-position: center;
  background-image: url(${props => props.image});              // 
  @media screen and (max-width: 500px) {
    background-image: url(${db.bgGif});
    transition: all 3s;
  }
  transition: all 3s;
`
BackgroundImg.ContainerBase = styled.div`
  flex: 1;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 7%;
`

export default BackgroundImg
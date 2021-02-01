import styled from 'styled-components'

const Widget = styled.div`
margin-top: 24px;
margin-bottom: 24px;
border: 1px solid ${({ theme }) => theme.colors.primary};
background-color:  ${({ theme }) => theme.colors.secondary};
// Ou assim
color: ${({ theme }) =>{
    return theme.colors.primary
}};



@keyframes efeito-logo{
    0%{border: 3px solid ${({ theme }) => theme.colors.primary}; }
    50%{border: 3px solid #666600; color:#666600; }
    100%{border: 3px solid ${({ theme }) => theme.colors.primary}}
}

border-radius: 6px;
overflow: hidden;

h1, h2, h3 {
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0;
}

p{
  font-size: 14px;
  font-weight: 400px;
  line-height: 1;
}
`;
Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 3% 10%;
  background-color: ${({ theme }) => theme.colors.primary};
   
  * {
    margin: 0;
  }
`;

Widget.Logo = styled.span`

animation-name: efeito-logo;
animation-duration: 6s;
animation-delay: 2s;
animation-iteration-count: infinite;
padding: 2%;
font-size: 18px;
line-height: 1.2;
font-weight: bold;
border-radius: 50px;
border: 3px solid ${({ theme }) => theme.colors.primary};
background-color: ${({ theme }) => theme.colors.secondary} ;
color: ${({ theme }) => theme.colors.primary};
text-align: center;
left: 0;
width: 500px;
  



@media screen and (max-width: 426px) {
padding: 15px;

}

@media screen and (max-width: 376px) {

padding: 15px;
  

}

@media screen and (max-width: 321px) {

input {
    margin-left: 0;
  }
}
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => `${theme.colors.secondary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
        color: ${({ theme }) => theme.colors.secondary};
        font-weight: bold;
        background-color: ${({ theme }) => theme.colors.primary};
  }
`

Widget.Galera = styled.a`
      
      outline: 0;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.contrastText};
      background-color: ${({ theme }) => `${theme.colors.secondary}40`};
      padding: 3px 5px;
      margin-bottom: 8px;
      cursor: pointer;
      border-radius: ${({ theme }) => theme.borderRadius};
      transition: .3s;
      display: block;
      
      font-size: 14px;
      border-radius: 20px;
      text-align: center;
      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.secondary};
        font-weight: bold;
        background-color: ${({ theme }) => theme.colors.primary};
  }
      
`

Widget.Carregando = styled.div`
@keyframes Carregando{
    0%{background-color:  ${({ theme }) => theme.colors.secondary}; }
    50%{background-color: ${({ theme }) => theme.colors.primary}; color: ${({ theme }) => theme.colors.secondary} ;  padding: 1%; }
    100%{background-color:  ${({ theme }) => theme.colors.primary}; color: ${({ theme }) => theme.colors.secondary} ; font-size: 20px;  padding: 1%; }
}

animation-name: Carregando;
animation-duration: 6s;
animation-delay: 1s;

padding: 2%;
font-size: 18px;
line-height: 1.2;
font-weight: bold;
border-radius: 50px;
border: 3px solid ${({ theme }) => theme.colors.primary};
background-color: ${({ theme }) => theme.colors.secondary} ;
color: ${({ theme }) => theme.colors.primary};
text-align: center;
left: 0;

`

Widget.Img = styled.img`

  div {
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  transform: scale(5);
}

.c-loader {
  animation: is-rotating 1s infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #51d4db;
  height: 50px;
  width: 50px;
}

@keyframes is-rotating {
  to {
    transform: rotate(1turn);
  }
}


`

Widget.Content = styled.div`

padding: 24px 32px 32px 32px;
& > *::first-child {
margin-top: 0;
}
& > *::first-child {
margin-bottom: 0;
}
ul {
list-style: none;
padding: 0;
} 


input {
  padding: 2%;
  margin: auto;
  margin-left: 5%;
  width: 255px;
  font-size: 18px;
  line-height: 1.2;
  font-weight: bold;
  border-radius: 50px;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary} ;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
}
@media screen and (max-width: 426px) {

input {
  margin: auto;
  }
}

@media screen and (max-width: 321px) {

input {
  margin-left: -16px;
  }
}

button {
  margin: auto;
  margin-left: 5%;
  margin-top: 2%;
  padding: 3%;
  width: 255px;
  font-size: 15px;
  line-height: 1.2;
  font-weight: bold;
  border-radius: 50px;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary} ;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
}

@media screen and (max-width: 426px) {

button {
    margin: auto;
    margin-top: 2%;
  }
}

@media screen and (max-width: 325px) {

button {
  margin-left: -16px;
    margin-top: 2%;
  }
}

button:hover {
  background-color: ${({ theme }) => theme.colors.primary} ;
  color: ${({ theme }) => theme.colors.secondary};
}
`;

export default Widget;

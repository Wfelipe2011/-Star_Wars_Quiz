import styled from 'styled-components'

const Widget = styled.div`
margin-top: 24px;
margin-bottom: 24px;
border: 1px solid ${({ theme }) => theme.colors.secondary};
background-color:  ${({ theme }) => theme.colors.primary};
// Ou assim
color: ${({ theme }) =>{
    return theme.colors.secondary
}};



@keyframes efeito-logo{
    0%{border: 3px solid ${({ theme }) => theme.colors.secondary}; }
    50%{border: 3px solid #666600; color:#666600; }
    100%{border: 3px solid ${({ theme }) => theme.colors.secondary}}
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
  background-color: ${({ theme }) => theme.colors.secondary};
   
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
border: 3px solid ${({ theme }) => theme.colors.secondary};
background-color: ${({ theme }) => theme.colors.primary} ;
color: ${({ theme }) => theme.colors.secondary};
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
  font-size: 18px;
  line-height: 1.2;
  font-weight: bold;
  border-radius: 50px;
  border: 3px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary} ;
  color: ${({ theme }) => theme.colors.secondary};
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
  border: 3px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary} ;
  color: ${({ theme }) => theme.colors.secondary};
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
  background-color: ${({ theme }) => theme.colors.secondary} ;
  color: ${({ theme }) => theme.colors.primary};
}
`;

export default Widget;

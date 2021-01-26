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

Widget.Logo = styled.span`

margin-left: 13%;
padding: 5%;
font-size: 30px;
line-height: 1.8;
font-weight: bold;
border-radius: 50px;
border: 3px solid ${({ theme }) => theme.colors.secondary};
background-color: ${({ theme }) => theme.colors.primary} ;
color: ${({ theme }) => theme.colors.secondary};
text-align: center;


@media screen and (max-width: 426px) {
margin-left: 11%;
padding: 15px;
}

@media screen and (max-width: 376px) {
margin-left: 12%;
padding: 15px;
}

@media screen and (max-width: 325px) {
margin-left: 7%;
padding: 15px;
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

`;

export default Widget;

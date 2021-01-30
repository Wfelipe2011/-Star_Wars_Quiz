import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    &[data-selected="true"] {
      color: ${({theme}) => theme.colors.secondary};
      font-weight: bold;
      background-color: ${({ theme }) => theme.colors.primary};
      
      &[data-status="SUCCESS"] {
        color: white;
        background-color: ${({ theme }) => theme.colors.success};
      }
      &[data-status="ERROR"] {
        color: white;
        background-color: ${({ theme }) => theme.colors.wrong};
      }
    }
    &:focus {
      opacity: 1;
    } 
  }
  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm;
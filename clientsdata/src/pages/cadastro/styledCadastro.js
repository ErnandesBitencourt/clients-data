import { styled } from "styled-components";

export const Container =  styled.div`
    width: 100%;
    height: 100vh;
   
    max-width: 320;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Main = styled.main`
    width: 100%;
    max-width: 400px;
    max-width: 320;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const H1 = styled.h1`
  font-size: 18px;
  font-weight: 600;
  padding: 0.5em;
  color:  ${props => props.theme.Themers.colorText};
`;
export const Form = styled.form`
     width: 100%;
     min-width: 320px;
     height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`;
export const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: ${props => props.theme.Themers.corButton};
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 400px;
  min-width: 320px;
`;

export const DivText =  styled.div`
    width: 100%;
    height: auto;
    padding: 0.5em;
    align-items: center;
    display: flex;
    justify-content: center;
    color: ${props => props.theme.Themers.colorText};
    font-weight:600;

`;
export const Strong = styled.strong`
  cursor: pointer;
    text-decoration: none;
    color: ${props => props.theme.Themers.colorText};
    border-bottom: solid 1px ${props => props.theme.Themers.colorText};
    font-weight: 800;
 
`;
import { styled } from "styled-components";

export const  Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;
export const H1 = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color:  ${props => props.theme.Themers.colorText};
`;

export const Span = styled.span`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 20rem;
  background-color: ${props => props.theme.Themers.backgroundColor};
  max-width: 400px;
  min-width: 320px;
  padding: 20px;
  box-sizing: border-box;
 
`;

export const Form = styled.form`
    width: 100%;
    max-width: 450px;
     min-width: 320px;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
   
`;

export const ErrorText = styled.div`
  font-size: 14px;
  color: red;
  font-weight: 700;
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
  min-width: 320px;
`;

export const DivText =  styled.div`
    width: 100%;
    height: auto;
    align-items: center;
    display: flex;
    justify-content: center;

`;
export const Strong = styled.strong`
  cursor: pointer;
    text-decoration: none;
    color: ${props => props.theme.Themers.colorText};
    border-bottom: solid 1px ${props => props.theme.Themers.colorText};;
 
`;
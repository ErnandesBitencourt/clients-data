import { styled } from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.Themers.corfundo};
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2em;
    align-items: center;
    overflow-y: hidden;
` ;


export const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  cursor: pointer;
  background-color: ${props => props.theme.Themers.corButton};
  color: white;
  font-weight: 600;
  font-size: 16px;
  min-width: 320px;
`;

export const Img = styled.img `
    width: 100%;
    max-width: 400px;
    min-width: 320px;

`
import React, {useState } from "react";
import { Inputs } from "../../components/inputs/inputs";
import { useNavigate } from "react-router-dom";
import useAut from "../../customHook/useAut";
import { cadastrar } from "../../routes/coordenadorDeRotas";
import {Container,H1,Span,Form,DivText,ErrorText,Button,Strong} from "./stylesLogin"

export const Login = () => {
    const navigate = useNavigate()
    const { signin } = useAut();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error , setError] = useState("")
    const Entrar = (e) => {
        e.preventDefault();
        if (!email | !senha) {
         setError("Preencha todos os campos");
          return;
        }
    
        const res = signin(email, senha);
    
        if (res) {
          setError(res);
          return;
        }
        navigate("/home");
      };

    return (
        <Container>
            <Span>
              <H1>SISTEMA DE LOGIN</H1>
                <Form onSubmit={Entrar}>
                  <Inputs type={"text"} placeholder= {"E-mail"} onChange={(e) =>setEmail(e.target.value)} />
                   <Inputs type ={"password"} placeholder={"Senha"} onChange={(e) =>setSenha(e.target.value)} />
                  <Button>Entrar</Button>

               </Form>
                <ErrorText>{error}</ErrorText>

                <DivText>
                   <p>Não tem uma conta?</p> <Strong onClick={() => cadastrar(navigate)}> &nbsp;Registre-se</Strong>
                  
                </DivText>
            </Span>

        </Container>
        
      
    )
}
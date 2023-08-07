import React from "react"; 
import bemvindo from "../../img/bemvindo.gif"
import { Container,Button,Img  } from "./styledHome";
import { useNavigate } from "react-router-dom";
import useAut from "../../customHook/useAut";
export const Home = () => {
    const navigate = useNavigate()
    const { signout } = useAut();
    return(
     <Container>
       
            <Img  src={bemvindo} alt="gif de boas vindas" />
            <Button onClick={() => [signout(), navigate("/")] } >Sair</Button>
       
     </Container>

       
    )
}
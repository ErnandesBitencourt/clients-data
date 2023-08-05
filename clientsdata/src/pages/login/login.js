import React from "react";
import { Inputs } from "../../components/inputs/inpurts";
import { useNavigate } from "react-router-dom";
import { cadastrar, confirmarDados } from "../../routes/coordenadorDeRotas";


export const Login = () => {
    const navigate = useNavigate()
    return (
        <div>
         <form>
            <Inputs type={"text"} placeholder= {"E-mail"} />
                <Inputs type ={"password"} placeholder={"Senha"}/>
                <button>Entrar</button>

         </form>

            <div>
                <button onClick={() =>confirmarDados(navigate) }  >Esqueceu a senha ?</button>
                <button onClick={() => cadastrar(navigate)} >Criar Cadastro</button>
            </div>

        </div>
        
      
    )
}
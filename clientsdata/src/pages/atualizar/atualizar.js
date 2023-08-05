import React from "react";
import { Inputs } from "../../components/inputs/inpurts";
import { retornaUmaPage } from "../../routes/coordenadorDeRotas";
import { useNavigate } from "react-router-dom";


export const Atualizar = () => {
const navigate = useNavigate();
    return (
        <div>
            <h1>Atualizar Cadastro</h1>

            <form>
                <Inputs type={"text"} placeholder={"Nome Completo"} label = {"nome"} />
                <Inputs type={"date"} placeholder={"data de nascimento"} label={"Data de nascimento"} />
                <Inputs type={"email"} placeholder={"E-mail"} label={"E-mail"} />
                <Inputs  type={"number"} placeholder={"CPF"} label={"CPF"} />
                <Inputs type={"number"} placeholder={"CEP"} label={"Buscar endereço por cap"}/>
                <button>Buscar Cep</button>
                <Inputs type={"text"} placeholder={"Rua"} label={"Nome da Rua"} />
                <Inputs type={"number"} placeholder={"N°"} label={"Numero da casa"} />
                <Inputs type={"text"} placeholder={"Bairro"} label={"Bairro"} />
                <Inputs type={"text"} placeholder={"Estado"} label={"Estado"} />
                <Inputs type={"text"} placeholder={"município"} label={"município"} />
            </form>
            <div>
                <button onClick={() =>retornaUmaPage(navigate) } >Voltar</button>
                <button> Atualizar Cadastro</button>
            </div>
           
        </div>
    )
}
import React from "react";
import { Inputs } from "../../components/inputs/inpurts";
import { useNavigate } from "react-router-dom";
import { retornaUmaPage } from "../../routes/coordenadorDeRotas";

export const ConfirmacaoDeDados = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Confirme os dados solicitados</h1>
            <form>
                <Inputs type={"text"} placeholder={"Nome  comeplto"} label={"Nome completo"} />
                <Inputs type={"email"} placeholder={"e-mail cadastrado"} label={"E-mail"}/>
                <Inputs type={"number"} placeholder={"CPF"} label={"CPF"} />
                <div>
                    <button onClick={() => retornaUmaPage(navigate)}  >Voltar</button>
                    <button> Confirmar </button>
                </div>
            </form>
        </div>
    )
}
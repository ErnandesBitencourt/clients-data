import React, { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../pages/login/login"
import { DadosDosClientes } from "../pages/dadosdosclientes/dadosDosClientes"
import { Cadastro } from "../pages/cadastro/cadastro"
import { Atualizar } from "../pages/atualizar/atualizar"
import { ConfirmacaoDeDados } from "../pages/confirmacaoDeDados/confirmacaoDeDados"
import axios from "axios"
import { Cep } from "../services/cep"


export const Router = () => { 

    const[bairro, setBairro] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [localidade,setLocalidade] = useState("");
    const [uf, setUf] = useState("");
   
       async function buscarCep (e)  {
           e.preventDefault();
           try {
         
             if (bairro.length === 8) {
               const response = await axios.get(Cep (69099782));
               const dadosCep = response.data;
               bairro(dadosCep.bairro);
               logradouro(dadosCep.logradouro);
               localidade(dadosCep.localidade);
               setUf(dadosCep.uf)
             }
         
           } catch (error) {
             
             console.error(console.log("Cep não encontrado ou não existe"));
           }
         }
      




return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="dadosClientes" element={<DadosDosClientes/>}/>
            <Route path="cadastro" element={<Cadastro/>}/>
            <Route path="atualizar" element={<Atualizar/>}/>
            <Route path="/confirmaDados" element = {<ConfirmacaoDeDados/>} />
            <Route path="*" element ={"404 Erro na pagina !"} />
        </Routes>
    </BrowserRouter>
)
};
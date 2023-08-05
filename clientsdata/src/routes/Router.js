import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../pages/login/login"
import { DadosDosClientes } from "../pages/dadosdosclientes/dadosDosClientes"
import { Cadastro } from "../pages/cadastro/cadastro"
import { Atualizar } from "../pages/atualizar/atualizar"
import { ConfirmacaoDeDados } from "../pages/confirmacaoDeDados/confirmacaoDeDados"


export const Router = () => { 

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
import React from "react";
import axios from "axios";
import {GlobalContext} from "./globalContext"
import { useForm } from "../customHook/useForm";

export const GlobalState = () => {
    const {from , onChange,clear} = useForm({cep:"",rua:"",bairro:"",estado:"",municipio:"" })
    const cadastrarUsuario = (e) => {
        e.preventDefault()
        con
    }
    return 
}
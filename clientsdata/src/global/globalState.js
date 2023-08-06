import React from "react";
import axios from "axios";
import {GlobalContext} from "./globalContext"
import { useForm } from "../customHook/useForm";
import { Cep } from "../services/cep";

export const GlobalStateCep = (cep) => {
 const[bairro, setBairro] = useState("");
 const [logradouro, setLogradouro] = useState("");
 const [localidade,setLocalidade] = useState("");
 const [uf, setUf] = useState("");

    async function buscarCep (e)  {
        e.preventDefault();
        try {
      
          if (cep.length === 8) {
            const response = await axios.get(Cep (cep));
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
    return buscarCep() 
}
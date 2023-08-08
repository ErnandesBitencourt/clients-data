import React, { useState } from "react"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import { Login } from "../pages/login/login"
import { DadosDosClientes } from "../pages/dadosdosclientes/dadosDosClientes"
import { Cadastro } from "../pages/cadastro/cadastro"

import {v4 as uuidv4} from "uuid"
import { GlobalContext } from "../global"
import { useForms } from "../customHook/useForm"
import useAut from "../customHook/useAut"
import axios from "axios"
import { Cep } from "../services/cep"
import { Home } from "../pages/home/home"
export const Router = () => { 

    const [infClients , setInfClients] = useState([]) 
    const[bairro, setBairro] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [localidade,setLocalidade] = useState("");
    const [uf, setUf] = useState("");
    const [forms, onChanges, clears] = useForms({id:"",nome:"",email:"",emailConf:"", senha:"", senhaConf:"",cpf:"",cep:"",rua:logradouro,bairro:bairro,numerocasa:"",estado:uf,municipio:localidade,complemento:""});
    const {signup} = useAut();
   
 
  //Buscar cer Viacep//
  const Clea = () => {
    setBairro("");
    setLogradouro("");
    setLocalidade("");
    setUf("");

  }

  async function buscarCep (e)  {
    e.preventDefault();
    try {
  
      if (forms.cep.length === 8) {
     
      const response = await axios.get(Cep (forms.cep));
        const dadosCep = response.data;
        setBairro(dadosCep.bairro);
        setLogradouro(dadosCep.logradouro);
        setLocalidade(dadosCep.localidade);
        setUf(dadosCep.uf);
        
      }else{
        alert("Deve conter somente 8 numeros")
      }
    } catch (error) {
      
      console.error(alert("Cep não encontrado ou não existe"));
    }
  }

    //Criar cadastro // 
    const buttonCriarCadastro = (e) => {
      
      e.preventDefault()
      if(forms.email !== forms.emailConf ){
          alert("E-mail está diferente do outro, por favor coloque o mesmo e-amil")
          
      };
      if(forms.senha !== forms.senhaConf ){
        
        alert("Senha está diferente do outra, por favor coloque a mesma senha")
      
      };

      const res = signup(forms.email,forms.senha );
      if(res) {
        alert(res);
       
      }
        setInfClients([...infClients,{id:forms.id=uuidv4(),nome:forms.nome,email:forms.email,senha:forms.senha, cpf:forms.cpf,cep:forms.cep, rua:forms.rua=logradouro, bairro:forms.bairro=bairro, numerocasa:forms.numerocasa, estado:forms.estado=uf,municipio:forms.municipio=localidade,complemento:forms.complemento }]);
        clears();
        Clea();
  };

  
    const Private = ({Item}) => {
      const { signed } = useAut();

     return signed > 0 ? Item : <Login/>;
    }


return (
   <GlobalContext.Provider
   value={{buttonCriarCadastro:buttonCriarCadastro,buscarCep:buscarCep,infClients:infClients,
    name:forms.name,id:forms.id, email:forms.email,cpf:forms.cpf,cep:forms.cep, ruaforms:forms.rua, bairroforms:forms.bairro, numerocasa:forms.numerocasa, estadoforms:forms.estado,municipioforms:forms.municipio,localidadeforms:forms.localidade ,onChanges:onChanges, complemento:forms.complemento ,clears: clears,senha: forms.senha, senhaConf: forms.senhaConf, emailConf:forms.emailConf, setInfClients:setInfClients,
    bairroCep:bairro, logradouroCep:logradouro,estadoCep:uf,localidadeCep:localidade
  }}
   >
      <BrowserRouter>
        <Routes>
            <Route path="/" element=  { <Private Item={<Login/>} /> }/>
            <Route path="home" element={<Home/>}/>
            <Route path="dadosClientes" element={<DadosDosClientes/>}/>
            <Route path="cadastro" element={<Cadastro/>}/>
            <Route path="*" element ={"404 Erro na pagina !"} />
        </Routes>
      </BrowserRouter>
   </GlobalContext.Provider>
)
};
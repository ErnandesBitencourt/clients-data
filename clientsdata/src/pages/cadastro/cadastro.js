import React, { useEffect } from "react";
import { Inputs } from "../../components/inputs/inpurts";
import { useNavigate } from "react-router-dom";
import { retornaUmaPage } from "../../routes/coordenadorDeRotas";
import { useForm } from "../../customHook/useForm";
import axios from "axios";
import { Cep } from "../../services/cep";
import  {v4 as uuid} from "uuid"
export const Cadastro = () => {
 const navigate = useNavigate();
 const {form , onChange,clear, novosvalores} = useForm({ id:{ uuid} ,  nome:"", date:"", email:"", cpf:"", cep:"",rua:"",bairro:"", numerocasa:"", estado:"",municipio:"",complemento:""})


 async function buscarCep (e)  {
    e.preventDefault();
    try {
      
      if (form.cep.length === 8) {
     
      const response = await axios.get(Cep (form.cep));
        console.log(response.data)
       
      
      }else {
        alert("o cep precisa ter os 8 numeos")
      }

    } catch (error) {
      
      console.error(console.log("Cep não encontrado ou não existe"));
    }
  }
  

    return (
        <div>
            <h1>Criar Cadastro</h1>

            <form onSubmit={buscarCep}>
                <Inputs name={"nome"}onChange={onChange} value={form.nome} type={"text"} placeholder={"Nome Completo"} label = {"nome"} />
                <Inputs name={"date"} onChange={onChange} value={form.date} type={"date"} placeholder={"data de nascimento"} label={"Data de nascimento"} />
                <Inputs name={"email"} onChange={onChange} value={form.email} type={"email"} placeholder={"E-mail"} label={"E-mail"} />
                <Inputs name={"cpf"}onChange={onChange} value={form.cpf} type={"number"} placeholder={"CPF"} label={"CPF"} />
                <Inputs name={"cep"} onChange={onChange} onBlur={buscarCep} value={form.cep} type={"number"} placeholder={"CEP"} label={"Buscar endereço por cep"}/>

                <button onClick={() => buscarCep}>Buscar Cep</button>
                <Inputs name={"rua"}onChange={onChange} value={form.rua} type={"text"} placeholder={"Rua"} label={"Nome da Rua"} />
                <Inputs name={"numerocasa"}onChange={onChange} value={form.numerocasa} type={"number"} placeholder={"N°"} label={"Numero da casa"} />
                <Inputs name={"bairro"}onChange={onChange} value={form.bairro} type={"text"} placeholder={"Bairro"} label={"Bairro"} />
                <Inputs name={"complemento"}onChange={onChange} value={form.complemento} type={"text"} placeholder={"complemento"} label={"Complemento"} />

                <Inputs name={"estado"}onChange={onChange} value={form.estado} type={"text"} placeholder={"Estado"} label={"Estado"} />
                <Inputs name={"municipio"}onChange={onChange} value={form.municipio} type={"text"} placeholder={"município"} label={"município"} />
            </form>
            <div>
                <button onClick={()=>retornaUmaPage(navigate) } >Voltar</button>
                <button> Criar Cadastro</button>
            </div>
        </div>
    )
}
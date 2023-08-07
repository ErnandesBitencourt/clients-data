import React, { useContext} from "react";
import { Inputs } from "../../components/inputs/inputs";
import { useNavigate } from "react-router-dom";
import { login} from "../../routes/coordenadorDeRotas";
import { GlobalContext } from "../../global";
import { Container, Main,H1,Form,Button,DivText,Strong } from "./styledCadastro";

export const Cadastro = () => {  
 const navigate = useNavigate();

  const cadastro = useContext(GlobalContext);
    return (
        <Container>
            <Main>
                 <H1>Registre-se</H1>

              <Form  onSubmit={cadastro.buttonCriarCadastro} >
                  <Inputs name={"nome"}onChange={cadastro.onChanges} value={cadastro.nome} type={"text"} placeholder={"Nome completo"}  />

                  <Inputs name={"email"} onChange={cadastro.onChanges} value={cadastro.email} type={"email"} placeholder={"E-mail"}  />
                  <Inputs name={"emailConf"} onChange={cadastro.onChanges} value={cadastro.emailConf} type={"email"} placeholder={"Confirma e-mail"}  />

                  <Inputs name={"senha"} onChange={cadastro.onChanges} value={cadastro.senha} type={"text"} placeholder={"Senha"} />
                  <Inputs name={"senhaConf"} onChange={cadastro.onChanges} value={cadastro.senhaConf} type={"text"} placeholder={"Confirmar senha"} />

                  <Inputs name={"cpf"}onChange={cadastro.onChanges} value={cadastro.cpf} type={"number"} placeholder={"CPF"} label={"CPF"} />

                  <Inputs name={"cep"} onChange={cadastro.onChanges} onBlur={cadastro.buscarCep} value={cadastro.cep}  type={"number"} placeholder={"CEP"} label={"Buscar endereço por cep"}/>
                  
                  <Inputs name={"rua"} onChange={cadastro.onChanges} value={cadastro.logradouroCep} type={"text"} placeholder={"Rua"} label={"Nome da Rua"} />

                  <Inputs name={"numerocasa"}onChange={cadastro.onChanges} value={cadastro.numerocasa} type={"number"} placeholder={"N° da casa"}  />

                  <Inputs name={"bairro"}onChange={cadastro.onChanges} value={cadastro.bairroCep} type={"text"} placeholder={"Bairro"}  />

                  <Inputs name={"complemento"}onChange={cadastro.onChanges} value={cadastro.complemento} type={"text"} placeholder={"Complemento"}  />

                  <Inputs name={"estado"}onChange={cadastro.onChanges} value={cadastro.estadoCep} type={"text"} placeholder={"Estado"}  />

                  <Inputs name={"municipio"}onChange={cadastro.onChanges} value={cadastro.localidadeCep} type={"text"} placeholder={"Município"}  />

                 
                  <Button onClick={cadastro.buttonCriarCadastro} > Registre-se</Button> 
               
              </Form>
                <DivText>
                  <p>Já tem uma conta?</p> <Strong onClick={() => login(navigate)}> &nbsp;Entre</Strong>      
                </DivText>
            </Main>
         
        </Container>
    )
}
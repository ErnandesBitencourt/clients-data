import React, { useContext } from "react";
import { GlobalContext } from "../global";
import { useNavigate } from "react-router-dom";
import useAut from "../customHook/useAut";


export const InfoClientsId = () => { 
    const infClients = useContext(GlobalContext );
    const navigate = useNavigate()
    const { signout } = useAut();
      const dadosClientes = infClients.infClients.map((dados) => {

            return(
               
                <div key={dados.id}>
                    <h3>Dados do cliente</h3>
                    <span>
                        {dados.nome},
                        {dados.email},
                        {dados.senha},
                        {dados.cpf},
                        {dados.cep},
                        {dados.rua},
                        {dados.bairro},
                        {dados.localidade},
                        {dados.estado},
                        {dados.municipio},
                        {dados.complemento},
                        {dados.numerocasa}
                    </span>
                  
                </div>
            )
      });
        return(
            <div>
            {dadosClientes }    
             <button  onClick={() => [signout(), navigate("/")] }> sair</button>
            </div>

        )
        
       
      
    


}
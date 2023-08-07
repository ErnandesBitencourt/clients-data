import React from "react";
import { Router } from "./routes/Router";
import { AutenticacaoProvider } from "./global/autenticacao";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import {Themers} from "./styles/themers"


function App() {
  return (
    
    <div>
       <ThemeProvider   theme={{Themers}}>
        <AutenticacaoProvider >
        <GlobalStyle/>
        <Router/>
        </AutenticacaoProvider> 
      </ThemeProvider> 
      </div>
    
  );
}

export default App;

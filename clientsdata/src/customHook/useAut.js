import { useContext } from "react";
import { Autenticacao } from "../global/autenticacao";


const useAut = () => {
  const context = useContext(Autenticacao);

  return context;
};

export default useAut;
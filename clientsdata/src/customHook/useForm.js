import { useState } from "react";

export const useForm= (valores) => {
    const[form, setForm] = useState(valores)

    const onChange = (event) =>{
        const {name ,value} = event.target
        setForm({...form,[name]:value})
    }

    const clear = () => {
        setForm(valores)
    }
   
    return {form, onChange, clear}
};

export const useForms= (valores) => {
    const[forms, setForms] = useState(valores)

    const onChanges = (event) =>{
        const {name ,value} = event.target
        setForms({...forms,[name]:value})
    }

    const clears = () => {
        setForms(valores)
    }
   
    return [forms, onChanges, clears]
};
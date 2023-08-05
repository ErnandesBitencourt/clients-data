import { useState } from "react";

export const useForm= (valores) => {
    const[ form, setForm] = useState(valores)

    const onChange = (event) =>{
        const {name ,value} = event.target
        setForm({...form,[name]:value})
    }

    const clear = () => {
        setForm(valores)
    }
   

    return{ form, onChange, clear}
}
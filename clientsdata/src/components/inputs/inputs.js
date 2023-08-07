import React from "react";
import  { Input} from "./StyledInput"
export const Inputs = ({type ,placeholder, name,onChange,value,onBlur}) => {
    return (

        
            <Input required onBlur={onBlur} type= {type} placeholder= {placeholder} name={name} onChange={onChange} value={value} />
        
    )
};
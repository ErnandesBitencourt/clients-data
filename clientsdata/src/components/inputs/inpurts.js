import React from "react";

export const Inputs = ({type ,placeholder, name,onChange,value, label,onBlur}) => {
    return (

        <div>
            <label>{label}</label>
            <input onBlur={onBlur} type= {type} placeholder= {placeholder} name={name}onChange={onChange} value={value}  />
        </div>
    )
};
import React from "react";

export const Inputs = ({type ,placeholder, name,onChange,value, label}) => {
    return (

        <div>
            <label>{label}</label>
            <input  type= {type} placeholder= {placeholder} name={name} onChange={onChange} value={value} />
        </div>
    )
};
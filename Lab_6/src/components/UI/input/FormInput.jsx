import React, { useState } from "react";
import styles from './FormInput.modules.css';
const FormInput = (props) =>
{
    console.log(props.fetch)
    return(
        <div>
            <input value={props.fetch} type="text"/>
        </div>
    );
};

export default FormInput;
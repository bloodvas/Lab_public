import React from "react";
import classes from './FormButton.modules.css';

const FormButton = (props,...prop) =>
{
    return(
            <div className="userList">
                <button className="userBtn" onClick={props.click}>1</button>
                <button className="userBtn" onClick={props.click}>2</button>
                <button className="userBtn" onClick={props.click}>3</button>
                <button className="userBtn" onClick={props.click}>4</button>
                <button className="userBtn" onClick={props.click}>5</button>
                <button className="userBtn" onClick={props.click}>6</button>
                <button className="userBtn" onClick={props.click}>7</button>
                <button className="userBtn" onClick={props.click}>8</button>
                <button className="userBtn" onClick={props.click}>9</button>
                <button className="userBtn" onClick={props.click}>10</button>
            </div>
    );
};

export default FormButton;
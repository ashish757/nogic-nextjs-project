import React from "react";
import './styles.css'

const Alert: React.FunctionComponent<any>  = ({title, handler1, handler2, btn1, btn2}) => {
    return (
        <div className="alert">
            <p>{title}</p>
            <div className="actions">
                <p onClick={handler1}>{btn1}</p>
                <p onClick={handler2}>{btn2}</p>
            </div>
        </div>
    )
}

export default Alert
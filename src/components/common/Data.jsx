import React from 'react';
import "./css/data.css"

function Data(props) {

    return (
        <div className='data-container'>

            <span className="data-label">
                <span>{props.label}</span>
            </span>
            <span className="data-value">
                <span>{props.value}</span>
            </span>
            
        </div>
    )
}

export default Data;

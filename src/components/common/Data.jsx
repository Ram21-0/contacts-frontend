import React from 'react';
import "./css/data.css"
import PropTypes from 'prop-types'

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

Data.propTypes = {
    label: PropTypes.string,
    value: PropTypes.any
}

export default Data;

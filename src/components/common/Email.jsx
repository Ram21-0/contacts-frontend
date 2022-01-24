import React from 'react';
import EmailIcon from '@mui/icons-material/Email';

import "./css/email.css"
import { Tooltip } from '@mui/material';
import PropTypes from 'prop-types'

function Email(props) {

    const emailId = props.emailId

    const onClick = (event) => {
        window.location = `mailto:${emailId}`
        event.preventDefault()
    }

    return (
        <div className='email'>
            <Tooltip title={`Mail ${emailId}`}>
                <EmailIcon 
                    onClick={(event) => onClick(event)}/>
            </Tooltip>
            <div>{emailId}</div>
        </div>
  )
}

Email.propTypes = {
    emailId: PropTypes.string
}

export default Email;

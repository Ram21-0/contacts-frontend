import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

import "./css/email.css"
import { Tooltip } from '@mui/material';

function Email(props) {

    const emailId = props.emailId

    const onClick = (event) => {
        window.location = `mailto:${emailId}`
        event.preventDefault()
    }

    return (
        <div className='email'>
            <Tooltip title={`Mail ${emailId}`}>
                <EmailIcon onClick={(event) => onClick(event)}/>
            </Tooltip>
            <div>{emailId}</div>
        </div>
  )
}

export default Email;

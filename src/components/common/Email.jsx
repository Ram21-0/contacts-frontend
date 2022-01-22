import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

import "./css/email.css"
import { Tooltip } from '@mui/material';

function Email(props) {

    const emailId = props.emailId

    return (
        <div className='email'>
            <Tooltip title={`Mail ${emailId}`}>
                <EmailIcon onClick={()=>console.log("mail" + emailId)}/>
            </Tooltip>
            <div>{emailId}</div>
        </div>
  )
}

export default Email;

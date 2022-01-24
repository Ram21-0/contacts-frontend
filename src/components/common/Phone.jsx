import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

import "./css/email.css"
import { Tooltip } from '@mui/material';

function Phone(props) {

    const phoneNo = props.phoneNo
    const onClick = (event) => {
        window.location = `tel:${phoneNo}`
        event.preventDefault()
    }

    return (
        <div className='email'>
            <Tooltip title={`Call ${phoneNo}`}>
                <CallIcon onClick={(e) => onClick(e)}/>
            </Tooltip>
            <div>{phoneNo}</div>
        </div>
  )
}

export default Phone;

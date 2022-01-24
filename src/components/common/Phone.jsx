import React from 'react';
import CallIcon from '@mui/icons-material/Call';

import "./css/email.css"
import { Tooltip } from '@mui/material';
import PropTypes from 'prop-types'


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

Phone.propTypes = {
    phoneNo: PropTypes.string
}

export default Phone;

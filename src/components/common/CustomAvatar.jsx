import React from 'react';

import { Avatar } from '@mui/material';

function CustomAvatar(props) {

    let iconStyle = {}
    let avatarText = props.text ? props.text[0].toUpperCase() : "A"

    if(props.square) {
        iconStyle.borderRadius = '15px'
    }

    if(props.size) {
        iconStyle.width = props.size + "px"
        iconStyle.height = props.size + "px"
        iconStyle.fontSize = props.size
    }

    return (
        <Avatar style={iconStyle} >
            {avatarText}
        </Avatar>
    )
}

export default CustomAvatar
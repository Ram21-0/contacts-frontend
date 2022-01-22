import React from 'react';

import { Avatar, IconButton } from '@mui/material';

function CustomAvatar(props) {

    let avatarStyle = {}
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
        // <IconButton style={{width:60,height:60}}>
            <Avatar style={iconStyle}>
                {avatarText}
            </Avatar>
        // </IconButton>
        
    )
}

export default CustomAvatar
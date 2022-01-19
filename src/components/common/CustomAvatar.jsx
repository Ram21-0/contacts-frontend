import React from 'react';

import { Avatar, IconButton } from '@mui/material';

function CustomAvatar(props) {

    let avatarStyle = {}
    let iconStyle = {}

    if(props.square) {
        avatarStyle.borderRadius = 0
        
    }

    if(props.size) {
        iconStyle.width = "fit-content"
        iconStyle.height = "fit-content"
        avatarStyle.fontSize = props.size
    }


    return (
        <IconButton iconStyle={{width:60,height:60}}>
            <Avatar style={avatarStyle}>
                {props.srcText || "XY"}
            </Avatar>
        </IconButton>
        
    )
}

export default CustomAvatar
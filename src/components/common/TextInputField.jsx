import React from 'react';

import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

function TextInputField(props) {

    const label = props.label
    const register = props.register
    
    return (

        <Box mb={2}>
            <TextField variant="outlined"
                label={props.label}
                fullWidth
                autoFocus={props.autoFocus}
                {...(props.register("email"), {
                required: true
                })}
                // { ...register("email", { required: true }) }
              />
            </Box>
    )
}

export default TextInputField;

import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import PropTypes from 'prop-types'

function PopupCard(props) {

    function closeDialog() {
        props.setConfirmation(false)
        props.setOpenDialog(false)
    }

    function performAction() {
        props.setConfirmation(true)
        console.log("action performed");
        props.setOpenDialog(false)
    }

    return (
        <Dialog open={props.openDialog} onClose={closeDialog}>
            <DialogTitle>
                {props.title}
            </DialogTitle>
            <DialogActions>
                <Button onClick={performAction} autoFocus >YES</Button>
                <Button onClick={closeDialog}>NO</Button>
            </DialogActions>
        </Dialog>
    )
}

PopupCard.propTypes = {
    title: PropTypes.string,
    openDialog: PropTypes.bool,
    setOpenDialog: PropTypes.func,
    setConfirmation: PropTypes.func

}

export default PopupCard;

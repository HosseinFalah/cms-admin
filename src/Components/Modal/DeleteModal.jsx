import { forwardRef } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteModal = ({open, hide, removeHandle}) => {
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={hide}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"آیا از حذف محصول مطمعن هستید؟"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    ⚠️هشدار این عملیات غیرقابل بازگشت هست
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={removeHandle} variant='outlined' color='success'>بله</Button>
                <Button onClick={hide} variant='outlined' color='error'>خیر</Button>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteModal
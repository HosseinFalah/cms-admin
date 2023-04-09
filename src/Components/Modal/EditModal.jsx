import { forwardRef } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material"

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});  

const EditModal = ({ open, children, hide}) => {
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={hide}
            aria-describedby="alert-dialog-slide-description"
            fullWidth
            maxWidth={'sm'}
        >
            <DialogTitle>{"اطلاعات جدید را وارد نمایید"}</DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>
                <Button onClick={hide} variant="contained" color="primary" fullWidth>ثبت اطلاعات جدید</Button>
            </DialogActions>
        </Dialog>
    )
}

export default EditModal
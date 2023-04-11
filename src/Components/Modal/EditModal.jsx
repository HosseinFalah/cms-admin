import { forwardRef } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide } from "@mui/material"

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});  

const EditModal = ({ open, children, hide, updateProduct}) => {
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
                <Button  variant="contained" color="primary" onClick={updateProduct} fullWidth>ثبت اطلاعات جدید</Button>
            </DialogActions>
        </Dialog>
    )
}

export default EditModal
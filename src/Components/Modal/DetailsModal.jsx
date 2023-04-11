import { forwardRef } from "react";
import { Dialog, DialogContent, Slide } from "@mui/material"

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DetailsModal = ({open, hide, children}) => {
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={hide}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default DetailsModal
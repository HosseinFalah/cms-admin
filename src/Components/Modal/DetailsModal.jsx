import { forwardRef } from "react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Stack, Typography } from "@mui/material"

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DetailsModal = ({open, hide}) => {
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={hide}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogContent>
                <Stack direction={'row'} justifyContent={'space-between'} columnGap={15}>
                    <Box textAlign={'center'}>
                        <Typography>اسم</Typography>
                        <Typography variant="body2" sx={{ fontSize: 18, fontWeight: 800, mt: 1, color: '#262626' }}>لپتاپ</Typography>
                    </Box>
                    <Box textAlign={'center'}>
                        <Typography>قیمت</Typography>
                        <Typography variant="body2" sx={{ fontSize: 18, fontWeight: 800, mt: 1, color: '#262626' }}>12,000,000</Typography>
                    </Box>
                    <Box textAlign={'center'}>
                        <Typography>محبوبیت</Typography>
                        <Typography variant="body2" sx={{ fontSize: 18, fontWeight: 800, mt: 1, color: '#262626' }}>91</Typography>
                    </Box>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}

export default DetailsModal
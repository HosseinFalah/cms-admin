import { Box, Button, TextField } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

const AddNewProduct = () => {
    return (
        <Box component='form' autoComplete='off' sx={{ backgroundColor: 'white', p: 3, borderRadius: 3 }}>
            <Grid2 container spacing={3}>
                <Grid2 item xs={12} sm={6}>
                    <TextField
                        id="firstName"
                        name="firstName"
                        label="نام محصول را بنویسید"
                        fullWidth
                        sx={{ p: 1 }}
                    />
                    <TextField
                        id="firstName"
                        name="firstName"
                        label="موجودی محصول را بنویسید"
                        fullWidth
                        sx={{ p: 1 }}
                    />
                    <TextField
                        id="firstName"
                        name="firstName"
                        label="میزان محبوبیت را بنویسید"
                        fullWidth
                        sx={{ p: 1 }}
                    />
                    <TextField
                        id="firstName"
                        name="firstName"
                        label="تعداد رنگ بندی را بنویسید"
                        fullWidth
                        sx={{ p: 1 }}
                    />
                </Grid2>
                <Grid2 item xs={12} sm={6}>
                    <TextField
                        id="lastName"
                        name="lastName"
                        label="قیمت محصول را بنویسید"
                        fullWidth
                        sx={{ p: 1 }}
                    />
                    <TextField
                        id="lastName"
                        name="lastName"
                        label="آدرس عکس را بنویسید"
                        fullWidth
                        sx={{ p: 1 }}
                    />
                    <TextField
                        id="lastName"
                        name="lastName"
                        label="میزان فروش را بنویسید"
                        fullWidth
                        sx={{ p: 1 }}
                    />
                </Grid2>
            </Grid2>
            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                <Button variant='contained' color='primary'>ثبت محصول</Button>
            </Box>
        </Box>
    )
}

export default AddNewProduct
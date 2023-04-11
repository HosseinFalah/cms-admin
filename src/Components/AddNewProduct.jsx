import { useState } from "react"
import axios from "axios";
import { Box, Button, TextField } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

const AddNewProduct = () => {
    const [newProductTitle, setNewProductTitle] = useState('');
    const [newProductPrice, setNewProductPrice] = useState('');
    const [newProductCount, setNewProductCount] = useState('');
    const [newProductImg, setNewProductImg] = useState('');
    const [newProductPopularity, setNewProductPopularity] = useState('');
    const [newProductSale, setNewProductSale] = useState('');
    const [newProductColors, setNewProductColors] = useState('');

    const newProductsInfos = {
        title: newProductTitle,
        price: newProductPrice,
        count: newProductCount,
        img: newProductImg,
        popularity: newProductPopularity,
        sale: newProductSale,
        colors: newProductColors
    }

    const handleAddNewProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/products', newProductsInfos);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Box component='form' autoComplete='off' onSubmit={handleAddNewProduct} sx={{ backgroundColor: 'white', p: 3, borderRadius: 3 }}>
            <Grid2 container spacing={3}>
                <Grid2 item xs={12} sm={6}>
                    <TextField
                        id="firstName"
                        name="firstName"
                        label="نام محصول را بنویسید"
                        fullWidth
                        sx={{ p: 1 }}
                        value={newProductTitle}
                        onChange={e => setNewProductTitle(e.target.value)}
                    />
                    <TextField
                        id="firstName"
                        name="firstName"
                        label="موجودی محصول را بنویسید"
                        fullWidth
                        sx={{ p: 1 }}
                        value={newProductCount}
                        onChange={e => setNewProductCount(e.target.value)}
                    />
                    <TextField
                        id="firstName"
                        name="firstName"
                        label="میزان محبوبیت را بنویسید"
                        fullWidth
                        sx={{ p: 1 }}
                        value={newProductPopularity}
                        onChange={e => setNewProductPopularity(e.target.value)}
                    />
                    <TextField
                        id="firstName"
                        name="firstName"
                        label="تعداد رنگ بندی را بنویسید"
                        fullWidth
                        sx={{ p: 1 }}
                        value={newProductColors}
                        onChange={e => setNewProductColors(e.target.value)}
                    />
                </Grid2>
                <Grid2 item xs={12} sm={6}>
                    <TextField
                        id="lastName"
                        name="lastName"
                        label="قیمت محصول را بنویسید"
                        fullWidth
                        sx={{ p: 1 }}
                        value={newProductPrice}
                        onChange={e => setNewProductPrice(e.target.value)}
                    />
                    <TextField
                        id="lastName"
                        name="lastName"
                        label="آدرس عکس را بنویسید"
                        fullWidth
                        sx={{ p: 1 }}
                        value={newProductImg}
                        onChange={e => setNewProductImg(e.target.value)}
                    />
                    <TextField
                        id="lastName"
                        name="lastName"
                        label="میزان فروش را بنویسید"
                        fullWidth
                        sx={{ p: 1 }}
                        value={newProductSale}
                        onChange={e => setNewProductSale(e.target.value)}
                    />
                </Grid2>
            </Grid2>
            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                <Button type="submit" variant='contained' color='primary'>ثبت محصول</Button>
            </Box>
        </Box>
    )
}

export default AddNewProduct
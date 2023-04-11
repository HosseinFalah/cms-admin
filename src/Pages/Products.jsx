import { useEffect, useState } from 'react';
import axios from 'axios';
import { AddNewProduct, ProductsTable } from '../Components'
import { Box, Typography } from '@mui/material'

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    
    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = async () => {
        try {
            const { data } = await axios.get('http://localhost:8000/api/products');
            setAllProducts(data)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Box>
            <Typography variant='h4' sx={{ my: 2, fontWeight: 600 }}>افزودن محصول جدید</Typography>
            <AddNewProduct getAllProducts={getAllProducts}/>
            <ProductsTable allProducts={allProducts} getAllProducts={getAllProducts}/>
        </Box>
    )
}

export default Products
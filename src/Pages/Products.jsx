import { Box, Typography } from '@mui/material'
import { AddNewProduct, ProductsTable } from '../Components'

const Products = () => {
  return (
    <Box>
      <Typography variant='h4' sx={{ my: 2, fontWeight: 600 }}>افزودن محصول جدید</Typography>
      <AddNewProduct/>
      <ProductsTable/>
    </Box>
  )
}

export default Products
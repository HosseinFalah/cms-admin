import { Box, Typography } from '@mui/material'
import { AddNewProduct, ErrorBox } from '../Components'

const Products = () => {
  return (
    <Box>
      <ErrorBox msg={'هیج محصولی یافت نشد'}/>
      <Typography variant='h4' sx={{ my: 2, fontWeight: 600 }}>افزودن محصول جدید</Typography>
      <AddNewProduct/>
    </Box>
  )
}

export default Products
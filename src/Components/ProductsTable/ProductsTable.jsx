import { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField } from '@mui/material';
import { DeleteModal, DetailsModal, EditModal } from '../Modal';
import ErrorBox from '../ErrorBox';
import './ProductsTable.css';

const ProductsTable = () => {
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
    const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
    const [isShowEditModal, setIsShowEditModal] = useState(false);
    const [allProducts, setAllProducts] = useState([]);
    
    useEffect(() => {
        const fetchProducts = async () => {
            const responseData = await fetch('http://localhost:8000/api/products');
            const productData = await responseData.json();
            setAllProducts(productData);
        }

        fetchProducts();
    }, []);

    const handleHideDelete = () => setIsShowDeleteModal(false);
    const handleHideDetails = () => setIsShowDetailsModal(false);
    const handleHideEdit = () => setIsShowEditModal(false);

    return (
        <>
            {
                allProducts.length ? (
                    <table className='products-table'>
                        <thead>
                            <tr className='products-table-heading-tr'>
                                <th>عکس</th>
                                <th>اسم</th>
                                <th>قیمت</th>
                                <th>موجودی</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allProducts.map(product => (
                                    <tr key={product.id} className='products-table-tr'>
                                        <td>
                                            <img src={product.img} className='products-table-img' alt="oil Image" />
                                        </td>
                                        <td>{product.title}</td>
                                        <td>{product.price} تومان</td>
                                        <td>{product.count}</td>
                                        <td>
                                            <Stack direction={'row'} columnGap={2}>
                                                <Button variant='contained' color='primary' onClick={() => setIsShowDetailsModal(true)}>جزییات</Button>
                                                <Button variant='contained' color='primary' onClick={() => setIsShowDeleteModal(true)}>حذف</Button>
                                                <Button variant='contained' color='primary' onClick={() => setIsShowEditModal(true)}>ویرایش</Button>
                                            </Stack>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                ) 
                : 
                (
                    <ErrorBox msg={'هیج محصولی یافت نشد'}/>
                )
            }
            <DeleteModal open={isShowDeleteModal} hide={handleHideDelete}/>
            <DetailsModal open={isShowDetailsModal} hide={handleHideDetails}/>
            <EditModal open={isShowEditModal} hide={handleHideEdit}>
                <Box component={'form'}>
                    <TextField
                      id=""
                      label="نام محصول را بنویسید"
                      variant="outlined"
                      sx={{ mt: 1 }}
                      fullWidth
                    />
                    <TextField
                      id=""
                      label="قیمت محصول را بنویسید"
                      variant="outlined"
                      sx={{ mt: 1 }}
                      fullWidth
                    />
                    <TextField
                      id=""
                      label="آدرس محصول را بنویسید"
                      variant="outlined"
                      sx={{ mt: 1 }}
                      fullWidth
                    />
                    <TextField
                      id=""
                      label="میزان فروش محصول را بنویسید"
                      variant="outlined"
                      sx={{ mt: 1 }}
                      fullWidth
                    />
                </Box>
            </EditModal>
        </>
    )
}

export default ProductsTable
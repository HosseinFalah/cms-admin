import { useState } from 'react';
import { Box, Button, Stack, TextField } from '@mui/material';
import DeleteModal from '../Modal/DeleteModal';
import './ProductsTable.css';
import DetailsModal from '../Modal/DetailsModal';
import EditModal from '../Modal/EditModal';

const ProductsTable = () => {
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
    const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
    const [isShowEditModal, setIsShowEditModal] = useState(false);
  
    const handleHideDelete = () => setIsShowDeleteModal(false);
    const handleHideDetails = () => setIsShowDetailsModal(false);
    const handleHideEdit = () => setIsShowEditModal(false);

    return (
        <Box>
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
                    <tr className='products-table-tr'>
                        <td>
                            <img src="/Assets/oil.jpeg" className='products-table-img' alt="oil Image" />
                        </td>
                        <td>روغن سرخ کردنی</td>
                        <td>92000 تومان</td>
                        <td>82</td>
                        <td>
                            <Stack direction={'row'} columnGap={2}>
                                <Button variant='contained' color='primary' onClick={() => setIsShowDetailsModal(true)}>جزییات</Button>
                                <Button variant='contained' color='primary' onClick={() => setIsShowDeleteModal(true)}>حذف</Button>
                                <Button variant='contained' color='primary' onClick={() => setIsShowEditModal(true)}>ویرایش</Button>
                            </Stack>
                        </td>
                    </tr>
                </tbody>
            </table>
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
        </Box>
    )
}

export default ProductsTable
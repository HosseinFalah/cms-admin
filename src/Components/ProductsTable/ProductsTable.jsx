import { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { DeleteModal, DetailsModal, EditModal } from '../Modal';
import ErrorBox from '../ErrorBox';
import axios from "axios";
import './ProductsTable.css';

const ProductsTable = ({allProducts, getAllProducts}) => {
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
    const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
    const [isShowEditModal, setIsShowEditModal] = useState(false);
    const [mainProductInfos, setMainProductInfos] = useState({}); 
    const [productID, setProductID] = useState(null);

    const [productNewTitle, setProductNewTitle] = useState('');
    const [productNewPrice, setProductNewPrice] = useState('');
    const [productNewCount, setProductNewCount] = useState('');
    const [productNewImg, setProductNewImg] = useState('');
    const [productNewPopularity, setProductNewPopularity] = useState('');
    const [productNewSale, setProductNewSale] = useState('');
    const [productNewColors, setProductNewColors] = useState('');
    
    const handleHideDelete = () => setIsShowDeleteModal(false);
    const handleHideDetails = () => setIsShowDetailsModal(false);
    const handleHideEdit = () => setIsShowEditModal(false);

    const handleDeleteProduct = async () => {
        try {
            await axios.delete(`http://localhost:8000/api/products/${productID}`);
            handleHideDelete();
            getAllProducts();
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdateProductInfo = async (e) => {
        e.preventDefault();

        const productNewInfo = {
            title: productNewTitle,
            price: productNewPrice,
            count: productNewCount,
            img: productNewImg,
            popularity: productNewPopularity,
            sale: productNewSale,
            colors: productNewColors
        }

        try {
            await axios.put(`http://localhost:8000/api/products/${productID}`, productNewInfo);
            handleHideEdit();
            getAllProducts();
        } catch (error) {
            console.log(error);
        }
    }

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
                                                <Button 
                                                    variant='contained' 
                                                    color='primary' 
                                                    onClick={() => {
                                                        setIsShowDetailsModal(true);
                                                        setMainProductInfos(product);
                                                    }}>
                                                        جزییات
                                                </Button>
                                                <Button 
                                                    variant='contained' 
                                                    color='primary' 
                                                    onClick={() => { 
                                                        setIsShowDeleteModal(true)
                                                        setProductID(product.id)
                                                    }}>
                                                        حذف
                                                </Button>
                                                <Button 
                                                    variant='contained' 
                                                    color='primary' 
                                                    onClick={() => {
                                                        setIsShowEditModal(true)
                                                        setProductID(product.id)
                                                        setProductNewTitle(product.title)
                                                        setProductNewPrice(product.price)
                                                        setProductNewCount(product.count)
                                                        setProductNewImg(product.img)
                                                        setProductNewPopularity(product.popularity)
                                                        setProductNewSale(product.sale)
                                                        setProductNewColors(product.colors)
                                                    }}>
                                                        ویرایش
                                                </Button>
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
            <DeleteModal open={isShowDeleteModal} hide={handleHideDelete} removeProduct={handleDeleteProduct}/>
            <DetailsModal open={isShowDetailsModal} hide={handleHideDetails}>
                <Stack direction={'row'} justifyContent={'space-between'} columnGap={15}>
                    <Box textAlign={'center'}>
                        <Typography>محبوبیت</Typography>
                        <Typography variant="body2" sx={{ fontSize: 18, fontWeight: 800, mt: 1, color: '#262626' }}>{mainProductInfos.popularity}</Typography>
                    </Box>
                    <Box textAlign={'center'}>
                        <Typography>فروش</Typography>
                        <Typography variant="body2" sx={{ fontSize: 18, fontWeight: 800, mt: 1, color: '#262626' }}>{parseInt(mainProductInfos.sale).toLocaleString()}</Typography>
                    </Box>
                    <Box textAlign={'center'}>
                        <Typography>رنگ بندی</Typography>
                        <Typography variant="body2" sx={{ fontSize: 18, fontWeight: 800, mt: 1, color: '#262626' }}>{mainProductInfos.colors}</Typography>
                    </Box>
                </Stack>
            </DetailsModal>
            <EditModal open={isShowEditModal} hide={handleHideEdit} updateProduct={handleUpdateProductInfo}>
                <Box component={'form'} autoComplete='off'>
                    <TextField
                        id="firstName"
                        name="firstName"
                        label="نام محصول را بنویسید"
                        fullWidth
                        sx={{ mt: 1 }}
                        value={productNewTitle}
                        onChange={e => setProductNewTitle(e.target.value)}
                    />
                    <TextField
                        id="firstName"
                        name="firstName"
                        label="قیمت محصول را بنویسید"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={productNewPrice.toLocaleString()}
                        onChange={e => setProductNewPrice(e.target.value)}
                    />
                    <TextField
                        id="firstName"
                        name="firstName"
                        label="موجودی محصول را بنویسید"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={productNewCount}
                        onChange={e => setProductNewCount(e.target.value)}
                    />
                    <TextField
                        id="firstName"
                        name="firstName"
                        label="آدرس عکس را بنویسید"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={productNewImg}
                        onChange={e => setProductNewImg(e.target.value)}
                    />
                    <TextField
                        id="lastName"
                        name="lastName"
                        label="میزان محبوبیت را بنویسید"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={productNewPopularity}
                        onChange={e => setProductNewPopularity(e.target.value)}
                    />
                    <TextField
                        id="lastName"
                        name="lastName"
                        label="میزان فروش را بنویسید"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={productNewSale.toLocaleString()}
                        onChange={e => setProductNewSale(e.target.value)}
                    />
                    <TextField
                        id="lastName"
                        name="lastName"
                        label="تعداد رنگ بندی را بنویسید"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={productNewColors}
                        onChange={e => setProductNewColors(e.target.value)}
                    />
                </Box>
            </EditModal>
        </>
    )
}

export default ProductsTable
import axios from "axios";
import { useEffect, useState } from 'react';
import ErrorBox from '../../Components/ErrorBox';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { DeleteModal, DetailsModal, EditModal } from '../../Components/Modal';
import './Users.css';

const Users = () => {
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
    const [isShowEditModal, setIsShowEditModal] = useState(false);
    const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
    const [mainUserID, setMainUserID] = useState(null);
    const [users, setUsers] = useState([]);
    const [mainUserInfos, setMainUserInfos] = useState({});

    const [userNewFirsname, setUserNewFirsname] = useState('');
    const [userNewLastname, setUserNewLastname] = useState('');
    const [userNewUsername, setUserNewUsername] = useState('');
    const [userNewPassword, setUserNewPassword] = useState('');
    const [userNewPhone, setUserNewPhone] = useState('');
    const [userNewCity, setUserNewCity] = useState('');
    const [userNewEmail, setUserNewEmail] = useState('');
    const [userNewAddress, setUserNewAddress] = useState('');
    const [userNewScore, setUserNewScore] = useState('');
    const [userNewBuy, setUserNewBuy] = useState('');

    useEffect(() => {        
        getAllUsers();
    }, [])

    const getAllUsers = async () => {
        try {
            const { data } = await axios.get('http://localhost:8000/api/users');
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleRemoveUser = async () => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/users/${mainUserID}`);
            console.log(response);
            setIsShowDeleteModal(false);
            getAllUsers();
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdateUser = async () => {
        const newUserInfos = {
            firsname: userNewFirsname,
            lastname: userNewLastname,
            username: userNewUsername,
            password: userNewPassword,
            phone: userNewPhone,
            city: userNewCity,
            email: userNewEmail,
            address: userNewAddress,
            score: userNewScore,
            buy: userNewBuy
        }
        try {
            await axios.put(`http://localhost:8000/api/users/${mainUserID}`, newUserInfos);
            setIsShowEditModal(false)
            getAllUsers();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {
                users.length ? (
                    <table className='users-table'>
                        <thead>
                            <tr className='users-table-heading-tr'>
                                <th>نام و نام خانوادگی</th>
                                <th>یوزرنیم</th>
                                <th>رمزعبور</th>
                                <th>شماره تماس</th>
                                <th>ایمیل</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id} className='users-table-tr'>
                                    <td>{user.firsname} {user.lastname}</td>
                                    <td>{user.username}</td>
                                    <td>{user.password}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Stack direction={'row'} columnGap={3}>
                                            <Button 
                                                variant='outlined' 
                                                color='primary'
                                                onClick={() => {
                                                    setIsShowDeleteModal(true)
                                                    setMainUserID(user.id)
                                                }}>
                                                    حذف
                                            </Button>
                                            <Button 
                                                variant='outlined' 
                                                color='primary'
                                                onClick={() => {
                                                    setIsShowDetailsModal(true)
                                                    setMainUserInfos(user)
                                                }}>
                                                    جزییات
                                            </Button>
                                            <Button 
                                                variant='outlined' 
                                                color='primary'
                                                onClick={() => {
                                                    setIsShowEditModal(true)
                                                    setMainUserID(user.id)
                                                    setUserNewFirsname(user.firsname)
                                                    setUserNewLastname(user.lastname)
                                                    setUserNewUsername(user.username)
                                                    setUserNewPassword(user.password)
                                                    setUserNewPhone(user.phone)
                                                    setUserNewCity(user.city)
                                                    setUserNewEmail(user.email)
                                                    setUserNewAddress(user.address)
                                                    setUserNewScore(user.score)
                                                    setUserNewBuy(user.buy)
                                                }}>
                                                    ویرایش
                                            </Button>
                                        </Stack>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <ErrorBox msg={'هیج کاربری یافت نشد'}/>
                )
            }
            {isShowDeleteModal && (
                <DeleteModal 
                    open={isShowDeleteModal} 
                    hide={() => setIsShowDeleteModal(false)} 
                    removeHandle={handleRemoveUser}/>
            )}
            {isShowEditModal && (
                <EditModal 
                    open={isShowEditModal}
                    hide={() => setIsShowEditModal(false)}
                    updateProduct={handleUpdateUser}>
                        <TextField
                            id="firstName"
                            name="firstName"
                            label="نام کاربر"
                            fullWidth
                            value={userNewFirsname}
                            onChange={e => setUserNewFirsname(e.target.value)}
                            sx={{ mt: 2 }}
                        />
                        <TextField
                            id="firstName"
                            name="firstName"
                            label="نام خانوادگی"
                            fullWidth
                            value={userNewLastname}
                            onChange={e => setUserNewLastname(e.target.value)}
                            sx={{ mt: 2 }}
                        />
                        <TextField
                            id="firstName"
                            name="firstName"
                            label="نام کاربری"
                            fullWidth
                            value={userNewUsername}
                            onChange={e => setUserNewUsername(e.target.value)}
                            sx={{ mt: 2 }}
                        />
                        <TextField
                            id="firstName"
                            name="firstName"
                            label="پسورد کاربر"
                            fullWidth
                            value={userNewPassword}
                            onChange={e => setUserNewPassword(e.target.value)}
                            sx={{ mt: 2 }}
                        />
                        <TextField
                            id="lastName"
                            name="lastName"
                            label="شماره تماس کاربر"
                            fullWidth
                            value={userNewPhone}
                            onChange={e => setUserNewPhone(e.target.value)}
                            sx={{ mt: 2 }}
                        />
                        <TextField
                            id="lastName"
                            name="lastName"
                            label="محل زندگی کاربر"
                            fullWidth
                            value={userNewCity}
                            onChange={e => setUserNewCity(e.target.value)}
                            sx={{ mt: 2 }}
                        />
                        <TextField
                            id="lastName"
                            name="lastName"
                            label="ایمیل کاربر"
                            fullWidth
                            value={userNewEmail}
                            onChange={e => setUserNewEmail(e.target.value)}
                            sx={{ mt: 2 }}
                        />
                        <TextField
                            id="lastName"
                            name="lastName"
                            label="آدرس کاربر"
                            fullWidth
                            value={userNewAddress}
                            onChange={e => setUserNewAddress(e.target.value)}
                            sx={{ mt: 2 }}
                        />
                        <TextField
                            id="lastName"
                            name="lastName"
                            label="امتیاز کاربر در سایت"
                            fullWidth
                            value={userNewScore}
                            onChange={e => setUserNewScore(e.target.value)}
                            sx={{ mt: 2 }}
                        />
                        <TextField
                            id="lastName"
                            name="lastName"
                            label="میزان خرید کاربر"
                            fullWidth
                            value={userNewBuy}
                            onChange={e => setUserNewBuy(e.target.value)}
                            sx={{ mt: 2 }}
                        />
                </EditModal>
            )}
            {
                isShowDetailsModal && (
                    <DetailsModal 
                        open={isShowDetailsModal}
                        hide={() => setIsShowDetailsModal(false)}
                    >
                        <Stack direction={'row'} justifyContent={'space-between'} columnGap={5}>
                            <Box textAlign={'center'}>
                                <Typography>شهر</Typography>
                                <Typography variant="body2" sx={{ fontSize: 18, fontWeight: 800, mt: 2, color: '#262626' }}>{mainUserInfos.city}</Typography>
                            </Box>
                            <Box textAlign={'center'}>
                                <Typography>آدرس</Typography>
                                <Typography variant="body2" sx={{ fontSize: 18, fontWeight: 800, mt: 2, color: '#262626' }}>{mainUserInfos.address}</Typography>
                            </Box>
                            <Box textAlign={'center'}>
                                <Typography>آدرس</Typography>
                                <Typography variant="caption" sx={{ fontSize: 18, fontWeight: 800, mt: 2, color: '#262626' }}>{mainUserInfos.score}</Typography>
                            </Box>
                            <Box textAlign={'center'}>
                                <Typography>میزان خرید</Typography>
                                <Typography variant="body2" sx={{ fontSize: 18, fontWeight: 800, mt: 2, color: '#262626' }}>{mainUserInfos.buy}</Typography>
                            </Box>
                        </Stack>
                    </DetailsModal>
                )
            }
        </>
    )
}

export default Users
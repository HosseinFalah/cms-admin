import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Stack, Typography, TextField } from '@mui/material';
import { ErrorBox } from '../../Components';
import { DetailsModal, DeleteModal, EditModal } from '../../Components/Modal';
import './Comments.css';

const Comments = () => {
    const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
    const [isShowEditModal, setIsShowEditModal] = useState(false);
    const [isShowAcceptModal, setIsShowAcceptModal] = useState(false);
    const [isShowRejectModal, setIsShowRejectModal] = useState(false);
    const [allComments, setAllComments] = useState([]);
    const [mainCommentBody, setMainCommentBody] = useState('');
    const [commentID, setCommentID] = useState(null);

    useEffect(() => {
        getAllComments();
    }, []);

    const getAllComments = async () => {
        try {
            const { data } = await axios.get('http://localhost:8000/api/comments');
            setAllComments(data)
        } catch (error) {
            console.log(error);
        }
    }

    const handleRemoveComment = async () => {
        try {
            await axios.delete(`http://localhost:8000/api/comments/${commentID}`);
            setIsShowDeleteModal(false);
            getAllComments()
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdateComment = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/api/comments/${commentID}`, { body: mainCommentBody });
            setIsShowEditModal(false)
            getAllComments();
        } catch (error) {
            console.log(error);
        }
    }

    const handleAcceptComment = async () => {
        try {
            await axios.post(`http://localhost:8000/api/comments/accept/${commentID}`);
            setIsShowAcceptModal(false);
            getAllComments();
        } catch (error) {
            console.log(error);
        }
    }

    const handleRejectComment = async () => {
        try {
            await axios.post(`http://localhost:8000/api/comments/reject/${commentID}`);
            setIsShowRejectModal(false)
            getAllComments();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {allComments.length ? (
                <table className='comments-table'>
                    <thead>
                        <tr className='comments-table-heading-tr'>
                            <th>اسم کاربر</th>
                            <th>محصول</th>
                            <th>کامنت</th>
                            <th>تاریخ</th>
                            <th>ساعت</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allComments.map(comment => (
                            <tr key={comment.id} className='comments-table-tr'>
                                <td>{comment.userID}</td>
                                <td>{comment.productID}</td>
                                <td>
                                    <Button variant='contained' color='primary' onClick={() => {
                                        setIsShowDetailsModal(true)
                                        setMainCommentBody(comment.body)
                                    }}>
                                        دیدن متن
                                    </Button>
                                </td>
                                <td>{comment.date}</td>
                                <td>{comment.hour}</td>
                                <td>
                                    <Stack direction={'row'} columnGap={2}>
                                        <Button 
                                            variant='contained' 
                                            onClick={() => {
                                                setIsShowDeleteModal(true)
                                                setCommentID(comment.id)
                                            }}>
                                            حذف
                                        </Button>
                                        <Button 
                                            variant='contained'
                                            onClick={() => {
                                                setIsShowEditModal(true)
                                                setMainCommentBody(comment.body)
                                                setCommentID(comment.id)
                                            }}>
                                                ویرایش
                                        </Button>
                                        <Button variant='contained'>پاسخ</Button>
                                        {comment.isAccept === 0 ? (
                                            <Button 
                                                variant='contained'
                                                onClick={() => {
                                                    setIsShowAcceptModal(true)
                                                    setCommentID(comment.id)
                                                }}>
                                                    تایید
                                            </Button>
                                        ) : (
                                            <Button 
                                                variant='contained'
                                                onClick={() => {
                                                    setIsShowRejectModal(true)
                                                    setCommentID(comment.id)
                                                }}>
                                                    رد
                                            </Button>
                                        )}
                                    </Stack>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <ErrorBox msg={'هیج کامنتی یافت نشد'}/>
            )}
            {isShowDetailsModal && (
                <DetailsModal open={isShowDetailsModal} hide={() => setIsShowDetailsModal(false)}>
                    <Box>
                        <Typography component={'h3'} variant='h5'>{mainCommentBody}</Typography>
                    </Box>
                    <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={() => setIsShowDetailsModal(false)}>
                        بستن
                    </Button>
                </DetailsModal>
            )}
            {isShowDeleteModal && (
                <DeleteModal 
                    open={isShowDeleteModal} 
                    hide={() => setIsShowDeleteModal(false)} 
                    removeHandle={handleRemoveComment}/>
            )}
            {isShowEditModal && (
                <EditModal
                    open={isShowEditModal}
                    hide={() => setIsShowEditModal(false)}
                    updateProduct={handleUpdateComment}>
                        <TextField
                            id="editComment"
                            label="ویرایش کامنت"
                            value={mainCommentBody}
                            onChange={e => setMainCommentBody(e.target.value)}
                            fullWidth
                            sx={{ mt: 2 }}
                        />
                </EditModal>
            )}
            {isShowAcceptModal && (
                <DetailsModal open={isShowAcceptModal} hide={() => setIsShowAcceptModal(false)}>
                    <Typography sx={{ my: 2, fontSize: 25 }} component={'p'}>آیا از تایید اطمینان دارید؟</Typography>
                    <Stack direction={'row'} columnGap={2} justifyContent={'flex-end'}>
                        <Button variant='outlined' color='success' onClick={handleAcceptComment}>بله</Button>
                        <Button variant='outlined' color='error' onClick={() => setIsShowAcceptModal(false)}>خیر</Button>
                    </Stack>
                </DetailsModal>
            )}
            {isShowRejectModal && (
                <DetailsModal open={isShowRejectModal} hide={() => setIsShowRejectModal(false)}>
                    <Typography sx={{ my: 2, fontSize: 25 }} component={'p'}>آیا از رد اطمینان دارید؟</Typography>
                    <Stack direction={'row'} columnGap={2} justifyContent={'flex-end'}>
                        <Button variant='outlined' color='success' onClick={handleRejectComment}>بله</Button>
                        <Button variant='outlined' color='error' onClick={() => setIsShowRejectModal(false)}>خیر</Button>
                    </Stack>
                </DetailsModal>
            )}
        </>  
    )
}

export default Comments;
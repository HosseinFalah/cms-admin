import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { AiOutlineDollarCircle, AiOutlineHome } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <Box 
            sx={{position: 'fixed', backgroundColor: '#4c1d95', height: 1}}>
            <Typography 
                component='h1' 
                sx={{ fontSize: 18, color: 'white', p: 2}}
                color='text.white'
            >
                به داشبورد خود خوش آمدید
            </Typography>
            <Divider color="white" />
            <List component='ul' sx={{ color: '#fafafa' }}>
                <ListItem disablePadding>
                    <Link to={`/`}>
                        <ListItemButton>
                            <AiOutlineHome size={20}/>
                            <ListItemText primary="صفحه اصلی" sx={{ ml: 2 }} />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to={`/products`}>
                        <ListItemButton>
                            <MdAddShoppingCart size={20}/>
                            <ListItemText primary="محصولات" sx={{ ml: 2 }} />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to={`/comments`}>
                        <ListItemButton component="a" href="/comments">
                            <BiCommentDetail size={20}/>
                            <ListItemText primary="کامنت ها" sx={{ ml: 2 }} />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to={`/users`}>
                        <ListItemButton component="a" href="/users">
                            <FiUsers size={20}/>
                            <ListItemText primary="کاربران" sx={{ ml: 2 }} />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to={`/orders`}>
                        <ListItemButton component="a" href="/orders">
                            <GiShoppingBag size={20}/>
                            <ListItemText primary="سفارشات" sx={{ ml: 2 }} />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to={`/offs`}>
                        <ListItemButton component="a" href="/offs">
                            <AiOutlineDollarCircle size={20}/>
                            <ListItemText primary="تخفیف ها" sx={{ ml: 2 }} />
                        </ListItemButton>
                    </Link>
                </ListItem>
            </List>
        </Box>
    )
}

export default Sidebar
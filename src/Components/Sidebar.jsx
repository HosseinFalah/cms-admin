import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { AiOutlineDollarCircle, AiOutlineHome } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { GiShoppingBag } from "react-icons/gi";

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
                    <ListItemButton component="a" href="#simple-list">
                        <AiOutlineHome size={20}/>
                        <ListItemText primary="صفحه اصلی" sx={{ ml: 2 }} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <MdAddShoppingCart size={20}/>
                        <ListItemText primary="محصولات" sx={{ ml: 2 }} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <BiCommentDetail size={20}/>
                        <ListItemText primary="کامنت ها" sx={{ ml: 2 }} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <FiUsers size={20}/>
                        <ListItemText primary="کاربران" sx={{ ml: 2 }} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <GiShoppingBag size={20}/>
                        <ListItemText primary="سفارشات" sx={{ ml: 2 }} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <AiOutlineDollarCircle size={20}/>
                        <ListItemText primary="تخفیف ها" sx={{ ml: 2 }} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default Sidebar
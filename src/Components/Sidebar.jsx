import { Link } from "react-router-dom";
import { sidebarItem } from "../Constants/SidebarItem";
import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";

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
                {sidebarItem.map(item => (
                    <ListItem key={item.id} disablePadding>
                        <Link to={item.link}>
                            <ListItemButton>
                                {item.icon}
                                <ListItemText primary={item.content} sx={{ ml: 2 }} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default Sidebar
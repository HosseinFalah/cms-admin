import { Avatar, Box, Button, InputBase, Paper, Stack, Typography } from "@mui/material";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

const Header = () => {
    return (
        <Stack direction="row" alignItems={'center'} justifyContent={'space-between'}>
            <Stack direction="row" spacing={2} alignItems={'center'}>
                <Avatar alt="HosseinFalah" src="/Assets/Avatar.jpg" sx={{ width: 65, height: 65, objectFit: 'cover' }}>HF</Avatar>
                <Box>
                    <Typography sx={{ fontSize: 20, fontWeight: 700 }}>حسین فلاح</Typography>
                    <Typography>برنامه نویس Front-End</Typography>
                </Box>
            </Stack>
            <Stack direction="row" alignItems={'center'} spacing={2}>
                <Paper
                    component="form"
                    sx={{ p: '8px 4px', display: 'flex', alignItems: 'center', width: 400, boxShadow: 'rgba(149, 157, 165, 0.2) 0 8px 24px'}}>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="جست و جو کنید ..."
                        />
                        <Button variant="contained" color="primary">
                            جستجو
                        </Button>
                </Paper>
                <Button variant="contained" color="primary" sx={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0 8px 24px' }}>
                    <NotificationsOutlinedIcon/>
                </Button>
                <Button variant="contained" color="primary" sx={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0 8px 24px' }}>
                    <LightModeOutlinedIcon/>
                </Button>
            </Stack>
        </Stack>
    )
}

export default Header;
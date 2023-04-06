import { Box, Typography } from "@mui/material"

const ErrorBox = ({msg}) => {
    return (
        <Box sx={{ backgroundColor: 'error.main', p: 2, mt: 1 }}>
            <Typography sx={{ fontSize: '1.5rem', color: 'white', textAlign: 'center' }}>{msg}</Typography>
        </Box>
    )
}

export default ErrorBox
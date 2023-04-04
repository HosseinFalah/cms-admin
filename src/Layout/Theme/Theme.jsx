import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
          main: '#4c1d95',
        },
    },
    typography: {
        fontFamily: `"IranSansDN", "Roboto", "Arial"`,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        fontWeightHeavy: 800,
        fontWeightFat: 900,
    },
    direction: "rtl",
});

export default theme;

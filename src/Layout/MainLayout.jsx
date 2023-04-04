import { ThemeProvider } from '@mui/material'
import theme from './Theme/Theme'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { Sidebar } from "../Components/index";

// RTL
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = () => {
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <Grid2 container>
                    <Grid2 xs={4}>
                        <Sidebar/>
                    </Grid2>
                </Grid2>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MainLayout
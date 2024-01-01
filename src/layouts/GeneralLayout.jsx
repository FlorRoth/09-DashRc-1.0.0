
import React, { useContext, useEffect, useState } from 'react'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { FooterLayout, SideBar } from '../components/ui';
import { NavBar } from '../components/ui';
import { ProductsPage } from '../pages/products/ProductsPage';
import { Route, Routes } from 'react-router';
import { ProductContexts } from '../contexts/ProductContexts';


const defaultTheme = createTheme();

export function GeneralLayout() {
    
       
    const [open, setOpen] = useState(true);

    const {state, getAllProducts } = useContext(ProductContexts);

    
    useEffect(() => {
      getAllProducts();
      
    }, [])


    const toggleDrawer = () => {
        setOpen(!open);
    };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <NavBar 
            toggleDrawer={toggleDrawer}
            open={open}
        />
        <SideBar 
            toggleDrawer={toggleDrawer}
            open={open}
        />
        
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Routes>
              <Route path={'/products'} element={
                <ProductsPage products={state.products}/>
              } />
            </Routes>

            <FooterLayout sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
import React, { useState } from 'react'
import { AppBar, Button, Menu, MenuList, Tab, Tabs, Toolbar, Typography, MenuItem } from '@mui/material'
import CartWidget from './CartWidget';


const Navbar = () => {
    /* // eslint-disable-next-line no-undef
    const classes = useStyles(); */
    const [anchorEl, setAnchorEl] = useState(null);
    const [value, setValue] = useState(0);

    const handleOpenMenu = e => {
        setAnchorEl(e.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
    }

    const handleClickTab = (e, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <AppBar color='secondary' >
                <Toolbar>
                    <Typography>Cats & Dogs Pet Shop</Typography>
                    <Tabs
                        onChange={handleClickTab}
                        indicatorColor="primary"
                        value={value}
                    >
                        <Tab disableRipple label="BANDEJAS" />
                        <Tab disableRipple label="ALIMENTOS" />
                        <Tab disableRipple label="CAMAS" />
                        <Tab disableRipple label="LITERAS" />
                        <Tab disableRipple label="JUGUETES" />
                        <Tab disableRipple label="ACCESORIOS" />
                    </Tabs>

                    <Button
                        aria-controls="menu"
                        onClick={handleOpenMenu}
                        disableRipple
                        /* className={classes.accountButton} */
                        variant="contained"
                        color="secondary"
                    >
                        Perfil
                    </Button>
                    <CartWidget />
                </Toolbar>
            </AppBar >

            <Menu
                style={{ marginTop: '50px' }}
                id="menu"
                onClose={handleMenuClose}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
            >
                <MenuItem onClick={handleMenuClose}>Mi Cuenta</MenuItem>
                <MenuList onClick={handleMenuClose}>Examenes Medicos</MenuList>
                <MenuList onClick={handleMenuClose}>Promociones</MenuList>
                <MenuList onClick={handleMenuClose}>Registrate</MenuList>
                <MenuList onClick={handleMenuClose}>Iniciar Sesión</MenuList>
            </Menu>

            
        </>
    );
};

export default Navbar

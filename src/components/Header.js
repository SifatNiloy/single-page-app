import { Button } from '@mui/material';
import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <div className='header'>
            <h2>This is Header</h2>
            <Button variant="contained" color="success">Hello World</Button>
        </div>
    );
};

export default Header;
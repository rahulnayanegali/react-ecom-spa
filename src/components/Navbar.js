import React from 'react';

// MUI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
// icons
import Logo from '../assets/main-logo.svg';
import Search from '../assets/search.svg';
import Profile from '../assets/profile.svg';
import Cart from '../assets/cart.svg';

function Navbar() {
  return (
    <AppBar>
      <Toolbar className='nav-container'>
        <div className='main-logo'>
          <img src={Logo} alt='navbar-logo' />
        </div>
        <div className='nav-sections'>
          <Button color='inherit'>
            <a href='/'>Shop</a>
          </Button>
          <Button color='inherit'>
            <a href='/'>About Us</a>
          </Button>
          <Button color='inherit'>
            <a href='/'>Our Stores</a>
          </Button>
          <Button color='inherit'>
            <a href='/'>Contact Us</a>
          </Button>
        </div>
        <div className='nav-icons'>
          <img src={Search} alt='search-icon' />
          <img src={Profile} alt='search-icon' />
          <img src={Cart} alt='search-icon' />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

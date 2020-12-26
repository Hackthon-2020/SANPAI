import React from 'react';
import HomeLogo from '../../../assets/img/sanpai-char.png';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './index.css';


const Navigation = () => {
  return(
    <header>
      <div className='Navbar'>
        <AppBar position="static">
          <Toolbar variant="dense" className='Links'>
            <Link to="/">
              <img src={HomeLogo} alt="Logo" className='link'/>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    </header>
  );
}

export default Navigation;
import React from 'react';
import HomeLogo from '../../../assets/img/sanpai-logo.png';
import SanpaiLogo from '../../../assets/img/sanpai-char.png';
import OmikujiLogo from '../../../assets/img/omikuji/omikuji-char.png';
// import ShrineLogo from '../../../assets/img/choose.png';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './index.css';


const Navigation = () => {
  return(
    <div className='Navbar'>
      <AppBar position="static">
        <Toolbar variant="dense" className='Links'>
          <Link to="/">
            <img src={HomeLogo} alt="Logo" className='link'/>
          </Link>
          <Link to="/sanpai">
            <img src={SanpaiLogo} alt="Logo" className='link'/>
          </Link>
          {/* 神社選択 */}
          {/* <Link to="/shrine">
            <img src={ShrineLogo} alt="Logo" className={classes.logo}/>
          </Link> */}
          <Link to="/omikuji">
            <img src={OmikujiLogo} alt="Logo" className='link'/>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;
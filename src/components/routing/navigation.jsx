import React from 'react';
import Logo from '../../assets/img/sanpai-char.png';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar:{
    backgroundColor: '#90ee90',
  },
  logo: {
    maxHeight: 60,
  }
}));

const Navigation = () => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar variant="dense">
          <Link to="/">
            <img src={Logo} alt="Logo" className={classes.logo}/>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;
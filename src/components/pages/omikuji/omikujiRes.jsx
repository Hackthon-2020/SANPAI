import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import omikujiImg from '../../../assets/img/omikuji/omikuji-box.png'
import setOmikuji from './setOmikuji'
import { useState } from 'react';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


export default function CustomizedDialogs(props) {
    const [rand, msg] = useState();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        // console.log(rand)
        // console.log(msg)
        //return(rand, msg)
    };

    const handleClose = () => {
        setOpen(false);
    };

  return (
    <div>
        <img src={omikujiImg} onClick={handleClickOpen} alt="" title="クリックでおみくじを引く" />
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            おみくじ結果
        </DialogTitle>
        <DialogContent dividers>
            <Typography gutterBottom>
                ラッキーカラー的な
            </Typography>
            <Typography gutterBottom>
            ラッキーアイテム的な
            </Typography>
            <Typography gutterBottom>
                その他
            </Typography>
        </DialogContent>
        <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
                Back to Home
            </Button>
        </DialogActions>
        </Dialog>
    </div>
  );
}
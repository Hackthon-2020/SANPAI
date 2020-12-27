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
import omikujiImg from '../../../../assets/img/omikuji/omikuji-box.png'
import setOmikuji from './setOmikuji';
import setOmikujiMsg from './setOmikujiMsg'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import backImage from '../../../../assets/img/back.png'


class OmikujiPlay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open:false,
            msg: "",
            res: null,
        }
    }

    static propTypes = {
      match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired
    }
    handleClick=() => {
      this.props.history.push('/')
    }

    styles = (theme) => ({
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
    })

    DialogTitle = withStyles(this.styles)((props) => {
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
    })

    DialogContent = withStyles((theme) => ({
      root: {
        padding: theme.spacing(2),
      },
    }))(MuiDialogContent)


    DialogActions = withStyles((theme) => ({
      root: {
        margin: 0,
        padding: theme.spacing(1),
      },
    }))(MuiDialogActions)

    handleClickOpen = () => {
      [this.state.res, this.state.msg] = setOmikuji();
      this.setState({
        open: true,
        
      })
    };

    handleClose = () => {
      this.setState({
        open: false
      })
      
      console.log('dialog close');
    };

    render(){
        return (
            <div>
                <img src={omikujiImg} onClick={this.handleClickOpen} alt="おみくじの画像が表示できませんでした。ごめんなさい。" title="クリックでおみくじを引く" />
                <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open}>
                <this.DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                    おみくじ結果:{this.state.msg}
                </this.DialogTitle>
                <this.DialogContent dividers>
                    <Typography gutterBottom>
                        今年のあなたの運勢はまあまあ良いですよ。<br/>
                        {/* TextType = {this.state.res %20} */}
                    </Typography>
                    <Typography gutterBottom>
                        ラッキーカラー：赤
                    </Typography>
                    <Typography gutterBottom>
                    ラッキーアイテム：折りたたみ傘
                    </Typography>
                    <Typography gutterBottom>
                        その他
                    </Typography>
                </this.DialogContent>
                <setOmikujiMsg msg={this.state.msg}/>
                <this.DialogActions>
                    <Button autoFocus onClick={this.handleClose} color="primary">
                      <img onClick={this.handleClick} src={backImage} alt="back button" className="backImg"/>
                    </Button>
                </this.DialogActions>
                </Dialog>
            </div>
        );
    }
    
}

export default withRouter(OmikujiPlay);
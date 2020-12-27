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
import omikujiImg from '../../../../assets/img/omikuji/fuda.png'
import setOmikuji from './setOmikuji';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'


class OmikujiPlay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open:false,
            messages: [],
            title: "",

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

    // setOikujiMsg = () => {
    //   const setDataset = this.state.dataset[this.state.msgId];
    //   const setMessages = setDataset.messages;
    //   this.setState({
    //     messages: setDataset.messages
    //   })
    // }
    
    // componentDidUpdate() {
    //   this.setOikujiMsg()
    // }

    handleClickOpen = () => {
      [this.state.title, this.state.messages] = setOmikuji();
      this.setState({
        open: true,
        
      })
    };

    displayMsg = ({message}) =>{
      <Typography>
        {message}
      </Typography>
    }

    handleClose = () => {
      this.setState({
        open: false
      })
      
      console.log('dialog close');
    };

    render(){
        return (
            <div>
                <img src={omikujiImg} className="fuda" onClick={this.handleClickOpen} alt="おみくじの画像が表示できませんでした。ごめんなさい。" title="クリックでおみくじを引く" />
                <img src={omikujiImg} className="fuda" onClick={this.handleClickOpen} alt="おみくじの画像が表示できませんでした。ごめんなさい。" title="クリックでおみくじを引く" />
                <img src={omikujiImg} className="fuda" onClick={this.handleClickOpen} alt="おみくじの画像が表示できませんでした。ごめんなさい。" title="クリックでおみくじを引く" />
                <img src={omikujiImg} className="fuda" onClick={this.handleClickOpen} alt="おみくじの画像が表示できませんでした。ごめんなさい。" title="クリックでおみくじを引く" />
                <img src={omikujiImg} className="fuda" onClick={this.handleClickOpen} alt="おみくじの画像が表示できませんでした。ごめんなさい。" title="クリックでおみくじを引く" />
                <img src={omikujiImg} className="fuda" onClick={this.handleClickOpen} alt="おみくじの画像が表示できませんでした。ごめんなさい。" title="クリックでおみくじを引く" />
                <img src={omikujiImg} className="fuda" onClick={this.handleClickOpen} alt="おみくじの画像が表示できませんでした。ごめんなさい。" title="クリックでおみくじを引く" />

                <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open}>
                  <this.DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                      おみくじ結果:{this.state.title}
                  </this.DialogTitle>
                  <this.DialogContent dividers>
                      {/* {this.state.messages.map((value)=>
                        <this.displayMsg message={value}/>
                      )} */}
                      <Typography>
                      {this.state.messages[0]}<br/>
                      </Typography>
                      <Typography gutterBottom>
                        {this.state.messages[1]}<br/>
                        {this.state.messages[2]}<br/>
                        {this.state.messages[3]}<br/>
                        {this.state.messages[4]}<br/>
                        {this.state.messages[5]}<br/>
                        {this.state.messages[6]}<br/>
                        {this.state.messages[7]}<br/>
                        {this.state.messages[8]}<br/>
                      </Typography>
                  </this.DialogContent>
                  <setOmikujiMsg msg={this.state.msg}/>
                  <this.DialogActions>
                      <Button autoFocus onClick={this.handleClose} color="primary">
                          Back to Home
                      </Button>
                  </this.DialogActions>
                </Dialog>
            </div>
        );
    }
    
}

export default withRouter(OmikujiPlay);
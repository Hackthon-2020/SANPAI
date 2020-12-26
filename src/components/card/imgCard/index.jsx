import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import SimpleDialog from '../../modal/dialog';
import PropTypes from 'prop-types';


const useStyles = makeStyles({
  card: {
    maxWidth: 350,
    boxShadow: "0 5px 10px 0 rgba(0, 0, 0, 0.6)",
    backgroundColor: "#fafafa",
    margin: 30,
    position: 'center',
    display: 'flex',
  },
  media: {
    height: 300,
  },
});

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};


export default function ImgCard (props){
  const classes = useStyles();
  const emails = ['username@gmail.com', 'user02@gmail.com'];
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  
    return (
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img"
              image={props.imgName}
              title={props.title}
              // onClick={props.link}
              onClick={handleClickOpen}
            />
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">{props.text}</Typography>
              {/* <Typography variant="body2" color="textSecondary" component="p"></Typography> */}
            </CardContent>
          </CardActionArea>
        </Card>
    );
  };

import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import SimpleDialog from '../../modal/dialog';


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


export default function ImgCard (props){
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedValue(true);
  };
    return (
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img"
              image={props.imgName}
              title={props.title}
              onClick={handleClickOpen}
            />
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} text={props.text}/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">{props.text}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    );
  };

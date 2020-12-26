import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    maxWidth: 350,
    boxShadow: "0 5px 10px 0 rgba(0, 0, 0, 0.6)",
    backgroundColor: "#fafafa",
    margin: 30,
    // position: 'center',
    display: 'flex',
  },
  media: {
    height: 300,
  },
});

export default function ImgCard (props){
  const classes = useStyles();

    return (
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img"
              image={props.imgName}
              title={props.title}
              onClick={props.link}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">{props.text}</Typography>
              {/* <Typography variant="body2" color="textSecondary" component="p"></Typography> */}
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">Share</Button>
            <Button size="small" color="primary">Learn More</Button>
          </CardActions>
        </Card>
    );
  };

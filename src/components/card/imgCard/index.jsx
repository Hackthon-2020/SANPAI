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
    position: 'center',
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
            <Button size="small" color="primary" href="https://login.microsoftonline.com/common/oauth2/authorize?client_id=4345a7b9-9a63-4910-a426-35363201d503&redirect_uri=https%3A%2F%2Fwww.office.com%2Flanding&response_type=code%20id_token&scope=openid%20profile&response_mode=form_post&nonce=637278393379762800.MGVkMjZhZDQtNzc0MS00YTJkLTg4YTMtYjg0ZDFkNDVkOGM2NjYzMWJlNWYtNTQzNS00NDQ4LWFkMzUtNzc5NDVhNjBkZDcw&ui_locales=ja&mkt=ja&client-request-id=92c33902-c9bb-4448-aa33-43752e990da5&state=hjPZhBuRdrC66LDvSxucBrL0E2IE3HCpE_PVcxaZ1RPgvjRLBKlAdaNdclEgCRR0C1-Qds9PwWHmfjH51T16neiAIw61WRQ2AULQ6VEG1-t4Ebm5091zAcl82HnK9DIYa86a04cHoBXhovpq4n9E0KAK4My-5P4IJM_zJSu6-Rgge5X0TT2jH56ixO4ZNuG03_d3er6garlBd2Jfgp4xfnxbPSyJB0OzPHKun-mIa1R1Qhzh1skX6iVjy9YDZ-db5O4njGkOzoWHNncV5GUdQE04zH8ErTO-jUay0cQg7fk&x-client-SKU=ID_NETSTANDARD2_0&x-client-ver=6.5.0.0" target="_blank">Share</Button>
            <Button size="small" color="primary" href="https://ja.reactjs.org/docs/getting-started.html" target="_blank">Learn More</Button>
          </CardActions>
        </Card>
    );
  };

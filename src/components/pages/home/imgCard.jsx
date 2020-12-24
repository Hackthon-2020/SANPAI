import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import OmikujiBox from '../../../assets/img/omikuji/omikuji-box.png'
import Osaisen from '../../../assets/img/osaisen/suzu.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
});

export default function ImgCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image={OmikujiBox}
          title="おみくじページへ遷移"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            おみくじ
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">

          </Typography>
        </CardContent>
      </CardActionArea>
      
      <CardActionArea>
        <CardMedia
          component="img"
          height="700"
          image={Osaisen}
          title="お賽銭ページへ遷移"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            お賽銭
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
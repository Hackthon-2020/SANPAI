import React from 'react';
import Isejin from '../../../assets/img/shrine/isejin.webp';
import Izumo from '../../../assets/img/shrine/izumo.jpg';
import Dazaifu from '../../../assets/img/shrine/dazaifu.jpg';
import Miyajidake from '../../../assets/img/shrine/miyajidake.jpg';
import Miyajima from '../../../assets/img/shrine/miyajima.jpg';
import Inari from '../../../assets/img/shrine/inari.jpg';

import ImgCard from '../imgCard/index';
import Grid from "@material-ui/core/Grid";
// import { useHistory } from 'react-router-dom';

export default function ShrineCard() {
  // const history = useHistory();

  return (
    <Grid container>
      <Grid item xs={3}>
        <div>
          <ImgCard 
          imgName={Isejin}
          title={"Isejin Image"}
          text={"伊勢神宮"}
          // link={()=>history.push('/omikuji')}
          />
        </div>
      </Grid>
      <Grid item xs={3}>
        <div>
        <ImgCard 
        imgName={Izumo}
        title={"Izumo Image"}
        text={"出雲大社"}
        // link={()=>history.push('/omikuji')}
        />
      </div>
      </Grid>
      <Grid item xs={3}>
        <div>
        <ImgCard 
        imgName={Dazaifu}
        title={"Dazaifu Image"}
        text={"太宰府天満宮"}
        // link={()=>history.push('/omikuji')}
        />
      </div>
      </Grid>
      <Grid item xs={3}>
      <div>
          <ImgCard 
          imgName={Miyajidake}
          title={"Miyajidake Image"}
          text={"宮地嶽神社"}
          // link={()=>history.push('/omikuji')}
          />
        </div>
      </Grid>
      <Grid item xs={3}>
        <div>
        <ImgCard 
        imgName={Miyajima}
        title={"Miyajima Image"}
        text={"厳島神社"}
        // link={()=>history.push('/omikuji')}
        />
      </div>
      </Grid>
      <Grid item xs={3}>
        <div>
        <ImgCard 
        imgName={Inari}
        title={"Inari Image"}
        text={"伏見稲荷神社"}
        // link={()=>history.push('/omikuji')}
        />
      </div>
      </Grid>
    </Grid>
  );
}
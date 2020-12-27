import React from 'react';
import Isejin from '../../../assets/img/shrine/isejin.webp';
import Izumo from '../../../assets/img/shrine/izumo.jpg';
import Dazaifu from '../../../assets/img/shrine/dazaifu.jpg';
import Miyajidake from '../../../assets/img/shrine/miyajidake.jpg';
import Miyajima from '../../../assets/img/shrine/miyajima.jpg';
import Inari from '../../../assets/img/shrine/inari.jpg';
import Kitano from '../../../assets/img/shrine/kitano.jpg';
import Kamado from '../../../assets/img/shrine/kamado.jpg';

import ImgCard from '../imgCard/index';
import Grid from "@material-ui/core/Grid";

export default function ShrineCard() {

  return (
    <Grid container>
      <Grid item xs={3}>
        <div>
          <ImgCard 
          imgName={Isejin}
          title={"Isejin Image"}
          text={"伊勢神宮（三重県）"}
          />
        </div>
      </Grid>
      <Grid item xs={3}>
        <div>
        <ImgCard 
        imgName={Izumo}
        title={"Izumo Image"}
        text={"出雲大社（島根県）"}
        />
      </div>
      </Grid>
      <Grid item xs={3}>
        <div>
        <ImgCard 
        imgName={Dazaifu}
        title={"Dazaifu Image"}
        text={"太宰府天満宮（福岡県）"}
        />
      </div>
      </Grid>
      <Grid item xs={3}>
      <div>
          <ImgCard 
          imgName={Miyajidake}
          title={"Miyajidake Image"}
          text={"宮地嶽神社（福岡県）"}
          />
        </div>
      </Grid>
      <Grid item xs={3}>
        <div>
        <ImgCard 
        imgName={Miyajima}
        title={"Miyajima Image"}
        text={"厳島神社（広島県）"}
        />
      </div>
      </Grid>
      <Grid item xs={3}>
        <div>
        <ImgCard 
        imgName={Inari}
        title={"Inari Image"}
        text={"伏見稲荷神社（京都府）"}
        />
      </div>
      </Grid>
      <Grid item xs={3}>
        <div>
        <ImgCard 
        imgName={Kitano}
        title={"Kitano Image"}
        text={"北野天満宮（福岡県）"}
        />
      </div>
      </Grid>
      <Grid item xs={3}>
        <div>
        <ImgCard 
        imgName={Kamado}
        title={"Kamado Image"}
        text={"溝口竈門神社（福岡県）"}
        />
      </div>
      </Grid>
    </Grid>
  );
}
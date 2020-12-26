// import React from 'react';
// // import { Link } from 'react-router-dom';
// import OmikujiBox from '../../../assets/img/omikuji/omikuji-box.png';
// import OsaisenImg from '../../../assets/img/osaisen/suzu.png';
// // import ShrineImg from '../../../assets/img/osaisen/torii.png';
// import ImgCard from '../imgCard/index';
// import Grid from "@material-ui/core/Grid";
// import { useHistory } from 'react-router-dom';


// export default function CardList() {
//   const history = useHistory();

//   return (
//     <Grid container>
//       <Grid item xs={3}>
//         <div>
//           <ImgCard 
//           imgName={OsaisenImg}
//           title={"Osaisen Image"}
//           text={"お賽銭"}
//           link={()=>history.push('/osaisen')}
//           />
//         </div>
//       </Grid>
//       <Grid item xs={3}>
//         <div>
//           <ImgCard 
//           imgName={OmikujiBox}
//           title={"Omikuji Image"}
//           text={"おみくじ"}
//           link={()=>history.push('/omikuji')}
//           />
//         </div>
//       </Grid>
//       <Grid item xs={3}>
//         <div>
//           <ImgCard 
//           imgName={OmikujiBox}
//           title={"Omikuji Image"}
//           text={"じんじゃ"}
//           link={()=>history.push('/shrine')}
//           />
//         </div>
//       </Grid>
//     </Grid>
//   );
// }
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Grid from "@mui/material/Unstable_Grid2";

import Header from "../components/header";
import LootboxCarousel from "../components/lootboxcarousel";
import AnimatedPage from "../components/AnimatedPage";
export default function Home() {
  return (
    <AnimatedPage>
      <Header />
      <div className="container">
        <Head>
          <title>Prime Nine - Loot Box</title>
          <meta name="description" content="Prime Nine" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="lootbox-page"
        >
          <Grid container spacing={2}>
            <Grid className="lootbox-all" xs={12}>
              <div className="header">
                <h1>Loot Box</h1>
                <img src="/image/div.svg" className="divider" />
                <h3>Available (5)</h3>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="lootbox-page"
        >
          <Grid container spacing={2}>
            <Grid className="lootbox" xs={12}>
              <img src="/image/lootbox.png" width="260px" />
              <div className="lootbox-button">
                <h2>Wood crate</h2>
                <div className="button2 big-button">Open</div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="lootbox-page"
        >
          <Grid container spacing={2}>
            <Grid className="lootbox-all" xs={12}>
              <div className="header">
                <img src="/image/back-arrow.png" className="arrow" style={{width:'60px', paddingBottom:"5px"}} />
                <img src="/image/loot/01.png" className="loot-inventory" />
                <img src="/image/loot/02.png" className="loot-inventory" />
                <img src="/image/loot/03.png" className="loot-inventory" />
                <img src="/image/loot/04.png" className="loot-inventory" />
                <img src="/image/loot/05.png" className="loot-inventory" />
                <img src="/image/loot/06.png" className="loot-inventory" />
                <img src="/image/loot/07.png" className="loot-inventory" />
                <img src="/image/loot/08.png" className="loot-inventory" />
                <img src="/image/loot/09.png" className="loot-inventory" />
                <img src="/image/forward-arrow.png" className="arrow" style={{width:'70px',paddingLeft:"10px", paddingBottom:"5px"}}/>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </AnimatedPage>
  );
}

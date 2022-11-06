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
        <title>Prime Nine - Content 2</title>
        <meta name="description" content="Prime Nine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="content-page"
      >
        <Grid container spacing={2}>
          <Grid className="content-all" xs={12}>
            <div className="header content-header">
              <h3>Welcome to Prime Nine</h3>
              <img src="/image/div.svg" className="divider" />
              <h1>Learn the basics</h1>
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="showcase-items2"
      >
        <Grid container spacing={2}>
          <Grid md={4} xs={12}>
            <div className="item-2">
              <img src="/image/page/armour.png" width="120px" />
            </div>
            <h2 className="pTop">Armour</h2>
            <p>Create unique items</p>
          </Grid>
          <Grid md={4} xs={12}>
            <div className="item-2">
              <img src="/image/page/burn.png" width="120px" />
            </div>
            <h2 className="pTop">Burn</h2>
            <p>Earn additional benefits</p>
          </Grid>
          <Grid md={4} xs={12}>
            <div className="item-2">
              <img src="/image/page/trade.png" width="120px" />
            </div>
            <h2 className="pTop">Trade</h2>
            <p>Use a trustless trading platform</p>
          </Grid>
        </Grid>
      </Grid>


      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="content-box"
      >
        <Grid container spacing={2}>
          <Grid className="box" xs={12}>
            <img src="/image/page/page-content-1.png" width="320px" />

            <div className="box-image">
              <img src="/image/page/charms.png" width="100px" />
            </div>

            <div className="box-info">
              <h2>Charms</h2>
              <p>
                You can use it to make various game elements, such as weapons,
                food, etc.
              </p>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
    </AnimatedPage>
  );
}

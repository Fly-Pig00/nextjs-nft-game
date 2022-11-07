import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Grid from "@mui/material/Unstable_Grid2";
import AnimatedPage from "../components/AnimatedPage";
import Header from "../components/header";


export default function Home() {

  return (
    <AnimatedPage>
      <Header />
      <div className="container">
        <Head>
          <title>Prime Nine - Roadmap</title>
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
                <h2>Roadmap</h2>
                <img src="/image/div.svg" className="divider" />
                <h1>Our Future</h1>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={5}
          sx={{my: 1}}
        >
          <Grid item md={1}></Grid>
          <Grid item xs={12} md={5} >
            <div className="roadmap-item">
              <img
                src="/image/page/roadmap-1.png"
                width="120px"
                className="roadmap-image"
              />
              <div className="roadmap-info">
                <h2 className="roadmap-header">Community Launch</h2>
                <ul className="roadmap-list">
                  <li>Website Launch</li>
                  <li>Social Media Launch</li>
                  <li>Game Prototype Demo</li>
                  <li>Game Art & Graphics Release</li>
                </ul>
              </div>

            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className="roadmap-item">
              <img
                src="/image/page/roadmap-2.png"
                width="120px"
                className="roadmap-image"
              />
              <div className="roadmap-info">
                <h2 className="roadmap-header">Community Launch</h2>
                <ul className="roadmap-list">
                  <li>Website Launch</li>
                  <li>Social Media Launch</li>
                  <li>Game Prototype Demo</li>
                  <li>Game Art & Graphics Release</li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item md={1}></Grid>
        </Grid>
        <img
          src="/image/page/roadmap-status-1.png"
          className="roadmap-status-1"
        />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={5}
          sx={{my: 1}}
        >
          <Grid item md={1}></Grid>
          <Grid item xs={12} md={5}>
            <div className="roadmap-item">
              <img
                src="/image/page/roadmap-3.png"
                width="120px"
                className="roadmap-image"
              />

              <div className="roadmap-info">
                <h2 className="roadmap-header">Community Launch</h2>
                <ul className="roadmap-list">
                  <li>Website Launch</li>
                  <li>Social Media Launch</li>
                  <li>Game Prototype Demo</li>
                  <li>Game Art & Graphics Release</li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className="roadmap-item">
              <img
                src="/image/page/roadmap-4.png"
                width="120px"
                className="roadmap-image"
              />

              <div className="roadmap-info">
                <h2 className="roadmap-header">Community Launch</h2>
                <ul className="roadmap-list">
                  <li>Website Launch</li>
                  <li>Social Media Launch</li>
                  <li>Game Prototype Demo</li>
                  <li>Game Art & Graphics Release</li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item md={1}></Grid>
        </Grid>
        <img
          src="/image/page/roadmap-status-2.png"
          className="roadmap-status-2"
        />
      </div>
      <img src="/image/page/roadmap-status-mobile.png" class="roadmap-status-mobile"/>
      <img src="/image/paragon.png" className="paragon-page" />
    </AnimatedPage>
  );
}

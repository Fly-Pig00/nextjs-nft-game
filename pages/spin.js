import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Grid from "@mui/material/Unstable_Grid2";
import AnimatedPage from "../components/AnimatedPage";
import Header from "../components/header";
import LootboxCarousel from "../components/lootboxcarousel";
import { useState } from "react";

export default function Home() {
  const [rotate, setRotate] = useState(false);

  const rotateImage = () => {
    const spinner = document.querySelector(":root");
    spinner.style.setProperty('--angle', `${Math.floor(Math.random()*1000)}deg`);
    setRotate(!rotate);
    // const spinner = document.querySelector(".rotate");
    // console.log(spinner);
    // spinner.style.setProperty("--delay", Math.floor(Math.random() * 50));
  };
  return (
    <>
      <Header />
      <div className="container">
        <Head>
          <title>Prime Nine - Content</title>
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
                <h1>SPIN TO WIN </h1>
                <img src="/image/div.svg" className="divider" />
                <h3>Available [2]</h3>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="showcase-items"
        >
          <Grid container spacing={2}>
            <Grid xs={12}>
              <div className="spin-bg">
                <img
                  id="spin-img"
                  src="/image/spin/spin-img.png"
                  className={rotate ? "rotate spin-img" : "spin-img"}
                />
                <img src="/image/spin/spin-sel.svg" className="spin-sel" />
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="showcase-items"
        >
          <Grid container spacing={2}>
            <Grid className="item-info" xs={12}>
              <div onClick={rotateImage}>
                <img src="/image/spin/spin-btn.png" width="200px" />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

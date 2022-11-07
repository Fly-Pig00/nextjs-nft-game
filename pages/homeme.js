import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Grid from "@mui/material/Unstable_Grid2";

import Header from "../components/header";
import AnimatedPage from "../components/AnimatedPage";
export default function Home() {
  return (
    <AnimatedPage>
      <Header />
      <div className="container">
        <Head>
          <title>Prime Nine - Home</title>
          <meta name="description" content="Prime Nine" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          className="home-page"
        >
          <Grid container spacing={2}>
            <Grid className="home-all" xs={12}>
              <div className="main-subline">EXTRA XP WITH PRIME GAMING</div>
              <div className="main-header">AN INVITATION <br/>TO ADVENTURE</div>
              <div className="main-info">FREE XP WEEKEND WITH PRIME NINE</div>
            </Grid>
          </Grid>
        </Grid>
        <img src="/image/home/chair.png" className="chair" />
      </div>
    </AnimatedPage>
  );
}

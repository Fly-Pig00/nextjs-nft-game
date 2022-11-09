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
      <div className="container-home2">
        <div className="home2-div1">
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
                <div className="main-header">
                  AN INVITATION <br />
                  TO ADVENTURE
                </div>
                <div className="main-info">FREE XP WEEKEND WITH PRIME NINE</div>
              </Grid>
            </Grid>
          </Grid>
          <img src="/image/home/chair.png" className="chair" />
        </div>
        <div className="home2-divider">
          <img src="/image/home/divider.png" width="80%" />
        </div>
        <div className="home4-div">
          <h1>The bastion</h1>
          <h3>
            An Adventurer who&apos;s lost all memories stands at the center of a
            continent.
            <br />
            Begin your journey to uncover the truth of this world.
          </h3>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className="showcase-items"
          >
            <Grid
              container
              spacing={2}
              direction={{ xs: "column", md: "row" }}
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                md={6}
                xs={12}
                container
                spacing={2}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <div className="item home4-mt-20">
                  <img src="/image/home/reward.png" className="content-image" />
                </div>
                <h2 className="pTop">REWARDS</h2>
                <img src="/image/div.svg" className="divider mg-auto" />
                <h3>
                  Wander the plains on horseback or sail the oceans <br />
                  on a ship.Explore the wide world <br />
                  and create your own story.
                </h3>
              </Grid>
              <Grid
                md={6}
                xs={12}
                container
                spacing={2}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <div className="item home4-mt-20">
                  <img src="/image/home/item.png" className="content-image" />
                </div>
                <h2 className="pTop">ITEMS</h2>
                <img src="/image/div.svg" className="divider mg-auto" />
                <h3>
                  Wander the plains on horseback or sail the oceans <br />
                  on a ship.Explore the wide world and <br />
                  create your own story.
                </h3>
              </Grid>
              <Grid
                md={6}
                xs={12}
                container
                spacing={2}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <div className="item home4-mt-20">
                  <img src="/image/home/money.png" className="content-image" />
                </div>
                <h2 className="pTop">WALLET</h2>
                <img src="/image/div.svg" className="divider mg-auto" />
                <h3>
                  Wander the plains on horseback or sail the oceans <br />
                  on a ship.Explore the wide world and <br />
                  create your own story.
                </h3>
              </Grid>
              <Grid
                md={6}
                xs={12}
                container
                spacing={2}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <div className="item home4-mt-20">
                  <img
                    src="/image/home/currency.png"
                    className="content-image"
                  />
                </div>
                <h2 className="pTop">CURRENCY</h2>
                <img src="/image/div.svg" className="divider mg-auto" />
                <h3>
                  Wander the plains on horseback or sail the oceans <br />
                  on a ship.Explore the wide world and <br />
                  create your own story.
                </h3>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className="home2-divider">
          <img src="/image/home/divider.png" width="80%" />
        </div>
        <div className="home4-bg4">
          <div className="home4-width-6">
            <h1 className="home4-left">embark on your adventure</h1>
            <h3 className="home4-left">
              From the scorching heat of a desert metropolis
              <br />
              to the serene peace of hidden forest enclaves,
              <br />a thrilling story follows wherever your footsteps take you.
            </h3>
          </div>
          <img src="/image/home/vanguard.png" className="home4-vanguard" />
          <img src="/image/home/stones.png" className="home4-stones" />
        </div>
        <div className="home2-div1 home4-bg5">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className="content-page"
          >
            <Grid container spacing={2}>
              <Grid className="content-all" xs={12}>
                <div
                  className="header content-header"
                >
                  <h1 className="home4-black">learn about our pfps</h1>
                  <img src="/image/div.svg" className="divider" />
                  <h3
                    className="home4-black home4-pad-10"
                  >
                    It’s all about people. Community is at the core of our
                    culture, we thrive to empower them in everything we do. They
                    will always be the #1 priority for us.av
                  </h3>
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
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid md={4} xs={12}>
                <div className="item-2 pTop">
                  <img
                    src="/image/home/paragons-logo2.png"
                    width="160px"
                    height="160px"
                  />
                </div>
                <h2 className="home4-black">Paragon</h2>
                <p
                  className="home4-black home4-padd-20"
                >
                  It’s all about people. Community is at the core of our culture
                </p>
              </Grid>
              <Grid md={4} xs={12}>
                <div className="item-2 pTop">
                  <img
                    src="/image/home/vanguards-logo2.png"
                    width="160px"
                    height="160px"
                  />
                </div>
                <h2 className="home4-black">Vanguards</h2>
                <p
                  className="home4-black home4-padd-20"
                >
                  It’s all about people. Community is at the core of our culture
                </p>
              </Grid>
              <Grid md={4} xs={12}>
                <div className="item-2 pTop">
                  <img
                    src="/image/home/echoes-logo2.png"
                    width="160px"
                    height="160px"
                  />
                </div>
                <h2 className="home4-black">Echoes</h2>
                <p
                  className="home4-black home4-padd-20"
                >
                  It’s all about people. Community is at the core of our culture
                </p>
              </Grid>
            </Grid>
          </Grid>
          <h1 className="home4-black home4-mt-20">
            A vast open world
          </h1>
          <div
            className="button-mint home4-mint-btn"
          >
            <span>MINT NOW</span>
          </div>
          <img src="/image/home/worrier.png" className="worrier" />
        </div>
      </div>
    </AnimatedPage>
  );
}

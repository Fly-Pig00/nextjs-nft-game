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
        <div style={{ textAlign: "center", marginTop: "-12px" }}>
          <img src="/image/home/divider.png" style={{ width: "80%" }} />
        </div>
        <div style={{ paddingBottom: "10%",background: "url(/image/home/bg6.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center", }}>
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
                <div className="item" style={{ marginTop: "20%" }}>
                  <img src="/image/home/reward.png" className="content-image" />
                </div>
                <h2 className="pTop">REWARDS</h2>
                <img
                  src="/image/div.svg"
                  className="divider"
                  style={{ margin: "auto" }}
                />
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
                <div className="item" style={{ marginTop: "20%" }}>
                  <img src="/image/home/item.png" className="content-image" />
                </div>
                <h2 className="pTop">ITEMS</h2>
                <img
                  src="/image/div.svg"
                  className="divider"
                  style={{ margin: "auto" }}
                />
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
                <div className="item" style={{ marginTop: "20%" }}>
                  <img src="/image/home/money.png" className="content-image" />
                </div>
                <h2 className="pTop">WALLET</h2>
                <img
                  src="/image/div.svg"
                  className="divider"
                  style={{ margin: "auto" }}
                />
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
                <div className="item" style={{ marginTop: "20%" }}>
                  <img
                    src="/image/home/currency.png"
                    className="content-image"
                  />
                </div>
                <h2 className="pTop">CURRENCY</h2>
                <img
                  src="/image/div.svg"
                  className="divider"
                  style={{ margin: "auto" }}
                />
                <h3>
                  Wander the plains on horseback or sail the oceans <br />
                  on a ship.Explore the wide world and <br />
                  create your own story.
                </h3>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div style={{ textAlign: "center", marginTop: "-12px" }}>
          <img src="/image/home/divider.png" style={{ width: "80%" }} />
        </div>
        <div
          style={{
            background: "url(/image/home/bg4.png)",
            position: "relative",
            marginTop: "0px",
            paddingLeft: "10%",
            paddingTop: "5%",
            paddingBottom: "5%",
          }}
        >
          <h1 style={{ textAlign: "left" }}>embark on your adventure</h1>
          <h3 style={{ textAlign: "left" }}>
            From the scorching heat of a desert metropolis
            <br />
            to the serene peace of hidden forest enclaves,
            <br />a thrilling story follows wherever your footsteps take you.
          </h3>
          <img src="/image/home/vanguard.png" className="home4-vanguard" />
          <img src="/image/home/stones.png" className="home4-stones" />
        </div>
        <div
          className="home2-div1"
          style={{
            position:"relative",
            paddingTop: "10%",
            paddingBottom: "10%",
            background: "url(/image/home/bg5.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: "5",
          }}
        >
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
                  style={{ textAlign: "center", paddingBottom: "5%" }}
                >
                  <h1 className="black">learn about our pfps</h1>
                  <img src="/image/div.svg" className="divider" />
                  <h3
                    className="black"
                    style={{ paddingLeft: "10%", paddingRight: "10%" }}
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
                <h2 className="black">Paragon</h2>
                <p
                  className="black"
                  style={{ paddingLeft: "20%", paddingRight: "20%" }}
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
                <h2 className="black">Vanguards</h2>
                <p
                  className="black"
                  style={{ paddingLeft: "20%", paddingRight: "20%" }}
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
                <h2 className="black">Echoes</h2>
                <p
                  className="black"
                  style={{ paddingLeft: "20%", paddingRight: "20%" }}
                >
                  It’s all about people. Community is at the core of our culture
                </p>
              </Grid>
            </Grid>
          </Grid>
          <h1 className="black" style={{ marginTop: "20%" }}>
            A vast open world
          </h1>
          <div
            className="button-mint"
            style={{ marginTop: "20px", marginBottom: "20%" }}
          >
            <span>MINT NOW</span>
          </div>
          <img src="/image/home/worrier.png" className="worrier" />
        </div>
      </div>
    </AnimatedPage>
  );
}

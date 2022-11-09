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
        <div
          className="home2-div1"
          style={{
            paddingTop: "10%",
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
                  <h3>why prime nine?</h3>
                  <img src="/image/div.svg" className="divider" />
                  <h1>Our World</h1>
                  <p style={{ paddingLeft: "20%", paddingRight: "20%" }}>
                    Prime Nine, is the largest and most successful NFT project
                    within the bastion ecosystem to date. Prime Nine evolve over
                    time, depending on how players interact with their NFTs, our
                    leveraged products.
                  </p>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <div className="flex">
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
                    style={{ textAlign: "center" }}
                  >
                    <h1>your adventure</h1>
                    <img src="/image/div.svg" className="divider" />
                    <h3
                      style={{
                        paddingLeft: "20%",
                        paddingRight: "20%",
                        marginTop: "5%",
                      }}
                    >
                      Wander the plains on horseback or sail the oceans on a
                      ship.Explore the wide world and create your own story.
                    </h3>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <img src="/image/home/pic1.png" style={{ width: "40%" }} />
          </div>
          <div
            className="flex"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <img src="/image/home/pic2.png" style={{ width: "40%" }} />
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
                    style={{ textAlign: "center" }}
                  >
                    <h1>battle users</h1>
                    <img src="/image/div.svg" className="divider" />
                    <h3
                      style={{
                        paddingLeft: "20%",
                        paddingRight: "20%",
                        marginTop: "5%",
                      }}
                    >
                      Fight back the forces that threaten the world or test your
                      might against other Adventurers. Lead your guild to
                      victory in battle to earn g reat renown and greater
                      wealth.
                    </h3>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div style={{ textAlign: "center", paddingTop: "5%" }}>
            <img src="/image/home/pic3.png" style={{ width: "90%" }} />
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "-18px" }}>
          <img src="/image/home/divider.png" style={{ width: "80%" }} />
        </div>
        <div
          className="home2-div1"
          style={{
            paddingTop: "10%",
            paddingBottom: "10%",
            background: "url(/image/home/bg2.png)",
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
                  <h1>create and sell nfts</h1>
                  <img src="/image/div.svg" className="divider" />
                  <h3 style={{ paddingLeft: "20%", paddingRight: "20%" }}>
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
            <Grid container spacing={2}>
              <Grid md={4} xs={12}>
                <div className="item-2">
                  <img src="/image/home/wallet.png" width="250px" />
                </div>
              </Grid>
              <Grid md={4} xs={12}>
                <div className="item-2">
                  <img src="/image/home/gamification.png" width="250px" />
                </div>
              </Grid>
              <Grid md={4} xs={12}>
                <div className="item-2">
                  <img src="/image/home/connect.png" width="250px" />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div style={{ textAlign: "center", paddingBottom:"10%", background:"rul(/images/home/bg3.png)"}}>
          <h1 style={{paddingBottom:"30px"}}>embark on your adventure.</h1>
          <h3>
            From the scorching heat of a desert metropolis
            <br />
            to the serene peace of hidden forest enclaves,
            <br />a thrilling story follows wherever your footsteps take you.
          </h3>
          <div className="button-mint"><span>Mint NFT</span></div>
        </div>
      </div>
    </AnimatedPage>
  );
}

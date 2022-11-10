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
        <div className="home2-div1 home3-pt10">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className="content-page"
          >
            <Grid container spacing={2}>
              <Grid className="content-all" xs={12}>
                <div className="header content-header home3-center">
                  <h3>why prime nine?</h3>
                  <img src="/image/div.svg" className="divider" />
                  <h1>Our World</h1>
                  <p className="home2-plr">
                    Prime Nine, is the largest and most successful NFT project
                    within the bastion ecosystem to date. Prime Nine evolve over
                    time, depending on how players interact with their NFTs, our
                    leveraged products.
                  </p>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            direction={{ xs: "column-reverse", md: "row" }}
            justifyContent="center"
            alignItems="center"
            className="content-page"
          >
            <Grid container spacing={2}>
              <Grid className="content-all">
                <div className="header content-header center home4-width-8">
                  <h1>your adventure</h1>
                  <img src="/image/div.svg" className="divider" />
                  <h3 className="home2-plr home3-mb">
                    Wander the plains on horseback or sail the oceans on a
                    ship.Explore the wide world and create your own story.
                  </h3>
                </div>
              </Grid>
            </Grid>
            <img src="/image/home/pic1.png" width="30%" />
          </Grid>
          <Grid
            container
            direction={{ xs: "column", md: "row-reverse" }}
            justifyContent="center"
            alignItems="center"
            className="content-page"
          >
            <Grid container spacing={2}>
              <Grid className="content-all">
                <div className="header content-header center home4-width-8">
                  <h1>battle users</h1>
                  <img src="/image/div.svg" className="divider" />
                  <h3 className="home2-plr home3-mb">
                    Fight back the forces that threaten the world or test your
                    might againstother Adventurers. Lead your guild to <br />
                    victory in battle to earn g reat renown and greater wealth.
                  </h3>
                </div>
              </Grid>
            </Grid>
            <img src="/image/home/pic2.png" width="30%" />
          </Grid>
          <div className="center home3-mb">
            <img src="/image/home/pic3.png" width="90%" />
          </div>
        </div>
        <div className="center home3-mt-18">
          <img src="/image/home/divider.png" width="80%" />
        </div>
        <div className="home2-div1 home3-bg-div">
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
                  <h3 className="home2-plr">
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
              <Grid lg={4} xs={12}>
                <div className="home3-card">
                  <img src="/image/home/wallet-logo.png" width="50px" />
                  <h2>Wallet</h2>
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </h3>
                </div>
              </Grid>
              <Grid lg={4} xs={12}>
              <div className="home3-card">
                  <img src="/image/home/gamefication-logo.png" width="50px" />
                  <h2>Gamification</h2>
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </h3>
                </div>
              </Grid>
              <Grid lg={4} xs={12}>
              <div className="home3-card">
                  <img src="/image/home/connect-logo.png" width="50px" />
                  <h2>Connect</h2>
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </h3>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div
          style={{
            textAlign: "center",
            paddingBottom: "10%",
            background: "rul(/images/home/bg3.png)",
          }}
        >
          <h1 style={{ paddingBottom: "30px" }}>embark on your adventure.</h1>
          <h3>
            From the scorching heat of a desert metropolis
            <br />
            to the serene peace of hidden forest enclaves,
            <br />a thrilling story follows wherever your footsteps take you.
          </h3>
          <div className="button-mint">
            <span>Mint NFT</span>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

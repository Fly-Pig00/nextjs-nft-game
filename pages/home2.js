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
        <div className="home2-div1">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Grid container spacing={2}>
              <Grid xs={12}>
                <div
                  className="header"
                  style={{ paddingTop: "20%", paddingLeft: "40%" }}
                >
                  <h3 className="textleft mdown">Who are we?</h3>
                  <img
                    src="/image/home/divider2.png"
                    className="divider"
                    style={{ width: "80%" }}
                  />
                  <h1 className="textleft mup">WHY PRIME NINE?</h1>
                  <p className="textleft">
                    Prime Nine, is the largest and most successful NFT project
                    within the bastion ecosystem to date. Prime Nine evolve over
                    time, depending on how players interact with their NFTs, our
                    leveraged products, and the community. Prime Nine NFTs play
                    a fundamental role in the growth and expansion of Prime
                    Nine&apos;s community.{" "}
                  </p>
                </div>
                <div
                  className="main-buttons"
                  style={{ paddingLeft: "43%", paddingBottom: "20%" }}
                >
                  <div className="button1">Learn More</div>
                  <div className="button2">Learn More</div>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <img src="/image/home/man-sword.png" className="man-sword" />
        </div>
        <div style={{ textAlign: "center", marginTop: "-12px" }}>
          <img src="/image/home/divider.png" style={{ width: "100%" }} />
        </div>
        <div className="home2-div1">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Grid container spacing={2}>
              <Grid xs={12}>
                <div
                  className="header"
                  style={{
                    paddingTop: "10%",
                    paddingRight: "20%",
                    paddingBottom: "20%",
                  }}
                >
                  <h1 className="textleft mdown">Our Values</h1>
                  <img
                    src="/image/home/divider2.png"
                    className="divider"
                    style={{ width: "80%" }}
                  />
                  <h4 className="textleft ">
                    Three things define who we are, what we do, and how we do
                    it:
                  </h4>
                  <h3 className="textleft" style={{ marginBottom: "7px" }}>
                    Community First
                  </h3>
                  <h3 className="textleft mup">
                    It’s all about people. Community is at the core of our
                    culture, we thrive to empower them in everything we do. They
                    will always be the #1 priority for us.av
                  </h3>
                  <h3 className="textleft" style={{ marginBottom: "7px" }}>
                    Raise The Bar
                  </h3>
                  <h3 className="textleft mup">
                    We believe in amazing content made by amazing people. We
                    aspire to raise the bar and build a universe that is made to
                    last forever. We are fully commited to delivering
                    outstanding experiences to the world.
                  </h3>
                  <h3
                    className="textleft"
                    style={{ marginBottom: "7px", marginTop: "40px" }}
                  >
                    All About the Long Term
                  </h3>
                  <h3 className="textleft mup">
                    There is no shortcut to greatness. We believe in building
                    the right foundation to allow the everlasting success of our
                    universe
                  </h3>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <img src="/image/vanguard.png" className="home2-vanguard" />
        </div>
        <div style={{ textAlign: "center", marginTop: "-12px" }}>
          <img src="/image/home/divider.png" style={{ width: "80%" }} />
        </div>
        <div className="home2-div1" style={{ paddingTop: "10%", paddingBottom:"10%", background:"url(/image/home/bg2.png)", zIndex:"5" }}>
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
                  style={{ textAlign: "center", paddingBottom:"5%" }}
                >
                  <h1>learn about our pfps</h1>
                  <img src="/image/div.svg" className="divider" />
                  <h3>
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
                  <img src="/image/home/paragons.png" width="200px" />
                </div>
                <div className="item-2 pTop">
                  <img src="/image/home/paragons-logo.png" width="40px" />
                </div>
                <h2>Paragon</h2>
                <p style={{paddingLeft:"20%",paddingRight:"20%"}}>
                  Few leave the corporate world with their lives - fewer still
                  with their souls intact. You&apos;ve been there - you&apos;ve
                  bent the rules, exploited secrets and weaponized information.
                  There&apos;s no such thing as a fair game, only winners and
                  losers.
                </p>
              </Grid>
              <Grid md={4} xs={12}>
                <div className="item-2">
                  <img src="/image/home/vanguards.png" width="200px" />
                </div>
                <div className="item-2 pTop">
                  <img src="/image/home/vanguards-logo.png" width="40px" />
                </div>
                <h2>Vanguards</h2>
                <p style={{paddingLeft:"20%",paddingRight:"20%"}}>
                  They say if you wanna understand the streets, you gotta live
                  &apos;em. Gangs, fixers, dolls, small-time pushers - you were
                  raised by them all. Down here the law of the jungle dictates
                  the weak serve the strong - the only law in Night City you
                  have yet to break
                </p>
              </Grid>
              <Grid md={4} xs={12}>
                <div className="item-2">
                  <img src="/image/home/echoes.png" width="200px" />
                </div>
                <div className="item-2 pTop">
                  <img src="/image/home/echoes-logo.png" width="40px" />
                </div>
                <h2>Echoes</h2>
                <p style={{paddingLeft:"20%",paddingRight:"20%"}}>
                  Roaming the Badlands, looting scrapyards, raiding fuel depots
                  - life on the road wasn&apos;t easy. But growing up in a nomad clan
                  has its perks. Honesty, integrity, and a love of freedom -
                  qualities that few in Night City possess, and no amount of
                  money can buy.
                </p>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div style={{textAligh:"center", paddingBottom:"10%"}}>
          <h1>Journey through the universe on the Bastion</h1>
        </div>
      </div>
    </AnimatedPage>
  );
}

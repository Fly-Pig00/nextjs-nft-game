import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Grid from "@mui/material/Unstable_Grid2";

import AnimatedPage from "../components/AnimatedPage";
import { motion as m } from "framer-motion";
import { Howl } from "howler";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [paragon, setParagon] = useState("display-none");
  const [vanguard, setVanguard] = useState("display-none");
  const [echoes, setEchoes] = useState("display-none");

  const paragonHoverCard = (isVisible) => {
    hover.play();
    isVisible ? setParagon("display-show") : setParagon("display-none");
  };

  const paragonLeaveCard = (isVisible) => {
    isVisible ? setParagon("display-none") : setParagon("display-show");
    hover.play();
  };

  const vanguardHoverCard = (isVisible) => {
    hover.play();
    isVisible ? setVanguard("display-show") : setVanguard("display-none");
  };

  const vanguardLeaveCard = (isVisible) => {
    isVisible ? setVanguard("display-none") : setVanguard("display-show");
    hover.play();
  };

  const echoesHoverCard = (isVisible) => {
    hover.play();
    isVisible ? setEchoes("display-show") : setEchoes("display-none");
  };

  const echoesLeaveCard = (isVisible) => {
    isVisible ? setEchoes("display-none") : setEchoes("display-show");
    hover.play();
  };

  const transition = new Howl({
    src: "./sound/transition.mp3",
  });

  useEffect(() => {
    transition.play();
  }, []);
  const hover = new Howl({
    src: "./sound/hover_button.ogg",
  });

  return (
    <AnimatedPage>
      <div className="faction-container">
        <Head>
          <title>Prime Nine - Faction</title>
          <meta name="description" content="Prime Nine" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="faction-page"
        >
          <div className="header faction-header">
            <h1>Pick your faction</h1>
            <img src="/image/div.svg" className="divider" />
            <h4 className="faction-intro">Welcome, vestige, to the Bastion: the eternal crucible of the fallen. Here are gathered the remnants of a thousand worlds, where a relative peace is kept by the three great factions formed centuries ago.</h4>
            <h3>Select your side</h3>
          </div>
          <Grid container spacing={2} style={{margin: '0px'}}>
            <Grid xs={12} md={4}>
              <div
                onMouseEnter={paragonHoverCard}
                onMouseLeave={paragonLeaveCard}
              >
                <div className="faction-card">
                  <Link href="/questionaire?id=1">
                    <img src="/image/paragons.png" />
                  </Link>
                  <h2>Paragons</h2>
                  <p className={paragon}>
                    The oldest and noblest faction in the Bastion. They hold positions 
                    of high power in politics and military command, and tend to carry 
                    themselves accordingly. To common eyes, they are seen as the righteous 
                    elite, but there is a darkness beneath all of that polish.
                  </p>
                </div>
              </div>
            </Grid>

            <Grid xs={12} md={4}>
              <div
                onMouseEnter={vanguardHoverCard}
                onMouseLeave={vanguardLeaveCard}
              >
                <div className="faction-card">
                  <Link href="/questionaire?id=2">
                    <img src="/image/vanguards.png" />
                  </Link>
                  <h2>Vanguards</h2>
                  <p className={vanguard}>
                    Those who had to pave their own way to becoming nobles, not through some nonsense 
                    birthright. To the outsider, their ways are seen as the way of thieves, cutthroats, 
                    and blackmailers, but on the inside... it&apos;s pretty much the same. Their ways are 
                    essential to maintaining balance.
                  </p>
                </div>
              </div>
            </Grid>

            <Grid xs={12} md={4}>
              <div
                onMouseEnter={echoesHoverCard}
                onMouseLeave={echoesLeaveCard}
              >
                <div className="faction-card">
                  <Link href="/questionaire?id=3">
                    <img src="/image/echoes.png" />
                  </Link>
                  <h2>Echoes</h2>
                  <p className={echoes}>
                    Refugees from fallen worlds who proved remarkably valuable to the Bastion. 
                    Equipped with diverse culture and advanced technology, the Echoes have managed 
                    to equate themselves to the noble houses of Paragons and Vanguard, all while 
                    retaining their own individuality and identity.
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <div style={{height: '120px'}}></div>

        <div className="skip">
          <h2>Skip</h2>
          <Link href="/home">
            <img src="/image/right_arrow.png" />
          </Link>
        </div>
      </div>
    </AnimatedPage>
  );
}

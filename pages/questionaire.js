import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Grid from "@mui/material/Unstable_Grid2";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";

import AnimatedPage from "../components/AnimatedPage";
import { motion as m } from "framer-motion";
import { Howl } from "howler";

import React, { useState, useEffect } from "react";

const questions = [
  [
    'Narrator: In front of you stands a regal man with shoulder length auburn hair and black eyes. Count Wenham was your instructor at the academy before your graduation, and now he stands before you to determine your future in the Bastion.',
    `"You think you have what it takes to make it out there, young one? A Paragon's life is full of making difficult choices. Make these next choices wisely. Tell me, who would you sacrifice yourself for if you could only save one?"`,
    'Your Closest Friend Or Comrade.',
    'A member of your immediate family.',
    'A council member of the Prime Nine.',
    'None of them. I am the most important.'
  ]
];

export default function Home() {
  const transition = new Howl({
    src: "./sound/transition.mp3",
  });

  useEffect(() => {
    transition.play();
  }, []);

  return (
    <AnimatedPage>
      <div className="">
        <Head>
          <title>Prime Nine - Questionaire</title>
          <meta name="description" content="Prime Nine" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="question-page"
        >
          <Grid container spacing={2}>
            <Grid xs={12}>
              <div className="question-card">
                <div className="question-intro">
                  <div className="question-picture">
                    <Badge color="primary" badgeContent="!" className="badge">
                      <img
                        src="/image/echoes-picture.png"
                        className="faction-picture"
                      />
                    </Badge>
                  </div>
                  <img src="/image/div2.svg" className="question-divider" />
                  <h1>Find my faction</h1>
                  <p>
                    Narrator: In front of you stands a regal man with shoulder length auburn hair
                    and black eyes. Count Wenham was your instructor at the academy before your
                    graduation, and now he stands before you to determine your future in the Bastion.
                  </p>
                  <p>"You think you have what it takes to make it out there, young one? A Paragon's
                    life is full of making difficult choices. Make these next choices wisely.
                    Tell me, who would you sacrifice yourself for if you could only save one?"
                  </p>
                </div>

                <div className="logo-intro">
                  <img src="/image/logo-brown.svg" width="200px" />
                </div>

                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  className="question-container"
                >
                  <Grid xs={5} className="question-answer-left">
                    <div className="question-answer-img">
                      <Link href="/signed">
                        <img src="/image/a.svg" />
                      </Link>
                    </div>
                    <div className="question-answer-content">
                      Your closest friend or comrade.
                    </div>
                  </Grid>

                  <Grid xs={2} className="question-number">
                    <img src="/image/2.svg" />
                  </Grid>

                  <Grid xs={5} className="question-answer-right">
                    <div className="question-answer-content">
                      Your closest friend or comrade.
                    </div>
                    <div className="question-answer-img">
                      <Link href="/signed">
                        <img src="/image/B.svg" />
                      </Link>
                    </div>
                  </Grid>
                </Grid>

                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  className="question-container question-container2"
                >
                  <Grid xs={5} className="question-answer-left">
                    <div className="question-answer-img">
                      <Link href="/signed">
                        <img src="/image/c.svg" />
                      </Link>
                    </div>
                    <div className="question-answer-content">
                      A council member of the Prime Nine.
                    </div>
                  </Grid>

                  <Grid xs={2} className="question-number"></Grid>

                  <Grid xs={5} className="question-answer-right">
                    <div className="question-answer-content">
                      None of them. I am the most important.
                    </div>
                    <div className="question-answer-img">
                      <Link href="/signed">
                        <img src="/image/d.svg" />
                      </Link>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="bullets"
        >
          <Grid container spacing={2}>
            <Grid xs={3}>
              <img src="/image/point.svg" width="30px" />
            </Grid>
            <Grid xs={3}>
              <img src="/image/point-active.svg" width="30px" />
            </Grid>
            <Grid xs={3}>
              <img src="/image/point.svg" width="30px" />
            </Grid>
            <Grid xs={3}>
              <img src="/image/point.svg" width="30px" />
            </Grid>
          </Grid>
        </Grid>

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

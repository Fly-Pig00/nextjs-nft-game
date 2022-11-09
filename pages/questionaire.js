import Head from "next/head";
import Link from "next/link";

import Grid from "@mui/material/Unstable_Grid2";

import AnimatedPage from "../components/AnimatedPage";
import { Howl } from "howler";

import React, { useState, useEffect } from "react";
import questionData from "./question.json";
import { useRouter } from "next/router";
import QuestionCard from "../components/QuestionCard";
import ContinueCard from "../components/ContinueCard";
import NarratorCard from "../components/NarratorCard";
import ResultCard from "../components/ResultCard";

export default function Home() {
  const [step, setStep] = useState(0);
  const [page, setPage] = useState(1);
  const [result, setResult] = useState({
    n: 0,
    w: 0,
    r: 0,
  });
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const { id } = router.query;

  const transition = new Howl({
    src: "./sound/transition.mp3",
  });
  const data = questionData[id];
  console.log(data);

  useEffect(() => {
    transition.play();
  }, []);

  return (
    <AnimatedPage>
      <div>
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
              {page == 2 && (
                <QuestionCard
                  data={data}
                  step={step}
                  setPage={setPage}
                  setIndex={setIndex}
                  result={result}
                  setResult={setResult}
                  id={id}
                />
              )}
              {page == 1 && (
                <NarratorCard data={data} step={step} setPage={setPage} id={id} />
              )}
              {page == 3 && (
                <ContinueCard
                  data={data}
                  step={step}
                  index={index}
                  setPage={setPage}
                  setStep={setStep}
                  result={result}
                  id={id}
                />
              )}
              {page == 4 && (
                <ResultCard data={data} id={id} />
              )}
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
              <img
                src={step == 0 ? "/image/point-active.svg" : "/image/point.svg"}
                width="30px"
              />
            </Grid>
            <Grid xs={3}>
              <img
                src={step == 1 ? "/image/point-active.svg" : "/image/point.svg"}
                width="30px"
              />
            </Grid>
            <Grid xs={3}>
              <img
                src={step == 2 ? "/image/point-active.svg" : "/image/point.svg"}
                width="30px"
              />
            </Grid>
            <Grid xs={3}>
              <img
                src={step == 3 ? "/image/point-active.svg" : "/image/point.svg"}
                width="30px"
              />
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

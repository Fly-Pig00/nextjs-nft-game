import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AnimatedPage from "../components/AnimatedPage";
import Grid from "@mui/material/Unstable_Grid2";
import Header from "../components/header";
import { useEffect, useState } from "react";

export default function Rewards() {
  const [items, setItems] = useState([]);
  // const [visibleItems, setVisibleItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    let array = [];
    for (let i = 1; i <= 115; i++) {
      array.push(i);
    }
    setItems(array);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    }
  }, []);

  const resize = () => {
    if(window.innerWidth >= 1088) {
      setPerPage(10);
      setPage(1);
    } else if(window.innerWidth >= 760) {
      setPerPage(6);
      setPage(1);
    } else if(window.innerWidth >= 400) {
      setPerPage(3);
      setPage(1);
    }
  }

  const forward = () => {
    if(page * perPage >= items.length) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  }

  const back = () => {
    if(page === 1) {
      setPage(Math.floor((items.length - 1) / perPage) + 1);
    } else {
      setPage(page - 1);
    }
  }

  const visibleItems = () => {
    let first = (page - 1) * perPage;
    let last = Math.min((page * perPage), items.length);
    return items.slice(first, last);
  }

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
          direction="column"
          justifyContent="center"
          alignItems="center"
          className="rewards-page"
        >
          <Grid xs={12}>
            <div className="header">
              <h1>Rewards</h1>
              <img src="/image/div.svg" class="divider"></img>
              <h3>You are level <span className="rewards-num">3</span></h3>
              <img src="image/items/sickle.png" alt="sickle" width="200px" />
              <div className="rewards-sickle">
                <h2>sickle</h2>
              </div>
            </div>
          </Grid>
          <Grid className="rewards-scores" container>
            <Grid container xs={12}>
              <Grid xs={3}><h3>COMBAT</h3></Grid>
              <Grid xs={6} />
              <Grid xs={3}><h3 className="rewards-num">12,000</h3></Grid>
            </Grid>
            <Grid container xs={12}>
              <Grid xs={3}><h3>OFFENCE</h3></Grid>
              <Grid xs={6} />
              <Grid xs={3}><h3 className="rewards-num">4,700</h3></Grid>
            </Grid>
            <Grid container xs={12}>
              <Grid xs={3}><h3>DEFENCE</h3></Grid>
              <Grid xs={6} />
              <Grid xs={3}><h3 className="rewards-num">3,200</h3></Grid>
            </Grid>
          </Grid>
          <div className="items">
            <img src="/image/back-arrow.png" className="arrow" onClick={back}/>
            {visibleItems().map((item, idx) => (
              <div className="inventory" key={idx}>
                <img src={`/image/items/${item}.png`} />
                <h5><span>+3</span></h5>
                <h5><div>{item}</div></h5>
              </div>
            ))}
            <img src="/image/forward-arrow.png" className="arrow" onClick={forward}/>
          </div>
        </Grid>
      </div>
    </AnimatedPage>
  );
}

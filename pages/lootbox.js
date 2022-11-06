import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Grid from "@mui/material/Unstable_Grid2";
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from "../components/header";
import LootboxCarousel from "../components/lootboxcarousel";
import AnimatedPage from "../components/AnimatedPage";
import { useState, useEffect } from "react";

export default function Home() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    let array = [];
    for (let i = 1; i <= 9; i++) {
      array.push(i);
    }
    setItems(array);
  }, []);

  const isBigScreen  = useMediaQuery('(min-width:1088px)');
  const isMediumScreen  = useMediaQuery('(min-width:760px)');
  const isSmallScreen = useMediaQuery('(min-width:400px)');

  useEffect(() => {
    if (isBigScreen) {
      setPerPage(10);
      setPage(1);
    } else if (isMediumScreen) {
      setPerPage(6);
      setPage(1);
    } else if (isSmallScreen) {
      setPerPage(3);
      setPage(1);
    }
  }, [isBigScreen, isMediumScreen, isSmallScreen]);

  const forward = () => {
    if (page * perPage >= items.length) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  }

  const back = () => {
    if (page === 1) {
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
          <title>Prime Nine - Loot Box</title>
          <meta name="description" content="Prime Nine" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="lootbox-page"
        >
          <Grid container spacing={2}>
            <Grid className="lootbox-all" xs={12}>
              <div className="header">
                <h1>Loot Box</h1>
                <img src="/image/div.svg" className="divider" />
                <h3>Available (5)</h3>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="lootbox-page"
        >
          <Grid container spacing={2}>
            <Grid className="lootbox" xs={12}>
              <img src="/image/lootbox.png" width="260px" />
              <div className="lootbox-button">
                <h2>Wood crate</h2>
                <div className="button2 big-button">Open</div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="lootbox-page"
        >
          <Grid container spacing={2}>
            <Grid className="lootbox-all" xs={12}>
              <div className="header">
                <img src="/image/back-arrow.png" className="arrow" style={{ width: '60px', paddingBottom: "5px" }} />
                {visibleItems().map((item, idx) => (
                  <img src={`/image/loot/${item}.png`} key={idx} className="loot-inventory" />
                ))}
                <img src="/image/forward-arrow.png" className="arrow" style={{ width: '70px', paddingLeft: "10px", paddingBottom: "5px" }} />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </AnimatedPage>
  );
}

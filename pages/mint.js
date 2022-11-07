import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Grid from "@mui/material/Unstable_Grid2";

import Header from "../components/header";
import LootboxCarousel from "../components/lootboxcarousel";
import AnimatedPage from "../components/AnimatedPage";
export default function Home() {
  return (
    <AnimatedPage>
      <Header />
      <div className="container">
        <Head>
          <title>Prime Nine - Mint</title>
          <meta name="description" content="Prime Nine" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid container spacing={2}>
            <Grid className="mint-all" xs={12}>
              <div className="header">
                <h1>Mint</h1>
                <img src="/image/div.svg" className="divider" />
                <h3>Currencies (7)</h3>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <div className="mint-container">
          <div className="mint-item">
            <img src="/image/mint/ethereum.png" width="120px" />
            <h2>Ethereum</h2>
            <p className="mint-info">12%</p>
          </div>
          <div className="mint-item">
            <img src="/image/mint/polygon.png" width="120px" />
            <h2>Polygon</h2>
            <p className="mint-info">46%</p>
          </div>
          <div className="mint-item">
            <img src="/image/mint/binance.png" width="120px" />
            <h2>Binance</h2>
            <p className="mint-info">58%</p>
          </div>
          <div className="mint-item">
            <img src="/image/mint/avalance.png" width="120px" />
            <h2>Avalance</h2>
            <p className="mint-info">83%</p>
          </div>
          <div className="mint-item">
            <img src="/image/mint/arbitmrum.png" width="120px" />
            <h2>Arbitmrum</h2>
            <p className="mint-info">91%</p>
          </div>
          <div className="mint-item">
            <img src="/image/mint/optimisim.png" width="120px" />
            <h2>Optimisim</h2>
            <p className="mint-info">15%</p>
          </div>
          <div className="mint-item">
            <img src="/image/mint/milkomeda.png" width="120px" />
            <h2>Milkomeda</h2>
            <p className="mint-info">63%</p>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

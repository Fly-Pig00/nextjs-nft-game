import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Header from "../components/header";
import AnimatedPage from "../components/AnimatedPage";
export default function Store() {
  const [selected, setSelected] = useState(0);

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
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          className="store-page"
        >
          <Grid xs={12}>
            <div className="header">
              <h1>store</h1>
              <img src="/image/div.svg" class="divider"></img>
              <h3>Choose your inventory</h3>
              <div className="header-item">
                <h2>featured</h2>
                <img
                  src="/image/store/helmet.svg"
                  className="featured-item"
                  onClick={() => {
                    setSelected(1);
                  }}
                />
                <img
                  src="/image/store/crown.svg"
                  className="featured-item"
                  onClick={() => {
                    setSelected(2);
                  }}
                />
                <img
                  src="/image/store/lootbox.svg"
                  className="featured-item"
                  onClick={() => {
                    setSelected(3);
                  }}
                />
                <img
                  src="/image/store/bag.svg"
                  className="featured-item"
                  onClick={() => {
                    setSelected(4);
                  }}
                />
                <img
                  src="/image/store/spark.svg"
                  className="featured-item"
                  onClick={() => {
                    setSelected(5);
                  }}
                />
              </div>
              <img
                width="500px"
                className="divider2"
                src="image/store/store-sidebar.png"
              />
            </div>
          </Grid>
          <Grid container className="store-items">
            {!(selected == 3) ? (
              <div className="store-item">
                <img className="img" src="image/items/55.png" />
                <h2>sickle</h2>
                <h3>Earn them by creating topics in the community forums.</h3>
                <div className="jew_container">
                  <img className="jew" src="image/items/102.png" />
                  <span className="jew_num">7033</span>
                </div>
              </div>
            ) : (
              ""
            )}
            {!(selected == 1) ? (
              <div className="store-item">
                <img className="img" src="image/items/64.png" />
                <h2>Armour</h2>
                <h3>Earn them by creating topics in the community forums.</h3>
                <div className="jew_container">
                  <img className="jew" src="image/items/102.png" />
                  <span className="jew_num">7033</span>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="store-item">
              <img className="img" src="image/items/81.png" />
              <h2>charm</h2>
              <h3>Earn them by creating topics in the community forums.</h3>
              <div className="jew_container">
                <img className="jew" src="image/items/102.png" />
                <span className="jew_num">7033</span>
              </div>
            </div>
            {!(selected == 4) ? (
              <div className="store-item">
                <img className="img" src="image/items/72.png" />
                <h2>dagger</h2>
                <h3>Earn them by creating topics in the community forums.</h3>
                <div className="jew_container">
                  <img className="jew" src="image/items/102.png" />
                  <span className="jew_num">7033</span>
                </div>
              </div>
            ) : (
              ""
            )}
            {!(selected == 4) ? (
            <div className="store-item">
              <img className="img" src="image/items/59.png" />
              <h2>bow</h2>
              <h3>Earn them by creating topics in the community forums.</h3>
              <div className="jew_container">
                <img className="jew" src="image/items/102.png" />
                <span className="jew_num">7033</span>
              </div>
            </div>
			) : (
              ""
            )}
            <div className="store-item">
              <img className="img" src="image/items/7.png" />
              <h2>necklace</h2>
              <h3>Earn them by creating topics in the community forums.</h3>
              <div className="jew_container">
                <img className="jew" src="image/items/102.png" />
                <span className="jew_num">7033</span>
              </div>
            </div>

            <div className="store-item">
              <img className="img" src="image/items/25.png" />
              <h2>boots</h2>
              <h3>Earn them by creating topics in the community forums.</h3>
              <div className="jew_container">
                <img className="jew" src="image/items/102.png" />
                <span className="jew_num">7033</span>
              </div>
            </div>

            <div className="store-item">
              <img className="img" src="image/items/28.png" />
              <h2>sword</h2>
              <h3>Earn them by creating topics in the community forums.</h3>
              <div className="jew_container">
                <img className="jew" src="image/items/102.png" />
                <span className="jew_num">7033</span>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </AnimatedPage>
  );
}

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Header from "../components/header";
import AnimatedPage from "../components/AnimatedPage";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

const data = [
  [
    {
      name: "sickle",
      url: "image/items/55.png",
      description: "Earn them by creating topics in the community forums.",
    },
    {
      name: "Armour",
      url: "image/items/64.png",
      description: "Earn them by creating topics in the community forums.",
    },
  ],
  [
    {
      name: "charm",
      url: "image/items/81.png",
      description: "Earn them by creating topics in the community forums.",
    },
    {
      name: "dagger",
      url: "image/items/72.png",
      description: "Earn them by creating topics in the community forums.",
    },
    {
      name: "bow",
      url: "image/items/59.png",
      description: "Earn them by creating topics in the community forums.",
    },
  ],
  [
    {
      name: "charm",
      url: "image/items/81.png",
      description: "Earn them by creating topics in the community forums.",
    },
    {
      name: "Armour",
      url: "image/items/64.png",
      description: "Earn them by creating topics in the community forums.",
    },
    {
      name: "bow",
      url: "image/items/59.png",
      description: "Earn them by creating topics in the community forums.",
    },
    {
      name: "necklace",
      url: "image/items/7.png",
      description: "Earn them by creating topics in the community forums.",
    },
    {
      name: "boots",
      url: "image/items/25.png",
      description: "Earn them by creating topics in the community forums.",
    },
    {
      name: "sword",
      url: "image/items/28.png",
      description: "Earn them by creating topics in the community forums.",
    },
  ],
  [
    {
      name: "charm",
      url: "image/items/81.png",
      description: "Earn them by creating topics in the community forums.",
    },
    {
      name: "Armour",
      url: "image/items/64.png",
      description: "Earn them by creating topics in the community forums.",
    },
    {
      name: "bow",
      url: "image/items/59.png",
      description: "Earn them by creating topics in the community forums.",
    },
    {
      name: "sword",
      url: "image/items/28.png",
      description: "Earn them by creating topics in the community forums.",
    },
  ],
  [
    {
      name: "Armour",
      url: "image/items/64.png",
      description: "Earn them by creating topics in the community forums.",
    },
    {
      name: "necklace",
      url: "image/items/7.png",
      description: "Earn them by creating topics in the community forums.",
    },
    {
      name: "sword",
      url: "image/items/28.png",
      description: "Earn them by creating topics in the community forums.",
    },
  ],
];
export default function Store() {
  const [value, setValue] = useState(0);
  console.log(data[value]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="secondary"
                  aria-label="wrapped label tabs example"
                >
                  <Tab
                    icon={
                      <img
                        src="/image/store/helmet.svg"
                        className="featured-item"
                      />
                    }
                  ></Tab>
                  <Tab
                    icon={
                      <img
                        src="/image/store/crown.svg"
                        className="featured-item"
                      />
                    }
                  />
                  <Tab
                    icon={
                      <img
                        src="/image/store/lootbox.svg"
                        className="featured-item"
                      />
                    }
                  />
                  <Tab
                    icon={
                      <img
                        src="/image/store/bag.svg"
                        className="featured-item"
                      />
                    }
                  />
                  <Tab
                    icon={
                      <img
                        src="/image/store/spark.svg"
                        className="featured-item"
                      />
                    }
                  />
                </Tabs>
              </div>
              <img
                width="500px"
                className="divider2"
                src="image/store/store-sidebar.png"
              />
            </div>
          </Grid>
          <Grid container className="store-items">
            {data[value].map((item) => {
              return (
                <div className="store-item" key={item.url}>
                  <img className="img" src={item.url} />
                  <h2>{item.name}</h2>
                  <h3>{item.description}</h3>
                  <div className="jew_container">
                    <img className="jew" src="image/items/102.png" />
                    <span className="jew_num">7033</span>
                  </div>
                </div>
              );
            })}
          </Grid>
        </Grid>
      </div>
    </AnimatedPage>
  );
}

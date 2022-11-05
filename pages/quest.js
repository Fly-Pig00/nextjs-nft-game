import Head from "next/head";
import Link from "next/link";

import Grid from "@mui/material/Unstable_Grid2";
import Header from "../components/header";

export default function Quest() {
    return (
        <>
            <Header />
            <div className="container">
                <Head>
                    <title>Prime Nine - QUEST</title>
                    <meta name="description" content="Prime Nine" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    className="quest-page"
                >
                    <Grid xs={12}>
                        <div className="header">
                            <h1>quest</h1>
                            <img src="/image/div.svg" className="divider"></img>
                            <h3>Available ( 8 )</h3>
                            <div>
                                <a className="daily active">DAILY</a>
                                <a className="weekly passive">WEEKLY</a>
                            </div>
                            <img width="320px" className="divider2" src="image/div.png" />
                        </div>
                    </Grid>
                    <Grid container className="store-items" >
                        <div className="store-item">
                            <img className="img" src="image/items/40.png" />
                            <h2>sickle</h2>
                            <h3>Earn them by creating topics in the community forums.</h3>
                            <img width="20px" src="image/badge.svg" />
                            <h4>320/500</h4>
                            <span class="badge css-106c1u2-MuiBadge-badge">+ 10 xp</span>
                        </div>
                        <div className="store-item">
                            <img className="img" src="image/items/52.png" />
                            <h2>Armour</h2>
                            <h3>Earn them by creating topics in the community forums.</h3>
                            <img width="20px" src="image/badge.svg" />
                            <h4>320/500</h4>
                            <span class="badge css-106c1u2-MuiBadge-badge">+ 10 xp</span>
                        </div>
                        <div className="store-item">
                            <img className="img" src="image/items/76.png" />
                            <h2>charm</h2>
                            <h3>Earn them by creating topics in the community forums.</h3>
                            <img width="20px" src="image/badge.svg" />
                            <h4>320/500</h4>
                            <span class="badge css-106c1u2-MuiBadge-badge">+ 10 xp</span>
                        </div>
                        <div className="store-item">
                            <img className="img" src="image/items/84.png" />
                            <h2>dagger</h2>
                            <h3>Earn them by creating topics in the community forums.</h3>
                            <img width="20px" src="image/badge.svg" />
                            <h4>320/500</h4>
                            <span class="badge css-106c1u2-MuiBadge-badge">+ 10 xp</span>
                        </div>
                        <div className="store-item">
                            <img className="img" src="image/items/35.png" />
                            <h2>bow</h2>
                            <h3>Earn them by creating topics in the community forums.</h3>
                            <img width="20px" src="image/badge.svg" />
                            <h4>320/500</h4>
                            <span class="badge css-106c1u2-MuiBadge-badge">+ 10 xp</span>
                        </div>
                        <div className="store-item">
                            <img className="img" src="image/items/45.png" />
                            <h2>necklace</h2>
                            <h3>Earn them by creating topics in the community forums.</h3>
                            <img width="20px" src="image/badge.svg" />
                            <h4>320/500</h4>
                            <span class="badge css-106c1u2-MuiBadge-badge">+ 10 xp</span>
                        </div>
                        <div className="store-item">
                            <img className="img" src="image/items/23.png" />
                            <h2>boots</h2>
                            <h3>Earn them by creating topics in the community forums.</h3>
                            <img width="20px" src="image/badge.svg" />
                            <h4>320/500</h4>
                            <span class="badge css-106c1u2-MuiBadge-badge">+ 10 xp</span>
                        </div>
                        <div className="store-item">
                            <img className="img" src="image/items/47.png" />
                            <h2>sword</h2>
                            <h3>Earn them by creating topics in the community forums.</h3>
                            <img width="20px" src="image/badge.svg" />
                            <h4>320/500</h4>
                            <span class="badge css-106c1u2-MuiBadge-badge">+ 10 xp</span>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

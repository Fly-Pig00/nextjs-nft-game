import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AnimatedPage from "../components/AnimatedPage";
import Grid from "@mui/material/Unstable_Grid2";
import Header from "../components/header";

export default function Team() {
  return (
    <AnimatedPage>
      <Header />
      <div className="container">
        <Head>
          <title>Prime Nine - Team</title>
          <meta name="description" content="Prime Nine" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          className="team-page"
        >
          <Grid className="team-container" container xs={12}>
            <Grid xs={6} container className="team-members">
              <div className="team-member">
                <div className="team-member-avatar">
                  <img src="/image/member/1.png" width={180}></img>
                  <div className="team-member-bar">
                    <h2>founder/developer</h2>
                  </div>
                </div>
                <h2>victor</h2>
              </div>
              <div className="team-member">
                <div className="team-member-avatar">
                  <img src="/image/member/2.png" width={180}></img>
                  <div className="team-member-bar">
                    <h2>founder/marketing</h2>
                  </div>
                </div>
                <h2>sebustion</h2>
              </div>
              <div className="team-member">
                <div className="team-member-avatar">
                  <img src="/image/member/3.png" width={180}></img>
                  <div className="team-member-bar">
                    <h2>founder/builder</h2>
                  </div>
                </div>
                <h2>manoj</h2>
              </div>
              <div className="team-member">
                <div className="team-member-avatar">
                  <img src="/image/member/1.png" width={180}></img>
                  <div className="team-member-bar">
                    <h2>illustrator</h2>
                  </div>
                </div>
                <h2>gab</h2>
              </div>
              <div className="team-member-num">
                <h1>+15</h1>
                <h2>more team members working on the game</h2>
              </div>
            </Grid>
            <Grid xs={6}>
              <div className="header">
                <h2>our core team</h2>
                <img src="/image/div.svg" className="divider"></img>
              </div>
              <p>
                Prime Nine the point of using Lpsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here. making it look like readable English, Many desktop pushlishing packages and web page editors now.
              </p>
              <p>
                Contray to popular belief, Lorem lpsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, alatin professor at Hampden-Sydney Colledge in Virgina. looked up one of the more obscure Latin words, consectetur, from a Lorem lpsum passage and going throught the cities of the world in classical literrature, discovered the undoubtable source. Lorem lpsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum
              </p>
              <img src="/image/prime-nine_mark.svg" width={50}></img>
              <h2>- prime nine</h2>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </AnimatedPage>
  );
}

import Head from "next/head";
import Image from "next/image";
import Grid from "@mui/material/Unstable_Grid2";
import Header from "../components/header";
import AnimatedPage from "../components/AnimatedPage";
export default function Vault() {
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
					justifyContent="flex-start"
					alignItems="center"
					className="vault-page"
				>
					<Grid xs={12}>
						<div className="header">
							<h1>Vault</h1>
							<Image src="/image/div.svg" height={5} width={400} alt="divider" className="divider" />
							<h2>unlocks in 22:13:18</h2>
							<Image src="/image/lootbox.png" width={350} height={350} alt="lootbox" className="lootbox" />
						</div>
					</Grid>
					<div className="progress-container">
						<h3>Time Left</h3>
						<h3 className="float-right">35 HRS</h3>
						<div className="progressbar">
							<div className="progress"></div>
						</div>
						<h4 className="progress-value float-right">63<span>%</span></h4>
						<h4 className="progress-value">1300 / 2000</h4>
					</div>
				</Grid>
			</div>
		</AnimatedPage>
	);
}

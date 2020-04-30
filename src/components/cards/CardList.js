import React, { useContext } from "react";
import { CovidContext } from "../../contexts/CovidContextProvider";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import "./CardList.scss";
import CountUp from "react-countup";
// import cx from "classnames"

const CardList = () => {
	const {
		data: { confirmed, recovered, deaths, lastUpdate },
	} = useContext(CovidContext);

	if (!confirmed) {
		return "Loading...";
	}

	return (
		<div className="card-container">
			<Grid container spacing={3} justify="center">
				<Grid item component={Card} xs={12} md={3} className="card infected">
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Infected
						</Typography>
						<Typography varaint="h5">
							<CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
						</Typography>
						<Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
						<Typography variant="body2"> Number of active case of COVID-19</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className="card recovered">
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Recoverd
						</Typography>
						<Typography varaint="h5">
							<CountUp start={0} end={recovered.value} duration={2.5} separator="," />
						</Typography>
						<Typography color="textSecondary"> REAL DATE</Typography>
						<Typography variant="body2"> Number of recoveries from COVID-19</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className="card deaths">
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Infected
						</Typography>
						<Typography varaint="h5">DEATH</Typography>
						<Typography varaint="h5">
							<CountUp start={0} end={deaths.value} duration={2.5} separator="," />
						</Typography>
						<Typography variant="body2"> Number deaths caused by COVID-19</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
};

export default CardList;

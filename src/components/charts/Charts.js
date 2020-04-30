import React, { useContext } from "react";
import { Line, Bar } from "react-chartjs-2";
import "./Charts.scss";
import { CovidContext } from "../../contexts/CovidContextProvider";

const Charts = () => {
	const {
		data: { confirmed, recovered, deaths },
		dailyData,
		country,
	} = useContext(CovidContext);

	const lineChart = dailyData.length !== 0 && (
		<Line
			data={{
				labels: dailyData.map(({ date }) => date),
				datasets: [
					{
						data: dailyData.map(({ confirmed }) => confirmed),
						label: "Infected",
						borderColor: "#3333ff",
						fill: true,
					},
					{
						data: dailyData.map(({ deaths }) => deaths),
						label: "Deaths",
						borderColor: "red",
						backgroundColor: "rgba(255,0,0,0.5)",
						fill: true,
					},
				],
			}}
		/>
	);

	console.log(confirmed, recovered, deaths);

	const barChart = confirmed && (
		<Bar
			data={{
				labels: ["Infected", "Recovered", "Deaths"],
				datasets: [
					{
						label: "People",
						backgroundColor: ["rgba(0, 0, 255, 0.5)", "rgba(0, 255, 0, 0.5)", "rgba(255, 0, 0, 0.5)"],
						data: [confirmed.value, recovered.value, deaths.value],
					},
				],
			}}
			options={{ legend: { display: false }, title: { display: true, text: `Current state is ${country}` } }}
		/>
	);

	return <div className="chart-container">{country && country !== "global" ? barChart : lineChart}</div>;
};

export default Charts;

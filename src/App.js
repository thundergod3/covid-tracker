import React from "react";
import CardList from "./components/cards/CardList";
import Charts from "./components/charts/Charts";
import CountryPicker from "./components/countryPicker/CountryPicker";
import "./App.scss";
import coronaImage from "./images/image.png";

const App = () => {
	return (
		<div className="app-container">
			<img src={coronaImage} alt="" className="corona-image" alt="COVID-19" />
			<CardList />
			<CountryPicker />
			<Charts />
		</div>
	);
};

export default App;

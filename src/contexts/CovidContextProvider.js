import React, { createContext, useEffect, useState } from "react";
import { fetchData, fetchDailyDate, fetchCountries } from "../api/covidApi";

const CovidContext = createContext();

const CovidContextProvider = ({ children }) => {
	const [state, setState] = useState({
		data: {},
		dailyData: [],
		countries: [],
		country: "",
	});

	const getData = async () => {
		const data = await fetchData();
		setState((prevState) => {
			return { ...prevState, data };
		});
	};

	const getDailyData = async () => {
		const dailyData = await fetchDailyDate();
		console.log(dailyData);
		setState((prevState) => {
			return { ...prevState, dailyData };
		});
	};

	const getCountries = async () => {
		const countries = await fetchCountries();
		setState((prevState) => {
			return { ...prevState, countries };
		});
	};

	const handleChangeCountry = async (countrySelect) => {
		const countryData = await fetchData(countrySelect);
		setState((prevState) => {
			return { ...prevState, data: countryData, country: countrySelect };
		});
	};

	useEffect(async () => {
		getData();
		getDailyData();
		getCountries();
	}, []);

	return <CovidContext.Provider value={{ ...state, handleChangeCountry }}>{children}</CovidContext.Provider>;
};

export { CovidContextProvider, CovidContext };

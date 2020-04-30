import axios from "axios";

const baseUrl = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
	let changeUrl = baseUrl;

	if (country && country !== "global") {
		changeUrl = `${baseUrl}/countries/${country}`;
	}

	try {
		const {
			data: { confirmed, recovered, deaths, lastUpdate },
		} = await axios.get(changeUrl);
		return {
			confirmed,
			recovered,
			deaths,
			lastUpdate,
		};
	} catch (error) {
		console.log(error);
	}
};

export const fetchDailyDate = async () => {
	try {
		const { data } = await axios.get(`${baseUrl}/daily`);
		const modified = data.map((dailyData) => ({
			confirmed: dailyData.confirmed.total,
			deaths: dailyData.deaths.total,
			date: dailyData.reportDate,
		}));
		return modified;
	} catch (error) {}
};

export const fetchCountries = async () => {
	try {
		const {
			data: { countries },
		} = await axios.get(`${baseUrl}/countries`);
		return countries.map((country) => country.name);
	} catch (error) {
		console.log(error);
	}
};

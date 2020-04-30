import React, { useContext } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { CovidContext } from "../../contexts/CovidContextProvider";
import "./CountryPicker.scss";

const CountryPicker = () => {
	const { countries, handleChangeCountry } = useContext(CovidContext);
	return (
		<FormControl className="form-control">
			<NativeSelect defaultValue="" onClick={(e) => handleChangeCountry(e.target.value)}>
				<option value="global">Global</option>
				{countries.map((country, index) => (
					<option key={index} value={country}>
						{country}
					</option>
				))}
			</NativeSelect>
		</FormControl>
	);
};

export default CountryPicker;

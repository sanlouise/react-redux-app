const API_KEY = 'af00aa57f434ec0b68224498ecbb55ed';
const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//We do this because we need the use the identical name in our reducer.
//Helps against typo problems, great for consistency.
//It is convention to have a variable that holds an action type.
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
	return {
		type: FETCH_WEATHER
	};
}


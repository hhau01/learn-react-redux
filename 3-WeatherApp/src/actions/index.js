import axios from 'axios';

const API_KEY = '2934389bfbddfe64956847242e4e1899';
const ROOT_URL = `http://api.openweatherapp.org/data/2.5/forecast?appid=${API_KEY}`;

// so FETCH_WEATHER stays consistent
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    // only US country code for now
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
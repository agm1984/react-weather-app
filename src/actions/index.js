import keys from '../env/api_keys.json'
import axios from 'axios'
const { WEATHER_API_KEY } = keys

// https://openweathermap.org/forecast5
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const country = 'ca'
    const url = `${ROOT_URL}&q=${city},${country}`
    const request = axios.get(url)

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
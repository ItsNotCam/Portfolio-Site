import axios, { AxiosResponse } from "axios";
import qs, { ParsedQs } from "qs";
// var qs = require("qs")

// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weathercode,pressure_msl,surface_pressure,cloudcover,cloudcover_low,cloudcover_mid,cloudcover_high,visibility,evapotranspiration,et0_fao_evapotranspiration,vapor_pressure_deficit&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch
export const getWeather = async(lat: number, lng: number): Promise<IForecast> => {
    const resp: AxiosResponse<any,any> = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weathercode,pressure_msl,surface_pressure,cloudcover,cloudcover_low,cloudcover_mid,cloudcover_high,visibility,evapotranspiration,et0_fao_evapotranspiration,vapor_pressure_deficit&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch`);

    console.log(resp.status);

    if(resp.status !== 200) {
        console.log(`Failed to get forecast data: ${resp}`);
        return new Promise((_, reject) => reject());
    }

    const data: any = await qs.parse(resp.data);
    return new Promise((resolve, _) => resolve(data));
}

export const DefaultForecast: IForecast = {
    num_entries: 0,
    latitude: 0,
    longitude: 0,
    generationtime_ms: 0,
    utc_offset_seconds: 0,
    timezone: '',
    timezone_abbreviation: '',
    elevation: 0,
    current_weather: {
        temperature: 0,
        windspeed: 0,
        winddirection: 0,
        weathercode: 0,
        is_day: 0,
        time: ''
    },
    hourly_units: {
        time: '',
        temperature_2m: '',
        relativehumidity_2m: '',
        dewpoint_2m: '',
        apparent_temperature: '',
        precipitation_probability: '',
        precipitation: '',
        rain: '',
        showers: '',
        snowfall: '',
        snow_depth: '',
        weathercode: '',
        pressure_msl: '',
        surface_pressure: '',
        cloudcover: '',
        cloudcover_low: '',
        cloudcover_mid: '',
        cloudcover_high: '',
        visibility: '',
        evapotranspiration: '',
        et0_fao_evapotranspiration: '',
        vapor_pressure_deficit: ''
    },
    hourly: {
        time: [],
        temperature_2m: [],
        relativehumidity_2m: [],
        dewpoint_2m: [],
        apparent_temperature: [],
        precipitation_probability: [],
        precipitation: [],
        rain: [],
        showers: [],
        snowfall: [],
        snow_depth: [],
        weathercode: [],
        pressure_msl: [],
        surface_pressure: [],
        cloudcover: [],
        cloudcover_low: [],
        cloudcover_mid: [],
        visibility: [],
        evapotranspiration: [],
        et0_fao_evapotranspiration: [],
        vapor_pressure_deficit: []
    }
}

export interface IForecast {
    num_entries: number
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_weather: ICurrentWeatherSnapshot;
    hourly_units: IHourlyUnits;
    hourly: IWeatherData;
}

export interface IWeatherData {
    time: Array<string>;
    temperature_2m: Array<number>;
    relativehumidity_2m: Array<number>;
    dewpoint_2m: Array<number>;
    apparent_temperature: Array<number>;
    precipitation_probability: Array<number>;
    precipitation: Array<number>;
    rain: Array<number>;
    showers: Array<number>;
    snowfall: Array<number>;
    snow_depth: Array<number>;
    weathercode: Array<number>;
    pressure_msl: Array<number>;
    surface_pressure: Array<number>;
    cloudcover: Array<number>;
    cloudcover_low: Array<number>;
    cloudcover_mid: Array<number>;
    visibility: Array<number>;
    evapotranspiration: Array<number>;
    et0_fao_evapotranspiration: Array<number>;
    vapor_pressure_deficit: Array<number>;
}

export interface IHourlyUnits {
    time: string;
    temperature_2m: string;
    relativehumidity_2m: string;
    dewpoint_2m: string;
    apparent_temperature: string;
    precipitation_probability: string;
    precipitation: string;
    rain: string;
    showers: string;
    snowfall: string;
    snow_depth: string;
    weathercode: string;
    pressure_msl:  string;
    surface_pressure: string;
    cloudcover: string;
    cloudcover_low: string;
    cloudcover_mid: string;
    cloudcover_high: string;
    visibility: string;
    evapotranspiration: string;
    et0_fao_evapotranspiration: string;
    vapor_pressure_deficit: string;
}

export interface ICurrentWeatherSnapshot {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    is_day: number;
    time: string;
}

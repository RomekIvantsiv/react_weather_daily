/// <reference types="react-scripts" />

export interface WeatherKey {
  main: string,
  description: string,
  icon: string,
}

export interface WeatherDataFromServer {
  coord :{
    lon: number,
    lat: number,
  },
  weather: WeatherKey[],
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    humidity: number,
  },
  name: string,
  dt: number,
  wind: {
    speed: number,
  },
  sys: {
    country: string,
    sunrise: number,
    sunset: number,
  }
}

export interface HourlyWeather {
  dt: number,
  temp: number,
  feels_like: number,
  humidity: number,
  wind_speed: number,
  weather: WeatherKey[]
}

export interface FormattedHourlyWeather {
  title: string,
  temp: number,
  icon: string,
}

export interface FormattedDailyWeather {
  title: string,
  temp: number,
  icon: string,
}

export interface DailyWeather {
  dt: number,
  sunrise: number,
  sunset: number,
  moonrise: number,
  temp: {
      day: number,
      min: number,
      max: number,
      night: number,
      eve: number,
      morn: number,
  },
  feels_like: {
      day: number,
      night: number,
      eve: number,
      morn: number,
  },
  humidity: number,
  wind_speed: number,
  weather: WeatherKey[],
}

export interface DailyWeatherData {
  lat: number,
  lon: number,
  timezone: number,
  timezone_offset: string,
  hourly: HourlyWeather[]
  daily: DailyWeather[]
}

export interface WeatherState {
  country: string,
  details: string,
  dt: number,
  feels_like: number,
  humidity: number,
  icon: string,
  lat: number,
  lon: number,
  name: string,
  speed: number,
  sunrise: number,
  sunset: number,
  temp: number,
  temp_max: number,
  temp_min: number,
  timezone: number,
  dailyResult: FormattedDailyWeather[],
  hourlyResult: FormattedHourlyWeather[],
}

export interface searchParamsType {
  units?: string,
  q?: string,
  lat? :number,
  lon? : number,
}

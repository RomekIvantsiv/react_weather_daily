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

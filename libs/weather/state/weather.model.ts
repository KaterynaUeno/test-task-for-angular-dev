export interface CurrentWeather {
  temperature: number;
  windspeed: number;
  time: string;
  weathercode: number;
}

export interface Weather {
  current_weather: CurrentWeather;
  latitude: number;
  longitude: number;
  timezone: string;
}

export interface WeatherState {
  currentWeatherState: Weather | null;
  loading: boolean;
  error: string | null;
  city: string;
  latitude: number;
  longitude: number;
}

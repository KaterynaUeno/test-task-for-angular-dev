export interface Weather {
  city: string;
  temperature: number;
  description: string;
  windspeed: number;
  time: string;
}

export interface WeatherState {
  weather: Weather | null;
  loading: boolean;
  error: string | null;
  city: string;
  latitude: number;
  longitude: number;
}

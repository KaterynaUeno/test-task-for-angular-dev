import { Injectable, signal, computed, inject } from '@angular/core';
import { WeatherService } from './weather-service';
import { WeatherState } from './weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherSignalStore {
  private weatherService = inject(WeatherService);

  //defult state
  state = signal<WeatherState>({
    currentWeather: null,
    loading: false,
    error: null,
    city: '',
    latitude: 0,
    longitude: 0,
  });

  //selectors
  currentWeather = computed(() => this.state().currentWeather);
  loading = computed(() => this.state().loading);
  error = computed(() => this.state().error);
  city = computed(() => this.state().city);
  latitude = computed(() => this.state().latitude);
  longitude = computed(() => this.state().longitude);

  //actions
  fetchWeather(latitude: number, longitude: number) {
    this.state.update((state) => {
      return {
        ...state,
        loading: true,
        error: null,
        latitude,
        longitude,
      };
    });
    this.weatherService.getCurrentWeather(latitude, longitude).subscribe({
      next: (weather) => {
        this.state.update((state) => {
          return {
            ...state,
            currentWeather: weather,
            loading: false,
          };
        });
      },
      error: (err) => {
        this.state.update((state) => {
          return {
            ...state,
            error: err.message,
            loading: false,
          };
        });
      },
    });
  }
}

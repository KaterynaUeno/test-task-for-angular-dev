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
  searchByCity(city: string) {
    this.state.update((state) => ({ ...state, loading: true, error: null, city }));
    this.weatherService.searchCity(city).subscribe({
      next: (response) => {
        const result = response.results?.[0];
        if (!result) {
          this.state.update((state) => ({ ...state, loading: false, error: 'City not found' }));
          return;
        }
        this.fetchWeather(result.latitude, result.longitude);
      },
      error: (error) => this.state.update((state) => ({ ...state, loading: false, error: error.message })),
    });
  }

  fetchWeather(latitude: number, longitude: number) {
    this.state.update((state) => ({ ...state, loading: true, error: null, latitude, longitude }));
    this.weatherService.getCurrentWeather(latitude, longitude).subscribe({
      next: (weather) => this.state.update((state) => ({ ...state, currentWeather: weather, loading: false })),
      error: (error) => this.state.update((state) => ({ ...state, error: error.message, loading: false })),
    });
  }
}

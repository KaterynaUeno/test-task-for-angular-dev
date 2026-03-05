import { Component, computed, inject, signal } from '@angular/core';
import { WeatherSignalStore } from '../state';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BlockBuilderComponent } from '@block/builder';

@Component({
  selector: 'app-weather',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, BlockBuilderComponent],
  templateUrl: './weather.html',
  styleUrl: './weather.scss',
  standalone: true,
})
export class WeatherComponent {
  weatherStore = inject(WeatherSignalStore);
  searchInput = signal('');

  search() {
    const query = this.searchInput();
    if (!query.trim()) return;
    console.log('Searching for city:', query);
    this.weatherStore.searchByCity(query);
  }

  weatherData = computed(() => {
    const currentWeather = this.weatherStore.currentWeather()?.current_weather;

    if (!currentWeather) return {};
    return {
      city: this.weatherStore.city(),
      temperature: `${currentWeather.temperature}°C`,
      wind: `${currentWeather.windspeed} km/h`,
      time: new Date(currentWeather.time).toLocaleTimeString(),
    };
  });
}

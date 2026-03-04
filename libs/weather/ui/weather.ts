import { Component, inject, signal } from '@angular/core';
import { WeatherSignalStore } from '../state';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './weather.html',
  styleUrl: './weather.scss',
  standalone: true,
})
export class WeatherComponent {
  weatherStore = inject(WeatherSignalStore);
  searchInput = signal('');
}

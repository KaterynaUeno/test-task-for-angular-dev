import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private http = inject(HttpClient);

  searchCity(city: string): Observable<any> {
    const API_URL = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=5&language=en&format=json`;

    return this.http.get<any>(API_URL);
  }

  getCurrentWeather(latitude: number, longitude: number): Observable<any> {
    const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,weathercode,windspeed_10m&timezone=auto`;

    return this.http.get<any>(API_URL);
  }
}

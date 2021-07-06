import { Injectable } from '@angular/core';
import {WeatherData} from "../model/weather-data";
import {Observable, of} from "rxjs";
import {map, tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CurrentCityService {
  key: string = "64bf5c0c84375d61ead4bd61e49108a5"
  defaultCity = 'Enschede'
  currentCity : string = this.defaultCity;
  constructor(private http: HttpClient) {
  }

  setCurrentCity(city: string | null){
    if (city != null) {
      this.currentCity = city;
      this.getCurrentWeather();
    } else {
      this.currentCity = this.defaultCity;
      this.getCurrentWeather() ;
    }
  }

  getCurrentCity(): Observable<any> {
    return of(this.currentCity);
  }

  getCurrentWeather(): Observable<WeatherData> {
   return this.http.get<JSON>(`https://api.openweathermap.org/data/2.5/weather?q=${this.currentCity}&appid=${this.key}`)
      .pipe( map (response => { return this.setWeatherData( response )}))
  }

  getWeatherByCity(city: string): Observable<WeatherData> {
    return this.http.get<JSON>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.key}`)
      .pipe( map (response => { return this.setWeatherData( response )}))
  }

  setWeatherData(data: any) {
    return this.initWeatherData( data );
  }

  initWeatherData(data: any) {
    let weatherData = new WeatherData(data.name);
    weatherData.humidity = data.main.humidity;
    let sunsetTime = new Date(data.sys.sunset * 1000);
    weatherData.sunsetTime = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    weatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    weatherData.tempCelsius = (data.main.temp - 273.15).toFixed(0);
    weatherData.tempMin = (data.main.temp_min - 273.15).toFixed(0);
    weatherData.tempMax = (data.main.temp_max - 273.15).toFixed(0);
    weatherData.tempRealFeel = (data.main.feels_like - 273.15).toFixed(0);
    if (data.timezone > 0 ){
      weatherData.timezone = `GMT + ${data.timezone/3600}`;
    } else {
      weatherData.timezone = `GMT ${data.timezone/3600}`;
    }
    weatherData.windSpeed = data.wind.speed;
    weatherData.pressure = data.main.pressure;
    return weatherData;
  }
}

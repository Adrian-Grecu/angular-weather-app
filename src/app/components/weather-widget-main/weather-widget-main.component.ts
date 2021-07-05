import { Component, OnInit } from '@angular/core';
import {WeatherData} from "../../model/weather-data";

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})
export class WeatherWidgetMainComponent implements OnInit {
  defaultCity: string = "Amsterdam"
  key: string = "64bf5c0c84375d61ead4bd61e49108a5"
  weatherData: WeatherData;

  constructor() { this.weatherData = this.getWeatherData( this.defaultCity )}

  ngOnInit(): void {
    console.log( this.weatherData );
  }


  getWeatherData(cityName: string) : any {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.key}`)
      .then(response=>response.json())
      .then(data=>{this.setWeatherData(data);})
  }

  setWeatherData(data: any) {
    this.weatherData = new WeatherData( data )
  }
}


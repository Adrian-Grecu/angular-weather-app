import {Component, Inject, Input, OnInit} from '@angular/core';
import {WeatherData} from "../../model/weather-data";
import {Observable} from "rxjs";
import {CurrentCityService} from "../../service/current-city.service";
import {tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})
export class WeatherWidgetMainComponent implements OnInit {

  key: string = "64bf5c0c84375d61ead4bd61e49108a5"
  weatherData: WeatherData = new WeatherData('');
  @Input() city: string = '';

  constructor(private cityService: CurrentCityService) {}

  ngOnInit(): void {
    this.getWeatherData( this.city )
  }

  getWeatherData(cityName: string) : any {
    this.cityService.getWeatherByCity(cityName).subscribe( weather => {
        this.weatherData = weather
      });
  }
}


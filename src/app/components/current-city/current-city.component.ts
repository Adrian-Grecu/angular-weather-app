import {Component, Input, OnInit} from '@angular/core';
import {WeatherData} from "../../model/weather-data";
import {CurrentCityService} from "../../service/current-city.service";

@Component({
  selector: 'app-current-city',
  templateUrl: './current-city.component.html',
  styleUrls: ['./current-city.component.css']
})
export class CurrentCityComponent implements OnInit {
  key: string = "64bf5c0c84375d61ead4bd61e49108a5"
  @Input()
  weatherData: WeatherData = new WeatherData('');

  constructor(private cityService: CurrentCityService) {
    this.cityService.setCurrentCity( null )
  }

  ngOnInit(): void {
     // this.getWeather();
     // this.getCurrentCity();
  }

  // getWeather() {
  //   this.cityService.getCurrentWeather()
  //     .subscribe( (weather) =>
  //     this.weatherData = weather);
  // }
  //
  // getCurrentCity() {
  //   this.cityService.getCurrentCity().subscribe((city) => this.weatherData.name = city )
  // }

}

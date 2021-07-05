import { Component } from '@angular/core';
import {MatDialog} from  '@angular/material/dialog'
import {AddCityDialogComponent} from "./components/add-city-dialog/add-city-dialog.component";
import {WeatherData} from "./model/weather-data";
import {CurrentCityService} from "./service/current-city.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultCity = 'Enschede'
  title = 'weatherapp';
  cityList: string[] = []
  currentWeather: WeatherData = new WeatherData('');

  constructor(public dialog: MatDialog, private cityService: CurrentCityService) {
    this.cityList.push(this.defaultCity);
    this.cityService.getCurrentWeather().subscribe( (weather) =>
    this.currentWeather = weather);
  }

  addNew(): void {
    const dialogRef = this.dialog.open(AddCityDialogComponent, {
      width: '250px',
      data: {name: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined && this.cityList.find(city=> city === result) === undefined) {
        this.cityList.push(result)
      }
    });
  }

  setCurrentCity(city: string){
    this.cityService.setCurrentCity(city);
    this.getWeather()
  }

  getWeather() {
    this.cityService.getCurrentWeather()
      .subscribe( (weather) =>
        this.currentWeather = weather);
  }
}

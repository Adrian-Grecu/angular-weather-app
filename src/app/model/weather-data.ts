export class WeatherData {
  sunsetTime: string;
  isDay: boolean
  tempCelsius: string;
  tempMin: string;
  tempMax: string;
  tempRealFeel:string;
  name: string;
  humidity: string;

  constructor(data: any) {
    this.name = data.name;
    this.humidity = data.main.humidity;
    let sunsetTime = new Date(data.sys.sunset * 1000);
    this.sunsetTime = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.tempCelsius = (data.main.temp - 273.15).toFixed(0);
    this.tempMin = (data.main.temp_min - 273.15).toFixed(0);
    this.tempMax = (data.main.temp_max - 273.15).toFixed(0);
    this.tempRealFeel = (data.main.feels_like - 273.15).toFixed(0);
  }
}

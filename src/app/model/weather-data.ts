export class WeatherData {
  sunsetTime?: string;
  isDay?: boolean
  tempCelsius?: string;
  tempMin?: string;
  tempMax?: string;
  tempRealFeel?:string;
  name: string;
  humidity?: string;

  constructor(name: string) {
    this.name = name;
  }

}

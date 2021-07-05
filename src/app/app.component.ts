import { Component } from '@angular/core';
import {MatDialog} from  '@angular/material/dialog'
import {AddCityDialogComponent} from "./components/add-city-dialog/add-city-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherapp';
  cityCount = 1;
  newCity: string;

  constructor(public dialog: MatDialog) {
    this.newCity = '';
  }


  addNew(): void {
    const dialogRef = this.dialog.open(AddCityDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.newCity = result;
      console.log(this.newCity);
    });
  }
}

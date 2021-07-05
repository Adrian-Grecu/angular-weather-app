import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogContent} from  '@angular/material/dialog'

export interface DialogData {
  name: string;
}

export enum CityEnum {
  Amsterdam,
  Enschede,
  Deventer,
  London,
  Paris,
  Munich
}

@Component({
  selector: 'app-add-city-dialog',
  templateUrl: './add-city-dialog.component.html',
  styleUrls: ['./add-city-dialog.component.css']
})
export class AddCityDialogComponent implements OnInit {
  cityList: string[]

  constructor(
    public dialogRef: MatDialogRef<AddCityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.cityList = Object.keys(CityEnum).filter(k => isNaN(Number(k)));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}

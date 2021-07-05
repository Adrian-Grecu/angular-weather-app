import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'
import { AppComponent } from './app.component';
import { WeatherWidgetMainComponent } from './components/weather-widget-main/weather-widget-main.component';
import { AddCityDialogComponent } from './components/add-city-dialog/add-city-dialog.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";
import { CurrentCityComponent } from './components/current-city/current-city.component';
import {HttpClientModule} from "@angular/common/http";
import {CurrentCityService} from "./service/current-city.service";

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetMainComponent,
    AddCityDialogComponent,
    CurrentCityComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    NoopAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    AppComponent,
    AddCityDialogComponent
  ],
  providers: [     {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

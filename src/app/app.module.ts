import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SegonGrauComponent } from './segon-grau/segon-grau.component';
import { NavBarComponent } from './widgets/header/nav-bar/nav-bar.component';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { SegonGrauExercicisComponent } from './segon-grau-exercicis/segon-grau-exercicis.component';
import { SegonGrauCalculadoraComponent } from './segon-grau-calculadora/segon-grau-calculadora.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    SegonGrauComponent,
    NavBarComponent,
    SegonGrauExercicisComponent,
    SegonGrauCalculadoraComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SegonGrauCalculadoraComponent } from './segon-grau-calculadora/segon-grau-calculadora.component';
import { SegonGrauExercicisComponent } from './segon-grau-exercicis/segon-grau-exercicis.component';
import { SegonGrauComponent } from './segon-grau/segon-grau.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent},
  { path: 'SegonGrau', component: SegonGrauComponent},
  { path: 'SegonGrauExercicis', component: SegonGrauExercicisComponent},
  { path: 'SegonGrauCalculadora', component: SegonGrauCalculadoraComponent},

  { path: '',
  redirectTo:'Home',
  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

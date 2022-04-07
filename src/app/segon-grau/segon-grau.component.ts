import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router ,NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-segon-grau',
  templateUrl: './segon-grau.component.html',
  styleUrls: ['./segon-grau.component.scss']
})
export class SegonGrauComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  OpenExercicis(){
    console.log("Ejercicios");
    this.router.navigate(["/SegonGrauExercicis"])
  }

  OpenCalc(){
    console.log("Calculadora");
    this.router.navigate(["/SegonGrauCalculadora"])
  }
}

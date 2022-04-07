import { Component, OnInit } from '@angular/core';
import { Router ,NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-segon-grau-exercicis',
  templateUrl: './segon-grau-exercicis.component.html',
  styleUrls: ['./segon-grau-exercicis.component.scss']
})
export class SegonGrauExercicisComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  OpenTeoria(){
    console.log("Teoria");
    this.router.navigate(["/SegonGrau"])
  }

  OpenCalc(){
    console.log("Calculadora");
    this.router.navigate(["/SegonGrauCalculadora"])
  }
}

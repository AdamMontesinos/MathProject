import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router ,NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-segon-grau-calculadora',
  templateUrl: './segon-grau-calculadora.component.html',
  styleUrls: ['./segon-grau-calculadora.component.scss']
})
export class SegonGrauCalculadoraComponent implements OnInit {

  s1:any;
  s2:any;
  s3:any;
  
  constructor(private http: HttpClient,private router: Router) {
    this.callApi();
   }

  ngOnInit(): void {
  }

  callApi(){
    console.log("crida api");

    this.http.get<any>('https://private-f9008f-lauramartin1704.apiary-mock.com/suma2/6/5').subscribe(data=>{
      //console.log(data["resultat"]);
      //console.log(data[2]['personaje'])
    })
  }

  calc(){
    console.log("calc: " + this.s1 + this.s2);
  }
  OpenTeoria(){
    console.log("Teoria");
    this.router.navigate(["/SegonGrau"])
  }

  OpenExercicis(){
    console.log("Ejercicios");
    this.router.navigate(["/SegonGrauExercicis"])
  }
  
}

import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-loops',
  templateUrl: './loops.component.html',
  styleUrls: ['./loops.component.css']
})
export class LoopsComponent {

  personas: Persona[] = [
    {nombre: 'MKT',
      edad: 26},
    {nombre: 'Gota',
      edad: 26},
    {nombre: 'Luis',
      edad: 180},
    {nombre: 'Jorge',
      edad: 500}
  ];

  constructor() { }

  ngOnInit(): void {

  }
}

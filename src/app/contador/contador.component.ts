import { Component, OnInit } from '@angular/core';

import { Persona } from '../persona';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  constructor(){ }

  ngOnInit() : void {
  }

  number: number = 1

  decrement() {
    this.number--
  }

  increment() {
    this.number += 1
  }
}

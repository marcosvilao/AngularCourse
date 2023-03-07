import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  openAlert:boolean = false;
  
  constructor() { }

  ngOnInit(): void {

  }
  show_in_console(name:string){
    console.log(name);

    this.openAlert = true
  }
  
}

import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss']
})
export class ListasComponent {

  framework = new FormControl('');

  frameworksList: string[] = ['Javascript', '.Net', 'Js y Angular', 'Js y React', 'Java', 'Python', 'PHP', 'Ruby',  'SQL', 'PL/SQL', ];

  constructor() { }

  crearLista(): void {
  }

  eliminar(): void { 
  }

}

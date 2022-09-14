import { Component } from '@angular/core';
import { createUrlTreeFromSnapshot } from '@angular/router';
import {Alumno} from './modelo/alumno'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public alumnos: Array<Alumno> = [
    {
      rut: 1,
      nombre: 'Carlos',
      apellido: 'Rodriguez',
      edad: 0
    },
  ];

  public guardarNuevo(alumno:Alumno):void {
    const id = this.alumnos.length + 1;
    alumno.rut = id;
    this.alumnos.push(alumno);
  }
}

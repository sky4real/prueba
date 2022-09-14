import { Component, Output, EventEmitter } from '@angular/core';
import {Alumno} from '../../modelo/alumno';
@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent  {
  @Output() public puchamon = new EventEmitter<Alumno>();

  public nuevoAlumno:Alumno = {
    rut:0,
    nombre:'',
    apellido:'',
    edad:0,
  }

  public cambiarRut(evento:Event): void{
    const variable = evento.target as HTMLInputElement;
    this.nuevoAlumno.rut = Number.parseInt(variable.value);
  }

  public cambiarNombre(evento:Event): void{
    const variable = evento.target as HTMLInputElement;
    this.nuevoAlumno.nombre = variable.value;
  }

  public cambiarApellido(evento:Event): void{
    const variable = evento.target as HTMLInputElement;
    this.nuevoAlumno.apellido = variable.value;
  }

  public cambiarEdad(evento:Event): void{
    const variable = evento.target as HTMLInputElement;
    this.nuevoAlumno.edad = Number.parseInt(variable.value);
  }

  public guardarElemento(): void {
    const copia : Alumno = {
      ...this.nuevoAlumno
    };
    this.puchamon.emit(copia);
    this.nuevoAlumno.rut=0;
    this.nuevoAlumno.nombre='';
    this.nuevoAlumno.apellido='';
    this.nuevoAlumno.edad=0;
  }
}

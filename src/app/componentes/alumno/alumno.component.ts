import { Component, Input } from '@angular/core';
import { Alumno } from 'src/app/modelo/alumno';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent  {
  @Input() public alumno! : Alumno;

}

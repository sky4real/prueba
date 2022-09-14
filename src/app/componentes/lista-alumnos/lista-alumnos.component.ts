import { Component, Input} from '@angular/core';
import { __importDefault } from 'tslib';
import {Alumno} from '../../modelo/alumno'
@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent  {
  @Input() public listaAlumno! : Array<Alumno>;

}

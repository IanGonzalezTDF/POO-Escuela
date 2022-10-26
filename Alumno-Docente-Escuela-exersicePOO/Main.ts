//=========================
//Fecha: 14/09/2022
//=========================

import { Escuela } from "./Escuela"
import { Profesor } from "./Profesor"
import { Alumno } from "./Alumno"

let alumnoA = new Alumno('Ian','Gonzalez',7,8,9);
let alumnoB = new Alumno('Roman','Ramirez',9,9,9);
let alumnoC = new Alumno('Antonio','Perez',5,9,7);

let listadoAl: Alumno[] = [alumnoA,alumnoB,alumnoC];

let docenteM = new Profesor('Daniel','Perez',listadoAl);
let docenteG = new Profesor('Luis','Garcia',listadoAl);
let docenteS = new Profesor('Julian','Peralta',listadoAl);

let listadoProfes:Profesor[] = [docenteG,docenteM,docenteS];

let EscuelaPrimaria: Escuela = new Escuela('San Martin',listadoAl,listadoProfes);

console.log(EscuelaPrimaria.getNombreEscuela());

EscuelaPrimaria.removerAlumno(alumnoA);
EscuelaPrimaria.removerAlumno(alumnoB);

EscuelaPrimaria.despedirProfesor(docenteM);
EscuelaPrimaria.contratarProfesor(docenteS);







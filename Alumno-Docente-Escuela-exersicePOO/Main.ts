//=========================
//Fecha: 14/09/2022
//=========================
//Fecha entregable: 19/09/2022

import { Escuela } from "./Escuela"
import { Profesor } from "./Profesor"
import { Alumno } from "./Alumno"
import { Preceptor } from "./Preceptor"

let alumnoA = new Alumno('Ian','Gonzalez',7,8,9);
let alumnoB = new Alumno('Roman','Ramirez',9,9,9);
let alumnoC = new Alumno('Antonio','Perez',5,9,7);

let listadoAl: Alumno[] = [alumnoA,alumnoB,alumnoC];

let docenteM = new Profesor('Daniel','Perez',listadoAl);
let docenteG = new Profesor('Luis','Garcia',listadoAl);
let docenteS = new Profesor('Julian','Peralta',listadoAl);

let listadoProfes:Profesor[] = [docenteG,docenteM,docenteS];


let preceptorA: Preceptor = new Preceptor ('Claudio', 'Rodriguez', listadoAl, 35, 'Virtual');
let preceptoraB: Preceptor = new Preceptor ('Gladis', 'Vera', listadoAl, 35, 'Presencial');

let listadoPreceptores: Preceptor[] = [preceptorA, preceptoraB]

let EscuelaPrimaria: Escuela = new Escuela('San Martin',listadoAl,listadoProfes,listadoPreceptores);

console.log(EscuelaPrimaria.getNombreEscuela());

EscuelaPrimaria.removerAlumno(alumnoA);
EscuelaPrimaria.removerAlumno(alumnoB);

EscuelaPrimaria.despedirProfesor(docenteM);
EscuelaPrimaria.contratarProfesor(docenteS);

alumnoA.setNotaMatematica(8);
console.log(alumnoA.getcalificacion());

EscuelaPrimaria.contratarPreceptor(preceptorA);

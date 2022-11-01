"use strict";
//=========================
//Fecha: 14/09/2022
//=========================
//Fecha entregable: 19/09/2022
exports.__esModule = true;
var Escuela_1 = require("./Escuela");
var Profesor_1 = require("./Profesor");
var Alumno_1 = require("./Alumno");
var Preceptor_1 = require("./Preceptor");
var alumnoA = new Alumno_1.Alumno('Ian', 'Gonzalez', 7, 8, 9);
var alumnoB = new Alumno_1.Alumno('Roman', 'Ramirez', 9, 9, 9);
var alumnoC = new Alumno_1.Alumno('Antonio', 'Perez', 5, 9, 7);
var listadoAl = [alumnoA, alumnoB, alumnoC];
var docenteM = new Profesor_1.Profesor('Daniel', 'Perez', listadoAl);
var docenteG = new Profesor_1.Profesor('Luis', 'Garcia', listadoAl);
var docenteS = new Profesor_1.Profesor('Julian', 'Peralta', listadoAl);
var listadoProfes = [docenteG, docenteM, docenteS];
var preceptorA = new Preceptor_1.Preceptor('Claudio', 'Rodriguez', listadoAl, 35, 'Virtual');
var preceptoraB = new Preceptor_1.Preceptor('Gladis', 'Vera', listadoAl, 35, 'Presencial');
var listadoPreceptores = [preceptorA, preceptoraB];
var EscuelaPrimaria = new Escuela_1.Escuela('San Martin', listadoAl, listadoProfes, listadoPreceptores);
console.log(EscuelaPrimaria.getNombreEscuela());
EscuelaPrimaria.removerAlumno(alumnoA);
EscuelaPrimaria.removerAlumno(alumnoB);
EscuelaPrimaria.despedirProfesor(docenteM);
EscuelaPrimaria.contratarProfesor(docenteS);
alumnoA.setNotaMatematica(8);
console.log(alumnoA.getcalificacion());
EscuelaPrimaria.contratarPreceptor(preceptorA);

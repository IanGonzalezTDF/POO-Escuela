"use strict";
exports.__esModule = true;
exports.Escuela = void 0;
var Escuela = /** @class */ (function () {
    function Escuela(pNombre, pListadoAlumnos, pListadoProfesores, pListadoPreceptor) {
        this.nombreEscuela = pNombre;
        this.listadoAlumnos = pListadoAlumnos;
        this.listadoProfesores = pListadoProfesores;
        this.listadoPreceptores = pListadoPreceptor;
    }
    Escuela.prototype.getNombreEscuela = function () {
        return this.nombreEscuela;
    };
    Escuela.prototype.setNombreEscuela = function (pNombreEscuela) {
        this.nombreEscuela = pNombreEscuela;
    };
    Escuela.prototype.contratarProfesor = function (pProfesor) {
        this.listadoProfesores.push(pProfesor);
        console.log("El profesor ".concat(pProfesor.getApellido(), " fue contradado"));
    };
    Escuela.prototype.despedirProfesor = function (pProfesor) {
        for (var i = 0; i < this.listadoProfesores.length; i++) {
            if (pProfesor.getApellido(), pProfesor.getNombre() == this.listadoProfesores[i].getApellido(), pProfesor.getNombre()) {
                this.listadoProfesores.splice(i, 1);
                console.log("El profesor ".concat(pProfesor.getApellido(), " ").concat(pProfesor.getNombre(), " fue DESPEDIDO"));
            }
            else
                (console.log("No se encontro el profesor"));
        }
    };
    Escuela.prototype.contratarPreceptor = function (pPreceptor) {
        this.listadoPreceptores.push(pPreceptor);
        console.log("Preceptor/a ".concat(pPreceptor.getApellido(), " fue contradado/a"));
    };
    Escuela.prototype.despedirPreceptor = function (pPreceptor) {
        for (var i = 0; i < this.listadoPreceptores.length; i++) {
            if (pPreceptor.getApellido() == this.listadoPreceptores[i].getApellido()) {
                this.listadoPreceptores.splice(i, 1);
                console.log("Preceptor/a Despedido/a");
            }
            else
                (console.log("No se encontro al/a preceptor/a"));
        }
    };
    Escuela.prototype.matricularAlumno = function (pAlumno) {
        this.listadoAlumnos.push(pAlumno);
    };
    Escuela.prototype.removerAlumno = function (pAlumno) {
        for (var i = 0; i < this.listadoAlumnos.length; i++) {
            if (pAlumno.getApellido() === this.listadoAlumnos[i].getApellido()) {
                this.listadoAlumnos.splice(i, 1);
            }
        }
        console.log("El alumno ".concat(pAlumno.getApellido(), " ").concat(pAlumno.getNombre(), " fue retirado"));
    };
    return Escuela;
}());
exports.Escuela = Escuela;

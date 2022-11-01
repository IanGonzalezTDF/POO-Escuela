"use strict";
exports.__esModule = true;
exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    function Alumno(pNombre, pApellido, pNotaMatematica, pNotaGeografia, pNotaSociales) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.notaMatematica = pNotaMatematica;
        this.notaGeografia = pNotaGeografia;
        this.notaSociales = pNotaSociales;
    }
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.setNombre = function (pnombre) {
        this.nombre = pnombre;
    };
    Alumno.prototype.getApellido = function () {
        return this.apellido;
    };
    Alumno.prototype.setApellido = function (pApellido) {
        this.apellido = pApellido;
    };
    Alumno.prototype.setNotaMatematica = function (pnota) {
        this.notaMatematica = pnota;
    };
    Alumno.prototype.getcalificacion = function () {
        if (this.notaMatematica > 7) {
            return "Aprobado";
        }
        else {
            return "Desaprobado";
        }
    };
    return Alumno;
}());
exports.Alumno = Alumno;

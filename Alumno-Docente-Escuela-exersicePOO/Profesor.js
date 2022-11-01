"use strict";
exports.__esModule = true;
exports.Profesor = void 0;
var Profesor = /** @class */ (function () {
    function Profesor(pNombre, pApellido, pListadoAl) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.listadoAlumnos = pListadoAl;
    }
    Profesor.prototype.getNombre = function () {
        return this.nombre;
    };
    Profesor.prototype.setNombre = function (pnombre) {
        this.nombre = pnombre;
    };
    Profesor.prototype.getApellido = function () {
        return this.apellido;
    };
    Profesor.prototype.setApellido = function (pApellido) {
        this.apellido = pApellido;
    };
    return Profesor;
}());
exports.Profesor = Profesor;

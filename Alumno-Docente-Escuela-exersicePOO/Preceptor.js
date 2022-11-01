"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Preceptor = void 0;
var Profesor_1 = require("./Profesor");
var Preceptor = /** @class */ (function (_super) {
    __extends(Preceptor, _super);
    function Preceptor(pNombre, pApellido, pListadoAl, paramCatedras, paramModalidad) {
        var _this = _super.call(this, pNombre, pApellido, pListadoAl) || this;
        _this.horasCatedras = paramCatedras;
        _this.modalidad = paramModalidad;
        return _this;
    }
    Preceptor.prototype.setHorasCatedras = function (pHoras) {
        this.horasCatedras = pHoras;
    };
    Preceptor.prototype.getHorasCatedras = function () {
        return this.horasCatedras;
    };
    Preceptor.prototype.setModalidad = function (pModalidad) {
        this.modalidad = pModalidad;
    };
    Preceptor.prototype.getModalidad = function () {
        return this.modalidad;
    };
    return Preceptor;
}(Profesor_1.Profesor));
exports.Preceptor = Preceptor;
// ======
// CLASE 28-09-2022 MIN 56:55
// ======

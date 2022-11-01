// =======
// APLICANDO HERENCIA(?)
// =======
import { Alumno } from "./Alumno";
import { Profesor } from "./Profesor";

export class Preceptor extends Profesor {
    protected horasCatedras:number;
    protected modalidad:string;

    constructor(pNombre:string,pApellido:string,pListadoAl:Alumno[],paramCatedras:number, paramModalidad:string){
        super (pNombre, pApellido,pListadoAl);
        this.horasCatedras = paramCatedras;
        this.modalidad = paramModalidad;
    }

    public setHorasCatedras(pHoras:number):void{
        this.horasCatedras = pHoras;
    }
    public getHorasCatedras():number{
        return this.horasCatedras;
    }

    public setModalidad(pModalidad:string){
        this.modalidad = pModalidad;
    }

    public getModalidad(): string{
        return this.modalidad;
    }
}

// ======
// CLASE 28-09-2022 MIN 56:55
// ======
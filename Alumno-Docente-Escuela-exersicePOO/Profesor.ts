import { Alumno } from "./Alumno";

export class Profesor {
    private nombre:string;
    private apellido:string;
    private listadoAlumnos:Alumno[];

    constructor(pNombre:string,pApellido:string,pListadoAl:Alumno[]){
        this.nombre=pNombre;
        this.apellido=pApellido;
        this.listadoAlumnos=pListadoAl;
    }


    public getNombre ():string{
        return this.nombre;
    }
    public setNombre (pnombre):void{
        this.nombre = pnombre;
    }
    public getApellido():string{
        return this.apellido;
    }
    public setApellido(pApellido):void{
        this.apellido=pApellido;
    }

}
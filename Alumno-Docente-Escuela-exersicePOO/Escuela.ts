import { Profesor } from "./Profesor";
import { Alumno } from "./Alumno"


export class Escuela {
    private nombreEscuela:string;
    private listadoAlumnos:Alumno[];
    private listadoProfesores:Profesor[];

    constructor (pNombre:string,pListadoAlumnos:Alumno[],pListadoProfesores:Profesor[]){
        this.nombreEscuela = pNombre;
        this.listadoAlumnos = pListadoAlumnos;
        this.listadoProfesores = pListadoProfesores;
    }   

    public getNombreEscuela():string {
        return this.nombreEscuela;
        }

    public setNombreEscuela(pNombreEscuela):void{
        this.nombreEscuela=pNombreEscuela;
    }

    public contratarProfesor(pProfesor:Profesor):void{
        this.listadoProfesores.push(pProfesor);
        console.log(`El profesor ${pProfesor.getApellido()} fue contradado`);
    }

    public despedirProfesor(pProfesor:Profesor):void{
        for(let i:number=0;i<this.listadoProfesores.length;i++){
            if(pProfesor.getApellido(),pProfesor.getNombre() == this.listadoProfesores[i].getApellido(),pProfesor.getNombre()){
                this.listadoProfesores.splice(i,1);
                console.log(`El profesor ${pProfesor.getApellido()} ${pProfesor.getNombre()} fue DESPEDIDO`);
            }
            else(
                console.log("No se encontro el profesor")
            )
        }
    }

    public matricularAlumno(pAlumno:Alumno):void{
        this.listadoAlumnos.push(pAlumno);
    }

    public removerAlumno(pAlumno:Alumno):void{
        for(let i=0;i<this.listadoAlumnos.length;i++){
            if(pAlumno.getApellido() === this.listadoAlumnos[i].getApellido()){
                this.listadoAlumnos.splice(i,1)
            }
        }console.log(`El alumno ${pAlumno.getApellido()} ${pAlumno.getNombre()} fue retirado`);        
    }
}
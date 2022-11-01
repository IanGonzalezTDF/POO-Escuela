import { Profesor } from "./Profesor";
import { Alumno } from "./Alumno";
import { Preceptor } from "./Preceptor";


export class Escuela {
    private nombreEscuela:string;
    private listadoAlumnos:Alumno[];
    private listadoProfesores:Profesor[];
    private listadoPreceptores:Preceptor[];

    constructor (pNombre:string,pListadoAlumnos:Alumno[],pListadoProfesores:Profesor[],pListadoPreceptor:Preceptor[]){
        this.nombreEscuela = pNombre;
        this.listadoAlumnos = pListadoAlumnos;
        this.listadoProfesores = pListadoProfesores;
        this.listadoPreceptores = pListadoPreceptor;
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

    public contratarPreceptor(pPreceptor:Preceptor):void{
        this.listadoPreceptores.push(pPreceptor);
        console.log(`Preceptor/a ${pPreceptor.getApellido()} fue contradado/a`);
    }

    public despedirPreceptor(pPreceptor:Preceptor):void{
        for(let i:number = 0; i<this.listadoPreceptores.length;i++){
            if(pPreceptor.getApellido() == this.listadoPreceptores[i].getApellido()){
                this.listadoPreceptores.splice(i,1)
                console.log(`Preceptor/a Despedido/a`)
            }
            else (console.log(`No se encontro al/a preceptor/a`));
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
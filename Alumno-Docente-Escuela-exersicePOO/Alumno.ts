export class Alumno {
    private nombre: string;
    private apellido: string;
    private notaMatematica: number;
    private notaGeografia:number;
    private notaSociales:number;

    constructor(pNombre:string, pApellido:string, pNotaMatematica:number, pNotaGeografia: number, pNotaSociales:number){
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.notaMatematica = pNotaMatematica;
        this.notaGeografia = pNotaGeografia;
        this.notaSociales = pNotaSociales;
    }
    
    public getNombre():string{
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

    public setNotaMatematica(pnota:number):void {
        this.notaMatematica = pnota;
    }
    public getcalificacion():string{
        if(this.notaMatematica>7){
            return "Aprobado"}
        else{
            return "Desaprobado"
        }    
    }
}
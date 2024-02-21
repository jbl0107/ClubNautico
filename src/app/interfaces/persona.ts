export interface Persona {

    id?:number;  //la ? es para indicar que la propiedad es opcional
    dni:string;
    nombre:string;
    apellidos:string;
    edad:number;
    numTelefono:number;
    fechaNacimiento:Date;
}

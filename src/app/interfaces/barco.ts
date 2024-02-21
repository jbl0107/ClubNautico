import { Patron } from "./patron";
import { Salida } from "./salida";
import { Socio } from "./socio";

export interface Barco {
    id?:number;
    matricula:string;
    nombre:string;
    numeroAmarre:number;
    cuota:number;
    patronId?:number;
    socioId?:number;
    salidas?:Salida[];
}

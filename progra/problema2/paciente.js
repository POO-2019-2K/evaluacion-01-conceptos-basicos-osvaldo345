export default class Paciente {
    constructor(fechaNac, estatura, peso){
        this._fechaNac = fechaNac;
        this._estatura = estatura;
        this._peso = peso; 
    }

    get fechaNac(){
        return this._fechaNac;
    }

    set fechaNac(fechaNac){
        this._fechaNac = fechaNac;
    }

    set estatura(estatura){
        this._estatura = estatura;
    }


    set peso(peso){
        this._peso = peso;
    }


imprimir(){
    console.log(`Fecha de nacimiento: ${this._fechaNac} \nEstatura del paciente: ${this._estatura} \nPeso del paciente: ${this._peso}`);
}

}
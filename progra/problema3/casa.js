export default class Casa {
    constructor(precio, superficie, numHabitaciones, numBaños){
        this._precio = precio;
        this._superficie = superficie;
        this._numHabitaciones = numHabitaciones;
        this._numBaños = numBaños; 
    }

    get precio(){
        return this._precio;
    }

    get superficie(){
        return this._superficie;
    }

    set numHabitaciones(numHabitaciones){
        this._numHabitaciones= numHabitaciones;
    }

    set numBaños(numBaños){
        this._numBaños = numBaños;
    }


imprimir(){
    console.log(`Precio de la casa: ${this._precio} \nSuperficie: ${this._superficie} \nNumero de habitaciones: ${this._numHabitaciones} \nNumero de baños: ${this._numBaños}`);
}
}
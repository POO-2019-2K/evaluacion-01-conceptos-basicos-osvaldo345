export default class Factura {
    constructor(fechaFactura, totalFactura, numFactura){
        this._fechaFactura = fechaFactura;
        this._numFactura = numFactura;
        this._totalFactura = totalFactura; 
    }

    get fechaFactura(){
        return this._fechaFactura;
    }

    get numFactura(){
        return this._numFactura;
    }

    get totalFactura(){
        return this._totalFactura;
    }


    set totalFactura(totalFactura){
         this._totalFactura = totalFactura;
    }


imprimir(){
    console.log(`Numero de Factura: ${this._numFactura} \nFecha de factura: ${this.fechaFactura} \nTotal de factura: ${this.totalFactura}`);
}

}
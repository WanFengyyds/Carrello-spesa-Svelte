export class Item {
    constructor(id,idCarrello,nome,prezzo,comprato){
        this.id = id;
        this.idCarrello = idCarrello;
        this.nome = nome;
        this.prezzo = prezzo;
        this.comprato = comprato;
    }


    toPlainObject() {
        return {
            id: this.id,
            idCarrello: this.idCarrello,
            nome: this.nome,
            prezzo: this.prezzo,
            comprato: this.comprato
        };
    }
}
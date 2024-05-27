export class ListItems {
    constructor(id, nome, imgLink, marca, categoria, prezzo, quantitaRimanente) {
        this.id = id;
        this.nome = nome;
        this.imgLink = imgLink;
        this.marca = marca;
        this.categoria = categoria;
        this.prezzo = prezzo;
        this.quantitaRimanente = quantitaRimanente;
    }


    toPlainObject() {
        return {
            id: this.id,
            nome: this.nome,
            imgLink: this.imgLink,
            marca: this.marca,
            categoria: this.categoria,
            prezzo: this.prezzo,
            quantitaRimanente: this.quantitaRimanente
        };
    }
}
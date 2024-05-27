// place files you want to import through the `$lib` alias in this folder.
import Database from "better-sqlite3";

const db = new Database("./data/data.db")

export function getCarrello() {
    const sql = "SELECT * FROM carrello"

    const stmnt = db.prepare(sql);
    const rows = stmnt.all();
    return rows;
}
export function getAllItems() {
    const sql = "SELECT * FROM listaItem"

    const stmnt = db.prepare(sql);
    const rows = stmnt.all();
    return rows;
}

export function addCarrello(url, nome, price) {
    const sql = 'INSERT INTO carrello (idCarrello, nome, prezzo, comprato) VALUES ($idCarrello, $nome, $prezzo, $comprato) RETURNING id;'
    const stmnt = db.prepare(sql);
    const rows = stmnt.run({
        idCarrello: url,
        nome: nome,
        prezzo: price,
        comprato: 0
    });
    return rows.lastInsertRowid
}

export function removeItemInDataBase(id) {
    const sql = 'DELETE FROM carrello WHERE id = $id';
    const stmnt = db.prepare(sql);
    stmnt.run({
        id
    });
}

export function updateCarrello(id, comprato) {
    const sql = `UPDATE carrello SET comprato=$comprato WHERE id=$id;`;
    const stmnt = db.prepare(sql);
    let x = 0;
    if (comprato == true) {
        x = 1;
    }

    stmnt.run({
        comprato: x,
        id: id
    });
}
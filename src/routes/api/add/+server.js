import { json } from '@sveltejs/kit';
import { _urlUser} from '../../+page.server.js'
import {updateCarrello,removeItemInDataBase,addCarrello} from "../../../lib/server/db/index.js"


/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { id,comprato } = await request.json();
	await updateCarrello(id,comprato)
    return json({ success: true, message: 'Item updated successfully' });
}

export async function DELETE({ request }) {
	const {id} = await request.json();
	await removeItemInDataBase(id)
    return json({ success: true, message: 'Item updated successfully' });
}

export async function PUT({ request }) {
	const {url,nome} = await request.json();
	let x = await addCarrello(url,nome, 3.0)
    return json(x);
}
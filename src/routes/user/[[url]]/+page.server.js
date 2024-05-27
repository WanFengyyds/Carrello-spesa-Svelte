import { addCarrello, getCarrello, removeItemInDataBase, updateCarrello } from "../../../lib/server/db";

import { Item } from "../../../lib/server/models/item";

export let _urlUser;
let items = [];

export function load({ params }) {
	items.length = 0;
	let arrayNotSorted = getCarrello();
	_urlUser = params.url;
	arrayNotSorted.forEach(sort => {
		if (params.url === sort.idCarrello) {
			items.push(
				new Item(sort.id, sort.idCarrello, sort.nome, sort.prezzo, sort.comprato)
			)
		}
	});
	const plainItems = items.map(item => item.toPlainObject());
	return {
		plainItems,
		url: params.url
	};



}






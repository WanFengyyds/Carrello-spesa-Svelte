import { getCarrello, getAllItems } from "../../../lib/server/db";
import { ListItems } from "../../../lib/server/models/ListItems";
import { Item } from "../../../lib/server/models/item";

export let _urlUser;
let items = [];
let listOfAllItems = [];

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

	listOfAllItems.length = 0;
	let arrayAllItemsNotSorted = getAllItems();
	arrayAllItemsNotSorted.forEach(sort => {
		listOfAllItems.push(
			new ListItems(sort.id, sort.nome, sort.imgLink, sort.marca, sort.categoria, sort.prezzo, sort.quantitaRimanante)
		)
	});

	const plainItems = items.map(item => item.toPlainObject());
	const plainItemsAll = listOfAllItems.map(item => item.toPlainObject());


	return {
		plainItemsAll,
		plainItems,
		url: params.url
	};



}
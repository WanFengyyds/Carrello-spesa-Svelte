<script>
	import { loadExtension } from "better-sqlite3/lib/methods/wrappers";
	import ListaCarrello from "../../ListaCarrello.svelte";
	import SideBar from "../../SideBar.svelte";
	import { browser } from "$app/environment";
	import { writable } from "svelte/store";

	export let data;
	writable(
		browser &&
			localStorage.setItem(
				"userId",
				window.location.href.replace("http://localhost:5173/user/", ""),
			),
	);

	async function addItem(nome) {
		const response = await fetch("/api/add", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				url: data.url,
				nome: nome,
			}),
		});
		const result = await response.json();
		data.push({
			id: result,
			idCarrello: data.url,
			nome: nome,
			prezzo: 2.0,
			comprato: 0,
		});
		data.plainItems = [...data.plainItems];
	}
</script>

<section class="carrello">
	<div class="listaCarrello">
		<div class="containerCarrello">
			<h1 class="title">Carrello della spesa</h1>
			<ListaCarrello items={data.plainItems} />
		</div>
	</div>

	<div class="sideBar">
		<div class="sideBarContainer">
			<h1 class="titoloSidebar">Supermercato</h1>
			<SideBar allItems={data.plainItemsAll} />
		</div>
	</div>
</section>

<style>
	.carrello {
		display: flex;
		flex-direction: row;
		height: 100vh;
	}

	.listaCarrello {
		flex: 0.65;
		padding: 5%;
	}
	.containerCarrello {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background-color: rgb(255, 255, 255, 0.05);
		border-radius: 3%;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
		width: 100%;
		height: 100%;
	}
	.title {
		font-size: 40px;
	}

	/* SideBar */
	.sideBar {
		flex: 0.35;
		padding: 5%;
	}

	.sideBarContainer {
		display: flex;
		flex-direction: column;
		background-color: rgb(255, 255, 255, 0.1);
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
		overflow: auto;
		width: 100%;
		height: 100%;
		border-radius: 3%;
	}

	.titoloSidebar {
		color: black;
		font-size: 30px;
		text-align: center;
	}
</style>

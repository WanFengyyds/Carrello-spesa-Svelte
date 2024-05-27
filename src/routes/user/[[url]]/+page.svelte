<script>
	import { loadExtension } from "better-sqlite3/lib/methods/wrappers";
	import ListaCarrello from "../../ListaCarrello.svelte";
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
		data.plainItems.push({
			id: result,
			idCarrello: data.url,
			nome: nome,
			prezzo: 2.0,
			comprato: 0,
		});
		data.plainItems = [...data.plainItems];
		console.log(data.plainItems);
	}
</script>

<section class="carrello">
	<div class="cointainer">
		<h1 class="title">Carrello della spesa</h1>

		<div>
			<div class="input">
				<input
					class="input-campo"
					placeholder="Cosa devi comprare? "
					on:keydown={(e) => {
						if (e.key !== "Enter") return;
						addItem(e.currentTarget.value);
						e.currentTarget.value = "";
					}}
				/>
			</div>

			<div class="todo">
				<ListaCarrello items={data.plainItems} />
			</div>
		</div>
	</div>
</section>

<style>
	.input {
		justify-content: center;
		display: flex;
	}
	.input-campo {
		width: 100%;
		border: 0.06rem solid #d2d2d2bf;
		border-radius: 0.5rem;
		padding: 1.25rem;
		font-size: 1rem;
	}
	.cointainer {
		background-color: white;
		padding: 5% 15%;
		border-radius: 20px; /* Rounded corners */
		width: 100%;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.title {
		text-align: center;
		font-family: "Courier New", Courier, monospace;
		color: #191970;
		font-size: 60px;
		text-transform: uppercase;
		text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
	}

	.carrello {
		margin: auto;
		border: 0;
		padding: 0;
		width: 500px; /* Width of the square */
		height: 100vh; /* Height of the square */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	@media (max-width: 576px) {
		.title {
			font-size: 24px;
		}

		.carrello {
			width: 100%; /* Full width on small screens */
			height: auto; /* Adjust height */
			padding: 10px; /* Add some padding */
		}

		.input-campo {
			padding: 1rem; /* Adjust padding */
			font-size: 0.875rem; /* Adjust font size */
		}

		.cointainer {
			padding: 5% 5%;
			width: 90%;
		}
	}
</style>

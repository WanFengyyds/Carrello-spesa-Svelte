<script>
    import { page } from "$app/stores";
    export let allItems;
    export let items;
    async function changeSort(tipo) {
        const response = await fetch("/api/add", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                categoria: tipo,
            }),
        });
        const result = await response.json();
        allItems = result;
    }

    async function addItem(item) {
        let coord = window.location.href.replace(
            "http://localhost:5173/user/",
            "",
        );
        const response = await fetch("/api/add", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                url: window.location.href.replace(
                    "http://localhost:5173/user/",
                    "",
                ),
                nome: item.nome,
                prezzo: item.prezzo,
            }),
        });
        const result = await response.json();
        const newItem = {
            id: result,
            idCarrello: coord,
            nome: item.nome,
            prezzo: item.prezzo,
            comprato: 0,
        };
        items = [...items, newItem];
    }
</script>

<div class="sort">
    <div class="dropdown">
        <button
            class="sortbutton"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
            <i class="ri-menu-3-line"></i>
        </button>

        <ul class="dropdown-menu dropdown-menu-dark" style="">
            <li>
                <button
                    class="dropdown-item active"
                    on:click={() => changeSort("bevanda")}>bevanda</button
                >
            </li>
            <li>
                <button
                    class="dropdown-item"
                    on:click={() => changeSort("frutta")}>frutta</button
                >
            </li>
            <li>
                <button
                    class="dropdown-item"
                    on:click={() => changeSort("panificio")}>panificio</button
                >
            </li>
            <li>
                <button
                    class="dropdown-item"
                    on:click={() => changeSort("latticini")}>latticini</button
                >
            </li>
            <li>
                <button
                    class="dropdown-item"
                    on:click={() => changeSort("alimenti")}>alimenti</button
                >
            </li>
            <li>
                <button
                    class="dropdown-item"
                    on:click={() => changeSort("snack")}>snack</button
                >
            </li>
            <li>
                <button
                    class="dropdown-item"
                    on:click={() => changeSort("carne")}>carne</button
                >
            </li>
            <li>
                <button
                    class="dropdown-item"
                    on:click={() => changeSort("pesce")}>pesce</button
                >
            </li>
            <li>
                <button
                    class="dropdown-item"
                    on:click={() => changeSort("verdura")}>verdura</button
                >
            </li>
            <li>
                <button
                    class="dropdown-item"
                    on:click={() => changeSort("dolci")}>dolci</button
                >
            </li>
        </ul>
    </div>
</div>

<div class="lista">
    {#each allItems as item (item.id)}
        <ul class="containerItem">
            <div class="item">
                <div class="scritte">
                    <span class="nome">{item.nome}</span>
                    <span class="marca">by {item.marca}</span>
                    <br />
                    <span class="prezzo">Costo: {item.prezzo} $</span>
                    <button
                        class="aggiungi"
                        on:click={() => {
                            addItem(item);
                        }}>ADD TO CART</button
                    >
                </div>
                <img src={item.imgLink} alt="alternatetext" class="immagine" />
            </div>
        </ul>
    {/each}
</div>

<style>
    .aggiungi {
        opacity: 1;
        background-color: rgb(240, 248, 255, 0);
        box-shadow: none;
        border: 0;
    }
    .prezzo {
        font-size: 30px;
    }
    .sortbutton {
        margin: 0;
        padding: 0;
        background-color: rgb(0, 0, 0, 0);
        box-shadow: none;
        border: 0px;
        height: 100%;
        width: auto;
    }
    .sort {
        display: flex;
        flex-direction: row;
        justify-content: end;
        width: 100%;
        height: 50px;
        padding-right: 75px;
    }

    .nome {
        margin-left: 5px;
        align-items: center;
        font-family: "Nunito", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
        font-size: 30px;
    }

    .marca {
        font-size: 20px;
    }
    .lista {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        overflow-y: auto;
    }
    .containerItem {
        background-color: rgb(230, 225, 225, 0.1);
        border-radius: 10px;
        padding: 10px;
        width: 80%;
    }
    .item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .containerItem img {
        height: 100px;
        width: auto;
    }

    .lista::-webkit-scrollbar {
        width: 12px; /* Width of the scrollbar */
    }

    .lista::-webkit-scrollbar-track {
        background: rgb(241, 241, 241, 0.3);
        border-radius: 10px;
    }

    .lista::-webkit-scrollbar-thumb {
        background: rgb(255, 255, 255, 0.7);
        border-radius: 10px;
    }

    .lista::-webkit-scrollbar-thumb:hover {
        background: #555; /* Color of the scrollbar thumb on hover */
    }
</style>

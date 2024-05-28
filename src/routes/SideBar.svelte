<script>
    export let allItems;
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
            <li><button class="dropdown-item active">bevanda</button></li>
            <li><button class="dropdown-item">frutta</button></li>
            <li><button class="dropdown-item">panificio</button></li>
            <li><button class="dropdown-item">latticini</button></li>
            <li><button class="dropdown-item">alimenti</button></li>
            <li><button class="dropdown-item">snack</button></li>
            <li><button class="dropdown-item">carne</button></li>
            <li><button class="dropdown-item">pesce</button></li>
            <li><button class="dropdown-item">verdura</button></li>
            <li><button class="dropdown-item">dolci</button></li>
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
                    <br />
                    <span class="prezzo">Costo: {item.prezzo} $</span>
                </div>
                <img src={item.imgLink} alt="alternatetext" class="immagine" />
            </div>
        </ul>
    {/each}
</div>

<style>
    .sortbutton {
        margin: 0;
        padding: 0;
        background-color: rgb(0, 0, 0, 0);
        box-shadow: none;
        border: 0px;
    }
    .sort {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }

    .nome {
        margin-left: 5px;
        align-items: center;
        font-family: "Nunito", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
        font-size: 25px;
        align-self: flex-start;
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

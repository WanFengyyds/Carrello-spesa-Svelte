<script>
    import { flip } from "svelte/animate";
    export let items;
    function toggleActive(item) {
        item.comprato = !item.comprato;
        items = [...items];
    }
    /*function removeItem(itemToRemove) {  

        items = items.filter((item) => item !== itemToRemove);
    }*/

    async function deleteItem(id, itemToRemove) {
        const response = await fetch("/api/add", {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                id: id,
            }),
        });
        const result = await response.json();
        items = items.filter((item) => item !== itemToRemove);
    }

    async function updateItem(item) {
        const response = await fetch("/api/add", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                id: item.id,
                comprato: !item.comprato,
            }),
        });
        const result = await response.json();
    }
</script>

<div class="itemList">
    {#each items as item (item.id)}
        <ul class="singoloItem">
            <label class="item">
                <div class="checkbox-wrapper-11">
                    <input
                        id="02-11"
                        type="checkbox"
                        name="id"
                        value={item.id}
                        checked={item.comprato}
                        on:change={() => {
                            updateItem(item);
                            toggleActive(item);
                        }}
                    />
                    <label for="02-11">{item.nome}</label>
                </div>

                <input type="hidden" name="id" value={item.id} />
                <button
                    class="remove-button"
                    aria-label="Remove"
                    on:click={deleteItem(item.id, item)}
                >
                    <i class="ri-delete-bin-line"></i>
                </button>
            </label>
        </ul>
    {/each}
</div>

<style>
    .item{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .singoloItem {
        padding: 0;
        display: flex;
        flex-direction: row;
    }

    .itemList {
        display: flex;
        flex-direction: column;
        height: 250px;
        overflow: auto;
        width: fit-content;
        align-items: center;
        gap: 1.2rem;
        padding: 1.3rem;
        width: 500px;
        font-size: 25px;
    }
    .itemList::-webkit-scrollbar {
        width: 8px; /* Set width of the scrollbar */
    }

    /* Track (the area behind the scrollbar) */
    .itemList::-webkit-scrollbar-track {
        background: #f1f1f1; /* Color of the track */
    }

    /* Handle (the draggable part of the scrollbar) */
    .itemList::-webkit-scrollbar-thumb {
        background: #888; /* Color of the handle */
        border-radius: 4px; /* Roundness of the handle */
    }

    /* Handle on hover */
    .itemList::-webkit-scrollbar-thumb:hover {
        background: #555; /* Color of the handle on hover */
    }

    button {
        border: none;
        margin: 0;
        padding: 0;
        width: auto;
        overflow: visible;
        cursor: pointer;

        background: transparent;

        /* inherit font & color from ancestor */
        color: inherit;
        font: inherit;

        /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */
        line-height: normal;

        /* Corrects font smoothing for webkit */
        -webkit-font-smoothing: inherit;
        -moz-osx-font-smoothing: inherit;

        /* Corrects inability to style clickable `input` types in iOS */
        -webkit-appearance: none;
    }

    .checkbox-wrapper-11 {
        --text: #414856;
        --check: #4f29f0;
        --disabled: #c3c8de;
        --border-radius: 10px;
        border-radius: var(--border-radius);
        position: relative;
        padding: 5px;
        display: grid;
        grid-template-columns: 30px auto;
        align-items: center;
    }
    .checkbox-wrapper-11 label {
        color: var(--text);
        position: relative;
        cursor: pointer;
        display: grid;
        align-items: center;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
        transition: color 0.3s ease;
    }
    .checkbox-wrapper-11 label::before,
    .checkbox-wrapper-11 label::after {
        content: "";
        position: absolute;
    }
    .checkbox-wrapper-11 label::before {
        height: 2px;
        width: 8px;
        left: -27px;
        background: var(--check);
        border-radius: 2px;
        transition: background 0.3s ease;
    }
    .checkbox-wrapper-11 label:after {
        height: 4px;
        width: 4px;
        top: 8px;
        left: -25px;
        border-radius: 50%;
    }
    .checkbox-wrapper-11 input[type="checkbox"] {
        -webkit-appearance: none;
        -moz-appearance: none;
        position: relative;
        height: 15px;
        width: 15px;
        outline: none;
        border: 0;
        margin: 0 15px 0 0;
        cursor: pointer;
        background: var(--background);
        display: grid;
        align-items: center;
    }
    .checkbox-wrapper-11 input[type="checkbox"]::before,
    .checkbox-wrapper-11 input[type="checkbox"]::after {
        content: "";
        position: absolute;
        height: 2px;
        top: auto;
        background: var(--check);
        border-radius: 2px;
    }
    .checkbox-wrapper-11 input[type="checkbox"]::before {
        width: 0px;
        right: 60%;
        transform-origin: right bottom;
    }
    .checkbox-wrapper-11 input[type="checkbox"]::after {
        width: 0px;
        left: 40%;
        transform-origin: left bottom;
    }
    .checkbox-wrapper-11 input[type="checkbox"]:checked::before {
        -webkit-animation: check-01-11 0.4s ease forwards;
        animation: check-01-11 0.4s ease forwards;
    }
    .checkbox-wrapper-11 input[type="checkbox"]:checked::after {
        -webkit-animation: check-02-11 0.4s ease forwards;
        animation: check-02-11 0.4s ease forwards;
    }
    .checkbox-wrapper-11 input[type="checkbox"]:checked + label {
        color: var(--disabled);
        -webkit-animation: move-11 0.3s ease 0.1s forwards;
        animation: move-11 0.3s ease 0.1s forwards;
    }
    .checkbox-wrapper-11 input[type="checkbox"]:checked + label::before {
        background: var(--disabled);
        -webkit-animation: slice-11 0.4s ease forwards;
        animation: slice-11 0.4s ease forwards;
    }
    .checkbox-wrapper-11 input[type="checkbox"]:checked + label::after {
        -webkit-animation: firework-11 0.5s ease forwards 0.1s;
        animation: firework-11 0.5s ease forwards 0.1s;
    }

    @-webkit-keyframes move-11 {
        50% {
            padding-left: 8px;
            padding-right: 0px;
        }
        100% {
            padding-right: 4px;
        }
    }

    @keyframes move-11 {
        50% {
            padding-left: 8px;
            padding-right: 0px;
        }
        100% {
            padding-right: 4px;
        }
    }
    @-webkit-keyframes slice-11 {
        60% {
            width: 100%;
            left: 4px;
        }
        100% {
            width: 100%;
            left: -2px;
            padding-left: 0;
        }
    }
    @keyframes slice-11 {
        60% {
            width: 100%;
            left: 4px;
        }
        100% {
            width: 100%;
            left: -2px;
            padding-left: 0;
        }
    }
    @-webkit-keyframes check-01-11 {
        0% {
            width: 4px;
            top: auto;
            transform: rotate(0);
        }
        50% {
            width: 0px;
            top: auto;
            transform: rotate(0);
        }
        51% {
            width: 0px;
            top: 8px;
            transform: rotate(45deg);
        }
        100% {
            width: 5px;
            top: 8px;
            transform: rotate(45deg);
        }
    }
    @keyframes check-01-11 {
        0% {
            width: 4px;
            top: auto;
            transform: rotate(0);
        }
        50% {
            width: 0px;
            top: auto;
            transform: rotate(0);
        }
        51% {
            width: 0px;
            top: 8px;
            transform: rotate(45deg);
        }
        100% {
            width: 5px;
            top: 8px;
            transform: rotate(45deg);
        }
    }
    @-webkit-keyframes check-02-11 {
        0% {
            width: 4px;
            top: auto;
            transform: rotate(0);
        }
        50% {
            width: 0px;
            top: auto;
            transform: rotate(0);
        }
        51% {
            width: 0px;
            top: 8px;
            transform: rotate(-45deg);
        }
        100% {
            width: 10px;
            top: 8px;
            transform: rotate(-45deg);
        }
    }
    @keyframes check-02-11 {
        0% {
            width: 4px;
            top: auto;
            transform: rotate(0);
        }
        50% {
            width: 0px;
            top: auto;
            transform: rotate(0);
        }
        51% {
            width: 0px;
            top: 8px;
            transform: rotate(-45deg);
        }
        100% {
            width: 10px;
            top: 8px;
            transform: rotate(-45deg);
        }
    }
    @-webkit-keyframes firework-11 {
        0% {
            opacity: 1;
            box-shadow:
                0 0 0 -2px #4f29f0,
                0 0 0 -2px #4f29f0,
                0 0 0 -2px #4f29f0,
                0 0 0 -2px #4f29f0,
                0 0 0 -2px #4f29f0,
                0 0 0 -2px #4f29f0;
        }
        30% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            box-shadow:
                0 -15px 0 0px #4f29f0,
                14px -8px 0 0px #4f29f0,
                14px 8px 0 0px #4f29f0,
                0 15px 0 0px #4f29f0,
                -14px 8px 0 0px #4f29f0,
                -14px -8px 0 0px #4f29f0;
        }
    }
    @keyframes firework-11 {
        0% {
            opacity: 1;
            box-shadow:
                0 0 0 -2px #4f29f0,
                0 0 0 -2px #4f29f0,
                0 0 0 -2px #4f29f0,
                0 0 0 -2px #4f29f0,
                0 0 0 -2px #4f29f0,
                0 0 0 -2px #4f29f0;
        }
        30% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            box-shadow:
                0 -15px 0 0px #4f29f0,
                14px -8px 0 0px #4f29f0,
                14px 8px 0 0px #4f29f0,
                0 15px 0 0px #4f29f0,
                -14px 8px 0 0px #4f29f0,
                -14px -8px 0 0px #4f29f0;
        }
    }

    @media (max-width: 576px) {
    .itemList {
        width: 100%; /* Make item list full width */
        height: auto; /* Adjust height */
        font-size: 20px; /* Adjust font size */
        padding: 1rem; /* Adjust padding */
    }
    
    .singoloItem {
        flex-direction: column; /* Stack items vertically */
        align-items: flex-start; /* Align items to the start */
    }

    .checkbox-wrapper-11 {
        grid-template-columns: 25px auto; /* Adjust grid columns */
        padding: 3px; /* Adjust padding */
    }

    .checkbox-wrapper-11 input[type="checkbox"] {
        height: 12px; /* Adjust size of checkbox */
        width: 12px; /* Adjust size of checkbox */
    }

    .checkbox-wrapper-11 label::before {
        left: -24px; /* Adjust position */
    }

    .checkbox-wrapper-11 label:after {
        left: -22px; /* Adjust position */
    }
}

</style>

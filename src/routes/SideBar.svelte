<script>
    export let allItems;
</script>

<div class="lista">
    {#each allItems as item (item.id)}
        <ul class="containerItem">
            <div class="item">
                <img src={item.imgLink} alt="alternatetext" />
                <span>{item.nome}</span>
            </div>
        </ul>
    {/each}
</div>

<style>
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

    .containerItem img {
        height: 100px;
        width: auto;
        align-items: center;
        justify-content: center;
    }
</style>

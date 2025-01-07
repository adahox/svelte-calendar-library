<script lang="ts">
    import { getContext } from "svelte";
    import { contextMenuStore } from "$lib/stores/contextMenu.store.js";

    let menuOptions: { [key: string]: Function } = getContext("menuOptions");

    function closeMenu() {
        contextMenuStore.update((store) => {
            store.setVisibility(false, 0, 0);
            return store;
        });
    }
</script>

<div>
    {#if $contextMenuStore.show}
        <div
            role="none"
            class="context-menu"
            style="top: {$contextMenuStore.position
                .y}px; left: {$contextMenuStore.position.x}px"
            onclick={() => closeMenu()}
        >
            <span>Dia Selecionado: {$contextMenuStore.selectedDay}</span>
            <ul>
                {#each Object.entries(menuOptions) as [key, value]}
                    <li role="none" onclick={value()}>{key}</li>
                {/each}
            </ul>
        </div>
    {/if}
</div>

<style>
    .context-menu {
        position: absolute;
        background-color: white;
        border: 1px solid #ccc;
        box-shadow: 7px 8px 5px 0px rgb(10 10 10 / 42%);
        padding: 10px;
        z-index: 3;
    }

    .context-menu span {
        font-size: 0.8rem;
        color: #6b6b6b;
        font-weight: 200;
    }

    .context-menu ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .context-menu ul li {
        font-weight: 300;
        font-family: "Poppins", sans-serif;
    }

    .context-menu li {
        padding: 8px;
        cursor: pointer;
    }

    .context-menu li:hover {
        background-color: #f0f0f0;
    }
</style>

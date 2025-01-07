<script lang="ts">
    export let days: Array<string> = [];
</script>

<ul class="weeks">
    {#each days as day}
        <li>{day}</li>
    {/each}
</ul>

<style>
    .weeks {
        display: flex;
        padding: 0;
        list-style: none;
        flex-wrap: wrap;
        text-align: center;
    }

    .weeks li {
        font-weight: bold;
        width: calc(100% / 7);
    }
</style>

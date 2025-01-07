<script lang="ts">
    import Calendar from "$lib/Calendar.svelte";
    import { contextMenuStore } from "$lib/stores/contextMenu.store.js";
    type MenuOptions = {
        [key: string]: Function;
    };

    export let options: { menuOptions: MenuOptions } = {
        menuOptions: {
            close: () => $contextMenuStore.defaultClose,
        },
    };
</script>

<Calendar {options} />

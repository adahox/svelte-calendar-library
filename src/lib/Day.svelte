<script lang="ts">
    import { contextMenuStore } from "$lib/stores/contextMenu.store.js";

    export let day: { day: number; isInactive: boolean; isToday?: boolean };

    function showContextMenu(x: number, y: number, day: number) {
        contextMenuStore.update((store) => {
            store.setVisibility(true, x, y);
            store.selectedDay = day;
            return store;
        });
    }

    function rightClickHandler(event: MouseEvent, day: number) {
        event.preventDefault();

        showContextMenu(event.clientX, event.clientY, day);
    }
</script>

<li
    oncontextmenu={(event) => rightClickHandler(event, day.day)}
    class="{day.isInactive ? 'inactive' : ''} {day.isToday ? 'active' : ''}"
>
    {day.day}
</li>

<style>
    li {
        margin-top: 30px;
        z-index: 1;
        cursor: pointer;
        position: relative;
        width: calc(100% / 7);
    }

    li.inactive {
        color: #aaa;
    }

    li.active {
        color: #fff;
    }

    li::before {
        position: absolute;
        content: "";
        height: 40px;
        width: 40px;
        top: 50%;
        left: 50%;
        z-index: -1;
        border-radius: 50%;
        transform: translate(-50%, -50%);
    }

    li:hover::before {
        background: #f2f2f2;
        color: #000;
    }

    li.active::before {
        background: #9b59b6;
        color: #000;
    }
</style>

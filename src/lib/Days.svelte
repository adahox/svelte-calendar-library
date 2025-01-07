<script lang="ts">
    import Day from "$lib/Day.svelte";

    export let currentYear;
    export let currentMonth;
    let date = new Date();

    $: firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    $: lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    $: lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();

    let days: { day: number; isInactive: boolean; isToday?: boolean }[] = [];

    let totalCells = 5 * 7;

    $: {
        days = [];

        for (let i = 0; i < totalCells; i++) {
            let currentDay = i - firstDayOfMonth + 1;

            let dayData: any = { day: 0, isInactive: false };

            if (currentDay <= 0) {
                // Dias do mês anterior
                dayData = {
                    day: lastDateOfLastMonth + currentDay,
                    isInactive: true,
                    isToday: false,
                };
            } else if (currentDay <= lastDateOfMonth) {
                // Dias do mês atual
                dayData = { day: currentDay, isInactive: false };
                dayData.isToday =
                    currentDay === date.getDate() &&
                    currentMonth === date.getMonth() &&
                    currentYear === date.getFullYear();
            } else {
                // Dias do próximo mês
                dayData = {
                    day: currentDay - lastDateOfMonth,
                    isInactive: true,
                    isToday: false,
                };
            }

            days.push(dayData);
        }
    }
</script>

<ul class="days">
    {#each days as day: any}
        <Day {day} />
    {/each}
</ul>

<style>
    .days {
        margin-bottom: 30px;
        display: flex;
        padding: 0;
        list-style: none;
        flex-wrap: wrap;
        text-align: center;
    }
</style>

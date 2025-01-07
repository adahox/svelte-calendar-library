<script lang="ts">
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
        <li
            class="{day.isInactive ? 'inactive' : ''} {day.isToday
                ? 'active'
                : ''}"
        >
            {day.day}
        </li>
    {/each}
</ul>

<style>
    .days li.inactive {
        color: #aaa;
    }

    .days li.active {
        color: #fff;
    }

    .days li:hover::before {
        background: #f2f2f2;
        color: #000;
    }

    .days li.active::before {
        background: #9b59b6;
        color: #000;
    }

    .days {
        margin-bottom: 30px;
        display: flex;
        padding: 0;
        list-style: none;
        flex-wrap: wrap;
        text-align: center;
    }

    .days li {
        margin-top: 30px;
        z-index: 1;
        cursor: pointer;
    }

    .days li::before {
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

    .days li {
        position: relative;
        font-weight: bold;
        width: calc(100% / 7);
    }
</style>

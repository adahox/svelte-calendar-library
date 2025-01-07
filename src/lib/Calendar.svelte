<script lang="ts">
    import Week from "./Week.svelte";
    import Days from "./Days.svelte";

    const weeksDaysList = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

    const Months = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];

    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();
    let date: Date = new Date();

    function fowardCalendar() {
        currentMonth = currentMonth + 1;
        updateCalendar();
    }

    function backwardCalendar() {
        currentMonth = currentMonth - 1;
        updateCalendar();
    }

    function updateCalendar() {
        if (currentMonth < 0 || currentMonth > 11) {
            date = new Date(currentYear, currentMonth);
            currentYear = date.getFullYear();
            currentMonth = date.getMonth();
        } else {
            date = new Date();
        }
    }
</script>

<section class="body">
    <div class="wrapper">
        <header>
            <p class="current-date">{Months[currentMonth]} {currentYear}</p>
            <div class="icons">
                <span
                    role="button"
                    onclick={backwardCalendar}
                    id="prevIcon"
                    class="leftIcon">{@html "<"}</span
                >
                <span
                    role="button"
                    onclick={fowardCalendar}
                    id="nextIcon"
                    class="rightIcon">{@html ">"}</span
                >
            </div>
        </header>
        <div class="calendar">
            <Week days={weeksDaysList} />
            <Days {currentYear} {currentMonth} />
        </div>
    </div>
</section>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }

    section.body {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background: #9b59b6;
    }

    .wrapper {
        background: #fff;
        width: 450px;
        border-radius: 10px;
    }

    .wrapper header {
        display: flex;
        align-items: center;
        padding: 25px 30px 10px;
        justify-content: space-between;
    }

    header .current-date {
        font-size: 1.45rem;
        font-weight: 500;
    }

    header .icons span {
        padding: 10px 20px;
        color: #878787;
        font-size: 1.5rem;
        margin: 0 1px;
        border-radius: 50px;
        font-weight: 800;
    }

    header .icons span:hover {
        background: #f3f3f3;
    }

    header .icons span:last-child {
        margin-right: -10px;
    }

    .calendar {
        padding: 20px;
    }
</style>

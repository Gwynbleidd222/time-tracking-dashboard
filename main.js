document.addEventListener("DOMContentLoaded", async function () {
    const response = await fetch("data.json");
    const data = await response.json();

    const currentItems = document.querySelectorAll('.time');
    const prevItems = document.querySelectorAll('.hrs'); 
    const buttons = document.querySelectorAll(".dashboard-data button");

    const timeLabels = {
        daily: "day",
        weekly: "week",
        monthly: "month"
    };

    function updateTime(category) {
        data.forEach((item, index) => {
            currentItems[index].textContent = `${item.timeframes[category].current}hrs`;
            prevItems[index].textContent = `Last ${timeLabels[category]} - ${item.timeframes[category].previous}hrs`;
        });

       
        buttons.forEach(button => button.classList.remove("active"));
        
        document.querySelector(`#btn${category === "daily" ? 1 : category === "weekly" ? 2 : 3}`).classList.add("active");
    }

    document.querySelector("#btn1").addEventListener("click", () => updateTime("daily"));
    document.querySelector("#btn2").addEventListener("click", () => updateTime("weekly"));
    document.querySelector("#btn3").addEventListener("click", () => updateTime("monthly"));

    updateTime("daily");
});
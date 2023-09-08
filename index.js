const DAY = new Date().getDay()
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
document.querySelector("[data-testid='currentDayOfTheWeek']").textContent = days[DAY]
document.querySelector("[data-testid='currentUTCTime']").textContent = new Date().getTime()
setInterval(()=> {
    let UTC = new Date().getTime()
    document.querySelector("[data-testid='currentUTCTime']").textContent = UTC
}, 1000)
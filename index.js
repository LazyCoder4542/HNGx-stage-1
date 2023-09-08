const date = new Date()
const DAY = date.getDay()
let UTC = date.getTime()
console.log(UTC);
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
document.querySelector("[data-testid='currentDayOfTheWeek']").textContent = days[DAY]
document.querySelector("[data-testid='currentUTCTime']").textContent = UTC
let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "october",
    "November",
    "December"
];

let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let fulldate = "Last Updated: " + dayName + ", " + monthName + " " + d.getDate() + ", " +
d.getFullYear();

document.getElementById('currentdate').textContent = fulldate;
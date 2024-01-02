const secondHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hourHand  = document.querySelector(".hour-hand");
function setDate() {
const now = new Date();
const seconds = now.getSeconds();
const secondsDegrees = ((seconds / 60) * 360) + 90;
secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
// console.log(seconds);

const minutes = now.getMinutes();
const minsDegrees = ((minutes / 60 ) * 360 ) + 90;
minutesHand.style.transform = `rotate(${minsDegrees}deg)`;

const hour = now.getMinutes();
const hourDegrees = ((minutes / 60 ) * 360 ) + 90;
hourHand.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(setDate, 1000);
// console.log("hi")

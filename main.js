const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.minut-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    //set to real time
    const now = new Date();
    //for seconnds
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    //For minutes
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 0;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    //For hours
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 230;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate, 1000);
setDate();
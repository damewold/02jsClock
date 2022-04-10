
//select the elements from DOM

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){

    const day = new Date();

    const seconds = day.getSeconds();
    const secondsDegrees = ((seconds/60)*360)+90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    
    const minutes = day.getMinutes();
    const hours = day.getHours();




}
//timer

// set the date we're counting down to...
const countDownDate = new Date('July 9, 2020 14:30:00').getTime();
console.log(countDownDate);

// update the count down every 1 second
let countDown = setInterval(() => {
    // get today's date and time
    let today = new Date().getTime();

    // find the distance between today and the count down date
    let distance = countDownDate - today;

    // time calculations for days, hours, minutes, and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    console.log(`
        day: ${days}
        hours: ${hours}
        minutes: ${minutes}
        seconds: ${seconds}
    `);

    // display the result in the 'timer id'
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;


    // if the count down is finished, write some text. Possible info on IG account, or gallery?
    if(distance < 0 ) {
        clearInterval(countDown);
        document.getElementById('timer').innerHTML = 'expired...';
    }

}, 1000);
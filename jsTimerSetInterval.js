const countdownDate = new Date("May 03, 2023 23:59:59").getTime();
// countdownDate.setHours(23);
// countdownDate.setMinutes(59);
// countdownDate.setSeconds(59);

// const countdownTime = new Date(countdownDate).getTime();

// Update the countdown every second
const countdown = setInterval(() => {
    const now = new Date().getTime();

    // Calculate the time remaining
    const distance = countdownDate - now;
    // const distance = countdownTime - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdownI").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdownI").innerHTML = "Time Out !!"
    }

}, 1000);
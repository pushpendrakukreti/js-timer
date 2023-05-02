const startCountdown = (sec) => {
    const timer = document.getElementById('countdownT');
    let duration = sec; // Change this to set the duration of the countdown in seconds
    let startTime = new Date().getTime();
    function tick() {
        let currentTime = new Date().getTime();
        let remainingTime = duration - Math.floor((currentTime - startTime) / 1000);
        let hours = Math.floor(remainingTime / 3600);
        let minutes = Math.floor((remainingTime % 3600) / 60);
        let seconds = remainingTime % 60;
        timer.innerHTML = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (remainingTime > 0) {
            setTimeout(tick, 1000);
        } else {
            timer.innerHTML = '00:00:00';
        }
    }
    tick();
};

startCountdown(7200);
// Set the date we're counting down to
const weddingDate = new Date("Apr 25, 2025 10:00:00").getTime();

// Update the countdown every 1 second
const countdownFunction = setInterval(() => {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the wedding date
    const distance = weddingDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="countdown-timer"
    document.getElementById("countdown-timer").innerHTML = `
        <div>${days} <small>Hari</small></div>
        <div>${hours} <small>Jam</small></div>
        <div>${minutes} <small>Menit</small></div>
        <div>${seconds} <small>Detik</small></div>
    `;

    // If the countdown is over, write some text
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown-timer").innerHTML = "Selamat Menikah!";
    }
}, 1000);
window.onload = function () {
  function countdown() {
    const targetDate = new Date("2025-06-24T00:00:00").getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
  }

  setInterval(countdown, 1000);
  countdown();

  function startSite(playMusic) {
    document.getElementById('intro-overlay').style.display = 'none';
    const music = document.getElementById('bgMusic');
    if (playMusic) {
      music.play();
    } else {
      music.pause();
    }
  }

  document.getElementById('playMusic').addEventListener('click', () => startSite(true));
  document.getElementById('muteMusic').addEventListener('click', () => startSite(false));
};

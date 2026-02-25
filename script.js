const themeToggle = document.getElementById('themeToggle');
const timer = document.getElementById('timer');

const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 11);
launchDate.setHours(18, 0, 0, 0);

function pad(value) {
  return String(value).padStart(2, '0');
}

function updateTimer() {
  const diff = launchDate.getTime() - Date.now();

  if (diff <= 0) {
    timer.textContent = 'La saison est en ligne 🚀';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timer.textContent = `${days}j ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
}

updateTimer();
setInterval(updateTimer, 1000);

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('neon');
  themeToggle.textContent = document.body.classList.contains('neon')
    ? 'Mode Classique'
    : 'Mode Néon';
});

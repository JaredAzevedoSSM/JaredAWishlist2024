const snowfall = document.querySelector('.snowfall');
const gift = document.querySelector('.gift-box');
const message = document.querySelector('.gift-message');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (snowfall && !reducedMotion.matches) {
  const flakeCount = window.innerWidth < 600 ? 32 : 58;
  for (let i = 0; i < flakeCount; i += 1) {
    const flake = document.createElement('span');
    flake.className = 'snowflake';
    flake.style.setProperty('--left', `${Math.random() * 100}%`);
    flake.style.setProperty('--size', `${3 + Math.random() * 6}px`);
    flake.style.setProperty('--duration', `${6 + Math.random() * 9}s`);
    flake.style.setProperty('--delay', `${Math.random() * -20}s`);
    flake.style.setProperty('--sway', `${-35 + Math.random() * 70}px`);
    snowfall.appendChild(flake);
  }
}

if (gift && message) {
  let closeMessage;
  gift.addEventListener('click', () => {
    gift.classList.remove('is-open');
    void gift.offsetWidth;
    gift.classList.add('is-open');
    message.classList.add('is-visible');
    window.clearTimeout(closeMessage);
    closeMessage = window.setTimeout(() => message.classList.remove('is-visible'), 2200);
  });
}


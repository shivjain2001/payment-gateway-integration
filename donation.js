const typeWriter = document.getElementById('typewriter-text');
const text = 'Why to Donate us?';

typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);
const scrollProgress = document.getElementById('scroll-progress');
const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});
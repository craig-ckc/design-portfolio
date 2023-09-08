var paused = true;

const lenis = new Lenis({
  lerp: 0.1,
  wheelMultiplier: 0.9,
  duration: 1.8,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


// 

function toggle() {
  paused ? lenis.stop() : lenis.start()

  $('.menu').toggleClass('open')
  $('.nav-container').toggleClass('open')

  paused = !paused
}

const animatedDivs = document.querySelectorAll('.button-animation');

animatedDivs.forEach(div => {
  div.addEventListener('click', () => {
    div.style.transition = 'transform 0.15s ease-out';
    div.style.transform = 'scale(0.96)';
    setTimeout(() => div.style.transform = 'scale(1)', 150); 
    div.style.transition = 'transform 0.3s ease-out';
  });
});
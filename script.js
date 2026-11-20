// A simple star field. The essay cards float above this canvas.
const canvas = document.getElementById("starryBackground");
const ctx = canvas.getContext("2d");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let stars = [];
let animationId;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // Each star has a position, size, and different twinkle speed.
  stars = Array.from({ length: 115 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 1.5 + 0.35,
    phase: Math.random() * Math.PI * 2,
    speed: Math.random() * 0.0006 + 0.00025
  }));
  if (animationId) cancelAnimationFrame(animationId);
  drawStars(0);
}

function drawStars(time) {
  ctx.fillStyle = "#192434";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (const star of stars) {
    const brightness = reduceMotion ? 0.7 : 0.55 + 0.35 * Math.sin(time * star.speed + star.phase);
    ctx.fillStyle = `rgba(255, 244, 219, ${brightness})`;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
  }
  if (!reduceMotion) animationId = requestAnimationFrame(drawStars);
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

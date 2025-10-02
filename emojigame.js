// script.js
document.addEventListener("DOMContentLoaded", () => {

  const startBtn = document.getElementById("startKnapp");
  const frontScreen = document.getElementById("forside");
  const gameScreen = document.getElementById("spill");
  const backBtn = document.getElementById("backBtn");
  const spinBtn = document.getElementById("spinBtn");
  const canvas = document.getElementById("spinner");
  const kategoriKnapper = document.getElementById("kategoriKnapper");

  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const categories = ["Mat", "Sport", "Dyr", "Filmer", "Musikk", "Reise"];
  const n = categories.length;

  function drawWheelBase() {
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const radius = Math.min(cx, cy) - 4;
    const arc = (2 * Math.PI) / n;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < n; i++) {
      const start = i * arc;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, start, start + arc, false);
      ctx.closePath();
      ctx.fillStyle = (i % 2 === 0) ? '#C8A2C8' : '#FFD700'; // lilac / gul
      ctx.fill();
      ctx.strokeStyle = '#ddd';
      ctx.stroke();

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(start + arc / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#111';
      ctx.font = 'bold 14px Arial';
      ctx.fillText(categories[i], radius - 10, 6);
      ctx.restore();
    }
  }

  drawWheelBase();

  let currentRotation = 0;
  let spinning = false;

  function setCanvasRotation(deg, withTransition = true, duration = 4000) {
    if (withTransition) {
      canvas.style.transition = `transform ${duration}ms cubic-bezier(0.22,0.61,0.36,1)`;
    } else {
      canvas.style.transition = 'none';
    }
    canvas.style.transform = `rotate(${deg}deg)`;
  }

  function spinToRandom() {
    if (spinning) return;
    spinning = true;

    const randomIndex = Math.floor(Math.random() * n);
    const sliceDeg = 360 / n;
    const centerAngle = randomIndex * sliceDeg + sliceDeg / 2;

    // Pilen peker nedover = 90 grader
    const pointerAngle = 90;
    const extraRounds = 3 + Math.floor(Math.random() * 3);

    const finalRotation = extraRounds * 360 + (pointerAngle - centerAngle);

    currentRotation += finalRotation;
    const duration = 3500 + extraRounds * 200;
    setCanvasRotation(currentRotation, true, duration);
  }

  canvas.addEventListener('transitionend', () => {
    canvas.style.transition = 'none';
    currentRotation = ((currentRotation % 360) + 360) % 360;
    canvas.style.transform = `rotate(${currentRotation}deg)`;
    spinning = false;
  });

  if (spinBtn) {
    spinBtn.addEventListener('click', spinToRandom);
  } else {
    canvas.addEventListener('click', spinToRandom);
  }

  if (startBtn && frontScreen && gameScreen) {
    startBtn.addEventListener('click', () => {
      frontScreen.classList.add('d-none');
      gameScreen.classList.remove('d-none');
      drawWheelBase();
      currentRotation = 0;
      setCanvasRotation(currentRotation, false);
    });
  }

  if (backBtn && frontScreen && gameScreen) {
    backBtn.addEventListener('click', () => {
      gameScreen.classList.add('d-none');
      frontScreen.classList.remove('d-none');
    });
  }

  if (kategoriKnapper) {
    kategoriKnapper.innerHTML = '';
    categories.forEach(cat => {
      const b = document.createElement('a');
      b.className = 'btn btn-warning w-50';
      b.textContent = cat;
      b.href = `${cat.toLowerCase().replace(/\s+/g,'_')}.html`;
      kategoriKnapper.appendChild(b);
    });
  }

  drawWheelBase();
});

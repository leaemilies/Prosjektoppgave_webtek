document.addEventListener("DOMContentLoaded", () => {

  const startBtn = document.getElementById("startKnapp");
  const frontScreen = document.getElementById("forside");
  const gameScreen = document.getElementById("spill");
  const backBtn = document.getElementById("backBtn");
  const spinBtn = document.getElementById("spinBtn");
  const canvas = document.getElementById("spinner");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  // Kategorier + filnavn (inkl. Mixed)
  const categories = ["Mat og drikke","Film og bøker","Musikk","Land","Ordtak","Mixed"];
  const ROUTES = {
    "Mat og drikke": "HTML/Kategoier/matogdrikke.html",
    "Film og bøker": "HTML/Kategoier/filmogboker.html",
    "Musikk": "HTML/Kategoier/musikk.html",
    "Land": "HTML/Kategoier/land.html",
    "Ordtak": "HTML/Kategoier/ordtak.html",
    "Mixed": "HTML/Kategoier/mixed.html"
  };
  const n = categories.length;

  // Tegn hjulet
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
      ctx.fillStyle = (i % 2 === 0) ? "#C8A2C8" : "#FFD700";
      ctx.fill();
      ctx.strokeStyle = "#ddd";
      ctx.stroke();

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(start + arc / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "#111";
      ctx.font = "bold 14px Arial";
      ctx.fillText(categories[i], radius - 10, 6);
      ctx.restore();
    }
  }
  drawWheelBase();

  let currentRotation = 0;
  let spinning = false;

  function setCanvasRotation(deg, withTransition = true, duration = 4000) {
    canvas.style.transition = withTransition
      ? `transform ${duration}ms cubic-bezier(0.22,0.61,0.36,1)`
      : "none";
    canvas.style.transform = `rotate(${deg}deg)`;
  }

  function spinToRandom() {
    if (spinning) return;
    spinning = true;

    const sliceDeg = 360 / n;
    const randomIndex = Math.floor(Math.random() * n);
    const centerAngle = randomIndex * sliceDeg + sliceDeg / 2;

    const pointerAngle = 270; // pil på toppen som peker NED = 270°
    const extraRounds = 3 + Math.floor(Math.random() * 3);
    const finalRotation = extraRounds * 360 + (pointerAngle - centerAngle);

    currentRotation += finalRotation;
    const duration = 3500 + extraRounds * 200;

    setCanvasRotation(currentRotation, true, duration);

    canvas.dataset.target = categories[randomIndex];
  }

  canvas.addEventListener("transitionend", () => {
    canvas.style.transition = "none";
    currentRotation = ((currentRotation % 360) + 360) % 360;
    canvas.style.transform = `rotate(${currentRotation}deg)`;
    spinning = false;

    const selected = canvas.dataset.target;
    if (selected && ROUTES[selected]) {
      window.location.href = ROUTES[selected];
    }
  });

  if (spinBtn) spinBtn.addEventListener("click", spinToRandom);

  if (startBtn && frontScreen && gameScreen) {
    startBtn.addEventListener("click", () => {
      frontScreen.classList.add("d-none");
      gameScreen.classList.remove("d-none");
      drawWheelBase();
      currentRotation = 0;
      setCanvasRotation(currentRotation, false);
    });
  }

  if (backBtn && frontScreen && gameScreen) {
    backBtn.addEventListener("click", () => {
      gameScreen.classList.add("d-none");
      frontScreen.classList.remove("d-none");
    });
  }
});
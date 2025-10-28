document.addEventListener("DOMContentLoaded", () => {

  const startBtn = document.getElementById("startKnapp");
  const frontScreen = document.getElementById("forside");
  const gameScreen = document.getElementById("spill");
  const backBtn = document.getElementById("backBtn");
  const spinBtn = document.getElementById("spinBtn");
  const canvas = document.getElementById("spinner");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  // Legger til at pilen skal spinne //
  const arrowEl = document.querySelector(".arrow-spin");

  // Kategorier + filnavn (inkl. Mixed)
  const categories = ["Mat og drikke","Film og bøker","Musikk","Land","Ordtak","Mixed"];
  const ROUTES = {
    "Mat og drikke": "HTML/Kategorier/matogdrikke.html",
    "Film og bøker": "HTML/Kategorier/filmogboker.html",
    "Musikk": "HTML/Kategorier/musikk.html",
    "Land": "HTML/Kategorier/land.html",
    "Ordtak": "HTML/Kategorier/ordtak.html",
    "Mixed": "HTML/Kategorier/mix.html"
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
      ctx.font = "bold 16px 'Sour Gummy', sans-serif";
      ctx.fillText(categories[i], radius - 10, 6);
      ctx.restore();
    }
  }
  drawWheelBase();

  /* Fjerner rotasjonen av selve hjulet:
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

  */


/* Kommenterer ut den forrige pil-versjonen som ikke fungerer

  arrowEl?.addEventListener("transitionend", () => {
  // Lås inn sluttvinkel for neste runde
  arrowEl.style.transition = "none";
  arrowRotation = ((arrowRotation % 360) + 360) % 360;
  arrowEl.style.transform = `rotate(${finalRotation}deg)`;
  spinning = false;

  const selected = arrowEl.dataset.target;
  if (selected && ROUTES[selected]) {
    window.location.href = ROUTES[selected];
  }
});

// Ny spinn-funksjon for pilen: //

let arrowRotation = 0;   
let spinning = false;    

function spinArrowToRandom() {
  if (spinning) return;
  spinning = true;

  const sliceDeg = 360 / n;

  // Velg tilfeldig kategori
  const targetIndex = Math.floor(Math.random() * n);

  const targetCenterFromRight = targetIndex * sliceDeg + sliceDeg / 2;

  const extraRounds = 3 + Math.floor(Math.random() * 3); // 3–5 runder
  const finalRotation = extraRounds * 360 + (targetCenterFromRight - 270);

  const duration = 3500 + extraRounds * 200;

  if (!arrowEl) return; // sikkerhet
  arrowEl.style.transition = `transform ${duration}ms cubic-bezier(0.22,0.61,0.36,1)`;
  arrowEl.style.transform = `translate(-50%, -100%) rotate(${finalRotation}deg)`;

  arrowEl.dataset.target = categories[targetIndex];
  arrowRotation = finalRotation;
}

*/

/* Legger inn ny versjon av pil-spinn under: */
// --- PIL: variabler må stå FØR lyttere/funksjoner ---
let arrowRotation = 0;   // gjeldende vinkel
let spinning = false;

// Når spinn er ferdig
arrowEl?.addEventListener("transitionend", () => {
  arrowEl.style.transition = "none";
  arrowRotation = ((arrowRotation % 360) + 360) % 360;   // normaliser
  arrowEl.style.transform = `rotate(${arrowRotation}deg)`; // ingen translate
  spinning = false;

  const selected = arrowEl.dataset.target;
  if (selected && ROUTES[selected]) {
    window.location.href = ROUTES[selected];
  }
});

// Spinn-funksjonen
function spinArrowToRandom() {
  if (spinning) return;
  spinning = true;

  const sliceDeg = 360 / n;
  const targetIndex = Math.floor(Math.random() * n);
  const targetCenterFromRight = targetIndex * sliceDeg + sliceDeg / 2;
  const extraRounds = 3 + Math.floor(Math.random() * 3);
  const finalRotation = extraRounds * 360 + (targetCenterFromRight - 270);
  const duration = 3500 + extraRounds * 200;

  if (!arrowEl) return;
  arrowEl.style.transition = `transform ${duration}ms cubic-bezier(0.22,0.61,0.36,1)`;
  arrowEl.style.transform = `rotate(${finalRotation}deg)`; // ← bare rotate

  arrowEl.dataset.target = categories[targetIndex];
  arrowRotation = finalRotation;
}

/* Fjerner forrige trykk spinn
  if (spinBtn) spinBtn.addEventListener("click", spinToRandom);
*/

// Legger inn ny: //
if (spinBtn) spinBtn.addEventListener("click", spinArrowToRandom);

/* Fjerner gammel versjon av hjul trykk:
  if (startBtn && frontScreen && gameScreen) {
    startBtn.addEventListener("click", () => {
      frontScreen.classList.add("d-none");
      gameScreen.classList.remove("d-none");
      drawWheelBase();
      currentRotation = 0;
      setCanvasRotation(currentRotation, false);
    });
  }
*/

// Legger inn ny hjultrykk:
if (startBtn && frontScreen && gameScreen) {
  startBtn.addEventListener("click", () => {
    frontScreen.classList.add("d-none");
    gameScreen.classList.remove("d-none");
    drawWheelBase();
    arrowRotation = 0;

    // Nullstill pilens posisjon (slik at den peker rett opp når du åpner spillet)
    if (arrowEl) {
      arrowEl.style.transition = "none";
      arrowEl.style.transform = `translate(-50%, -100%) rotate(0deg)`;
    }
  });
}


  if (backBtn && frontScreen && gameScreen) {
    backBtn.addEventListener("click", () => {
      gameScreen.classList.add("d-none");
      frontScreen.classList.remove("d-none");
    });
  }
});

  // Konfetti-knapp
const button = document.getElementById("confettiButton");

    button.addEventListener("click", () => {
      // Avfyr konfetti
      confetti({
        particleCount: 200,
        spread: 90,
        startVelocity: 40,
        gravity: 0.8,
        origin: { y: 0.6 },
        colors: ["#ffb6c1", "#ffd700", "#87cefa", "#98fb98"],
      });

      // Gi knappen litt sprett-animasjon
      button.style.transform = "scale(1.2)";
      setTimeout(() => (button.style.transform = "scale(1)"), 200);
    });
    
const startKnapp = document.getElementById("startKnapp");
const forside = document.getElementById("forside");
const kategoriSkjerm = document.getElementById("kategoriSkjerm");

startKnapp.addEventListener("click", () => {
  forside.classList.add("d-none");
  kategoriSkjerm.classList.remove("d-none");
});

// --- Spinner logikk ---
const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const categories = ["Film og bøker", "Musikk", "Land", "Spill", "Ordtak", "Mat og drikke"];
const colors = ["#FFD54F", "#4FC3F7", "#FFD54F", "#4FC3F7", "#FFD54F", "#4FC3F7"];

let angle = 0;
const arc = (2 * Math.PI) / categories.length;

// Tegn hjulet
function drawWheel() {
  for (let i = 0; i < categories.length; i++) {
    const startAngle = i * arc;
    ctx.beginPath();
    ctx.fillStyle = colors[i];
    ctx.moveTo(150, 150);
    ctx.arc(150, 150, 150, startAngle, startAngle + arc);
    ctx.lineTo(150, 150);
    ctx.fill();

    // Tekst
    ctx.save();
    ctx.translate(150, 150);
    ctx.rotate(startAngle + arc / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#000";
    ctx.font = "16px Arial";
    ctx.fillText(categories[i], 140, 10);
    ctx.restore();
  }
}
drawWheel();

const spinBtn = document.getElementById("spinBtn");
let spinning = false;

spinBtn.addEventListener("click", () => {
  if (spinning) return;
  spinning = true;

  let spinAngle = Math.random() * 2000 + 2000; // tilfeldig rotasjon
  let duration = 4000; // 4 sekunder

  const start = performance.now();

  function animate(now) {
    let elapsed = now - start;
    let progress = Math.min(elapsed / duration, 1);

    angle = spinAngle * (1 - Math.pow(1 - progress, 3)); // ease out
    ctx.clearRect(0, 0, 300, 300);
    ctx.save();
    ctx.translate(150, 150);
    ctx.rotate(angle * Math.PI / 180);
    ctx.translate(-150, -150);
    drawWheel();
    ctx.restore();

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      spinning = false;
      const winningIndex = Math.floor(((angle % 360) / 360) * categories.length);
      alert("Du fikk: " + categories[(categories.length - 1 - winningIndex) % categories.length]);
    }
  }
  requestAnimationFrame(animate);
});
// Elementer
const forside = document.getElementById('forside');
const startKnapp = document.getElementById('startKnapp');
const kategoriSkjerm = document.getElementById('kategoriSkjerm');
const tilbake = document.getElementById('tilbake');

const canvas = document.getElementById('wheel');
const ctx = canvas.getContext('2d');
const spinBtn = document.getElementById('spinBtn');
const resultatEl = document.getElementById('resultat');

// kategorier (samme rekkefølge som sektorer på hjulet)
const categories = ["Film og bøker", "Musikk", "Land", "Spill", "Ordtak", "Mat og drikke"];
const sliceCount = categories.length;
const sliceAngle = (2 * Math.PI) / sliceCount;

// start/tilbake logikk
startKnapp.addEventListener('click', () => {
  forside.classList.add('d-none');
  kategoriSkjerm.classList.remove('d-none');
});
tilbake.addEventListener('click', () => {
  kategoriSkjerm.classList.add('d-none');
  forside.classList.remove('d-none');
});

// tegn hjulet (uten rotasjon)
function drawStaticWheel() {
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const radius = Math.min(cx, cy) - 4;

  for (let i = 0; i < sliceCount; i++) {
    const start = i * sliceAngle;
    const end = start + sliceAngle;

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, radius, start, end);
    ctx.closePath();
    ctx.fillStyle = (i % 2 === 0) ? '#C8A2C8' : '#FFFACD';
    ctx.fill();
    ctx.strokeStyle = '#ddd';
    ctx.stroke();

    // skriv kategori-tekst radialt
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(start + sliceAngle / 2);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#111';
    ctx.font = 'bold 14px Arial';
    ctx.fillText(categories[i], radius - 10, 6);
    ctx.restore();
  }
}

// Vi tegner statisk hjulet til et offscreen-canvas og så roterer ved render for jevnhet
drawStaticWheel();

// global vinkel i grader (antall grader hjulet har rotert)
let currentRotation = 0; // i grader
let spinning = false;

// render-funksjon: roter hele hjulet før å tegne (for å opprettholde tekstlesbarhet kan teksten rotere med hjulet)
function renderWheel(rotationDeg) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  // flytt origo til midten, roter, tegn statisk-hjulet deretter restore
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(rotationDeg * Math.PI / 180);
  ctx.translate(-canvas.width / 2, -canvas.height / 2);
  drawStaticWheel();
  ctx.restore();
}

// hjelpefunksjon easeOut
function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

// spin-logikk
function spinOnce() {
  if (spinning) return;
  spinning = true;
  resultatEl.textContent = ''; // tøm resultat mens spinner

  // tilfeldig stor vinkel (grader)
  const extra = Math.random() * 360 + 720; // minst 2 runder + noe
  const targetRotation = currentRotation + extra;

  const duration = 3800; // ms
  const startTime = performance.now();

  function tick(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(progress);
    const angle = currentRotation + (targetRotation - currentRotation) * eased;
    renderWheel(angle);
    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      // ferdig
      currentRotation = targetRotation % 360;
      spinning = false;
      showResultForRotation(currentRotation);
    }
  }
  requestAnimationFrame(tick);
}

// evt. la brukeren klikke på canvas eller spin-knapp
spinBtn.addEventListener('click', spinOnce);
canvas.addEventListener('click', spinOnce);

// bestem valgt kategori fra rotasjonsvinkel (i grader)
function showResultForRotation(rotationDeg) {
  // Pointer ligger oppover (12:00) => tilsvarer 270deg i canvas-koordinater
  // Vi finner vinkel (i grader) som pointer ser i hjulets referanseramme:
  // targetAngle = (270 - rotationDeg) mod 360
  const normRot = ((rotationDeg % 360) + 360) % 360;
  const pointerAngle = ((270 - normRot) + 360) % 360;

  const sliceDeg = 360 / sliceCount;

  // index: shift med slice/2 for å matche sektor-sentrum
  const idx = Math.floor(((pointerAngle + sliceDeg/2) % 360) / sliceDeg) % sliceCount;

  const chosen = categories[idx];
  resultatEl.textContent = `Kategori: ${chosen}`;

  // valgfritt: du kan her f.eks. markere sektoren visuelt eller navigere til kategori-side automatisk
}
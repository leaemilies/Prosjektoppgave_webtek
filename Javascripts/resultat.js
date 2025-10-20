// Hent poeng
const score = Number(localStorage.getItem("score")) || 0;
document.getElementById("score").textContent = score;

// Partikkel-animasjon
const badge = document.querySelector(".score-badge");
const symbols = ["⭐", "✨", "🌟", "💫"];

function createParticle() {
  const el = document.createElement("span");
  el.className = "particle";
  el.textContent = symbols[Math.floor(Math.random() * symbols.length)];

  // Spawn kun på venstre eller høyre side
  const side = Math.random() < 0.5 ? "left" : "right";
  const x = side === "left" ? -60 - Math.random() * 20 : 60 + Math.random() * 20;
  const y = Math.random() * 30 - 15; // litt vertikal variasjon
  const size = 0.8 + Math.random() * 0.6;
  const fontRem = 1 + Math.random() * 0.8;

  el.style.left = `${50 + x}%`;
  el.style.top = `${50 + y}%`;
  el.style.transform = `translate(-50%, -50%) scale(${size})`;
  el.style.fontSize = `${fontRem}rem`;
  el.style.color = Math.random() < 0.6 ? "#FFD54F" : "#fff3a3";

  badge.appendChild(el);
  setTimeout(() => el.remove(), 1500);
}

// Mindre mengde partikler (1–2 per intervall)
setInterval(() => {
  const n = 1 + Math.floor(Math.random() * 2);
  for (let i = 0; i < n; i++) createParticle();
}, 900);

// Navigasjon
document.getElementById("playAgain").addEventListener("click", () => {
  window.location.href = "spill.html";
});
document.getElementById("goHome").addEventListener("click", () => {
  window.location.href = "index.html";
});
// Viser total poeng for siste spill, og sørger for at "spill igjen" går til riktig kategori.

(function(){
  // total fra siste runde
  var score = Number(localStorage.getItem("score") || 0);
  var scoreEl = document.getElementById("score");
  if (scoreEl) scoreEl.textContent = score;

  // sist spilte kategori, brukes av "spille igjen"-knappen på resultat-siden (hvis du har den)
  var lastCat = localStorage.getItem("lastCategory"); // f.eks. "Kategorier/land.html"
  var playAgainBtn = document.getElementById("playAgain");
  if (playAgainBtn) {
    playAgainBtn.addEventListener("click", function(){
      if (lastCat) {
        // resultat.html ligger i /HTML/, så dette er relativt herfra
        window.location.href = lastCat;
      } else {
        // fallback hvis ikke finnes
        window.location.href = "spill.html";
      }
    });
  }

  // hjem-knappen (pass på at href i HTML peker til ../index.html)
  var goHome = document.getElementById("goHome");
  if (goHome) {
    goHome.setAttribute("href", "../index.html");
  }

  // enkel pynt rundt scoren (valgfritt, siden du hadde partikler før)
  var badge = document.querySelector(".score-badge");
  var symbols = ["⭐","✨","🌟","💫"];
  function createParticle(){
    if (!badge) return;
    var el = document.createElement("span");
    el.className = "particle";
    el.textContent = symbols[Math.floor(Math.random()*symbols.length)];
    var side = Math.random()<0.5 ? "left" : "right";
    var x = side==="left" ? -60 - Math.random()*20 : 60 + Math.random()*20;
    var y = Math.random()*30 - 15;
    var size = 0.8 + Math.random()*0.6;
    var fontRem = 1 + Math.random()*0.8;
    el.style.left = (50 + x) + "%";
    el.style.top = (50 + y) + "%";
    el.style.transform = "translate(-50%, -50%) scale("+size+")";
    el.style.fontSize = fontRem + "rem";
    el.style.color = Math.random()<0.6 ? "#FFD54F" : "#fff3a3";
    badge.appendChild(el);
    setTimeout(function(){ el.remove(); }, 1500);
  }
  if (badge) {
    setInterval(function(){
      var n = 1 + Math.floor(Math.random()*2);
      for (var i=0;i<n;i++) createParticle();
    }, 900);
  }
})();
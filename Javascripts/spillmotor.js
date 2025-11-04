// --- HJELPERE ---
function oppdaterHighScore(total){
  const best = Number(localStorage.getItem("emoji_best_score") || 0);
  if (total > best) localStorage.setItem("emoji_best_score", String(total));
}
function leggTilLogg(total, kategori){
  try{
    const raw = localStorage.getItem("emoji_score_list");
    let liste = raw ? JSON.parse(raw) : [];
    liste.push({ score:Number(total)||0, at:new Date().toISOString(), cat:kategori||"Ukjent" });
    if (liste.length > 200) liste = liste.slice(liste.length - 200);
    localStorage.setItem("emoji_score_list", JSON.stringify(liste));
  }catch(_){}
}
function konfetti(){
  if (typeof confetti==="function") confetti({ particleCount:400, spread:200, origin:{ y:0.6 } });
}

// --- MOTOR ---
window.startEmojiGame = function ({ items, emojis, categoryName, categoryPath, maxRounds=10, attemptsPerRound=5 }) {
  if (!Array.isArray(items) || !Array.isArray(emojis) || items.length !== emojis.length || items.length===0) {
    console.error("items/emojis mangler eller har ulik lengde");
    return;
  }

  const el = {
    spm: document.getElementById("sporsmal"),
    hint: document.getElementById("hint"),
    lengde: document.getElementById("lengde"),
    sjekk: document.getElementById("sjekk"),
    result: document.getElementById("result"),
    neste: document.getElementById("neste"),
    runder: document.getElementById("runder"),
    poeng: document.getElementById("poeng"),
    tilbake: document.getElementById("tilbake"),
  };

  if (!el.spm || !el.lengde || !el.sjekk) {
    console.error("Mangler element-ID: sporsmal/lengde/sjekk");
    return;
  }

  let poengsum=0, runde=1, forsok=attemptsPerRound;
  let idx = Math.floor(Math.random()*items.length);
  let riktig = items[idx].toLowerCase();
  let brukerSvar = [];

  el.spm.innerHTML = emojis[idx];
  el.poeng && (el.poeng.textContent = "Poengsum: " + poengsum);
  el.runder && (el.runder.textContent = "Du er på runde " + runde);
  localStorage.setItem("score", poengsum);

  // ---- Viser streker etter ord ----
  function visOrdSomStreker(ord){
    el.lengde.innerHTML = "";
    brukerSvar = [];

    for (let i = 0; i < ord.length; i++){
      const ch = ord[i];
      const span = document.createElement("span");
      if (ch === " "){
        span.textContent = " ";
        span.className = "mellomrom";
        brukerSvar[i] = " ";
      } else {
        span.textContent = "_";
        span.className = "bokstav";
        brukerSvar[i] = "";
      }
      el.lengde.appendChild(span);
    }
  }

  visOrdSomStreker(riktig);

  // ---- Håndter tastetrykk ----
  document.addEventListener("keydown", (e) => {
    if (runde > maxRounds || el.sjekk.disabled) return;

    const spans = el.lengde.querySelectorAll(".bokstav, .mellomrom");

    if (e.key === "Backspace"){
      for (let i = spans.length - 1; i >= 0; i--){
        if (spans[i].className === "bokstav" && spans[i].textContent !== "_"){
          spans[i].textContent = "_";
          brukerSvar[i] = "";
          break;
        }
      }
      e.preventDefault();
      return;
    }

    if (/^[a-zA-ZæøåÆØÅ]$/.test(e.key)){
      for (let i = 0; i < spans.length; i++){
        if (spans[i].className === "bokstav" && spans[i].textContent === "_"){
          spans[i].textContent = e.key.toUpperCase();
          brukerSvar[i] = e.key.toLowerCase();
          break;
        }
      }
    }
  });

  // ---- Sjekk-knapp ----
  el.sjekk.onclick = () => {
    const svar = brukerSvar.join("").toLowerCase();
    if (svar === riktig){
      el.result.textContent = "Riktig svar!";
      el.result.style.color = "green";
      el.sjekk.disabled = true;
      poengsum += forsok;
      el.poeng && (el.poeng.textContent = "Poengsum: " + poengsum);
      konfetti();
    } else {
      forsok--;
      el.result.textContent = "Feil svar, du har " + forsok + " forsøk igjen.";
      el.result.style.color = "red";
      if (forsok === 0){
        el.result.textContent = "Du har brukt opp alle forsøkene.";
        el.sjekk.disabled = true;
      }
    }

    if (forsok <= 3 && el.hint){
      el.hint.textContent = "Hint: Første bokstav er '" + riktig.charAt(0).toUpperCase() + "'";
    }
  };

  // ---- Nytt spørsmål ----
  function nyttsporsmal(){
    idx = Math.floor(Math.random()*items.length);
    riktig = items[idx].toLowerCase();
    forsok = attemptsPerRound;
    el.result.textContent = "";
    el.sjekk.disabled = false;
    el.hint && (el.hint.textContent = "");

    visOrdSomStreker(riktig);

    runde++;
    el.runder && (el.runder.textContent = "Du er på runde " + runde);

    if (runde > maxRounds){
      el.neste && (el.neste.disabled = true);
      el.sjekk.disabled = true;
      el.result.textContent = "Spillet er over! Din endelige poengsum er: " + poengsum;
      localStorage.setItem("score", poengsum);
      oppdaterHighScore(poengsum);
      leggTilLogg(poengsum, categoryName||"Ukjent");
      categoryPath && localStorage.setItem("lastCategory", categoryPath);
      window.location.href = "../../HTML/resultat.html";
    }

    el.spm.innerHTML = emojis[idx];
  }

  el.neste && (el.neste.onclick = nyttsporsmal);
  el.tilbake && (el.tilbake.onclick = ()=> window.location.href = "../../index.html");
};

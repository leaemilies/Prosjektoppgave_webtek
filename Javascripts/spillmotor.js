// --- HJELPERE ---
function oppdaterHighScore(total) {
  const best = Number(localStorage.getItem("emoji_best_score") || 0);
  if (total > best) localStorage.setItem("emoji_best_score", String(total));
}

function leggTilLogg(total, kategori) {
  try {
    const raw = localStorage.getItem("emoji_score_list");
    let liste = raw ? JSON.parse(raw) : [];
    liste.push({ score: Number(total) || 0, at: new Date().toISOString(), cat: kategori || "Ukjent" });
    if (liste.length > 200) liste = liste.slice(liste.length - 200);
    localStorage.setItem("emoji_score_list", JSON.stringify(liste));
  } catch (_) {}
}

function konfetti() {
  if (typeof confetti === "function") {
    confetti({ particleCount: 400, spread: 200, origin: { y: 0.6 } });
  }
}

// --- MOTOR ---
// GJØR DEN GLOBAL MED window.
window.startEmojiGame = function ({ items, emojis, categoryName, categoryPath, maxRounds = 10, attemptsPerRound = 5 }) {
  if (!Array.isArray(items) || !Array.isArray(emojis) || items.length !== emojis.length || items.length === 0) {
    console.error("items/emojis mangler eller har ulik lengde");
    return;
  }

  const el = {
    spm: document.getElementById("sporsmal"),
    hint: document.getElementById("hint"),
    lengde: document.getElementById("lengde"),
    svar: document.getElementById("svarfelt"),
    sjekk: document.getElementById("sjekk"),
    result: document.getElementById("result"),
    neste: document.getElementById("neste"),
    runder: document.getElementById("runder"),
    poeng: document.getElementById("poeng"),
    score: document.getElementById("score"),
    tilbake: document.getElementById("tilbake"),
    losning: document.getElementById("losning")
  };

  if (!el.spm || !el.svar || !el.sjekk) {
    console.error("Mangler element-ID: sporsmal/svarfelt/sjekk");
    return;
  }

  let poengsum = 0,
      runde = 1,
      forsok = attemptsPerRound;
  let idx = Math.floor(Math.random() * items.length);
  let riktig = items[idx].toLowerCase();

  el.spm.innerHTML = emojis[idx]; // viktig: innerHTML
  el.lengde && (el.lengde.textContent = "_ ".repeat(riktig.length).replace(/-/g, "- "));
  el.poeng && (el.poeng.textContent = "Poengsum: " + poengsum);
  el.runder && (el.runder.textContent = "Du er på runde " + runde);
  el.score && (el.score.textContent = poengsum);
  localStorage.setItem("score", poengsum);

  function sjekksvar() {
    const svar = String(el.svar.value || "").toLowerCase();
    if (svar === riktig) {
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
      el.svar.value = "";
      if (forsok === 0) {
        el.result.textContent = "Du har brukt opp alle forsøkene.";
        el.losning.textContent = riktig
        el.sjekk.disabled = true;
      }
    }
    if (forsok <= 3 && el.hint) {
      el.hint.textContent = "Hint: Første bokstav er '" + riktig.charAt(0).toUpperCase() + "'";
    }
  }

  function nyttsporsmal() {
    idx = Math.floor(Math.random() * items.length);
    el.spm.innerHTML = emojis[idx];
    riktig = items[idx].toLowerCase();
    forsok = attemptsPerRound;
    el.losning.textContent = "";
    el.result.textContent = "";
    el.svar.value = "";
    el.sjekk.disabled = false;
    el.hint && (el.hint.textContent = "");
    el.lengde && (el.lengde.textContent = "_ ".repeat(riktig.length));
    runde++;
    el.runder && (el.runder.textContent = "Du er på runde " + runde);
    if (runde > maxRounds) {
      el.neste && (el.neste.disabled = true);
      el.sjekk.disabled = true;
      el.result.textContent = "Spillet er over! Din endelige poengsum er: " + poengsum;
      localStorage.setItem("score", poengsum);
      oppdaterHighScore(poengsum);
      leggTilLogg(poengsum, categoryName || "Ukjent");
      categoryPath && localStorage.setItem("lastCategory", categoryPath);
      window.location.href = "../../HTML/resultat.html";
    }
  }

  el.sjekk.onclick = sjekksvar;
  el.neste && (el.neste.onclick = nyttsporsmal);
  el.tilbake && (el.tilbake.onclick = () => (window.location.href = "../../index.html"));
  el.svar.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!el.sjekk.disabled) el.sjekk.click();
      else if (el.neste && !el.neste.disabled) el.neste.click();
    }
  });
};

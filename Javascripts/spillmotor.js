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

  // ===== NYTT: enkel bokstavmotor m/streker pr. ord =====
  const isLetter = (ch) => /[a-zæøå]/i.test(ch);

  let typed = [];          // kun bokstav-tegn som brukeren skriver
  let letterPositions = []; // indeksene i "riktig" som er bokstaver (fylles i rekkefølge)

  function buildMask(riktig) {
    // Lager streker pr. ord, mellomrom holdes som space, andre tegn vises
    let out = [];
    let t = 0;
    for (let i = 0; i < riktig.length; i++) {
      const c = riktig[i];
      if (isLetter(c)) out.push(typeof typed[t] === "string" ? typed[t] : "_");
      else if (c === " ") out.push(" ");
      else out.push(c);
      if (isLetter(c)) t++;
    }
    return out.join("");
  }

  function rebuildLetterPositions(riktig) {
    letterPositions = [];
    for (let i = 0; i < riktig.length; i++) if (isLetter(riktig[i])) letterPositions.push(i);
  }

  function currentGuess(riktig) {
    // Fletter typed inn i riktig-strengen
    let arr = riktig.split("");
    let t = 0;
    for (let i = 0; i < arr.length; i++) {
      if (isLetter(arr[i])) arr[i] = typed[t++] || "_";
    }
    return arr.join("");
  }

  function resetTyping(riktig) {
    typed = [];
    rebuildLetterPositions(riktig);
    el.lengde && (el.lengde.textContent = buildMask(riktig));
  }

  // ===== SLUTT ny bokstavmotor =====

  let poengsum = 0,
      runde = 1,
      forsok = attemptsPerRound;

  // ===== NYTT: forhåndssuffle indeksene for å unngå duplikater =====
  const order = Array.from(items.keys()).sort(() => Math.random() - 0.5);
  let pos = 0;
  let idx = order[pos];
  // ================================================================

  let riktig = items[idx].toLowerCase();

  el.spm.innerHTML = emojis[idx]; // viktig: innerHTML

  // Skjul inputfeltet. Vi skriver direkte fra tastaturet.
  el.svar.style.display = "none";

  resetTyping(riktig);

  el.poeng && (el.poeng.textContent = "Poengsum: " + poengsum);
  el.runder && (el.runder.textContent = "Du er på runde " + runde);
  el.score && (el.score.textContent = poengsum);
  localStorage.setItem("score", poengsum);

  function sjekksvar() {
    // Ikke la dem sjekke før alle bokstav-plasser er fylt
    if (typed.length < letterPositions.length) {
      el.result.textContent = "Skriv ferdig ordet først.";
      el.result.style.color = "orange";
      return;
    }

    const svar = currentGuess(riktig).toLowerCase();

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
      resetTyping(riktig); // tøm bokstavene ved feil forsøk
      if (forsok === 0) {
        el.result.textContent = "Du har brukt opp alle forsøkene.";
        el.losning.textContent = riktig;
        el.sjekk.disabled = true;
      }
    }
    if (forsok <= 3 && el.hint) {
      el.hint.textContent = "Hint: Første bokstav er '" + riktig.charAt(0).toUpperCase() + "'";
    }
  }

  function nyttsporsmal() {
    // ===== NYTT: bruk neste indeks fra sufflet rekkefølge =====
    pos++;
    if (pos >= order.length) {
      el.neste && (el.neste.disabled = true);
      el.sjekk.disabled = true;
      el.result.textContent = "Spillet er over! Din endelige poengsum er: " + poengsum;
      localStorage.setItem("score", poengsum);
      oppdaterHighScore(poengsum);
      leggTilLogg(poengsum, categoryName || "Ukjent");
      categoryPath && localStorage.setItem("lastCategory", categoryPath);
      window.location.href = "../../HTML/resultat.html";
      return;
    }
    idx = order[pos];
    // ==========================================================

    el.spm.innerHTML = emojis[idx];
    riktig = items[idx].toLowerCase();
    forsok = attemptsPerRound;
    el.losning.textContent = "";
    el.result.textContent = "";
    el.sjekk.disabled = false;
    el.hint && (el.hint.textContent = "");
    resetTyping(riktig);
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

  // ===== NY: tastaturstyring, resten som før =====
  function onKeydown(e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;

    if (e.key === "Backspace") {
      if (typed.length > 0 && !el.sjekk.disabled) {
        typed.pop();
        el.lengde.textContent = buildMask(riktig);
      }
      e.preventDefault();
      return;
    }

    if (e.key === "Enter") {
      if (!el.sjekk.disabled) el.sjekk.click();
      else if (el.neste && !el.neste.disabled) el.neste.click();
      e.preventDefault();
      return;
    }

    // godta bare bokstaver
    if (!/^[a-zA-ZæøåÆØÅ]$/.test(e.key)) return;

    // ikke mer enn antall bokstavslott
    if (typed.length >= letterPositions.length || el.sjekk.disabled) {
      e.preventDefault();
      return;
    }

    typed.push(e.key.toLowerCase());
    el.lengde.textContent = buildMask(riktig);

    e.preventDefault();
  }
  document.addEventListener("keydown", onKeydown);
  // ===== SLUTT tastatur =====

  el.sjekk.onclick = sjekksvar;
  el.neste && (el.neste.onclick = nyttsporsmal);
  el.tilbake && (el.tilbake.onclick = () => (window.location.href = "../../index.html"));

  // behold Enter-logikk på input hvis den fortsatt finnes i DOM
  el.svar.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!el.sjekk.disabled) el.sjekk.click();
      else if (el.neste && !el.neste.disabled) el.neste.click();
    }
    function onKeydown(e) {
  if (e.ctrlKey || e.metaKey || e.altKey) return;

  // NYTT: blokkér mellomrom fullstendig (ellers "klikker" fokusert knapp)
  if (e.code === "Space" || e.key === " ") {
    e.preventDefault();
    return; // vi skriver ikke inn spaces; visningen har allerede ekte mellomrom
  }

  if (e.key === "Backspace") {
    if (typed.length > 0 && !el.sjekk.disabled) {
      typed.pop();
      el.lengde.textContent = buildMask(riktig);
    }
    e.preventDefault();
    return;
  }
// Ignorer space sånn at det ikke submitter forsøk som i tidligere kode
  if (e.key === "Enter") {
    if (!el.sjekk.disabled) el.sjekk.click();
    else if (el.neste && !el.neste.disabled) el.neste.click();
    e.preventDefault();
    return;
  }

  // bare bokstaver
  if (!/^[a-zA-ZæøåÆØÅ]$/.test(e.key)) return;

  if (typed.length >= letterPositions.length || el.sjekk.disabled) {
    e.preventDefault();
    return;
  }

  typed.push(e.key.toLowerCase());
  el.lengde.textContent = buildMask(riktig);
  e.preventDefault();
}
  });
};
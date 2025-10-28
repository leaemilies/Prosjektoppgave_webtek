// enkel high-score som overlever lukking av fane
function saveHighScore(score) {
  const best = Number(localStorage.getItem("highScore") || 0);
  if (score > best) localStorage.setItem("highScore", String(score));
}

// konfetti ved riktig svar
function konfetti() {
  confetti({ particleCount: 400, spread: 200, origin: { y: 0.6 } });
}

window.onload = function() {
  let poengsum = 0;
  let runder = 1;

  const spmEl = document.getElementById("sporsmal");
  const hintEl = document.getElementById("hint");
  const lengdeEl = document.getElementById("lengde");
  const input = document.getElementById("svarfelt");
  const sjekkKnapp = document.getElementById("sjekk");
  const nesteKnapp = document.getElementById("neste");
  const result = document.getElementById("result");
  const runderEl = document.getElementById("runder");
  const poengEl = document.getElementById("poeng");

  runderEl.textContent = "Du er på runde " + runder;
  poengEl.textContent = "Poengsum: " + poengsum;

  const filmer = [
    "Løvenes konge, The Lion King",
    "Interstellar",
    "Oppdrag Nemo, Finding Nemo",
    "Askepott",
    "Spider-Man",
    "Jurassic Park",
    "Frozen",
    "IT",
    "Halloween",
    "Fast & Furious",
    "Kingsman",
    "The Hunger Games: Mockingjay",
    "Hobbiten, The Hobbit",
    "Kung Fu Panda",
    "The Nightmare Before Christmas"
  ];

  const filmEmojis = [
    "&#x1F981;&#x1F451;&#x1F305;&#x1F3B6;",
    "&#x1F680;&#x1F468;&#x200D;&#x1F680;&#x1F30C;&#x23F1;",
    "&#x1F41F;&#x1F50B;&#x1F30A;",
    "&#x1F460;&#x1F383;&#x1F55B;&#x1F478;",
    "&#x1F577;&#xFE0F;&#x1F5FD;&#x1F578;&#xFE0F;",
    "&#x1F996;&#x1F3DD;&#xFE0F;&#x1F9EC;",
    "&#x2744;&#xFE0F;&#x1F46D;&#x26C4;&#x1F3B6;",
    "&#x1F921;&#x1F388;&#x1F6B2;",
    "&#x1F52A;&#x1F383;&#x1F3DA;&#xFE0F;",
    "&#x1F3CE;&#xFE0F;&#x1F4A8;&#x1F525;&#x1F468;&#x200D;&#x1F466;",
    "&#x1F4A3;&#x1F1E9;&#x1F1A9;&#x1F3A9;",
    "&#x1F54A;&#xFE0F;&#x1F3DB;&#xFE0F;&#x1F525;&#x1F4DC;",
    "&#x1F3F9;&#x1F9DD;&#x200D;&#x1F264;&#xFE0F;&#x1F311;",
    "&#x1F43C;&#x1F94B;&#x1F962;",
    "&#x1F480;&#x1F3A9;&#x1F383;&#x1F56F;&#xFE0F;&#x1F384;"
  ];

  let idx = Math.floor(Math.random() * filmer.length);
  spmEl.innerHTML = filmEmojis[idx];

  let forsok = 5;
  let riktigSvar = filmer[idx].toLowerCase();

  lengdeEl.textContent = "_ ".repeat(riktigSvar.length).replace(/- /g, "-  ");

  function sjekksvar() {
    const brukerSvar = input.value.trim().toLowerCase();

    if (brukerSvar === riktigSvar) {
      result.textContent = "Riktig svar!";
      result.style.color = "green";
      konfetti();

      // poeng = gjenværende forsøk
      poengsum += forsok;
      poengEl.textContent = "Poengsum: " + poengsum;

      sjekkKnapp.disabled = true;
    } else {
      forsok--;
      result.textContent = "Feil svar, du har " + forsok + " forsøk igjen.";
      result.style.color = "red";
      input.value = "";

      if (forsok <= 3) {
        hintEl.textContent = "Hint: Første bokstav er '" + riktigSvar.charAt(0).toUpperCase() + "'";
      }
      if (forsok === 0) {
        result.textContent = "Du har brukt opp alle forsøkene.";
        sjekkKnapp.disabled = true;
      }
    }
  }

  function nyttsporsmal() {
    // oppdater runde teller
    runder++;
    runderEl.textContent = "Du er på runde " + runder;

    // slutt etter 10 runder → lagre og gå til resultat.html
    if (runder > 10) {
      nesteKnapp.disabled = true;
      sjekkKnapp.disabled = true;
      result.textContent = "Spillet er over! Din endelige poengsum er: " + poengsum;
      localStorage.setItem("score", String(poengsum)); // brukes av resultat-siden
      saveHighScore(poengsum); // valgfritt: behold beste score
      window.location.href = "../../HTML/resultat.html"; // identisk oppførsel som land
      return;
    }

    // velg ny oppgave
    idx = Math.floor(Math.random() * filmer.length);
    spmEl.innerHTML = filmEmojis[idx];
    riktigSvar = filmer[idx].toLowerCase();

    // reset runde-state
    forsok = 5;
    result.textContent = "";
    hintEl.textContent = "";
    input.value = "";
    sjekkKnapp.disabled = false;

    // oppdater lengde
    lengdeEl.textContent = "_ ".repeat(riktigSvar.length).replace(/- /g, "-  ");
  }

  // knapper
  document.getElementById("sjekk").onclick = sjekksvar;
  document.getElementById("neste").onclick = nyttsporsmal;
  document.getElementById("tilbake").onclick = function() {
    window.location.href = "../../index.html";
  };

  // Enter-tast
  input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      if (!sjekkKnapp.disabled) {
        sjekkKnapp.click();
      } else if (!nesteKnapp.disabled) {
        nesteKnapp.click();
      }
    }
  });
};
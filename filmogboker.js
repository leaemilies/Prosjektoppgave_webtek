window.onload = function() {


    let filmer = [
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

let filmEmojis = [
  "&#x1F981;&#x1F451;&#x1F305;&#x1F3B6;", // Løvenes konge, The Lion King
  "&#x1F680;&#x1F468;&#x200D;&#x1F680;&#x1F30C;&#x23F1;", // Interstellar
  "&#x1F41F;&#x1F50B;&#x1F30A;", // Oppdrag Nemo, Finding Nemo
  "&#x1F460;&#x1F383;&#x1F55B;&#x1F478;", // Askepott
  "&#x1F577;&#xFE0F;&#x1F5FD;&#x1F578;&#xFE0F;", // Spider-Man
  "&#x1F996;&#x1F3DD;&#xFE0F;&#x1F9EC;", // Jurassic Park
  "&#x2744;&#xFE0F;&#x1F46D;&#x26C4;&#x1F3B6;", // Frozen
  "&#x1F921;&#x1F388;&#x1F6B2;", // IT
  "&#x1F52A;&#x1F383;&#x1F3DA;&#xFE0F;", // Halloween
  "&#x1F3CE;&#xFE0F;&#x1F4A8;&#x1F525;&#x1F468;&#x200D;&#x1F466;", // Fast & Furious
  "&#x1F4A3;&#x1F1E9;&#x1F1A9;&#x1F3A9;", // Kingsman
  "&#x1F54A;&#xFE0F;&#x1F3DB;&#xFE0F;&#x1F525;&#x1F4DC;", // The Hunger Games: Mockingjay
  "&#x1F3F9;&#x1F9DD;&#x200D;&#x1F264;&#xFE0F;&#x1F311;", // Hobbiten, The Hobbit
  "&#x1F43C;&#x1F94B;&#x1F962;", // Kung Fu Panda
  "&#x1F480;&#x1F3A9;&#x1F383;&#x1F56F;&#xFE0F;&#x1F384;" // The Nightmare Before Christmas
];

let rondomiser=Math.floor(Math.random() * filmer.length);
document.getElementById("sporsmal").innerHTML = filmEmojis[rondomiser];

let forsok = 5;
let riktigSvar=filmer[rondomiser].toLowerCase();
let lengdeElement = document.getElementById("lengde");
    lengdeElement.textContent = "_ ".repeat(riktigSvar.length);
function sjekksvar() {

    const brukerSvar = document.getElementById("svarfelt").value;
    const resultat = document.getElementById("resultat");

    if (brukerSvar === riktigSvar.toLowerCase()) {
        result.textContent = "Riktig svar!";
        result.style.color = "green";
        document.getElementById("sjekk").disabled = true;
    } else {
        forsok--;
        result.textContent = "Feil svar, du har " + forsok + " forsøk igjen.";
        result.style.color = "red";
        document.getElementById("svarfelt").value = "";

        if (forsok === 0) {
            result.textContent = "Du har brukt opp alle forsøkene.";
            document.getElementById("sjekk").disabled = true;
        }
    }
  
}








//window.onload = function() {
//    document.getElementById("sjekk").onclick = sjekksvar;
//}
}
window.onload = function() {

    let poengsum=0;
    let runder=1;
document.getElementById("sjekk").onclick = sjekksvar;

    let land = [
  "Frankrike", "USA", "Japan", "Tyskland", "Australia",
  "Saudi-Arabia", "Kina", "Italia", "Sveits", "Indonesia", "Kenya", "Brasil",
  "Peru", "Tyrkia", "India", "Fiji", "Canada", "New Zealand", "Norge", "Egypt",
  "Spania", "Storbritannia", "Mexico", "Hellas", "Sør-Afrika", "Argentina",
  "Sør-Korea", "Thailand", "Nederland", "Portugal"
];

let landEmojis = [
  "&#x1F956;&#x1F377;&#x1F3A8;&#x1F5FC;", // Frankrike
  "&#x1F5FD;&#x1F354;&#x1F3AC;&#x1F3C8;", // USA
  "&#x1F3EF;&#x1F363;&#x1F30B;&#x1F38C;&#x1F3AE;", // Japan
  "&#x1F3F0;&#x1F37A;&#x1F356;&#x26BD;", // Tyskland
  "&#x1F428;&#x1F3B0;&#x1F3C4;&#x200D;&#x2642;&#xFE0F;&#x1F525;", // Australia
  "&#x1F3DC;&#xFE0F;&#x1F42A;&#x1F54B;&#xFE0F;&#x1F6E2;&#xFE0F;", // Saudi-Arabia
  "&#x1F43C;&#x1F962;&#x1F3EE;&#x1F3EF;", // Kina
  "&#x1F3AD;&#x1F35D;&#x1F355;&#x1F3DB;&#xFE0F;", // Italia
  "&#x1F3D4;&#xFE0F;&#x26F7;&#xFE0F;&#x231A;&#x1F36B;", // Sveits
  "&#x1F30B;&#x2708;&#xFE0F;&#x1F3DD;&#xFE0F;&#x1F409;", // Indonesia
  "&#x1F993;&#x1F992;&#x1F3DE;&#xFE0F;&#x2600;&#xFE0F;", // Kenya
  "&#x1F3DF;&#xFE0F;&#x1F965;&#x26BD;&#x1F3DD;&#xFE0F;", // Brasil
  "&#x1F3D4;&#xFE0F;&#x1F999;&#x1F954;&#x2600;&#xFE0F;", // Peru
  "&#x1F54C;&#x1F386;&#x1F95C;&#x2600;&#xFE0F;", // Tyrkia
  "&#x1F54C;&#x1F418;&#x1F35B;&#x1F3B6;", // India
  "&#x1F3DD;&#xFE0F;&#x1F334;&#x1F3C4;&#x200D;&#x2640;&#xFE0F;&#x1F34D;", // Fiji
  "&#x26F7;&#xFE0F;&#x1F341;&#x1F341;&#x1F3D2;", // Canada
  "&#x1F411;&#x1F3C9;&#x1F5FB;&#x1F377;", // New Zealand
  "&#x1F9CA;&#x1F427;&#x26F7;&#xFE0F;&#x1F30C;", // Norge
  "&#x1F54C;&#x1F54C;&#x1F42A;&#x1F3DC;&#xFE0F;", // Egypt
  "&#x1F958;&#x1F3B6;&#x26BD;&#x1F3DD;&#xFE0F;", // Spania
  "&#x1F3A1;&#x1F3AD;&#x2614;&#xFE0F;&#x1FAD6;", // Storbritannia
  "&#x1F32E;&#x1F389;&#x1F30B;&#x1FA85;", // Mexico
  "&#x1F3DB;&#xFE0F;&#x1F3DD;&#xFE0F;&#x1F347;&#x1F3FA;", // Hellas
  "&#x1F981;&#x1F377;&#x26F0;&#xFE0F;&#x1F3C4;&#x200D;&#x2642;&#xFE0F;", // Sør-Afrika
  "&#x1F969;&#x1F483;&#x26BD;&#x26F0;&#xFE0F;", // Argentina
  "&#x1F962;&#x1F35C;&#x1F3B6;&#x1F3F0;", // Sør-Korea
  "&#x1F6D5;&#x1F418;&#x1F35C;&#x1F334;", // Thailand
  "&#x1F337;&#x1F6B2;&#x1F9C0;&#x1F3A8;", // Nederland
  "&#x1F377;&#x26F5;&#x1F483;&#x1F3DD;&#xFE0F;" // Portugal
];

let rondomiser=Math.floor(Math.random() * land.length);
document.getElementById("sporsmal").innerHTML = landEmojis[rondomiser];

let forsok = 5;
let riktigSvar=land[rondomiser].toLowerCase();
let lengdeElement = document.getElementById("lengde");
    lengdeElement.textContent = "_ ".repeat(riktigSvar.length);
function sjekksvar() {

    const brukerSvar = document.getElementById("svarfelt").value;
    const resultat = document.getElementById("resultat");

    if (brukerSvar === riktigSvar.toLowerCase()) {
        result.textContent = "Riktig svar!";
        result.style.color = "green";
        document.getElementById("sjekk").disabled = true;
        
        //poengteller
        let poengdennerunden = forsok;
        poengsum += poengdennerunden;
        document.getElementById("poeng").textContent = "Poengsum: " + poengsum;

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

function nyttsporsmal() {
    // Velg et nytt tilfeldig land
    randomiser = Math.floor(Math.random() * land.length);
    document.getElementById("sporsmal").innerHTML = landEmojis[randomiser];
    
    // Oppdater riktig svar og tilbakestill forsøk og inputfelt
    riktigSvar = land[randomiser].toLowerCase();
    forsok = 5;
    result.textContent = "";
    document.getElementById("svarfelt").value = "";
    document.getElementById("sjekk").disabled = false;

    // Oppdater lengdeindikatoren
    lengdeElement.textContent = "_ ".repeat(riktigSvar.length);

    // Oppdater rundeindikatoren
    runder++;
    document.getElementById("runder").textContent = "Du er på runde " + runder;

    //avslutt på 10 runder
    if (runder > 10) {
        document.getElementById("neste").disabled = true;
        document.getElementById("sjekk").disabled = true;
        result.textContent = "Spillet er over! Din endelige poengsum er: " + poengsum;
    }
}



document.getElementById("neste").onclick = nyttsporsmal;


}
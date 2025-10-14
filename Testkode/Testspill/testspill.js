// spill basecode 

let forsok = 5;
let riktigSvar="Oslo";
let lengdeElement = document.getElementById("lengde");
    lengdeElement.textContent = "_".repeat(riktigSvar.length);

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
window.onload = function() {
    document.getElementById("sjekk").onclick = sjekksvar;
}
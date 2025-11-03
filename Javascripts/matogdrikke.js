document.addEventListener("DOMContentLoaded", () => {
  const items = [
  "Jordbærmilkshake",
  "Sushi",
  "Hvitløksbrød",
  "Løkring",
  "Toast; Ostesmørbrød",
  "Red Bull; RedBull",
  "Iskaffe; Iced coffee",
  "Cocktail",
  "Sprite",
  "Pina Colada; Piña Colada",
  "Hotdog; Hot Dog",
  "Mango",
  "Kiwi",
  "Bananpannekaker; Banana Pancakes",
  "Brownies; Briowies",
  "Tomatsuppe; Tomato Soup",
  "Cheeseburger",
  "Popcorn; Popvorn",
  "Monster",
  "Fanta"
];

const emojis = [
  "&#x1F353;&#x1F95B;&#x1F91D;",
  "&#x1F35A;&#x1F41F;&#x1F962;",
  "&#x1F956;&#x1F9C4;&#x1F9C8;",
  "&#x1F9C5;&#x1F48D;",
  "&#x1F35E;&#x1F525;",
  "&#x1F534;&#x1F402;",
  "&#x1F9CA;&#x2615;&#xFE0F;",
  "&#x1F413;&#x1F9A5;",
  "&#x27A1;&#xFE0F;",
  "&#x1F34D;&#x1F965;&#x1F379;",
  "&#x1F975;&#x1F436;",
  "&#x1F64D;&#x200D;&#x2642;&#xFE0F;&#x1F6B6;",
  "&#x1F511;&#x0076;",
  "&#x1F34C;&#x1F373;&#x1F382;",
  "&#x1F7E4;&#x1F366;",
  "&#x1F345;&#x1F372;",
  "&#x1F9C0;&#x1F354;",
  "&#x1FAA9;&#x1F33E;",
  "&#x1F608;&#x26A1;&#xFE0F;",
  "&#x1FAAF;&#x0074;&#x0061;"
];

// Separerer ord med semikolon
function isCorrect(index, answer) {
  const canonical = s =>
    s.toLowerCase().trim().replace(/\s+/g, " ");
  const variants = items[index].split(";").map(s => canonical(s));
  const a = canonical(answer);
  return variants.includes(a);
}

  // Kall motoren
  if (typeof startEmojiGame !== "function") {
    console.error("startEmojiGame er ikke lastet. Sjekk sti til spillmotor.js");
    return;
  }
  startEmojiGame({
    items,
    emojis,
    categoryName: "MatOgDrikke",
    categoryPath: "Kategorier/matogdrikke.html"
  });
});
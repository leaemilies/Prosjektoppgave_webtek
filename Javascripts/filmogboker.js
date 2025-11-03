document.addEventListener("DOMContentLoaded", () => {
  const items = [
  "Harry Potter",
  "Ringenes Herre; Lord of the Rings",
  "Twilight",
  "Hunger Games; The Hunger Games; Dødslekene",
  "Narnia; The lion, the witch and the wardrobe",
  "Fluenes Herre",
  "Anne Franks Dagbok",
  "Percy Jackson",
  "Sherlock Holmes",
  "Titanic",
  "Løvenes konge; The lion king",
  "Interstellar",
  "Oppdrag Nemo; Finding Nemo",
  "Askepott",
  "Spider-Man",
  "Jurassic Park",
  "Frozen",
  "IT",
  "Halloween",
  "Fast & Furious",
  "Kingsman",
  "The Hunger Games: Mockingjay",
  "Hobbiten; The Hobbit",
  "Kung Fu Panda",
  "The Nightmare Before Christmas",
  "The Walking Dead",
  "Game of Thrones",
  "Breaking Bad",
  "Dark",
  "The Crown",
  "Hannah Montana",
  "Lost",
  "Stranger Things",
  "Squid Game",
  "Brooklyn Nine-Nine",
  "Chilling Adventures of Sabrina",
  "Mindhunter",
  "The Vampire Diaries",
  "Suits",
  "Black Mirror",
  "Batman",
  "Jokeren; The Joker",
  "Mikke Mus; Mickey Mouse",
  "Pus med støvler; Puss in Boots",
  "Captain America",
  "Thor",
  "Hulken; The Hulk",
  "Black Widow",
  "Doctor Strange",
  "Ariel; Den lille havfruen; The Little Mermaid"
];

const emojis = [
  "&#x1F9D9;&#x200D;&#x2642;&#xFE0F;&#x26A1;&#x1F989;&#x1F3F0;",
  "&#x1F48D;&#x1F30B;&#x1F525;&#x1F46C;",
  "&#x1F9DB;&#x200D;&#x2642;&#xFE0F;&#x1F319;&#x1F494;",
  "&#x1F3F9;&#x1F33D;&#x1F525;&#x1F467;",
  "&#x1FA9E;&#x2744;&#xFE0F;&#x1F981;&#x1F478;",
  "&#x1F3DD;&#xFE0F;&#x1F466;&#x1F422;&#x1F52A;",
  "&#x1F58B;&#xFE0F;&#x1F469;&#x1F393;&#x1F4DC;",
  "&#x1F40D;&#x1F451;&#x1F3FA;&#x1F5E1;&#xFE0F;",
  "&#x1F575;&#xFE0F;&#x200D;&#x2642;&#xFE0F;&#x1F9E9;&#x1F50E;&#xFE0F;",
  "&#x1F30A;&#x1F6A2;&#x1F494;&#x2744;&#xFE0F;",
  "&#x1F981;&#x1F451;&#x1F305;&#x1F3B6;",
  "&#x1F680;&#x1F468;&#x1F680;&#x1F30C;&#x23F3;",
  "&#x1F41F;&#x1F50D;&#x1F30A;",
  "&#x1F460;&#x1F383;&#x1F55B;&#x1F478;",
  "&#x1F577;&#xFE0F;&#x1F5FD;&#x1F578;&#xFE0F;",
  "&#x1F996;&#x1F3DD;&#xFE0F;&#x1F9EC;",
  "&#x2744;&#xFE0F;&#x1F46D;&#x26C4;&#x1F3B6;",
  "&#x1F479;&#x1F388;&#x1F6B2;",
  "&#x1F52A;&#x1F383;&#x1F3DA;&#xFE0F;",
  "&#x1F3CE;&#xFE0F;&#x1F4A8;&#x1F525;&#x1F468;&#x1F466;",
  "&#x1F4A3;&#x1F9E8;&#x1F3A9;&#x1F1EC;&#x1F1E7;",
  "&#x1F54A;&#xFE0F;&#x1F3DB;&#xFE0F;&#x1F525;&#x1F4DC;",
  "&#x1F3F9;&#x1F9DD;&#x200D;&#x2642;&#xFE0F;&#x2694;&#xFE0F;&#x1F333;",
  "&#x1F43C;&#x1F94B;&#x1F962;",
  "&#x1F480;&#x1F3A9;&#x1F383;&#x1F56F;&#xFE0F;",
  "&#x1F9DF;&#x200D;&#x2642;&#xFE0F;&#x1F6B6;&#x200D;&#x2640;&#xFE0F;&#x1F52B;",
  "&#x1F3F0;&#x1F409;&#x1F525;&#x2694;&#xFE0F;",
  "&#x1F9EA;&#x1F468;&#x1F52B;&#x1F4B5;&#x1F69A;",
  "&#x23F0;&#x1F467;&#x1F501;&#x1F526;",
  "&#x1FAA1;&#x1F451;&#x1F1EC;&#x1F1E7;",
  "&#x1F3B8;&#x1F3B6;&#x1F469;&#x1F3A4;",
  "&#x1F468;&#x1F469;&#x1F467;&#x1F3DD;&#xFE0F;&#x2708;&#xFE0F;",
  "&#x1F469;&#x1F467;&#x1F526;&#x1FA9E;&#x1F47E;&#x1F9E0;",
  "&#x1F947;&#x1F1F0;&#x1F1F7;&#x1F522;&#x1F480;",
  "&#x1F46E;&#x200D;&#x2642;&#xFE0F;&#x1F693;&#x1F575;&#xFE0F;&#x200D;&#x2640;&#xFE0F;",
  "&#x1F9F9;&#x1F9D9;&#x200D;&#x2640;&#xFE0F;&#x1F4DC;",
  "&#x1F575;&#xFE0F;&#x200D;&#x2642;&#xFE0F;&#x1F453;&#x1F4D6;",
  "&#x1F9DB;&#x200D;&#x2640;&#xFE0F;&#x2600;&#xFE0F;&#x1F319;",
  "&#x1F4BC;&#x2696;&#xFE0F;&#x1F9D1;&#x200D;&#x1F4BC;",
  "&#x1F4F1;&#x1F5A5;&#xFE0F;&#x1F441;&#xFE0F;&#x1FA9E;&#x1F469;&#x1F469;&#x1F466;",
  "&#x1F987;&#x1F303;&#xFE0F;&#x1F574;&#xFE0F;",
  "&#x1F0CF;&#x1F49A;&#x1F49C;&#x1F608;",
  "&#x1F42D;&#x1F9C0;&#x1F3F0;&#x1F389;",
  "&#x1F431;&#x1F45E;&#x1F5E1;&#xFE0F;",
  "&#x26A1;&#x1F6E1;&#xFE0F;&#x1F1FA;&#x1F1F8;",
  "&#x1F9CA;&#x1F528;&#x26A1;",
  "&#x1F49A;&#x1F4AA;&#x1F621;",
  "&#x1F469;&#x1F534;&#x1F577;&#xFE0F;&#x1F5A4;",
  "&#x1F9D9;&#x200D;&#x2642;&#xFE0F;&#x1F52E;&#x1F300;&#x23F3;",
  "&#x1F9DC;&#x200D;&#x2640;&#xFE0F;&#x1F457;&#x1F463;&#x2728;"
];

// fleksibel validering: hver variant funker separat
function isCorrect(index, answer) {
  const canonical = s =>
    s
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " "); // normaliser mellomrom

  const variants = items[index]
    .split(";")               // bruk semikolon som separator
    .map(s => canonical(s));

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
    categoryName: "FilmOgBoker",
    categoryPath: "Kategorier/filmogboker.html"
  });
});
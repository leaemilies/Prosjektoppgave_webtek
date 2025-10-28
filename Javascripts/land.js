document.addEventListener("DOMContentLoaded", () => {
  const items = [
    "Frankrike","USA","Japan","Tyskland","Australia","Saudi-Arabia","Kina","Italia","Sveits","Indonesia",
    "Kenya","Brasil","Peru","Tyrkia","India","Fiji","Canada","New Zealand","Norge","Egypt",
    "Spania","Storbritannia","Mexico","Hellas","Sør-Afrika","Argentina","Sør-Korea","Thailand","Nederland","Portugal"
  ];
  const emojis = [
    "&#x1F956;&#x1F377;&#x1F3A8;&#x1F5FC;","&#x1F5FD;&#x1F354;&#x1F3AC;&#x1F3C8;","&#x1F3EF;&#x1F363;&#x1F30B;&#x1F38C;&#x1F3AE;","&#x1F3F0;&#x1F37A;&#x1F356;&#x26BD;",
    "&#x1F428;&#x1F3B0;&#x1F3C4;&#x200D;&#x2642;&#xFE0F;&#x1F525;","&#x1F3DC;&#xFE0F;&#x1F42A;&#x1F54B;&#xFE0F;&#x1F6E2;&#xFE0F;","&#x1F43C;&#x1F962;&#x1F3EE;&#x1F3EF;",
    "&#x1F3AD;&#x1F35D;&#x1F355;&#x1F3DB;&#xFE0F;","&#x1F3D4;&#xFE0F;&#x26F7;&#xFE0F;&#x231A;&#x1F36B;","&#x1F30B;&#x2708;&#xFE0F;&#x1F3DD;&#xFE0F;&#x1F409;",
    "&#x1F993;&#x1F992;&#x1F3DE;&#xFE0F;&#x2600;&#xFE0F;","&#x1F3DF;&#xFE0F;&#x1F965;&#x26BD;&#x1F3DD;&#xFE0F;","&#x1F3D4;&#xFE0F;&#x1F999;&#x1F954;&#x2600;&#xFE0F;",
    "&#x1F54C;&#x1F386;&#x1F95C;&#x2600;&#xFE0F;","&#x1F54C;&#x1F418;&#x1F35B;&#x1F3B6;","&#x1F3DD;&#xFE0F;&#x1F334;&#x1F3C4;&#x200D;&#x2640;&#xFE0F;&#x1F34D;",
    "&#x26F7;&#xFE0F;&#x1F341;&#x1F341;&#x1F3D2;","&#x1F411;&#x1F3C9;&#x1F5FB;&#x1F377;","&#x1F9CA;&#x1F427;&#x26F7;&#xFE0F;&#x1F30C;","&#x1F54C;&#x1F54C;&#x1F42A;&#x1F3DC;&#xFE0F;",
    "&#x1F958;&#x1F3B6;&#x26BD;&#x1F3DD;&#xFE0F;","&#x1F3A1;&#x1F3AD;&#x2614;&#xFE0F;&#x1FAD6;","&#x1F32E;&#x1F389;&#x1F30B;&#x1FA85;","&#x1F3DB;&#xFE0F;&#x1F3DD;&#xFE0F;&#x1F347;&#x1F3FA;",
    "&#x1F981;&#x1F377;&#x26F0;&#xFE0F;&#x1F3C4;&#x200D;&#x2642;&#xFE0F;","&#x1F969;&#x1F483;&#x26BD;&#x26F0;&#xFE0F;","&#x1F962;&#x1F35C;&#x1F3B6;&#x1F3F0;","&#x1F6D5;&#x1F418;&#x1F35C;&#x1F334;",
    "&#x1F337;&#x1F6B2;&#x1F9C0;&#x1F3A8;","&#x1F377;&#x26F5;&#x1F483;&#x1F3DD;&#xFE0F;"
  ];

  // Kall motoren
  if (typeof startEmojiGame !== "function") {
    console.error("startEmojiGame er ikke lastet. Sjekk sti til spillmotor.js");
    return;
  }
  startEmojiGame({
    items,
    emojis,
    categoryName: "Land",
    categoryPath: "Kategorier/land.html"
  });
});
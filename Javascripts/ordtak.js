document.addEventListener("DOMContentLoaded", () => {
  const items = [
    "Katta i sekken",
    "Ta det piano",
    "Å ha hendene fulle",
    "Koste skjorta",
    "Sauestirr",
    "Å ha maur i rumpa",
    "Det regner katter og hunder",
    "En fugl i hånden er bedre enn ti på taket",
    "Å strø salt i såret",
    "Å møte veggen",
    "Å ta seg vann over hodet",
    "Ugler i mosen",
    "Å få jernteppe",
    "Krokodilletårer",
    "Å ha bein i nesa",
    "Som sild i tønne",
    "Sommerfugler i magen",
    "Bite på kroken",
    "Gå rundt grøten",
    "Å ha mange baller i lufta",
    "Slå to fluer i en smekk",
    "Gullfiskhukommelse",
    "Ikke selg skinnet før bjørnen er skutt",
    "Å ha en høne og plukke",
    "Å bryte isen",
    "Spill the beans",
    "Spill the tea",
    "Elefanten i rommet",
    "Don't cry over spilled milk",
    "A piece of cake",
    "Beating around the bush",
    "Hit the nail on the head",
    "Kaste bensin på bål",
    "Ikke putt alle eggene i en kurv", //34
    "Don't judge a book by its cover",
    "Tiden flyr",
    "Kaste stein i glasshus",
    "Å ha et ess i ermet",
    "Break a leg",
    "Å få kalde føtter"
  ];

  const emojis = [
    "&#x1F63E;&#x2B07;&#xFE0F;&#x1F392;",
    "&#x263A;&#xFE0F;&#x1FA73;&#x1F3B9;",
    "&#x1F450;&#x1F974;&#x1F37B;",
    "&#x1F4B0;&#x1F4B5;&#x1F454;",
    "&#x1F411;&#x1F440;",
    "&#x1F41C;&#x1F351;",
    "&#x1F327;&#xFE0F;&#x1F431;&#x1F436;",
    "&#x1F426;&#x31;&#xFE0F;&#x20E3;&#x1F3E0;",
    "&#x1F9C2;&#x27A1;&#xFE0F;&#x1FA79;",
    "&#x1F64B;&#x1F9F1;",
    "&#x1F4A7;&#x1F51D;&#x1F613;",
    "&#x1F989;&#x1F333;",
    "&#x1F9E0;&#x2699;&#xFE0F;&#x1F6CF;&#xFE0F;&#x1F32B;&#xFE0F;",
    "&#x1F40A;&#x1F62D;",
    "&#x1F9B4;&#x1F443;",
    "&#x1F41F;&#x1F6E2;&#xFE0F;",
    "&#x1F98B;&#x1FA76;",
    "&#x1FAE6;&#x1FA9D;&#x1F3A3;",
    "&#x1F6B6;&#x27A1;&#xFE0F;&#x1F35A;",
    "&#x1F939;&#x26BD;&#x1F32C;&#xFE0F;",
    "&#x1F528;&#x1F4A5;&#x1FAB0;&#x1FAB0;",
    "&#x1F420;&#x1F9E0;&#x1F635;&#x200D;&#x1F4AB;",
    "&#x1F645;&#x1F4B8;&#x1F43B;&#x1F52B;",
    "&#x1FA73;&#x1F413;",
    "&#x1F9CA;&#x1F528;&#x1F4A5;",
    "&#x1F9C8;&#x1F4A7;&#x1F5E3;&#xFE0F;",
    "&#x1FAD6;&#x1F4A7;&#x1F5E3;&#xFE0F;&#x1F64A;",
    "&#x1F418;&#x1F6AA;&#x1F440;",
    "&#x1F979;&#x1F4A7;&#x1F95B;",
    "&#x1F9E9;&#x1F370;&#x1F44C;",
    "&#x1F94A;&#x27A1;&#xFE0F;&#x1F333;",
    "&#x1F528;&#x1F4CC;&#x1F469;&#x200D;&#x1F9B2;",
    "&#x1F93E;&#x26FD;&#x1F525;",
    "&#x1F95A;&#x274C;&#x1F9FA;",//34
    "&#x1F4D5;&#x1F9D1;&#x200D;&#x2696;&#xFE0F;&#x1F4D6;&#x2705;",
    "&#x231B;&#x23F1;&#xFE0F;&#x1FAB6;",
    "&#x1FAA8;&#x1FA9F;&#x1F3E0;",
    "&#x1F170;&#xFE0F;&#x2666;&#xFE0F;&#x1F933;",
    "&#x1F9B5;&#x1F4A5;&#x26D3;&#xFE0F;&#x1F3AD;",
    "&#x1F976;&#x1F9B6;"
  ];

  // Kall motoren
  if (typeof startEmojiGame !== "function") {
    console.error("startEmojiGame er ikke lastet. Sjekk sti til spillmotor.js");
    return;
  }
  startEmojiGame({
    items,
    emojis,
    categoryName: "Ordtak",
    categoryPath: "Kategorier/ordtak.html"
  });
});
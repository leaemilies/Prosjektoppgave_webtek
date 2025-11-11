document.addEventListener("DOMContentLoaded", () => {
  const items = [
  "Ocean Eyes",
  "Old Town Road",
  "Dancing Queen",
  "Hello",
  "Eye of the Tiger",
  "The Lion Sleeps Tonight",
  "Don't Stop the Music",
  "Walking on Sunshine",
  "Man in the Mirror",
  "Fast Car",
  "Dancing in the Moonlight",
  "Who Let the Dogs Out",
  "A Sky Full of Stars",
  "Starboy",
  "God's Plan",
  "Mask Off",
  "Ice Ice Baby",
  "Baby Shark",
  "Driver's License",
  "Butterfly Effect",
  "Ice Spice",
  "Snoop Dogg",
  "Guns N Roses",
  "Rihanna",
  "Linkin Park",
  "Nicki Minaj",
  "Rolling Stones",
  "Coldplay",
  "Imagine Dragons",
  "Michael Jackson"
];

const emojis = [
  "&#x1F30A;&#x1F440;", 
  "&#x1F474;&#x1F3D9;&#xFE0F;&#x1F6E3;&#xFE0F;",
  "&#x1F483;&#x1F451;",
  "&#x260E;&#xFE0F;&#x1F44B;",
  "&#x1F441;&#xFE0F;&#x1F405;",
  "&#x1F981;&#x1F634;&#x1F319;",
  "&#x1F6AB;&#x1F6D1;&#x1F3B6;",
  "&#x1F6B6;&#x200D;&#x2642;&#xFE0F;&#x1F31E;",
  "&#x1F57A;&#x1FA9E;",
  "&#x1F4A8;&#x1F697;",
  "&#x1F483;&#x1F319;",
  "&#x1F436;&#x2753;",
  "&#x1F303;&#x2B50;&#xFE0F;",
  "&#x2B50;&#x1F466;",
  "&#x1F64F;&#x1F4CB;",
  "&#x1F3AD;&#x1F44E;",
  "&#x2744;&#xFE0F;&#x2744;&#xFE0F;&#x1F476;",
  "&#x1F476;&#x1F988;",
  "&#x1F697;&#x1FA9A;",
  "&#x1F98B;&#x2728;",
  "&#x1F9CA;&#x1F336;&#xFE0F;",
  "&#x1F436;&#x1F6AC;",
  "&#x1F52B;&#x1F339;",
  "&#x1F302;&#x1F469;",
  "&#x1F46C;&#x1F309;",
  "&#x1F984;&#x1F469;",
  "&#x1F501;&#x1FAA8;",
  "&#x1F976;&#x1F3AE;",
  "&#x1F4AD;&#x1F409;",
  "&#x1F466;&#x1F9DF;&#x1F57A;"
]

  // Kall motoren
  if (typeof startEmojiGame !== "function") {
    console.error("startEmojiGame er ikke lastet. Sjekk sti til spillmotor.js");
    return;
  }
  startEmojiGame({
    items,
    emojis,
    categoryName: "Musikk",
    categoryPath: "Kategorier/musikk.html"
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const items = [
    ""
  ];
  const emojis = [
    ""
  ];

  // Kall motoren
  if (typeof startEmojiGame !== "function") {
    console.error("startEmojiGame er ikke lastet. Sjekk sti til spillmotor.js");
    return;
  }
  startEmojiGame({
    items,
    emojis,
    categoryName: "mix",
    categoryPath: "Kategorier/mix.html"
  });
});
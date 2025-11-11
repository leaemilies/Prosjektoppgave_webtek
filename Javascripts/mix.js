// Javascripts/mix.js
document.addEventListener("DOMContentLoaded", () => {
  // --- Film & Bøker ---
  const items_FilmOgBoker = [
    "Harry Potter","Ringenes Herre","Twilight","Hunger Games","Narnia","Fluenes Herre","Anne Franks Dagbok",
    "Percy Jackson","Sherlock Holmes","Titanic","Løvenes konge","Interstellar","Finding Nemo","Askepott",
    "Spider Man","Jurassic Park","Frozen","IT","Halloween","Fast & Furious","Kingsman","The Hunger Games: Mockingjay",
    "The Hobbit","Kung Fu Panda","The Nightmare Before Christmas","The Walking Dead","Game of Thrones","Breaking Bad",
    "Dark","The Crown","Hannah Montana","Lost","Stranger Things","Squid Game","Brooklyn Nine-Nine",
    "Chilling Adventures of Sabrina","Mindhunter","The Vampire Diaries","Suits","Black Mirror","Batman","The Joker",
    "Mikke Mus","Pus med støvler","Captain America","Thor","The Hulk","Black Widow","Doctor Strange","The Little Mermaid"
  ];
  const emojis_FilmOgBoker = [
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
    "&#x1F0CF;&#x1F49A;&#x1F49C;&#x1F608;"
  ];

  // --- Land ---
  const items_Land = [
    "Frankrike","USA","Japan","Tyskland","Australia","Saudi-Arabia","Kina","Italia","Sveits","Indonesia",
    "Kenya","Brasil","Peru","Tyrkia","India","Fiji","Canada","New Zealand","Norge","Egypt",
    "Spania","Storbritannia","Mexico","Hellas","Sør-Afrika","Argentina","Sør-Korea","Thailand","Nederland","Portugal"
  ];
  const emojis_Land = [
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

  // --- Mat & Drikke ---
  const items_MatOgDrikke = [
    "Jordbær milkshake","Sushi","Hvitløksbrød","Løkring","Toast","RedBull","Iskaffe","Cocktail","Sprite","Pina Colada",
    "Hotdog","Mango","Kiwi","Banan pannekaker","Brownies","Tomatsuppe","Cheeseburger","Popcorn","Monster","Fanta"
  ];
  const emojis_MatOgDrikke = [
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

  // --- Musikk ---
  const items_Musikk = [
    "Ocean Eyes","Old Town Road","Dancing Queen","Hello","Eye of the Tiger","The Lion Sleeps Tonight","Don't Stop the Music",
    "Walking on Sunshine","Man in the Mirror","Fast Car","Dancing in the Moonlight","Who Let the Dogs Out","A Sky Full of Stars",
    "Starboy","God's Plan","Mask Off","Ice Ice Baby","Baby Shark","Driver's License","Butterfly Effect","Ice Spice","Snoop Dogg",
    "Guns N Roses","Rihanna","Linkin Park","Nicki Minaj","Rolling Stones","Coldplay","Imagine Dragons","Michael Jackson"
  ];
  const emojis_Musikk = [
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
  ];

  // --- Ordtak ---
  const items_Ordtak = [
    "Katta i sekken","Ta det piano","Å ha hendene fulle","Koste skjorta","Sauestirr","Å ha maur i rumpa",
    "Det regner katter og hunder","En fugl i hånden er bedre enn ti på taket","Å strø salt i såret","Å møte veggen",
    "Å ta seg vann over hodet","Ugler i mosen","Å få jernteppe","Krokodilletårer","Å ha bein i nesa","Som sild i tønne",
    "Sommerfugler i magen","Bite på kroken","Gå rundt grøten","Å ha mange baller i lufta","Slå to fluer i en smekk",
    "Gullfiskhukommelse","Ikke selg skinnet før bjørnen er skutt","Å ha en høne og plukke","Å bryte isen","Spill the beans",
    "Spill the tea","Elefanten i rommet","Don't cry over spilled milk","A piece of cake","Beating around the bush",
    "Hit the nail on the head","Kaste bensin på bål","Ikke putt alle eggene i en kurv","Don't judge a book by its cover",
    "Tiden flyr","Kaste stein i glasshus","Å ha et ess i ermet","Break a leg","Å få kalde føtter"
  ];
  const emojis_Ordtak = [
    "&#x1F63E;&#x2B07;&#xFE0F;&#x1F392;","&#x263A;&#xFE0F;&#x1FA73;&#x1F3B9;","&#x1F450;&#x1F974;&#x1F37B;","&#x1F4B0;&#x1F4B5;&#x1F454;","&#x1F411;&#x1F440;",
    "&#x1F41C;&#x1F351;","&#x1F327;&#xFE0F;&#x1F431;&#x1F436;","&#x1F426;&#x31;&#xFE0F;&#x20E3;&#x1F3E0;","&#x1F9C2;&#x27A1;&#xFE0F;&#x1FA79;","&#x1F64B;&#x1F9F1;",
    "&#x1F4A7;&#x1F51D;&#x1F613;","&#x1F989;&#x1F333;","&#x1F9E0;&#x2699;&#xFE0F;&#x1F6CF;&#xFE0F;&#x1F32B;&#xFE0F;","&#x1F40A;&#x1F62D;","&#x1F9B4;&#x1F443;",
    "&#x1F41F;&#x1F6E2;&#xFE0F;","&#x1F98B;&#x1FA76;","&#x1FAE6;&#x1FA9D;&#x1F3A3;","&#x1F6B6;&#x27A1;&#xFE0F;&#x1F35A;","&#x1F939;&#x26BD;&#x1F32C;&#xFE0F;",
    "&#x1F528;&#x1F4A5;&#x1FAB0;&#x1FAB0;","&#x1F420;&#x1F9E0;&#x1F635;&#x200D;&#x1F4AB;","&#x1F645;&#x1F4B8;&#x1F43B;&#x1F52B;","&#x1FA73;&#x1F413;",
    "&#x1F9CA;&#x1F528;&#x1F4A5;","&#x1F9C8;&#x1F4A7;&#x1F5E3;&#xFE0F;","&#x1FAD6;&#x1F4A7;&#x1F5E3;&#xFE0F;&#x1F64A;","&#x1F418;&#x1F6AA;&#x1F440;",
    "&#x1F979;&#x1F4A7;&#x1F95B;","&#x1F9E9;&#x1F370;&#x1F44C;","&#x1F94A;&#x27A1;&#xFE0F;&#x1F333;","&#x1F528;&#x1F4CC;&#x1F469;&#x200D;&#x1F9B2;",
    "&#x1F93E;&#x26FD;&#x1F525;","&#x1F95A;&#x274C;&#x1F45A;","&#x1F4D5;&#x1F9D1;&#x200D;&#x2696;&#xFE0F;&#x1F4D6;&#x2705;","&#x231B;&#x23F1;&#xFE0F;&#x1FAB6;",
    "&#x1FAA8;&#x1FA9F;&#x1F3E0;","&#x1F170;&#xFE0F;&#x2666;&#xFE0F;&#x1F933;","&#x1F9B5;&#x1F4A5;&#x26D3;&#xFE0F;&#x1F3AD;","&#x1F976;&#x1F9B6;"
  ];

  // --- Samlet MIX ---
  let items = [
    ...items_FilmOgBoker,
    ...items_Land,
    ...items_MatOgDrikke,
    ...items_Musikk,
    ...items_Ordtak
  ];
  let emojis = [
    ...emojis_FilmOgBoker,
    ...emojis_Land,
    ...emojis_MatOgDrikke,
    ...emojis_Musikk,
    ...emojis_Ordtak
  ];

  // Sikring: lik lengde
  if (items.length !== emojis.length) {
    const n = Math.min(items.length, emojis.length);
    console.warn(`Mixed: items=${items.length}, emojis=${emojis.length}. Trimmer til ${n}.`);
    items = items.slice(0, n);
    emojis = emojis.slice(0, n);
  }

  // Fleksibel validering (semikolon-varianter)
  function isCorrect(index, answer) {
    const canonical = s => String(s).toLowerCase().trim().replace(/\s+/g, " ");
    const variants = String(items[index]).split(";").map(canonical);
    return variants.includes(canonical(answer));
  }

  if (typeof startEmojiGame !== "function") {
    console.error("startEmojiGame er ikke lastet. Sjekk at spillmotor.js lastes før mix.js");
    return;
  }

  console.log("Mixed loaded", { items: items.length, emojis: emojis.length, motor: typeof startEmojiGame });

  startEmojiGame({
    items,
    emojis,
    categoryName: "Mixed",
    categoryPath: "Kategorier/mix.html",
    isCorrect
  });
});
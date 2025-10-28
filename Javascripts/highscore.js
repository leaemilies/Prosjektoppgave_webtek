// Veldig enkel highscore-API. Jeg eksponerer funksjoner på window så det er lett å bruke.

(function(){
  var KEY_BEST = "emoji_best_score";
  var KEY_LIST = "emoji_score_list";

  // hent beste score
  function getBestScore() {
    return Number(localStorage.getItem(KEY_BEST) || 0);
  }

  // oppdater beste hvis høyere
  function setBestIfHigher(n) {
    var s = Number(n) || 0;
    var b = getBestScore();
    if (s > b) localStorage.setItem(KEY_BEST, String(s));
  }

  // legg til loggpost {score, at, cat}
  function addEntry(score, cat) {
    try {
      var raw = localStorage.getItem(KEY_LIST);
      var arr = raw ? JSON.parse(raw) : [];
      arr.push({
        score: Number(score) || 0,
        at: new Date().toISOString(),
        cat: cat || "Ukjent"
      });
      if (arr.length > 300) arr = arr.slice(arr.length - 300);
      localStorage.setItem(KEY_LIST, JSON.stringify(arr));
    } catch(e) {
      localStorage.setItem(KEY_LIST, JSON.stringify([{
        score: Number(score) || 0,
        at: new Date().toISOString(),
        cat: cat || "Ukjent"
      }]));
    }
  }

  // hent hele lista
  function getList() {
    try {
      var raw = localStorage.getItem(KEY_LIST);
      return raw ? JSON.parse(raw) : [];
    } catch(e) {
      return [];
    }
  }

  // slett alt
  function clearAll() {
    localStorage.removeItem(KEY_BEST);
    localStorage.removeItem(KEY_LIST);
  }

  // eksporter
  window.HighscoreStore = {
    getBestScore: getBestScore,
    setBestIfHigher: setBestIfHigher,
    addEntry: addEntry,
    getList: getList,
    clearAll: clearAll
  };
})();
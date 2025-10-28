// Viser high score + alle runder (dato + kategori + poeng).
// Jeg unngår imports, leser direkte fra localStorage, så det funker når man åpner filene rett fra disk.

document.addEventListener("DOMContentLoaded", function () {
  var bestEl = document.getElementById("bestScore");
  var bodyEl = document.getElementById("scoreBody");
  var clearBtn = document.getElementById("clearBtn");

  function getBest() {
    return Number(localStorage.getItem("emoji_best_score") || 0);
  }

  function getList() {
    try {
      var raw = localStorage.getItem("emoji_score_list");
      var arr = raw ? JSON.parse(raw) : [];
      // jeg viser nyeste først
      arr = arr.slice().reverse();
      return arr;
    } catch(e) {
      return [];
    }
  }

  function fmt(iso) {
    // enkel dato: DD.MM.YYYY HH:MM
    try {
      var d = new Date(iso);
      var dd = String(d.getDate()).padStart(2,"0");
      var mm = String(d.getMonth()+1).padStart(2,"0");
      var yyyy = d.getFullYear();
      var hh = String(d.getHours()).padStart(2,"0");
      var mi = String(d.getMinutes()).padStart(2,"0");
      return dd+"."+mm+"."+yyyy+" "+hh+":"+mi;
    } catch(e) {
      return "-";
    }
  }

  function render() {
    if (bestEl) bestEl.textContent = getBest();

    if (bodyEl) {
      var list = getList();
      bodyEl.innerHTML = "";

      if (list.length === 0) {
        var tr = document.createElement("tr");
        tr.innerHTML = '<td colspan="3" class="text-muted">Ingen runder lagret ennå.</td>';
        bodyEl.appendChild(tr);
        return;
      }

      for (var i=0; i<list.length; i++) {
        var e = list[i];
        var tr = document.createElement("tr");
        tr.innerHTML =
          "<td>"+ fmt(e.at) +"</td>"+
          "<td>"+ (e.cat || "Ukjent") +"</td>"+
          "<td class='fw-bold'>"+ (Number(e.score)||0) +"</td>";
        bodyEl.appendChild(tr);
      }
    }
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", function(){
      if (confirm("Nullstille high score og listen?")) {
        localStorage.removeItem("emoji_best_score");
        localStorage.removeItem("emoji_score_list");
        render();
      }
    });
  }

  render();
});
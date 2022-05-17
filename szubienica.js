var haslo = "без работы нет колес";
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;

var ile_skuch = 0;

var haslo1 = "";

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

for (i = 0; i < dlugosc; i++) {
  if (haslo.charAt(i) == " ") haslo1 = haslo1 + " ";
  else haslo1 = haslo1 + "-";
}

function wypisz_haslo() {
  document.getElementById("board").innerHTML = haslo1;
}

window.onload = start;

var litery = new Array(35);
litery[0] = "А";
litery[1] = "Б";
litery[2] = "В";
litery[3] = "Г";
litery[4] = "Д";
litery[5] = "Е";
litery[6] = "Ё";
litery[7] = "Ж";
litery[8] = "З";
litery[9] = "И";
litery[10] = "Й";
litery[11] = "К";
litery[12] = "Л";
litery[13] = "М";
litery[14] = "Н";
litery[15] = "О";
litery[16] = "П";
litery[17] = "Р";
litery[18] = "С";
litery[19] = "Т";
litery[20] = "У";
litery[21] = "Ф";
litery[22] = "Х";
litery[23] = "Ц";
litery[24] = "Ч";
litery[25] = "Ш";
litery[26] = "Щ";
litery[27] = "Ъ";
litery[28] = "Ы";
litery[29] = "Ь";
litery[30] = "Э";
litery[31] = "Ю";
litery[32] = "Я";
litery[33] = "A";
litery[34] = "A";

function start() {
  var tresc_diva = "";

  for (i = 0; i <= 34; i++) {
    var element = "lit" + i;
    tresc_diva =
      tresc_diva +
      '<div class="litera" onclick="sprawdz(' +
      i +
      ')" id="' +
      element +
      '">' +
      litery[i] +
      "</div>";

    if ((i + 1) % 7 == 0)
      tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
  }

  document.getElementById("alfabet").innerHTML = tresc_diva;

  wypisz_haslo();
}

String.prototype.ustawZnak = function (miejsce, znak) {
  if (miejsce > this.length - 1) return this.toString();
  else return this.substr(0, miejsce) + znak + this.substr(miejsce + 1);
};

function sprawdz(nr) {
  var trafiona = false;

  for (i = 0; i < dlugosc; i++) {
    if (haslo.charAt(i) == litery[nr]) {
      haslo1 = haslo1.ustawZnak(i, litery[nr]);
      trafiona = true;
    }
  }
  if (trafiona == true) {
    yes.play();
    var element = "lit" + nr;
    document.getElementById(element).style.background = "#003300";
    document.getElementById(element).style.color = "#00C000";
    document.getElementById(element).style.border = "3px solid #00C000";
    document.getElementById(element).style.cursor = "default";

    wypisz_haslo();
  } else {
    no.play();
    var element = "lit" + nr;
    document.getElementById(element).style.background = "#330000";
    document.getElementById(element).style.color = "#C00000";
    document.getElementById(element).style.border = "3px solid #C00000";
    document.getElementById(element).style.cursor = "default";
    document.getElementById(element).setAttribute("onclick", ";");

    //skucha
    ile_skuch++;
    var obraz = "img/s" + ile_skuch + ".jpg";

    document.getElementById("szubienica").innerHTML =
      '<img src="' + obraz + '" alt="" />';
  }

  //wygrana
  if (haslo == haslo1) {
    document.getElementById("alfabet").innerHTML =
      "Так точно! Правильный пароль указан: " +
      haslo +
      '<br /><br /><span class="reset" onclick="location.reload()">Ещё раз?</span>';
  }
  //przegrana
  if (ile_skuch >= 9)
    document.getElementById("alfabet").innerHTML =
      "Неверно! Правильный ответ: " +
      haslo +
      '<br /><br /><span class="reset" onclick="location.reload()">Ещё раз?</span>';
}

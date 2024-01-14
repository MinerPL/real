"use strict";
i.r(n), i.d(n, {
  default: function() {
    return a
  }
}), i("781738");
var t = {
  lessThanXSeconds: {
    one: {
      regular: "mniej niż sekunda",
      past: "mniej niż sekundę",
      future: "mniej niż sekundę"
    },
    twoFour: "mniej niż {{count}} sekundy",
    other: "mniej niż {{count}} sekund"
  },
  xSeconds: {
    one: {
      regular: "sekunda",
      past: "sekundę",
      future: "sekundę"
    },
    twoFour: "{{count}} sekundy",
    other: "{{count}} sekund"
  },
  halfAMinute: {
    one: "p\xf3ł minuty",
    twoFour: "p\xf3ł minuty",
    other: "p\xf3ł minuty"
  },
  lessThanXMinutes: {
    one: {
      regular: "mniej niż minuta",
      past: "mniej niż minutę",
      future: "mniej niż minutę"
    },
    twoFour: "mniej niż {{count}} minuty",
    other: "mniej niż {{count}} minut"
  },
  xMinutes: {
    one: {
      regular: "minuta",
      past: "minutę",
      future: "minutę"
    },
    twoFour: "{{count}} minuty",
    other: "{{count}} minut"
  },
  aboutXHours: {
    one: {
      regular: "około godziny",
      past: "około godziny",
      future: "około godzinę"
    },
    twoFour: "około {{count}} godziny",
    other: "około {{count}} godzin"
  },
  xHours: {
    one: {
      regular: "godzina",
      past: "godzinę",
      future: "godzinę"
    },
    twoFour: "{{count}} godziny",
    other: "{{count}} godzin"
  },
  xDays: {
    one: {
      regular: "dzień",
      past: "dzień",
      future: "1 dzień"
    },
    twoFour: "{{count}} dni",
    other: "{{count}} dni"
  },
  aboutXWeeks: {
    one: "około tygodnia",
    twoFour: "około {{count}} tygodni",
    other: "około {{count}} tygodni"
  },
  xWeeks: {
    one: "tydzień",
    twoFour: "{{count}} tygodnie",
    other: "{{count}} tygodni"
  },
  aboutXMonths: {
    one: "około miesiąc",
    twoFour: "około {{count}} miesiące",
    other: "około {{count}} miesięcy"
  },
  xMonths: {
    one: "miesiąc",
    twoFour: "{{count}} miesiące",
    other: "{{count}} miesięcy"
  },
  aboutXYears: {
    one: "około rok",
    twoFour: "około {{count}} lata",
    other: "około {{count}} lat"
  },
  xYears: {
    one: "rok",
    twoFour: "{{count}} lata",
    other: "{{count}} lat"
  },
  overXYears: {
    one: "ponad rok",
    twoFour: "ponad {{count}} lata",
    other: "ponad {{count}} lat"
  },
  almostXYears: {
    one: "prawie rok",
    twoFour: "prawie {{count}} lata",
    other: "prawie {{count}} lat"
  }
};

function o(e, n, i) {
  var t = function(e, n) {
    if (1 === n) return e.one;
    var i = n % 100;
    if (i <= 20 && i > 10) return e.other;
    var t = i % 10;
    return t >= 2 && t <= 4 ? e.twoFour : e.other
  }(e, n);
  return ("string" == typeof t ? t : t[i]).replace("{{count}}", String(n))
}
var a = function(e, n, i) {
  var a = t[e];
  return null != i && i.addSuffix ? i.comparison && i.comparison > 0 ? "za " + o(a, n, "future") : o(a, n, "past") + " temu" : o(a, n, "regular")
}
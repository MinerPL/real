"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var r = n("996677"),
  a = n("196592"),
  o = n("872852"),
  i = n("687419"),
  s = n("834779"),
  u = n("856593"),
  l = n("154255"),
  c = {
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  };

function d(e, t) {
  var n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    a = Math.floor(r / 60),
    o = r % 60;
  return 0 === o ? n + String(a) : n + String(a) + (t || "") + (0, u.default)(o, 2)
}

function f(e, t) {
  return e % 60 == 0 ? (e > 0 ? "-" : "+") + (0, u.default)(Math.abs(e) / 60, 2) : p(e, t)
}

function p(e, t) {
  var n = Math.abs(e);
  return (e > 0 ? "-" : "+") + (0, u.default)(Math.floor(n / 60), 2) + (t || "") + (0, u.default)(n % 60, 2)
}
var m = {
  G: function(e, t, n) {
    var r = e.getUTCFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, {
          width: "abbreviated"
        });
      case "GGGGG":
        return n.era(r, {
          width: "narrow"
        });
      default:
        return n.era(r, {
          width: "wide"
        })
    }
  },
  y: function(e, t, n) {
    if ("yo" === t) {
      var r = e.getUTCFullYear();
      return n.ordinalNumber(r > 0 ? r : 1 - r, {
        unit: "year"
      })
    }
    return l.default.y(e, t)
  },
  Y: function(e, t, n, r) {
    var a = (0, s.default)(e, r),
      o = a > 0 ? a : 1 - a;
    if ("YY" === t) {
      var i = o % 100;
      return (0, u.default)(i, 2)
    }
    return "Yo" === t ? n.ordinalNumber(o, {
      unit: "year"
    }) : (0, u.default)(o, t.length)
  },
  R: function(e, t) {
    var n = (0, o.default)(e);
    return (0, u.default)(n, t.length)
  },
  u: function(e, t) {
    var n = e.getUTCFullYear();
    return (0, u.default)(n, t.length)
  },
  Q: function(e, t, n) {
    var r = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return (0, u.default)(r, 2);
      case "Qo":
        return n.ordinalNumber(r, {
          unit: "quarter"
        });
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        })
    }
  },
  q: function(e, t, n) {
    var r = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(r);
      case "qq":
        return (0, u.default)(r, 2);
      case "qo":
        return n.ordinalNumber(r, {
          unit: "quarter"
        });
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        })
    }
  },
  M: function(e, t, n) {
    var r = e.getUTCMonth();
    switch (t) {
      case "M":
      case "MM":
        return l.default.M(e, t);
      case "Mo":
        return n.ordinalNumber(r + 1, {
          unit: "month"
        });
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.month(r, {
          width: "wide",
          context: "formatting"
        })
    }
  },
  L: function(e, t, n) {
    var r = e.getUTCMonth();
    switch (t) {
      case "L":
        return String(r + 1);
      case "LL":
        return (0, u.default)(r + 1, 2);
      case "Lo":
        return n.ordinalNumber(r + 1, {
          unit: "month"
        });
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return n.month(r, {
          width: "wide",
          context: "standalone"
        })
    }
  },
  w: function(e, t, n, r) {
    var a = (0, i.default)(e, r);
    return "wo" === t ? n.ordinalNumber(a, {
      unit: "week"
    }) : (0, u.default)(a, t.length)
  },
  I: function(e, t, n) {
    var r = (0, a.default)(e);
    return "Io" === t ? n.ordinalNumber(r, {
      unit: "week"
    }) : (0, u.default)(r, t.length)
  },
  d: function(e, t, n) {
    return "do" === t ? n.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : l.default.d(e, t)
  },
  D: function(e, t, n) {
    var a = (0, r.default)(e);
    return "Do" === t ? n.ordinalNumber(a, {
      unit: "dayOfYear"
    }) : (0, u.default)(a, t.length)
  },
  E: function(e, t, n) {
    var r = e.getUTCDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        })
    }
  },
  e: function(e, t, n, r) {
    var a = e.getUTCDay(),
      o = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(o);
      case "ee":
        return (0, u.default)(o, 2);
      case "eo":
        return n.ordinalNumber(o, {
          unit: "day"
        });
      case "eee":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        })
    }
  },
  c: function(e, t, n, r) {
    var a = e.getUTCDay(),
      o = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(o);
      case "cc":
        return (0, u.default)(o, t.length);
      case "co":
        return n.ordinalNumber(o, {
          unit: "day"
        });
      case "ccc":
        return n.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(a, {
          width: "short",
          context: "standalone"
        });
      default:
        return n.day(a, {
          width: "wide",
          context: "standalone"
        })
    }
  },
  i: function(e, t, n) {
    var r = e.getUTCDay(),
      a = 0 === r ? 7 : r;
    switch (t) {
      case "i":
        return String(a);
      case "ii":
        return (0, u.default)(a, t.length);
      case "io":
        return n.ordinalNumber(a, {
          unit: "day"
        });
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        })
    }
  },
  a: function(e, t, n) {
    var r = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        })
    }
  },
  b: function(e, t, n) {
    var r, a = e.getUTCHours();
    switch (r = 12 === a ? c.noon : 0 === a ? c.midnight : a / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        })
    }
  },
  B: function(e, t, n) {
    var r, a = e.getUTCHours();
    switch (r = a >= 17 ? c.evening : a >= 12 ? c.afternoon : a >= 4 ? c.morning : c.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        })
    }
  },
  h: function(e, t, n) {
    if ("ho" === t) {
      var r = e.getUTCHours() % 12;
      return 0 === r && (r = 12), n.ordinalNumber(r, {
        unit: "hour"
      })
    }
    return l.default.h(e, t)
  },
  H: function(e, t, n) {
    return "Ho" === t ? n.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : l.default.H(e, t)
  },
  K: function(e, t, n) {
    var r = e.getUTCHours() % 12;
    return "Ko" === t ? n.ordinalNumber(r, {
      unit: "hour"
    }) : (0, u.default)(r, t.length)
  },
  k: function(e, t, n) {
    var r = e.getUTCHours();
    return (0 === r && (r = 24), "ko" === t) ? n.ordinalNumber(r, {
      unit: "hour"
    }) : (0, u.default)(r, t.length)
  },
  m: function(e, t, n) {
    return "mo" === t ? n.ordinalNumber(e.getUTCMinutes(), {
      unit: "minute"
    }) : l.default.m(e, t)
  },
  s: function(e, t, n) {
    return "so" === t ? n.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : l.default.s(e, t)
  },
  S: function(e, t) {
    return l.default.S(e, t)
  },
  X: function(e, t, n, r) {
    var a = (r._originalDate || e).getTimezoneOffset();
    if (0 === a) return "Z";
    switch (t) {
      case "X":
        return f(a);
      case "XXXX":
      case "XX":
        return p(a);
      default:
        return p(a, ":")
    }
  },
  x: function(e, t, n, r) {
    var a = (r._originalDate || e).getTimezoneOffset();
    switch (t) {
      case "x":
        return f(a);
      case "xxxx":
      case "xx":
        return p(a);
      default:
        return p(a, ":")
    }
  },
  O: function(e, t, n, r) {
    var a = (r._originalDate || e).getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + d(a, ":");
      default:
        return "GMT" + p(a, ":")
    }
  },
  z: function(e, t, n, r) {
    var a = (r._originalDate || e).getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + d(a, ":");
      default:
        return "GMT" + p(a, ":")
    }
  },
  t: function(e, t, n, r) {
    var a = Math.floor((r._originalDate || e).getTime() / 1e3);
    return (0, u.default)(a, t.length)
  },
  T: function(e, t, n, r) {
    var a = (r._originalDate || e).getTime();
    return (0, u.default)(a, t.length)
  }
}
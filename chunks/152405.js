"use strict";
t.r(a), t.d(a, {
  default: function() {
    return r
  }
});
var n = t("64273"),
  r = {
    ordinalNumber: function(e, a) {
      return Number(e) + "e"
    },
    era: (0, n.default)({
      values: {
        narrow: ["v.C.", "n.C."],
        abbreviated: ["v.Chr.", "n.Chr."],
        wide: ["voor Christus", "na Christus"]
      },
      defaultWidth: "wide"
    }),
    quarter: (0, n.default)({
      values: {
        narrow: ["1", "2", "3", "4"],
        abbreviated: ["K1", "K2", "K3", "K4"],
        wide: ["1e kwartaal", "2e kwartaal", "3e kwartaal", "4e kwartaal"]
      },
      defaultWidth: "wide",
      argumentCallback: function(e) {
        return e - 1
      }
    }),
    month: (0, n.default)({
      values: {
        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        abbreviated: ["jan.", "feb.", "mrt.", "apr.", "mei", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."],
        wide: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]
      },
      defaultWidth: "wide"
    }),
    day: (0, n.default)({
      values: {
        narrow: ["Z", "M", "D", "W", "D", "V", "Z"],
        short: ["zo", "ma", "di", "wo", "do", "vr", "za"],
        abbreviated: ["zon", "maa", "din", "woe", "don", "vri", "zat"],
        wide: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
      },
      defaultWidth: "wide"
    }),
    dayPeriod: (0, n.default)({
      values: {
        narrow: {
          am: "AM",
          pm: "PM",
          midnight: "middernacht",
          noon: "het middaguur",
          morning: "'s ochtends",
          afternoon: "'s middags",
          evening: "'s avonds",
          night: "'s nachts"
        },
        abbreviated: {
          am: "AM",
          pm: "PM",
          midnight: "middernacht",
          noon: "het middaguur",
          morning: "'s ochtends",
          afternoon: "'s middags",
          evening: "'s avonds",
          night: "'s nachts"
        },
        wide: {
          am: "AM",
          pm: "PM",
          midnight: "middernacht",
          noon: "het middaguur",
          morning: "'s ochtends",
          afternoon: "'s middags",
          evening: "'s avonds",
          night: "'s nachts"
        }
      },
      defaultWidth: "wide"
    })
  }
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("713289"),
  r = n("504435"),
  i = {
    ordinalNumber: (0, r.default)({
      matchPattern: /^(\d+)\.?/i,
      parsePattern: /\d+/i,
      valueCallback: function(e) {
        return parseInt(e, 10)
      }
    }),
    era: (0, a.default)({
      matchPatterns: {
        narrow: /^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,
        abbreviated: /^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,
        wide: /^(før Kristus|før vår tid|etter Kristus|vår tid)/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        any: [/^f/i, /^e/i]
      },
      defaultParseWidth: "any"
    }),
    quarter: (0, a.default)({
      matchPatterns: {
        narrow: /^[1234]/i,
        abbreviated: /^q[1234]/i,
        wide: /^[1234](\.)? kvartal/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        any: [/1/i, /2/i, /3/i, /4/i]
      },
      defaultParseWidth: "any",
      valueCallback: function(e) {
        return e + 1
      }
    }),
    month: (0, a.default)({
      matchPatterns: {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,
        wide: /^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
        any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^mai/i, /^jun/i, /^jul/i, /^aug/i, /^s/i, /^o/i, /^n/i, /^d/i]
      },
      defaultParseWidth: "any"
    }),
    day: (0, a.default)({
      matchPatterns: {
        narrow: /^[smtofl]/i,
        short: /^(sø|ma|ti|on|to|fr|lø)/i,
        abbreviated: /^(søn|man|tir|ons|tor|fre|lør)/i,
        wide: /^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i]
      },
      defaultParseWidth: "any"
    }),
    dayPeriod: (0, a.default)({
      matchPatterns: {
        narrow: /^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,
        any: /^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i
      },
      defaultMatchWidth: "any",
      parsePatterns: {
        any: {
          am: /^a(\.?\s?m\.?)?$/i,
          pm: /^p(\.?\s?m\.?)?$/i,
          midnight: /^midn/i,
          noon: /^midd/i,
          morning: /morgen/i,
          afternoon: /ettermiddag/i,
          evening: /kveld/i,
          night: /natt/i
        }
      },
      defaultParseWidth: "any"
    })
  }
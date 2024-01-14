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
      matchPattern: /^(\d+)(:a|:e)?/i,
      parsePattern: /\d+/i,
      valueCallback: function(e) {
        return parseInt(e, 10)
      }
    }),
    era: (0, a.default)({
      matchPatterns: {
        narrow: /^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,
        abbreviated: /^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,
        wide: /^(före Kristus|före vår tid|efter Kristus|vår tid)/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        any: [/^f/i, /^[ev]/i]
      },
      defaultParseWidth: "any"
    }),
    quarter: (0, a.default)({
      matchPatterns: {
        narrow: /^[1234]/i,
        abbreviated: /^q[1234]/i,
        wide: /^[1234](:a|:e)? kvartalet/i
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
        abbreviated: /^(jan|feb|mar[s]?|apr|maj|jun[i]?|jul[i]?|aug|sep|okt|nov|dec)\.?/i,
        wide: /^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
        any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
      },
      defaultParseWidth: "any"
    }),
    day: (0, a.default)({
      matchPatterns: {
        narrow: /^[smtofl]/i,
        short: /^(sö|må|ti|on|to|fr|lö)/i,
        abbreviated: /^(sön|mån|tis|ons|tors|fre|lör)/i,
        wide: /^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i]
      },
      defaultParseWidth: "any"
    }),
    dayPeriod: (0, a.default)({
      matchPatterns: {
        any: /^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i
      },
      defaultMatchWidth: "any",
      parsePatterns: {
        any: {
          am: /^f/i,
          pm: /^e/i,
          midnight: /^midn/i,
          noon: /^midd/i,
          morning: /morgon/i,
          afternoon: /eftermiddag/i,
          evening: /kväll/i,
          night: /natt/i
        }
      },
      defaultParseWidth: "any"
    })
  }
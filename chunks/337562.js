"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var n = a("713289"),
  i = a("504435"),
  o = {
    ordinalNumber: (0, i.default)({
      matchPattern: /^(\d+)(º)?/i,
      parsePattern: /\d+/i,
      valueCallback: function(e) {
        return parseInt(e, 10)
      }
    }),
    era: (0, n.default)({
      matchPatterns: {
        narrow: /^(aC|dC)/i,
        abbreviated: /^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,
        wide: /^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        any: [/^a/i, /^(d|e)/i]
      },
      defaultParseWidth: "any"
    }),
    quarter: (0, n.default)({
      matchPatterns: {
        narrow: /^[1234]/i,
        abbreviated: /^t[1234]/i,
        wide: /^[1234](º)? trimestre/i
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
    month: (0, n.default)({
      matchPatterns: {
        narrow: /^[gfmalsond]/i,
        abbreviated: /^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,
        wide: /^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        narrow: [/^g/i, /^f/i, /^m/i, /^a/i, /^m/i, /^g/i, /^l/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
        any: [/^ge/i, /^f/i, /^mar/i, /^ap/i, /^mag/i, /^gi/i, /^l/i, /^ag/i, /^s/i, /^o/i, /^n/i, /^d/i]
      },
      defaultParseWidth: "any"
    }),
    day: (0, n.default)({
      matchPatterns: {
        narrow: /^[dlmgvs]/i,
        short: /^(do|lu|ma|me|gi|ve|sa)/i,
        abbreviated: /^(dom|lun|mar|mer|gio|ven|sab)/i,
        wide: /^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^g/i, /^v/i, /^s/i],
        any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^g/i, /^v/i, /^s/i]
      },
      defaultParseWidth: "any"
    }),
    dayPeriod: (0, n.default)({
      matchPatterns: {
        narrow: /^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,
        any: /^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i
      },
      defaultMatchWidth: "any",
      parsePatterns: {
        any: {
          am: /^a/i,
          pm: /^p/i,
          midnight: /^mezza/i,
          noon: /^mezzo/i,
          morning: /mattina/i,
          afternoon: /pomeriggio/i,
          evening: /sera/i,
          night: /notte/i
        }
      },
      defaultParseWidth: "any"
    })
  }
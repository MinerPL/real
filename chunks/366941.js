"use strict";
t.r(n), t.d(n, {
  default: function() {
    return a
  }
});
var r = t("713289"),
  o = t("504435"),
  a = {
    ordinalNumber: (0, o.default)({
      matchPattern: /^(\d+)\.?/i,
      parsePattern: /\d+/i,
      valueCallback: function(e) {
        return parseInt(e, 10)
      }
    }),
    era: (0, r.default)({
      matchPatterns: {
        narrow: /^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,
        abbreviated: /^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,
        wide: /^(p[řr](\.|ed) Kristem|p[řr](\.|ed) na[šs][íi]m letopo[čc]tem|po Kristu|na[šs]eho letopo[čc]tu)/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        any: [/^p[řr]/i, /^(po|n)/i]
      },
      defaultParseWidth: "any"
    }),
    quarter: (0, r.default)({
      matchPatterns: {
        narrow: /^[1234]/i,
        abbreviated: /^[1234]\. [čc]tvrtlet[íi]/i,
        wide: /^[1234]\. [čc]tvrtlet[íi]/i
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
    month: (0, r.default)({
      matchPatterns: {
        narrow: /^[lúubdkčcszřrlp]/i,
        abbreviated: /^(led|[úu]no|b[řr]e|dub|kv[ěe]|[čc]vn|[čc]vc|srp|z[áa][řr]|[řr][íi]j|lis|pro)/i,
        wide: /^(leden|ledna|[úu]nora?|b[řr]ezen|b[řr]ezna|duben|dubna|kv[ěe]ten|kv[ěe]tna|[čc]erven(ec|ce)?|[čc]ervna|srpen|srpna|z[áa][řr][íi]|[řr][íi]jen|[řr][íi]jna|listopad(a|u)?|prosinec|prosince)/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        narrow: [/^l/i, /^[úu]/i, /^b/i, /^d/i, /^k/i, /^[čc]/i, /^[čc]/i, /^s/i, /^z/i, /^[řr]/i, /^l/i, /^p/i],
        any: [/^led/i, /^[úu]n/i, /^b[řr]e/i, /^dub/i, /^kv[ěe]/i, /^[čc]vn|[čc]erven(?!\w)|[čc]ervna/i, /^[čc]vc|[čc]erven(ec|ce)/i, /^srp/i, /^z[áa][řr]/i, /^[řr][íi]j/i, /^lis/i, /^pro/i]
      },
      defaultParseWidth: "any"
    }),
    day: (0, r.default)({
      matchPatterns: {
        narrow: /^[npuúsčps]/i,
        short: /^(ne|po|[úu]t|st|[čc]t|p[áa]|so)/i,
        abbreviated: /^(ned|pon|[úu]te|st[rř]|[čc]tv|p[áa]t|sob)/i,
        wide: /^(ned[ěe]le|pond[ěe]l[íi]|[úu]ter[ýy]|st[řr]eda|[čc]tvrtek|p[áa]tek|sobota)/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        narrow: [/^n/i, /^p/i, /^[úu]/i, /^s/i, /^[čc]/i, /^p/i, /^s/i],
        any: [/^ne/i, /^po/i, /^[úu]t/i, /^st/i, /^[čc]t/i, /^p[áa]/i, /^so/i]
      },
      defaultParseWidth: "any"
    }),
    dayPeriod: (0, r.default)({
      matchPatterns: {
        any: /^dopoledne|dop\.?|odpoledne|odp\.?|p[ůu]lnoc|poledne|r[áa]no|odpoledne|ve[čc]er|(v )?noci?/i
      },
      defaultMatchWidth: "any",
      parsePatterns: {
        any: {
          am: /^dop/i,
          pm: /^odp/i,
          midnight: /^p[ůu]lnoc/i,
          noon: /^poledne/i,
          morning: /r[áa]no/i,
          afternoon: /odpoledne/i,
          evening: /ve[čc]er/i,
          night: /noc/i
        }
      },
      defaultParseWidth: "any"
    })
  }
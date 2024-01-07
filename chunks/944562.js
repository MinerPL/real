            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return r
                }
            });
            var n = t("713289"),
                i = t("504435"),
                r = {
                    ordinalNumber: (0, i.default)({
                        matchPattern: /^(\d+)(\.)?/i,
                        parsePattern: /\d+/i,
                        valueCallback: function(a) {
                            return parseInt(a, 10)
                        }
                    }),
                    era: (0, n.default)({
                        matchPatterns: {
                            narrow: /^(mö|ms)/i,
                            abbreviated: /^(mö|ms)/i,
                            wide: /^(milattan önce|milattan sonra)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: [/(^mö|^milattan önce)/i, /(^ms|^milattan sonra)/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    quarter: (0, n.default)({
                        matchPatterns: {
                            narrow: /^[1234]/i,
                            abbreviated: /^[1234]ç/i,
                            wide: /^((i|İ)lk|(i|İ)kinci|üçüncü|son) çeyrek/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: [/1/i, /2/i, /3/i, /4/i],
                            abbreviated: [/1ç/i, /2ç/i, /3ç/i, /4ç/i],
                            wide: [/^(i|İ)lk çeyrek/i, /(i|İ)kinci çeyrek/i, /üçüncü çeyrek/i, /son çeyrek/i]
                        },
                        defaultParseWidth: "any",
                        valueCallback: function(a) {
                            return a + 1
                        }
                    }),
                    month: (0, n.default)({
                        matchPatterns: {
                            narrow: /^[oşmnhtaek]/i,
                            abbreviated: /^(oca|şub|mar|nis|may|haz|tem|ağu|eyl|eki|kas|ara)/i,
                            wide: /^(ocak|şubat|mart|nisan|mayıs|haziran|temmuz|ağustos|eylül|ekim|kasım|aralık)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            narrow: [/^o/i, /^ş/i, /^m/i, /^n/i, /^m/i, /^h/i, /^t/i, /^a/i, /^e/i, /^e/i, /^k/i, /^a/i],
                            any: [/^o/i, /^ş/i, /^mar/i, /^n/i, /^may/i, /^h/i, /^t/i, /^ağ/i, /^ey/i, /^ek/i, /^k/i, /^ar/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    day: (0, n.default)({
                        matchPatterns: {
                            narrow: /^[psçc]/i,
                            short: /^(pz|pt|sa|ça|pe|cu|ct)/i,
                            abbreviated: /^(paz|pzt|sal|çar|per|cum|cts)/i,
                            wide: /^(pazar(?!tesi)|pazartesi|salı|çarşamba|perşembe|cuma(?!rtesi)|cumartesi)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            narrow: [/^p/i, /^p/i, /^s/i, /^ç/i, /^p/i, /^c/i, /^c/i],
                            any: [/^pz/i, /^pt/i, /^sa/i, /^ça/i, /^pe/i, /^cu/i, /^ct/i],
                            wide: [/^pazar(?!tesi)/i, /^pazartesi/i, /^salı/i, /^çarşamba/i, /^perşembe/i, /^cuma(?!rtesi)/i, /^cumartesi/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    dayPeriod: (0, n.default)({
                        matchPatterns: {
                            narrow: /^(öö|ös|gy|ö|sa|ös|ak|ge)/i,
                            any: /^(ö\.?\s?[ös]\.?|öğleden sonra|gece yarısı|öğle|(sabah|öğ|akşam|gece)(leyin))/i
                        },
                        defaultMatchWidth: "any",
                        parsePatterns: {
                            any: {
                                am: /^ö\.?ö\.?/i,
                                pm: /^ö\.?s\.?/i,
                                midnight: /^(gy|gece yarısı)/i,
                                noon: /^öğ/i,
                                morning: /^sa/i,
                                afternoon: /^öğleden sonra/i,
                                evening: /^ak/i,
                                night: /^ge/i
                            }
                        },
                        defaultParseWidth: "any"
                    })
                }
            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return i
                }
            });
            var n = t("504435"),
                o = t("713289"),
                i = {
                    ordinalNumber: (0, n.default)({
                        matchPattern: /^(\d+)(º)?/i,
                        parsePattern: /\d+/i,
                        valueCallback: function(e) {
                            return parseInt(e, 10)
                        }
                    }),
                    era: (0, o.default)({
                        matchPatterns: {
                            narrow: /^(ac|dc|a|d)/i,
                            abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
                            wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: [/^ac/i, /^dc/i],
                            wide: [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    quarter: (0, o.default)({
                        matchPatterns: {
                            narrow: /^[1234]/i,
                            abbreviated: /^T[1234]/i,
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
                    month: (0, o.default)({
                        matchPatterns: {
                            narrow: /^[efmajsond]/i,
                            abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,
                            wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            narrow: [/^e/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
                            any: [/^en/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    day: (0, o.default)({
                        matchPatterns: {
                            narrow: /^[dlmjvs]/i,
                            short: /^(do|lu|ma|mi|ju|vi|s[áa])/i,
                            abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,
                            wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
                            any: [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    dayPeriod: (0, o.default)({
                        matchPatterns: {
                            narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,
                            any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i
                        },
                        defaultMatchWidth: "any",
                        parsePatterns: {
                            any: {
                                am: /^a/i,
                                pm: /^p/i,
                                midnight: /^mn/i,
                                noon: /^md/i,
                                morning: /mañana/i,
                                afternoon: /tarde/i,
                                evening: /tarde/i,
                                night: /noche/i
                            }
                        },
                        defaultParseWidth: "any"
                    })
                }
            "use strict";
            e.r(t), e.d(t, {
                default: function() {
                    return n
                }
            });
            var i = e("713289"),
                u = e("504435"),
                n = {
                    ordinalNumber: (0, u.default)({
                        matchPattern: /^(\d+)(\.)/i,
                        parsePattern: /\d+/i,
                        valueCallback: function(a) {
                            return parseInt(a, 10)
                        }
                    }),
                    era: (0, i.default)({
                        matchPatterns: {
                            narrow: /^(e|j)/i,
                            abbreviated: /^(eaa.|jaa.)/i,
                            wide: /^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: [/^e/i, /^j/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    quarter: (0, i.default)({
                        matchPatterns: {
                            narrow: /^[1234]/i,
                            abbreviated: /^q[1234]/i,
                            wide: /^[1234]\.? kvartaali/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: [/1/i, /2/i, /3/i, /4/i]
                        },
                        defaultParseWidth: "any",
                        valueCallback: function(a) {
                            return a + 1
                        }
                    }),
                    month: (0, i.default)({
                        matchPatterns: {
                            narrow: /^[thmkeslj]/i,
                            abbreviated: /^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,
                            wide: /^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            narrow: [/^t/i, /^h/i, /^m/i, /^h/i, /^t/i, /^k/i, /^h/i, /^e/i, /^s/i, /^l/i, /^m/i, /^j/i],
                            any: [/^ta/i, /^hel/i, /^maa/i, /^hu/i, /^to/i, /^k/i, /^hei/i, /^e/i, /^s/i, /^l/i, /^mar/i, /^j/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    day: (0, i.default)({
                        matchPatterns: {
                            narrow: /^[smtkpl]/i,
                            short: /^(su|ma|ti|ke|to|pe|la)/i,
                            abbreviated: /^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,
                            wide: /^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            narrow: [/^s/i, /^m/i, /^t/i, /^k/i, /^t/i, /^p/i, /^l/i],
                            any: [/^s/i, /^m/i, /^ti/i, /^k/i, /^to/i, /^p/i, /^l/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    dayPeriod: (0, i.default)({
                        matchPatterns: {
                            narrow: /^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,
                            any: /^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i
                        },
                        defaultMatchWidth: "any",
                        parsePatterns: {
                            any: {
                                am: /^ap/i,
                                pm: /^ip/i,
                                midnight: /^keskiyö/i,
                                noon: /^keskipäivä/i,
                                morning: /aamupäivällä/i,
                                afternoon: /iltapäivällä/i,
                                evening: /illalla/i,
                                night: /yöllä/i
                            }
                        },
                        defaultParseWidth: "any"
                    })
                }
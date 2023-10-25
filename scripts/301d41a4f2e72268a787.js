(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["30905"], {
        264793: function(o, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var t = {
                    lessThanXSeconds: {
                        one: {
                            standalone: "manje od 1 sekunde",
                            withPrepositionAgo: "manje od 1 sekunde",
                            withPrepositionIn: "manje od 1 sekundu"
                        },
                        dual: "manje od {{count}} sekunde",
                        other: "manje od {{count}} sekundi"
                    },
                    xSeconds: {
                        one: {
                            standalone: "1 sekunda",
                            withPrepositionAgo: "1 sekunde",
                            withPrepositionIn: "1 sekundu"
                        },
                        dual: "{{count}} sekunde",
                        other: "{{count}} sekundi"
                    },
                    halfAMinute: "pola minute",
                    lessThanXMinutes: {
                        one: {
                            standalone: "manje od 1 minute",
                            withPrepositionAgo: "manje od 1 minute",
                            withPrepositionIn: "manje od 1 minutu"
                        },
                        dual: "manje od {{count}} minute",
                        other: "manje od {{count}} minuta"
                    },
                    xMinutes: {
                        one: {
                            standalone: "1 minuta",
                            withPrepositionAgo: "1 minute",
                            withPrepositionIn: "1 minutu"
                        },
                        dual: "{{count}} minute",
                        other: "{{count}} minuta"
                    },
                    aboutXHours: {
                        one: {
                            standalone: "oko 1 sat",
                            withPrepositionAgo: "oko 1 sat",
                            withPrepositionIn: "oko 1 sat"
                        },
                        dual: "oko {{count}} sata",
                        other: "oko {{count}} sati"
                    },
                    xHours: {
                        one: {
                            standalone: "1 sat",
                            withPrepositionAgo: "1 sat",
                            withPrepositionIn: "1 sat"
                        },
                        dual: "{{count}} sata",
                        other: "{{count}} sati"
                    },
                    xDays: {
                        one: {
                            standalone: "1 dan",
                            withPrepositionAgo: "1 dan",
                            withPrepositionIn: "1 dan"
                        },
                        dual: "{{count}} dana",
                        other: "{{count}} dana"
                    },
                    aboutXWeeks: {
                        one: {
                            standalone: "oko 1 tjedan",
                            withPrepositionAgo: "oko 1 tjedan",
                            withPrepositionIn: "oko 1 tjedan"
                        },
                        dual: "oko {{count}} tjedna",
                        other: "oko {{count}} tjedana"
                    },
                    xWeeks: {
                        one: {
                            standalone: "1 tjedan",
                            withPrepositionAgo: "1 tjedan",
                            withPrepositionIn: "1 tjedan"
                        },
                        dual: "{{count}} tjedna",
                        other: "{{count}} tjedana"
                    },
                    aboutXMonths: {
                        one: {
                            standalone: "oko 1 mjesec",
                            withPrepositionAgo: "oko 1 mjesec",
                            withPrepositionIn: "oko 1 mjesec"
                        },
                        dual: "oko {{count}} mjeseca",
                        other: "oko {{count}} mjeseci"
                    },
                    xMonths: {
                        one: {
                            standalone: "1 mjesec",
                            withPrepositionAgo: "1 mjesec",
                            withPrepositionIn: "1 mjesec"
                        },
                        dual: "{{count}} mjeseca",
                        other: "{{count}} mjeseci"
                    },
                    aboutXYears: {
                        one: {
                            standalone: "oko 1 godinu",
                            withPrepositionAgo: "oko 1 godinu",
                            withPrepositionIn: "oko 1 godinu"
                        },
                        dual: "oko {{count}} godine",
                        other: "oko {{count}} godina"
                    },
                    xYears: {
                        one: {
                            standalone: "1 godina",
                            withPrepositionAgo: "1 godine",
                            withPrepositionIn: "1 godinu"
                        },
                        dual: "{{count}} godine",
                        other: "{{count}} godina"
                    },
                    overXYears: {
                        one: {
                            standalone: "preko 1 godinu",
                            withPrepositionAgo: "preko 1 godinu",
                            withPrepositionIn: "preko 1 godinu"
                        },
                        dual: "preko {{count}} godine",
                        other: "preko {{count}} godina"
                    },
                    almostXYears: {
                        one: {
                            standalone: "gotovo 1 godinu",
                            withPrepositionAgo: "gotovo 1 godinu",
                            withPrepositionIn: "gotovo 1 godinu"
                        },
                        dual: "gotovo {{count}} godine",
                        other: "gotovo {{count}} godina"
                    }
                },
                a = function(o, e, n) {
                    var a, i = t[o];
                    if (a = "string" == typeof i ? i : 1 === e ? null != n && n.addSuffix ? n.comparison && n.comparison > 0 ? i.one.withPrepositionIn : i.one.withPrepositionAgo : i.one.standalone : e % 10 > 1 && e % 10 < 5 && "1" !== String(e).substr(-2, 1) ? i.dual.replace("{{count}}", String(e)) : i.other.replace("{{count}}", String(e)), null != n && n.addSuffix) return n.comparison && n.comparison > 0 ? "za " + a : "prije " + a;
                    return a
                }
        },
        129263: function(o, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var t = n("607604"),
                a = {
                    date: (0, t.default)({
                        formats: {
                            full: "EEEE, d. MMMM y.",
                            long: "d. MMMM y.",
                            medium: "d. MMM y.",
                            short: "dd. MM. y."
                        },
                        defaultWidth: "full"
                    }),
                    time: (0, t.default)({
                        formats: {
                            full: "HH:mm:ss (zzzz)",
                            long: "HH:mm:ss z",
                            medium: "HH:mm:ss",
                            short: "HH:mm"
                        },
                        defaultWidth: "full"
                    }),
                    dateTime: (0, t.default)({
                        formats: {
                            full: "{{date}} 'u' {{time}}",
                            long: "{{date}} 'u' {{time}}",
                            medium: "{{date}} {{time}}",
                            short: "{{date}} {{time}}"
                        },
                        defaultWidth: "full"
                    })
                }
        },
        945251: function(o, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var t = {
                    lastWeek: function(o) {
                        switch (o.getUTCDay()) {
                            case 0:
                                return "'prošlu nedjelju u' p";
                            case 3:
                                return "'prošlu srijedu u' p";
                            case 6:
                                return "'prošlu subotu u' p";
                            default:
                                return "'prošli' EEEE 'u' p"
                        }
                    },
                    yesterday: "'jučer u' p",
                    today: "'danas u' p",
                    tomorrow: "'sutra u' p",
                    nextWeek: function(o) {
                        switch (o.getUTCDay()) {
                            case 0:
                                return "'iduću nedjelju u' p";
                            case 3:
                                return "'iduću srijedu u' p";
                            case 6:
                                return "'iduću subotu u' p";
                            default:
                                return "'prošli' EEEE 'u' p"
                        }
                    },
                    other: "P"
                },
                a = function(o, e, n, a) {
                    var i = t[o];
                    return "function" == typeof i ? i(e) : i
                }
        },
        44689: function(o, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var t = n("693677"),
                a = {
                    ordinalNumber: function(o, e) {
                        return Number(o) + "."
                    },
                    era: (0, t.default)({
                        values: {
                            narrow: ["pr.n.e.", "AD"],
                            abbreviated: ["pr. Kr.", "po. Kr."],
                            wide: ["Prije Krista", "Poslije Krista"]
                        },
                        defaultWidth: "wide"
                    }),
                    quarter: (0, t.default)({
                        values: {
                            narrow: ["1.", "2.", "3.", "4."],
                            abbreviated: ["1. kv.", "2. kv.", "3. kv.", "4. kv."],
                            wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]
                        },
                        defaultWidth: "wide",
                        argumentCallback: function(o) {
                            return o - 1
                        }
                    }),
                    month: (0, t.default)({
                        values: {
                            narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."],
                            abbreviated: ["sij", "velj", "ožu", "tra", "svi", "lip", "srp", "kol", "ruj", "lis", "stu", "pro"],
                            wide: ["siječanj", "veljača", "ožujak", "travanj", "svibanj", "lipanj", "srpanj", "kolovoz", "rujan", "listopad", "studeni", "prosinac"]
                        },
                        defaultWidth: "wide",
                        formattingValues: {
                            narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."],
                            abbreviated: ["sij", "velj", "ožu", "tra", "svi", "lip", "srp", "kol", "ruj", "lis", "stu", "pro"],
                            wide: ["siječnja", "veljače", "ožujka", "travnja", "svibnja", "lipnja", "srpnja", "kolovoza", "rujna", "listopada", "studenog", "prosinca"]
                        },
                        defaultFormattingWidth: "wide"
                    }),
                    day: (0, t.default)({
                        values: {
                            narrow: ["N", "P", "U", "S", "Č", "P", "S"],
                            short: ["ned", "pon", "uto", "sri", "čet", "pet", "sub"],
                            abbreviated: ["ned", "pon", "uto", "sri", "čet", "pet", "sub"],
                            wide: ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"]
                        },
                        defaultWidth: "wide"
                    }),
                    dayPeriod: (0, t.default)({
                        values: {
                            narrow: {
                                am: "AM",
                                pm: "PM",
                                midnight: "ponoć",
                                noon: "podne",
                                morning: "ujutro",
                                afternoon: "popodne",
                                evening: "navečer",
                                night: "noću"
                            },
                            abbreviated: {
                                am: "AM",
                                pm: "PM",
                                midnight: "ponoć",
                                noon: "podne",
                                morning: "ujutro",
                                afternoon: "popodne",
                                evening: "navečer",
                                night: "noću"
                            },
                            wide: {
                                am: "AM",
                                pm: "PM",
                                midnight: "ponoć",
                                noon: "podne",
                                morning: "ujutro",
                                afternoon: "poslije podne",
                                evening: "navečer",
                                night: "noću"
                            }
                        },
                        defaultWidth: "wide",
                        formattingValues: {
                            narrow: {
                                am: "AM",
                                pm: "PM",
                                midnight: "ponoć",
                                noon: "podne",
                                morning: "ujutro",
                                afternoon: "popodne",
                                evening: "navečer",
                                night: "noću"
                            },
                            abbreviated: {
                                am: "AM",
                                pm: "PM",
                                midnight: "ponoć",
                                noon: "podne",
                                morning: "ujutro",
                                afternoon: "popodne",
                                evening: "navečer",
                                night: "noću"
                            },
                            wide: {
                                am: "AM",
                                pm: "PM",
                                midnight: "ponoć",
                                noon: "podne",
                                morning: "ujutro",
                                afternoon: "poslije podne",
                                evening: "navečer",
                                night: "noću"
                            }
                        },
                        defaultFormattingWidth: "wide"
                    })
                }
        },
        423009: function(o, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var t = n("846700"),
                a = n("759779"),
                i = {
                    ordinalNumber: (0, a.default)({
                        matchPattern: /^(\d+)\./i,
                        parsePattern: /\d+/i,
                        valueCallback: function(o) {
                            return parseInt(o, 10)
                        }
                    }),
                    era: (0, t.default)({
                        matchPatterns: {
                            narrow: /^(pr\.n\.e\.|AD)/i,
                            abbreviated: /^(pr\.\s?Kr\.|po\.\s?Kr\.)/i,
                            wide: /^(Prije Krista|prije nove ere|Poslije Krista|nova era)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: [/^pr/i, /^(po|nova)/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    quarter: (0, t.default)({
                        matchPatterns: {
                            narrow: /^[1234]/i,
                            abbreviated: /^[1234]\.\s?kv\.?/i,
                            wide: /^[1234]\. kvartal/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: [/1/i, /2/i, /3/i, /4/i]
                        },
                        defaultParseWidth: "any",
                        valueCallback: function(o) {
                            return o + 1
                        }
                    }),
                    month: (0, t.default)({
                        matchPatterns: {
                            narrow: /^(10|11|12|[123456789])\./i,
                            abbreviated: /^(sij|velj|(ožu|ozu)|tra|svi|lip|srp|kol|ruj|lis|stu|pro)/i,
                            wide: /^((siječanj|siječnja|sijecanj|sijecnja)|(veljača|veljače|veljaca|veljace)|(ožujak|ožujka|ozujak|ozujka)|(travanj|travnja)|(svibanj|svibnja)|(lipanj|lipnja)|(srpanj|srpnja)|(kolovoz|kolovoza)|(rujan|rujna)|(listopad|listopada)|(studeni|studenog)|(prosinac|prosinca))/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            narrow: [/1/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i, /8/i, /9/i, /10/i, /11/i, /12/i],
                            abbreviated: [/^sij/i, /^velj/i, /^(ožu|ozu)/i, /^tra/i, /^svi/i, /^lip/i, /^srp/i, /^kol/i, /^ruj/i, /^lis/i, /^stu/i, /^pro/i],
                            wide: [/^sij/i, /^velj/i, /^(ožu|ozu)/i, /^tra/i, /^svi/i, /^lip/i, /^srp/i, /^kol/i, /^ruj/i, /^lis/i, /^stu/i, /^pro/i]
                        },
                        defaultParseWidth: "wide"
                    }),
                    day: (0, t.default)({
                        matchPatterns: {
                            narrow: /^[npusčc]/i,
                            short: /^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i,
                            abbreviated: /^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i,
                            wide: /^(nedjelja|ponedjeljak|utorak|srijeda|(četvrtak|cetvrtak)|petak|subota)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
                            any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    dayPeriod: (0, t.default)({
                        matchPatterns: {
                            any: /^(am|pm|ponoc|ponoć|(po)?podne|navecer|navečer|noću|poslije podne|ujutro)/i
                        },
                        defaultMatchWidth: "any",
                        parsePatterns: {
                            any: {
                                am: /^a/i,
                                pm: /^p/i,
                                midnight: /^pono/i,
                                noon: /^pod/i,
                                morning: /jutro/i,
                                afternoon: /(poslije\s|po)+podne/i,
                                evening: /(navece|naveče)/i,
                                night: /(nocu|noću)/i
                            }
                        },
                        defaultParseWidth: "any"
                    })
                }
        },
        447166: function(o, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return d
                }
            });
            var t = n("264793"),
                a = n("129263"),
                i = n("945251"),
                r = n("44689"),
                u = n("423009"),
                d = {
                    code: "hr",
                    formatDistance: t.default,
                    formatLong: a.default,
                    formatRelative: i.default,
                    localize: r.default,
                    match: u.default,
                    options: {
                        weekStartsOn: 1,
                        firstWeekContainsDate: 1
                    }
                }
        }
    }
]);
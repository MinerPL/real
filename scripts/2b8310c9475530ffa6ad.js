(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["11083"], {
        299828: function(e, i, a) {
            "use strict";
            a.r(i), a.d(i, {
                default: function() {
                    return n
                }
            });
            var t = {
                    lessThanXSeconds: {
                        one: "mai puțin de o secundă",
                        other: "mai puțin de {{count}} secunde"
                    },
                    xSeconds: {
                        one: "1 secundă",
                        other: "{{count}} secunde"
                    },
                    halfAMinute: "jumătate de minut",
                    lessThanXMinutes: {
                        one: "mai puțin de un minut",
                        other: "mai puțin de {{count}} minute"
                    },
                    xMinutes: {
                        one: "1 minut",
                        other: "{{count}} minute"
                    },
                    aboutXHours: {
                        one: "circa 1 oră",
                        other: "circa {{count}} ore"
                    },
                    xHours: {
                        one: "1 oră",
                        other: "{{count}} ore"
                    },
                    xDays: {
                        one: "1 zi",
                        other: "{{count}} zile"
                    },
                    aboutXWeeks: {
                        one: "circa o săptăm\xe2nă",
                        other: "circa {{count}} săptăm\xe2ni"
                    },
                    xWeeks: {
                        one: "1 săptăm\xe2nă",
                        other: "{{count}} săptăm\xe2ni"
                    },
                    aboutXMonths: {
                        one: "circa 1 lună",
                        other: "circa {{count}} luni"
                    },
                    xMonths: {
                        one: "1 lună",
                        other: "{{count}} luni"
                    },
                    aboutXYears: {
                        one: "circa 1 an",
                        other: "circa {{count}} ani"
                    },
                    xYears: {
                        one: "1 an",
                        other: "{{count}} ani"
                    },
                    overXYears: {
                        one: "peste 1 an",
                        other: "peste {{count}} ani"
                    },
                    almostXYears: {
                        one: "aproape 1 an",
                        other: "aproape {{count}} ani"
                    }
                },
                n = function(e, i, a) {
                    var n, r = t[e];
                    if (n = "string" == typeof r ? r : 1 === i ? r.one : r.other.replace("{{count}}", String(i)), null != a && a.addSuffix) return a.comparison && a.comparison > 0 ? "\xeen " + n : n + " \xeen urmă";
                    return n
                }
        },
        872024: function(e, i, a) {
            "use strict";
            a.r(i), a.d(i, {
                default: function() {
                    return n
                }
            });
            var t = a("607604"),
                n = {
                    date: (0, t.default)({
                        formats: {
                            full: "EEEE, d MMMM yyyy",
                            long: "d MMMM yyyy",
                            medium: "d MMM yyyy",
                            short: "dd.MM.yyyy"
                        },
                        defaultWidth: "full"
                    }),
                    time: (0, t.default)({
                        formats: {
                            full: "HH:mm:ss zzzz",
                            long: "HH:mm:ss z",
                            medium: "HH:mm:ss",
                            short: "HH:mm"
                        },
                        defaultWidth: "full"
                    }),
                    dateTime: (0, t.default)({
                        formats: {
                            full: "{{date}} 'la' {{time}}",
                            long: "{{date}} 'la' {{time}}",
                            medium: "{{date}}, {{time}}",
                            short: "{{date}}, {{time}}"
                        },
                        defaultWidth: "full"
                    })
                }
        },
        491310: function(e, i, a) {
            "use strict";
            a.r(i), a.d(i, {
                default: function() {
                    return n
                }
            });
            var t = {
                    lastWeek: "eeee 'trecută la' p",
                    yesterday: "'ieri la' p",
                    today: "'astăzi la' p",
                    tomorrow: "'m\xe2ine la' p",
                    nextWeek: "eeee 'viitoare la' p",
                    other: "P"
                },
                n = function(e, i, a, n) {
                    return t[e]
                }
        },
        276510: function(e, i, a) {
            "use strict";
            a.r(i), a.d(i, {
                default: function() {
                    return n
                }
            });
            var t = a("693677"),
                n = {
                    ordinalNumber: function(e, i) {
                        return String(e)
                    },
                    era: (0, t.default)({
                        values: {
                            narrow: ["\xce", "D"],
                            abbreviated: ["\xce.d.C.", "D.C."],
                            wide: ["\xcenainte de Cristos", "După Cristos"]
                        },
                        defaultWidth: "wide"
                    }),
                    quarter: (0, t.default)({
                        values: {
                            narrow: ["1", "2", "3", "4"],
                            abbreviated: ["T1", "T2", "T3", "T4"],
                            wide: ["primul trimestru", "al doilea trimestru", "al treilea trimestru", "al patrulea trimestru"]
                        },
                        defaultWidth: "wide",
                        argumentCallback: function(e) {
                            return e - 1
                        }
                    }),
                    month: (0, t.default)({
                        values: {
                            narrow: ["I", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"],
                            abbreviated: ["ian", "feb", "mar", "apr", "mai", "iun", "iul", "aug", "sep", "oct", "noi", "dec"],
                            wide: ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"]
                        },
                        defaultWidth: "wide"
                    }),
                    day: (0, t.default)({
                        values: {
                            narrow: ["d", "l", "m", "m", "j", "v", "s"],
                            short: ["du", "lu", "ma", "mi", "jo", "vi", "s\xe2"],
                            abbreviated: ["dum", "lun", "mar", "mie", "joi", "vin", "s\xe2m"],
                            wide: ["duminică", "luni", "marți", "miercuri", "joi", "vineri", "s\xe2mbătă"]
                        },
                        defaultWidth: "wide"
                    }),
                    dayPeriod: (0, t.default)({
                        values: {
                            narrow: {
                                am: "a",
                                pm: "p",
                                midnight: "mn",
                                noon: "ami",
                                morning: "dim",
                                afternoon: "da",
                                evening: "s",
                                night: "n"
                            },
                            abbreviated: {
                                am: "AM",
                                pm: "PM",
                                midnight: "miezul nopții",
                                noon: "amiază",
                                morning: "dimineață",
                                afternoon: "după-amiază",
                                evening: "seară",
                                night: "noapte"
                            },
                            wide: {
                                am: "a.m.",
                                pm: "p.m.",
                                midnight: "miezul nopții",
                                noon: "amiază",
                                morning: "dimineață",
                                afternoon: "după-amiază",
                                evening: "seară",
                                night: "noapte"
                            }
                        },
                        defaultWidth: "wide",
                        formattingValues: {
                            narrow: {
                                am: "a",
                                pm: "p",
                                midnight: "mn",
                                noon: "amiază",
                                morning: "dimineață",
                                afternoon: "după-amiază",
                                evening: "seară",
                                night: "noapte"
                            },
                            abbreviated: {
                                am: "AM",
                                pm: "PM",
                                midnight: "miezul nopții",
                                noon: "amiază",
                                morning: "dimineață",
                                afternoon: "după-amiază",
                                evening: "seară",
                                night: "noapte"
                            },
                            wide: {
                                am: "a.m.",
                                pm: "p.m.",
                                midnight: "miezul nopții",
                                noon: "amiază",
                                morning: "dimineață",
                                afternoon: "după-amiază",
                                evening: "seară",
                                night: "noapte"
                            }
                        },
                        defaultFormattingWidth: "wide"
                    })
                }
        },
        259407: function(e, i, a) {
            "use strict";
            a.r(i), a.d(i, {
                default: function() {
                    return r
                }
            });
            var t = a("846700"),
                n = a("759779"),
                r = {
                    ordinalNumber: (0, n.default)({
                        matchPattern: /^(\d+)?/i,
                        parsePattern: /\d+/i,
                        valueCallback: function(e) {
                            return parseInt(e, 10)
                        }
                    }),
                    era: (0, t.default)({
                        matchPatterns: {
                            narrow: /^(Î|D)/i,
                            abbreviated: /^(Î\.?\s?d\.?\s?C\.?|Î\.?\s?e\.?\s?n\.?|D\.?\s?C\.?|e\.?\s?n\.?)/i,
                            wide: /^(Înainte de Cristos|Înaintea erei noastre|După Cristos|Era noastră)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: [/^ÎC/i, /^DC/i],
                            wide: [/^(Înainte de Cristos|Înaintea erei noastre)/i, /^(După Cristos|Era noastră)/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    quarter: (0, t.default)({
                        matchPatterns: {
                            narrow: /^[1234]/i,
                            abbreviated: /^T[1234]/i,
                            wide: /^trimestrul [1234]/i
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
                    month: (0, t.default)({
                        matchPatterns: {
                            narrow: /^[ifmaasond]/i,
                            abbreviated: /^(ian|feb|mar|apr|mai|iun|iul|aug|sep|oct|noi|dec)/i,
                            wide: /^(ianuarie|februarie|martie|aprilie|mai|iunie|iulie|august|septembrie|octombrie|noiembrie|decembrie)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            narrow: [/^i/i, /^f/i, /^m/i, /^a/i, /^m/i, /^i/i, /^i/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
                            any: [/^ia/i, /^f/i, /^mar/i, /^ap/i, /^mai/i, /^iun/i, /^iul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    day: (0, t.default)({
                        matchPatterns: {
                            narrow: /^[dlmjvs]/i,
                            short: /^(d|l|ma|mi|j|v|s)/i,
                            abbreviated: /^(dum|lun|mar|mie|jo|vi|sâ)/i,
                            wide: /^(duminica|luni|marţi|miercuri|joi|vineri|sâmbătă)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
                            any: [/^d/i, /^l/i, /^ma/i, /^mi/i, /^j/i, /^v/i, /^s/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    dayPeriod: (0, t.default)({
                        matchPatterns: {
                            narrow: /^(a|p|mn|a|(dimineaţa|după-amiaza|seara|noaptea))/i,
                            any: /^([ap]\.?\s?m\.?|miezul nopții|amiaza|(dimineaţa|după-amiaza|seara|noaptea))/i
                        },
                        defaultMatchWidth: "any",
                        parsePatterns: {
                            any: {
                                am: /^a/i,
                                pm: /^p/i,
                                midnight: /^mn/i,
                                noon: /amiaza/i,
                                morning: /dimineaţa/i,
                                afternoon: /după-amiaza/i,
                                evening: /seara/i,
                                night: /noaptea/i
                            }
                        },
                        defaultParseWidth: "any"
                    })
                }
        },
        866289: function(e, i, a) {
            "use strict";
            a.r(i), a.d(i, {
                default: function() {
                    return d
                }
            });
            var t = a("299828"),
                n = a("872024"),
                r = a("491310"),
                o = a("276510"),
                u = a("259407"),
                d = {
                    code: "ro",
                    formatDistance: t.default,
                    formatLong: n.default,
                    formatRelative: r.default,
                    localize: o.default,
                    match: u.default,
                    options: {
                        weekStartsOn: 1,
                        firstWeekContainsDate: 1
                    }
                }
        }
    }
]);
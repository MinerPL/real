            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("64273"),
                r = {
                    ordinalNumber: function(e, t) {
                        return Number(e) + "."
                    },
                    era: (0, a.default)({
                        values: {
                            narrow: ["fvt", "vt"],
                            abbreviated: ["f.v.t.", "v.t."],
                            wide: ["f\xf8r vesterlandsk tidsregning", "vesterlandsk tidsregning"]
                        },
                        defaultWidth: "wide"
                    }),
                    quarter: (0, a.default)({
                        values: {
                            narrow: ["1", "2", "3", "4"],
                            abbreviated: ["1. kvt.", "2. kvt.", "3. kvt.", "4. kvt."],
                            wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]
                        },
                        defaultWidth: "wide",
                        argumentCallback: function(e) {
                            return e - 1
                        }
                    }),
                    month: (0, a.default)({
                        values: {
                            narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                            abbreviated: ["jan.", "feb.", "mar.", "apr.", "maj", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."],
                            wide: ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"]
                        },
                        defaultWidth: "wide"
                    }),
                    day: (0, a.default)({
                        values: {
                            narrow: ["S", "M", "T", "O", "T", "F", "L"],
                            short: ["s\xf8", "ma", "ti", "on", "to", "fr", "l\xf8"],
                            abbreviated: ["s\xf8n.", "man.", "tir.", "ons.", "tor.", "fre.", "l\xf8r."],
                            wide: ["s\xf8ndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "l\xf8rdag"]
                        },
                        defaultWidth: "wide"
                    }),
                    dayPeriod: (0, a.default)({
                        values: {
                            narrow: {
                                am: "a",
                                pm: "p",
                                midnight: "midnat",
                                noon: "middag",
                                morning: "morgen",
                                afternoon: "eftermiddag",
                                evening: "aften",
                                night: "nat"
                            },
                            abbreviated: {
                                am: "AM",
                                pm: "PM",
                                midnight: "midnat",
                                noon: "middag",
                                morning: "morgen",
                                afternoon: "eftermiddag",
                                evening: "aften",
                                night: "nat"
                            },
                            wide: {
                                am: "a.m.",
                                pm: "p.m.",
                                midnight: "midnat",
                                noon: "middag",
                                morning: "morgen",
                                afternoon: "eftermiddag",
                                evening: "aften",
                                night: "nat"
                            }
                        },
                        defaultWidth: "wide",
                        formattingValues: {
                            narrow: {
                                am: "a",
                                pm: "p",
                                midnight: "midnat",
                                noon: "middag",
                                morning: "om morgenen",
                                afternoon: "om eftermiddagen",
                                evening: "om aftenen",
                                night: "om natten"
                            },
                            abbreviated: {
                                am: "AM",
                                pm: "PM",
                                midnight: "midnat",
                                noon: "middag",
                                morning: "om morgenen",
                                afternoon: "om eftermiddagen",
                                evening: "om aftenen",
                                night: "om natten"
                            },
                            wide: {
                                am: "a.m.",
                                pm: "p.m.",
                                midnight: "midnat",
                                noon: "middag",
                                morning: "om morgenen",
                                afternoon: "om eftermiddagen",
                                evening: "om aftenen",
                                night: "om natten"
                            }
                        },
                        defaultFormattingWidth: "wide"
                    })
                }
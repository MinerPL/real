            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var t = n("64273"),
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
            "use strict";
            i.r(n), i.d(n, {
                default: function() {
                    return o
                }
            });
            var t = i("64273"),
                o = {
                    ordinalNumber: function(e, n) {
                        return String(e)
                    },
                    era: (0, t.default)({
                        values: {
                            narrow: ["p.n.e.", "n.e."],
                            abbreviated: ["p.n.e.", "n.e."],
                            wide: ["przed naszą erą", "naszej ery"]
                        },
                        defaultWidth: "wide"
                    }),
                    quarter: (0, t.default)({
                        values: {
                            narrow: ["1", "2", "3", "4"],
                            abbreviated: ["I kw.", "II kw.", "III kw.", "IV kw."],
                            wide: ["I kwartał", "II kwartał", "III kwartał", "IV kwartał"]
                        },
                        defaultWidth: "wide",
                        argumentCallback: function(e) {
                            return e - 1
                        }
                    }),
                    month: (0, t.default)({
                        values: {
                            narrow: ["S", "L", "M", "K", "M", "C", "L", "S", "W", "P", "L", "G"],
                            abbreviated: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"],
                            wide: ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"]
                        },
                        defaultWidth: "wide",
                        formattingValues: {
                            narrow: ["s", "l", "m", "k", "m", "c", "l", "s", "w", "p", "l", "g"],
                            abbreviated: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"],
                            wide: ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"]
                        },
                        defaultFormattingWidth: "wide"
                    }),
                    day: (0, t.default)({
                        values: {
                            narrow: ["N", "P", "W", "Ś", "C", "P", "S"],
                            short: ["nie", "pon", "wto", "śro", "czw", "pią", "sob"],
                            abbreviated: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
                            wide: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
                        },
                        defaultWidth: "wide",
                        formattingValues: {
                            narrow: ["n", "p", "w", "ś", "c", "p", "s"],
                            short: ["nie", "pon", "wto", "śro", "czw", "pią", "sob"],
                            abbreviated: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
                            wide: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
                        },
                        defaultFormattingWidth: "wide"
                    }),
                    dayPeriod: (0, t.default)({
                        values: {
                            narrow: {
                                am: "a",
                                pm: "p",
                                midnight: "p\xf3łn.",
                                noon: "poł",
                                morning: "rano",
                                afternoon: "popoł.",
                                evening: "wiecz.",
                                night: "noc"
                            },
                            abbreviated: {
                                am: "AM",
                                pm: "PM",
                                midnight: "p\xf3łnoc",
                                noon: "południe",
                                morning: "rano",
                                afternoon: "popołudnie",
                                evening: "wiecz\xf3r",
                                night: "noc"
                            },
                            wide: {
                                am: "AM",
                                pm: "PM",
                                midnight: "p\xf3łnoc",
                                noon: "południe",
                                morning: "rano",
                                afternoon: "popołudnie",
                                evening: "wiecz\xf3r",
                                night: "noc"
                            }
                        },
                        defaultWidth: "wide",
                        formattingValues: {
                            narrow: {
                                am: "a",
                                pm: "p",
                                midnight: "o p\xf3łn.",
                                noon: "w poł.",
                                morning: "rano",
                                afternoon: "po poł.",
                                evening: "wiecz.",
                                night: "w nocy"
                            },
                            abbreviated: {
                                am: "AM",
                                pm: "PM",
                                midnight: "o p\xf3łnocy",
                                noon: "w południe",
                                morning: "rano",
                                afternoon: "po południu",
                                evening: "wieczorem",
                                night: "w nocy"
                            },
                            wide: {
                                am: "AM",
                                pm: "PM",
                                midnight: "o p\xf3łnocy",
                                noon: "w południe",
                                morning: "rano",
                                afternoon: "po południu",
                                evening: "wieczorem",
                                night: "w nocy"
                            }
                        },
                        defaultFormattingWidth: "wide"
                    })
                }
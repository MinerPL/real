            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return n
                }
            });
            var i = a("64273"),
                n = {
                    ordinalNumber: function(t, e) {
                        var a, i = Number(t),
                            n = null == e ? void 0 : e.unit;
                        return i + (a = "year" === n || "month" === n ? "ος" : "week" === n || "dayOfYear" === n || "day" === n || "hour" === n || "date" === n ? "η" : "ο")
                    },
                    era: (0, i.default)({
                        values: {
                            narrow: ["πΧ", "μΧ"],
                            abbreviated: ["π.Χ.", "μ.Χ."],
                            wide: ["προ Χριστού", "μετά Χριστόν"]
                        },
                        defaultWidth: "wide"
                    }),
                    quarter: (0, i.default)({
                        values: {
                            narrow: ["1", "2", "3", "4"],
                            abbreviated: ["Τ1", "Τ2", "Τ3", "Τ4"],
                            wide: ["1ο τρίμηνο", "2ο τρίμηνο", "3ο τρίμηνο", "4ο τρίμηνο"]
                        },
                        defaultWidth: "wide",
                        argumentCallback: function(t) {
                            return t - 1
                        }
                    }),
                    month: (0, i.default)({
                        values: {
                            narrow: ["Ι", "Φ", "Μ", "Α", "Μ", "Ι", "Ι", "Α", "Σ", "Ο", "Ν", "Δ"],
                            abbreviated: ["Ιαν", "Φεβ", "Μάρ", "Απρ", "Μάι", "Ιούν", "Ιούλ", "Αύγ", "Σεπ", "Οκτ", "Νοέ", "Δεκ"],
                            wide: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"]
                        },
                        defaultWidth: "wide",
                        formattingValues: {
                            narrow: ["Ι", "Φ", "Μ", "Α", "Μ", "Ι", "Ι", "Α", "Σ", "Ο", "Ν", "Δ"],
                            abbreviated: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαΐ", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"],
                            wide: ["Ιανουαρίου", "Φεβρουαρίου", "Μαρτίου", "Απριλίου", "Μαΐου", "Ιουνίου", "Ιουλίου", "Αυγούστου", "Σεπτεμβρίου", "Οκτωβρίου", "Νοεμβρίου", "Δεκεμβρίου"]
                        },
                        defaultFormattingWidth: "wide"
                    }),
                    day: (0, i.default)({
                        values: {
                            narrow: ["Κ", "Δ", "T", "Τ", "Π", "Π", "Σ"],
                            short: ["Κυ", "Δε", "Τρ", "Τε", "Πέ", "Πα", "Σά"],
                            abbreviated: ["Κυρ", "Δευ", "Τρί", "Τετ", "Πέμ", "Παρ", "Σάβ"],
                            wide: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"]
                        },
                        defaultWidth: "wide"
                    }),
                    dayPeriod: (0, i.default)({
                        values: {
                            narrow: {
                                am: "πμ",
                                pm: "μμ",
                                midnight: "μεσάνυχτα",
                                noon: "μεσημέρι",
                                morning: "πρωί",
                                afternoon: "απόγευμα",
                                evening: "βράδυ",
                                night: "νύχτα"
                            },
                            abbreviated: {
                                am: "π.μ.",
                                pm: "μ.μ.",
                                midnight: "μεσάνυχτα",
                                noon: "μεσημέρι",
                                morning: "πρωί",
                                afternoon: "απόγευμα",
                                evening: "βράδυ",
                                night: "νύχτα"
                            },
                            wide: {
                                am: "π.μ.",
                                pm: "μ.μ.",
                                midnight: "μεσάνυχτα",
                                noon: "μεσημέρι",
                                morning: "πρωί",
                                afternoon: "απόγευμα",
                                evening: "βράδυ",
                                night: "νύχτα"
                            }
                        },
                        defaultWidth: "wide"
                    })
                }
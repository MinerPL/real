            "use strict";
            n.r(i), n.d(i, {
                default: function() {
                    return a
                }
            });
            var e = n("64273"),
                a = {
                    ordinalNumber: function(t, i) {
                        var n, e = String(null == i ? void 0 : i.unit),
                            a = Number(t);
                        return n = "date" === e ? 3 === a || 23 === a ? "-є" : "-е" : "minute" === e || "second" === e || "hour" === e ? "-а" : "-й", a + n
                    },
                    era: (0, e.default)({
                        values: {
                            narrow: ["до н.е.", "н.е."],
                            abbreviated: ["до н. е.", "н. е."],
                            wide: ["до нашої ери", "нашої ери"]
                        },
                        defaultWidth: "wide"
                    }),
                    quarter: (0, e.default)({
                        values: {
                            narrow: ["1", "2", "3", "4"],
                            abbreviated: ["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."],
                            wide: ["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"]
                        },
                        defaultWidth: "wide",
                        argumentCallback: function(t) {
                            return t - 1
                        }
                    }),
                    month: (0, e.default)({
                        values: {
                            narrow: ["С", "Л", "Б", "К", "Т", "Ч", "Л", "С", "В", "Ж", "Л", "Г"],
                            abbreviated: ["січ.", "лют.", "берез.", "квіт.", "трав.", "черв.", "лип.", "серп.", "верес.", "жовт.", "листоп.", "груд."],
                            wide: ["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень"]
                        },
                        defaultWidth: "wide",
                        formattingValues: {
                            narrow: ["С", "Л", "Б", "К", "Т", "Ч", "Л", "С", "В", "Ж", "Л", "Г"],
                            abbreviated: ["січ.", "лют.", "берез.", "квіт.", "трав.", "черв.", "лип.", "серп.", "верес.", "жовт.", "листоп.", "груд."],
                            wide: ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"]
                        },
                        defaultFormattingWidth: "wide"
                    }),
                    day: (0, e.default)({
                        values: {
                            narrow: ["Н", "П", "В", "С", "Ч", "П", "С"],
                            short: ["нд", "пн", "вт", "ср", "чт", "пт", "сб"],
                            abbreviated: ["нед", "пон", "вів", "сер", "чтв", "птн", "суб"],
                            wide: ["неділя", "понеділок", "вівторок", "середа", "четвер", "п’ятниця", "субота"]
                        },
                        defaultWidth: "wide"
                    }),
                    dayPeriod: (0, e.default)({
                        values: {
                            narrow: {
                                am: "ДП",
                                pm: "ПП",
                                midnight: "півн.",
                                noon: "пол.",
                                morning: "ранок",
                                afternoon: "день",
                                evening: "веч.",
                                night: "ніч"
                            },
                            abbreviated: {
                                am: "ДП",
                                pm: "ПП",
                                midnight: "півн.",
                                noon: "пол.",
                                morning: "ранок",
                                afternoon: "день",
                                evening: "веч.",
                                night: "ніч"
                            },
                            wide: {
                                am: "ДП",
                                pm: "ПП",
                                midnight: "північ",
                                noon: "полудень",
                                morning: "ранок",
                                afternoon: "день",
                                evening: "вечір",
                                night: "ніч"
                            }
                        },
                        defaultWidth: "any",
                        formattingValues: {
                            narrow: {
                                am: "ДП",
                                pm: "ПП",
                                midnight: "півн.",
                                noon: "пол.",
                                morning: "ранку",
                                afternoon: "дня",
                                evening: "веч.",
                                night: "ночі"
                            },
                            abbreviated: {
                                am: "ДП",
                                pm: "ПП",
                                midnight: "півн.",
                                noon: "пол.",
                                morning: "ранку",
                                afternoon: "дня",
                                evening: "веч.",
                                night: "ночі"
                            },
                            wide: {
                                am: "ДП",
                                pm: "ПП",
                                midnight: "північ",
                                noon: "полудень",
                                morning: "ранку",
                                afternoon: "дня",
                                evening: "веч.",
                                night: "ночі"
                            }
                        },
                        defaultFormattingWidth: "wide"
                    })
                }
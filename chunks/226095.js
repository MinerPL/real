            "use strict";
            t.r(i), t.d(i, {
                default: function() {
                    return a
                }
            });
            var e = t("64273"),
                a = {
                    ordinalNumber: function(n, i) {
                        var t, e = Number(n),
                            a = null == i ? void 0 : i.unit;
                        return e + (t = "date" === a ? "-е" : "week" === a || "minute" === a || "second" === a ? "-я" : "-й")
                    },
                    era: (0, e.default)({
                        values: {
                            narrow: ["до н.э.", "н.э."],
                            abbreviated: ["до н. э.", "н. э."],
                            wide: ["до нашей эры", "нашей эры"]
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
                        argumentCallback: function(n) {
                            return n - 1
                        }
                    }),
                    month: (0, e.default)({
                        values: {
                            narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
                            abbreviated: ["янв.", "фев.", "март", "апр.", "май", "июнь", "июль", "авг.", "сент.", "окт.", "нояб.", "дек."],
                            wide: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"]
                        },
                        defaultWidth: "wide",
                        formattingValues: {
                            narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
                            abbreviated: ["янв.", "фев.", "мар.", "апр.", "мая", "июн.", "июл.", "авг.", "сент.", "окт.", "нояб.", "дек."],
                            wide: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
                        },
                        defaultFormattingWidth: "wide"
                    }),
                    day: (0, e.default)({
                        values: {
                            narrow: ["В", "П", "В", "С", "Ч", "П", "С"],
                            short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                            abbreviated: ["вск", "пнд", "втр", "срд", "чтв", "птн", "суб"],
                            wide: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
                        },
                        defaultWidth: "wide"
                    }),
                    dayPeriod: (0, e.default)({
                        values: {
                            narrow: {
                                am: "ДП",
                                pm: "ПП",
                                midnight: "полн.",
                                noon: "полд.",
                                morning: "утро",
                                afternoon: "день",
                                evening: "веч.",
                                night: "ночь"
                            },
                            abbreviated: {
                                am: "ДП",
                                pm: "ПП",
                                midnight: "полн.",
                                noon: "полд.",
                                morning: "утро",
                                afternoon: "день",
                                evening: "веч.",
                                night: "ночь"
                            },
                            wide: {
                                am: "ДП",
                                pm: "ПП",
                                midnight: "полночь",
                                noon: "полдень",
                                morning: "утро",
                                afternoon: "день",
                                evening: "вечер",
                                night: "ночь"
                            }
                        },
                        defaultWidth: "any",
                        formattingValues: {
                            narrow: {
                                am: "ДП",
                                pm: "ПП",
                                midnight: "полн.",
                                noon: "полд.",
                                morning: "утра",
                                afternoon: "дня",
                                evening: "веч.",
                                night: "ночи"
                            },
                            abbreviated: {
                                am: "ДП",
                                pm: "ПП",
                                midnight: "полн.",
                                noon: "полд.",
                                morning: "утра",
                                afternoon: "дня",
                                evening: "веч.",
                                night: "ночи"
                            },
                            wide: {
                                am: "ДП",
                                pm: "ПП",
                                midnight: "полночь",
                                noon: "полдень",
                                morning: "утра",
                                afternoon: "дня",
                                evening: "вечера",
                                night: "ночи"
                            }
                        },
                        defaultFormattingWidth: "wide"
                    })
                }
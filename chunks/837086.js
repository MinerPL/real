            "use strict";
            t.r(i), t.d(i, {
                default: function() {
                    return u
                }
            });
            var e = t("713289"),
                a = t("504435"),
                u = {
                    ordinalNumber: (0, a.default)({
                        matchPattern: /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i,
                        parsePattern: /\d+/i,
                        valueCallback: function(n) {
                            return parseInt(n, 10)
                        }
                    }),
                    era: (0, e.default)({
                        matchPatterns: {
                            narrow: /^((до )?н\.?\s?э\.?)/i,
                            abbreviated: /^((до )?н\.?\s?э\.?)/i,
                            wide: /^(до нашей эры|нашей эры|наша эра)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: [/^д/i, /^н/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    quarter: (0, e.default)({
                        matchPatterns: {
                            narrow: /^[1234]/i,
                            abbreviated: /^[1234](-?[ыои]?й?)? кв.?/i,
                            wide: /^[1234](-?[ыои]?й?)? квартал/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: [/1/i, /2/i, /3/i, /4/i]
                        },
                        defaultParseWidth: "any",
                        valueCallback: function(n) {
                            return n + 1
                        }
                    }),
                    month: (0, e.default)({
                        matchPatterns: {
                            narrow: /^[яфмаисонд]/i,
                            abbreviated: /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,
                            wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            narrow: [/^я/i, /^ф/i, /^м/i, /^а/i, /^м/i, /^и/i, /^и/i, /^а/i, /^с/i, /^о/i, /^н/i, /^я/i],
                            any: [/^я/i, /^ф/i, /^мар/i, /^ап/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^ав/i, /^с/i, /^о/i, /^н/i, /^д/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    day: (0, e.default)({
                        matchPatterns: {
                            narrow: /^[впсч]/i,
                            short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,
                            abbreviated: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,
                            wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            narrow: [/^в/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
                            any: [/^в[ос]/i, /^п[он]/i, /^в/i, /^ср/i, /^ч/i, /^п[ят]/i, /^с[уб]/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    dayPeriod: (0, e.default)({
                        matchPatterns: {
                            narrow: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
                            abbreviated: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
                            wide: /^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: {
                                am: /^дп/i,
                                pm: /^пп/i,
                                midnight: /^полн/i,
                                noon: /^полд/i,
                                morning: /^у/i,
                                afternoon: /^д[ен]/i,
                                evening: /^в/i,
                                night: /^н/i
                            }
                        },
                        defaultParseWidth: "any"
                    })
                }
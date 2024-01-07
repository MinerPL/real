            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return i
                }
            });
            var n = a("713289"),
                r = a("504435"),
                i = {
                    ordinalNumber: (0, r.default)({
                        matchPattern: /^(\d+)(-?[врмт][аи]|-?т?(ен|на)|-?(ев|ева))?/i,
                        parsePattern: /\d+/i,
                        valueCallback: function(t) {
                            return parseInt(t, 10)
                        }
                    }),
                    era: (0, n.default)({
                        matchPatterns: {
                            narrow: /^((пр)?н\.?\s?е\.?)/i,
                            abbreviated: /^((пр)?н\.?\s?е\.?)/i,
                            wide: /^(преди новата ера|новата ера|нова ера)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: [/^п/i, /^н/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    quarter: (0, n.default)({
                        matchPatterns: {
                            narrow: /^[1234]/i,
                            abbreviated: /^[1234](-?[врт]?o?)? тримес.?/i,
                            wide: /^[1234](-?[врт]?о?)? тримесечие/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: [/1/i, /2/i, /3/i, /4/i]
                        },
                        defaultParseWidth: "any",
                        valueCallback: function(t) {
                            return t + 1
                        }
                    }),
                    month: (0, n.default)({
                        matchPatterns: {
                            abbreviated: /^(яну|фев|мар|апр|май|юни|юли|авг|сеп|окт|ное|дек)/i,
                            wide: /^(януари|февруари|март|април|май|юни|юли|август|септември|октомври|ноември|декември)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: [/^я/i, /^ф/i, /^мар/i, /^ап/i, /^май/i, /^юн/i, /^юл/i, /^ав/i, /^се/i, /^окт/i, /^но/i, /^де/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    day: (0, n.default)({
                        matchPatterns: {
                            narrow: /^[нпвсч]/i,
                            short: /^(нд|пн|вт|ср|чт|пт|сб)/i,
                            abbreviated: /^(нед|пон|вто|сря|чет|пет|съб)/i,
                            wide: /^(неделя|понеделник|вторник|сряда|четвъртък|петък|събота)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            narrow: [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
                            any: [/^н[ед]/i, /^п[он]/i, /^вт/i, /^ср/i, /^ч[ет]/i, /^п[ет]/i, /^с[ъб]/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    dayPeriod: (0, n.default)({
                        matchPatterns: {
                            any: /^(преди о|след о|в по|на о|през|веч|сут|следо)/i
                        },
                        defaultMatchWidth: "any",
                        parsePatterns: {
                            any: {
                                am: /^преди о/i,
                                pm: /^след о/i,
                                midnight: /^в пол/i,
                                noon: /^на об/i,
                                morning: /^сут/i,
                                afternoon: /^следо/i,
                                evening: /^веч/i,
                                night: /^през н/i
                            }
                        },
                        defaultParseWidth: "any"
                    })
                }
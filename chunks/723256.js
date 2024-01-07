            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var a = n("713289"),
                i = n("504435"),
                r = {
                    ordinalNumber: (0, i.default)({
                        matchPattern: /^(第\s*)?\d+(日|时|分|秒)?/i,
                        parsePattern: /\d+/i,
                        valueCallback: function(t) {
                            return parseInt(t, 10)
                        }
                    }),
                    era: (0, a.default)({
                        matchPatterns: {
                            narrow: /^(前)/i,
                            abbreviated: /^(前)/i,
                            wide: /^(公元前|公元)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: [/^(前)/i, /^(公元)/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    quarter: (0, a.default)({
                        matchPatterns: {
                            narrow: /^[1234]/i,
                            abbreviated: /^第[一二三四]刻/i,
                            wide: /^第[一二三四]刻钟/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
                        },
                        defaultParseWidth: "any",
                        valueCallback: function(t) {
                            return t + 1
                        }
                    }),
                    month: (0, a.default)({
                        matchPatterns: {
                            narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
                            abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
                            wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            narrow: [/^一/i, /^二/i, /^三/i, /^四/i, /^五/i, /^六/i, /^七/i, /^八/i, /^九/i, /^十(?!(一|二))/i, /^十一/i, /^十二/i],
                            any: [/^一|1/i, /^二|2/i, /^三|3/i, /^四|4/i, /^五|5/i, /^六|6/i, /^七|7/i, /^八|8/i, /^九|9/i, /^十(?!(一|二))|10/i, /^十一|11/i, /^十二|12/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    day: (0, a.default)({
                        matchPatterns: {
                            narrow: /^[一二三四五六日]/i,
                            short: /^[一二三四五六日]/i,
                            abbreviated: /^周[一二三四五六日]/i,
                            wide: /^星期[一二三四五六日]/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    dayPeriod: (0, a.default)({
                        matchPatterns: {
                            any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
                        },
                        defaultMatchWidth: "any",
                        parsePatterns: {
                            any: {
                                am: /^上午?/i,
                                pm: /^下午?/i,
                                midnight: /^午夜/i,
                                noon: /^[中正]午/i,
                                morning: /^早上/i,
                                afternoon: /^下午/i,
                                evening: /^晚上?/i,
                                night: /^凌晨/i
                            }
                        },
                        defaultParseWidth: "any"
                    })
                }
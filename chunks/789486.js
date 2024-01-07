            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var a = n("64273"),
                r = {
                    ordinalNumber: function(t, e) {
                        var n = Number(t);
                        switch (String(null == e ? void 0 : e.unit)) {
                            case "year":
                                return "".concat(n, "年");
                            case "quarter":
                                return "第".concat(n, "四半期");
                            case "month":
                                return "".concat(n, "月");
                            case "week":
                                return "第".concat(n, "週");
                            case "date":
                                return "".concat(n, "日");
                            case "hour":
                                return "".concat(n, "時");
                            case "minute":
                                return "".concat(n, "分");
                            case "second":
                                return "".concat(n, "秒");
                            default:
                                return "".concat(n)
                        }
                    },
                    era: (0, a.default)({
                        values: {
                            narrow: ["BC", "AC"],
                            abbreviated: ["紀元前", "西暦"],
                            wide: ["紀元前", "西暦"]
                        },
                        defaultWidth: "wide"
                    }),
                    quarter: (0, a.default)({
                        values: {
                            narrow: ["1", "2", "3", "4"],
                            abbreviated: ["Q1", "Q2", "Q3", "Q4"],
                            wide: ["第1四半期", "第2四半期", "第3四半期", "第4四半期"]
                        },
                        defaultWidth: "wide",
                        argumentCallback: function(t) {
                            return Number(t) - 1
                        }
                    }),
                    month: (0, a.default)({
                        values: {
                            narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                            abbreviated: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                            wide: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
                        },
                        defaultWidth: "wide"
                    }),
                    day: (0, a.default)({
                        values: {
                            narrow: ["日", "月", "火", "水", "木", "金", "土"],
                            short: ["日", "月", "火", "水", "木", "金", "土"],
                            abbreviated: ["日", "月", "火", "水", "木", "金", "土"],
                            wide: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
                        },
                        defaultWidth: "wide"
                    }),
                    dayPeriod: (0, a.default)({
                        values: {
                            narrow: {
                                am: "午前",
                                pm: "午後",
                                midnight: "深夜",
                                noon: "正午",
                                morning: "朝",
                                afternoon: "午後",
                                evening: "夜",
                                night: "深夜"
                            },
                            abbreviated: {
                                am: "午前",
                                pm: "午後",
                                midnight: "深夜",
                                noon: "正午",
                                morning: "朝",
                                afternoon: "午後",
                                evening: "夜",
                                night: "深夜"
                            },
                            wide: {
                                am: "午前",
                                pm: "午後",
                                midnight: "深夜",
                                noon: "正午",
                                morning: "朝",
                                afternoon: "午後",
                                evening: "夜",
                                night: "深夜"
                            }
                        },
                        defaultWidth: "wide",
                        formattingValues: {
                            narrow: {
                                am: "午前",
                                pm: "午後",
                                midnight: "深夜",
                                noon: "正午",
                                morning: "朝",
                                afternoon: "午後",
                                evening: "夜",
                                night: "深夜"
                            },
                            abbreviated: {
                                am: "午前",
                                pm: "午後",
                                midnight: "深夜",
                                noon: "正午",
                                morning: "朝",
                                afternoon: "午後",
                                evening: "夜",
                                night: "深夜"
                            },
                            wide: {
                                am: "午前",
                                pm: "午後",
                                midnight: "深夜",
                                noon: "正午",
                                morning: "朝",
                                afternoon: "午後",
                                evening: "夜",
                                night: "深夜"
                            }
                        },
                        defaultFormattingWidth: "wide"
                    })
                }
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["53778"], {
        72357: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var a = {
                    lessThanXSeconds: {
                        one: "少於 1 秒",
                        other: "少於 {{count}} 秒"
                    },
                    xSeconds: {
                        one: "1 秒",
                        other: "{{count}} 秒"
                    },
                    halfAMinute: "半分鐘",
                    lessThanXMinutes: {
                        one: "少於 1 分鐘",
                        other: "少於 {{count}} 分鐘"
                    },
                    xMinutes: {
                        one: "1 分鐘",
                        other: "{{count}} 分鐘"
                    },
                    xHours: {
                        one: "1 小時",
                        other: "{{count}} 小時"
                    },
                    aboutXHours: {
                        one: "大約 1 小時",
                        other: "大約 {{count}} 小時"
                    },
                    xDays: {
                        one: "1 天",
                        other: "{{count}} 天"
                    },
                    aboutXWeeks: {
                        one: "大約 1 個星期",
                        other: "大約 {{count}} 個星期"
                    },
                    xWeeks: {
                        one: "1 個星期",
                        other: "{{count}} 個星期"
                    },
                    aboutXMonths: {
                        one: "大約 1 個月",
                        other: "大約 {{count}} 個月"
                    },
                    xMonths: {
                        one: "1 個月",
                        other: "{{count}} 個月"
                    },
                    aboutXYears: {
                        one: "大約 1 年",
                        other: "大約 {{count}} 年"
                    },
                    xYears: {
                        one: "1 年",
                        other: "{{count}} 年"
                    },
                    overXYears: {
                        one: "超過 1 年",
                        other: "超過 {{count}} 年"
                    },
                    almostXYears: {
                        one: "將近 1 年",
                        other: "將近 {{count}} 年"
                    }
                },
                i = function(t, e, n) {
                    var i, r = a[t];
                    if (i = "string" == typeof r ? r : 1 === e ? r.one : r.other.replace("{{count}}", String(e)), null != n && n.addSuffix) return n.comparison && n.comparison > 0 ? i + "內" : i + "前";
                    return i
                }
        },
        276272: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var a = n("607604"),
                i = {
                    date: (0, a.default)({
                        formats: {
                            full: "y'年'M'月'd'日' EEEE",
                            long: "y'年'M'月'd'日'",
                            medium: "yyyy-MM-dd",
                            short: "yy-MM-dd"
                        },
                        defaultWidth: "full"
                    }),
                    time: (0, a.default)({
                        formats: {
                            full: "zzzz a h:mm:ss",
                            long: "z a h:mm:ss",
                            medium: "a h:mm:ss",
                            short: "a h:mm"
                        },
                        defaultWidth: "full"
                    }),
                    dateTime: (0, a.default)({
                        formats: {
                            full: "{{date}} {{time}}",
                            long: "{{date}} {{time}}",
                            medium: "{{date}} {{time}}",
                            short: "{{date}} {{time}}"
                        },
                        defaultWidth: "full"
                    })
                }
        },
        746345: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var a = {
                    lastWeek: "'上個'eeee p",
                    yesterday: "'昨天' p",
                    today: "'今天' p",
                    tomorrow: "'明天' p",
                    nextWeek: "'下個'eeee p",
                    other: "P"
                },
                i = function(t, e, n, i) {
                    return a[t]
                }
        },
        548649: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var a = n("693677"),
                i = {
                    ordinalNumber: function(t, e) {
                        var n = Number(t);
                        switch (null == e ? void 0 : e.unit) {
                            case "date":
                                return n + "日";
                            case "hour":
                                return n + "時";
                            case "minute":
                                return n + "分";
                            case "second":
                                return n + "秒";
                            default:
                                return "第 " + n
                        }
                    },
                    era: (0, a.default)({
                        values: {
                            narrow: ["前", "公元"],
                            abbreviated: ["前", "公元"],
                            wide: ["公元前", "公元"]
                        },
                        defaultWidth: "wide"
                    }),
                    quarter: (0, a.default)({
                        values: {
                            narrow: ["1", "2", "3", "4"],
                            abbreviated: ["第一刻", "第二刻", "第三刻", "第四刻"],
                            wide: ["第一刻鐘", "第二刻鐘", "第三刻鐘", "第四刻鐘"]
                        },
                        defaultWidth: "wide",
                        argumentCallback: function(t) {
                            return t - 1
                        }
                    }),
                    month: (0, a.default)({
                        values: {
                            narrow: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
                            abbreviated: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                            wide: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                        },
                        defaultWidth: "wide"
                    }),
                    day: (0, a.default)({
                        values: {
                            narrow: ["日", "一", "二", "三", "四", "五", "六"],
                            short: ["日", "一", "二", "三", "四", "五", "六"],
                            abbreviated: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
                            wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                        },
                        defaultWidth: "wide"
                    }),
                    dayPeriod: (0, a.default)({
                        values: {
                            narrow: {
                                am: "上",
                                pm: "下",
                                midnight: "凌晨",
                                noon: "午",
                                morning: "早",
                                afternoon: "下午",
                                evening: "晚",
                                night: "夜"
                            },
                            abbreviated: {
                                am: "上午",
                                pm: "下午",
                                midnight: "凌晨",
                                noon: "中午",
                                morning: "早晨",
                                afternoon: "中午",
                                evening: "晚上",
                                night: "夜間"
                            },
                            wide: {
                                am: "上午",
                                pm: "下午",
                                midnight: "凌晨",
                                noon: "中午",
                                morning: "早晨",
                                afternoon: "中午",
                                evening: "晚上",
                                night: "夜間"
                            }
                        },
                        defaultWidth: "wide",
                        formattingValues: {
                            narrow: {
                                am: "上",
                                pm: "下",
                                midnight: "凌晨",
                                noon: "午",
                                morning: "早",
                                afternoon: "下午",
                                evening: "晚",
                                night: "夜"
                            },
                            abbreviated: {
                                am: "上午",
                                pm: "下午",
                                midnight: "凌晨",
                                noon: "中午",
                                morning: "早晨",
                                afternoon: "中午",
                                evening: "晚上",
                                night: "夜間"
                            },
                            wide: {
                                am: "上午",
                                pm: "下午",
                                midnight: "凌晨",
                                noon: "中午",
                                morning: "早晨",
                                afternoon: "中午",
                                evening: "晚上",
                                night: "夜間"
                            }
                        },
                        defaultFormattingWidth: "wide"
                    })
                }
        },
        167147: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var a = n("846700"),
                i = n("759779"),
                r = {
                    ordinalNumber: (0, i.default)({
                        matchPattern: /^(第\s*)?\d+(日|時|分|秒)?/i,
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
                            wide: /^第[一二三四]刻鐘/i
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
                            abbreviated: /^週[一二三四五六日]/i,
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
                            any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨)/i
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
        },
        996832: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var a = n("72357"),
                i = n("276272"),
                r = n("746345"),
                o = n("548649"),
                d = n("167147"),
                u = {
                    code: "zh-TW",
                    formatDistance: a.default,
                    formatLong: i.default,
                    formatRelative: r.default,
                    localize: o.default,
                    match: d.default,
                    options: {
                        weekStartsOn: 1,
                        firstWeekContainsDate: 4
                    }
                }
        }
    }
]);
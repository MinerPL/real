            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            }), n("781738");
            var a = {
                    lessThanXSeconds: {
                        one: "不到 1 秒",
                        other: "不到 {{count}} 秒"
                    },
                    xSeconds: {
                        one: "1 秒",
                        other: "{{count}} 秒"
                    },
                    halfAMinute: "半分钟",
                    lessThanXMinutes: {
                        one: "不到 1 分钟",
                        other: "不到 {{count}} 分钟"
                    },
                    xMinutes: {
                        one: "1 分钟",
                        other: "{{count}} 分钟"
                    },
                    xHours: {
                        one: "1 小时",
                        other: "{{count}} 小时"
                    },
                    aboutXHours: {
                        one: "大约 1 小时",
                        other: "大约 {{count}} 小时"
                    },
                    xDays: {
                        one: "1 天",
                        other: "{{count}} 天"
                    },
                    aboutXWeeks: {
                        one: "大约 1 个星期",
                        other: "大约 {{count}} 个星期"
                    },
                    xWeeks: {
                        one: "1 个星期",
                        other: "{{count}} 个星期"
                    },
                    aboutXMonths: {
                        one: "大约 1 个月",
                        other: "大约 {{count}} 个月"
                    },
                    xMonths: {
                        one: "1 个月",
                        other: "{{count}} 个月"
                    },
                    aboutXYears: {
                        one: "大约 1 年",
                        other: "大约 {{count}} 年"
                    },
                    xYears: {
                        one: "1 年",
                        other: "{{count}} 年"
                    },
                    overXYears: {
                        one: "超过 1 年",
                        other: "超过 {{count}} 年"
                    },
                    almostXYears: {
                        one: "将近 1 年",
                        other: "将近 {{count}} 年"
                    }
                },
                i = function(t, e, n) {
                    var i, r = a[t];
                    if (i = "string" == typeof r ? r : 1 === e ? r.one : r.other.replace("{{count}}", String(e)), null != n && n.addSuffix) return n.comparison && n.comparison > 0 ? i + "内" : i + "前";
                    return i
                }
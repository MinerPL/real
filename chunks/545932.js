            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("781738");
            var a = {
                    lessThanXSeconds: {
                        one: "mindre end \xe9t sekund",
                        other: "mindre end {{count}} sekunder"
                    },
                    xSeconds: {
                        one: "1 sekund",
                        other: "{{count}} sekunder"
                    },
                    halfAMinute: "\xe9t halvt minut",
                    lessThanXMinutes: {
                        one: "mindre end \xe9t minut",
                        other: "mindre end {{count}} minutter"
                    },
                    xMinutes: {
                        one: "1 minut",
                        other: "{{count}} minutter"
                    },
                    aboutXHours: {
                        one: "cirka 1 time",
                        other: "cirka {{count}} timer"
                    },
                    xHours: {
                        one: "1 time",
                        other: "{{count}} timer"
                    },
                    xDays: {
                        one: "1 dag",
                        other: "{{count}} dage"
                    },
                    aboutXWeeks: {
                        one: "cirka 1 uge",
                        other: "cirka {{count}} uger"
                    },
                    xWeeks: {
                        one: "1 uge",
                        other: "{{count}} uger"
                    },
                    aboutXMonths: {
                        one: "cirka 1 m\xe5ned",
                        other: "cirka {{count}} m\xe5neder"
                    },
                    xMonths: {
                        one: "1 m\xe5ned",
                        other: "{{count}} m\xe5neder"
                    },
                    aboutXYears: {
                        one: "cirka 1 \xe5r",
                        other: "cirka {{count}} \xe5r"
                    },
                    xYears: {
                        one: "1 \xe5r",
                        other: "{{count}} \xe5r"
                    },
                    overXYears: {
                        one: "over 1 \xe5r",
                        other: "over {{count}} \xe5r"
                    },
                    almostXYears: {
                        one: "n\xe6sten 1 \xe5r",
                        other: "n\xe6sten {{count}} \xe5r"
                    }
                },
                r = function(e, t, n) {
                    var r, i = a[e];
                    if (r = "string" == typeof i ? i : 1 === t ? i.one : i.other.replace("{{count}}", String(t)), null != n && n.addSuffix) return n.comparison && n.comparison > 0 ? "om " + r : r + " siden";
                    return r
                }
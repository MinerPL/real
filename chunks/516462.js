            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return r
                }
            }), t("781738");
            var n = {
                    lessThanXSeconds: {
                        one: "minder dan een seconde",
                        other: "minder dan {{count}} seconden"
                    },
                    xSeconds: {
                        one: "1 seconde",
                        other: "{{count}} seconden"
                    },
                    halfAMinute: "een halve minuut",
                    lessThanXMinutes: {
                        one: "minder dan een minuut",
                        other: "minder dan {{count}} minuten"
                    },
                    xMinutes: {
                        one: "een minuut",
                        other: "{{count}} minuten"
                    },
                    aboutXHours: {
                        one: "ongeveer 1 uur",
                        other: "ongeveer {{count}} uur"
                    },
                    xHours: {
                        one: "1 uur",
                        other: "{{count}} uur"
                    },
                    xDays: {
                        one: "1 dag",
                        other: "{{count}} dagen"
                    },
                    aboutXWeeks: {
                        one: "ongeveer 1 week",
                        other: "ongeveer {{count}} weken"
                    },
                    xWeeks: {
                        one: "1 week",
                        other: "{{count}} weken"
                    },
                    aboutXMonths: {
                        one: "ongeveer 1 maand",
                        other: "ongeveer {{count}} maanden"
                    },
                    xMonths: {
                        one: "1 maand",
                        other: "{{count}} maanden"
                    },
                    aboutXYears: {
                        one: "ongeveer 1 jaar",
                        other: "ongeveer {{count}} jaar"
                    },
                    xYears: {
                        one: "1 jaar",
                        other: "{{count}} jaar"
                    },
                    overXYears: {
                        one: "meer dan 1 jaar",
                        other: "meer dan {{count}} jaar"
                    },
                    almostXYears: {
                        one: "bijna 1 jaar",
                        other: "bijna {{count}} jaar"
                    }
                },
                r = function(e, a, t) {
                    var r, i = n[e];
                    if (r = "string" == typeof i ? i : 1 === a ? i.one : i.other.replace("{{count}}", String(a)), null != t && t.addSuffix) return t.comparison && t.comparison > 0 ? "over " + r : r + " geleden";
                    return r
                }
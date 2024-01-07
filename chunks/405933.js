            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return i
                }
            });
            var n = {
                    lastWeek: function(e) {
                        var a = e.getUTCDay();
                        return "'" + (0 === a || 6 === a ? "\xfaltimo" : "\xfaltima") + "' eeee '\xe0s' p"
                    },
                    yesterday: "'ontem \xe0s' p",
                    today: "'hoje \xe0s' p",
                    tomorrow: "'amanh\xe3 \xe0s' p",
                    nextWeek: "eeee '\xe0s' p",
                    other: "P"
                },
                i = function(e, a, t, i) {
                    var o = n[e];
                    return "function" == typeof o ? o(a) : o
                }
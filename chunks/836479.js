            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var n = a("86319"),
                i = ["domenica", "luned\xec", "marted\xec", "mercoled\xec", "gioved\xec", "venerd\xec", "sabato"];

            function o(e) {
                return "'" + i[e] + " alle' p"
            }
            var r = {
                    lastWeek: function(e, t, a) {
                        var r = e.getUTCDay();
                        return (0, n.default)(e, t, a) ? o(r) : function(e) {
                            if (0 === e) return "'domenica scorsa alle' p";
                            return "'" + i[e] + " scorso alle' p"
                        }(r)
                    },
                    yesterday: "'ieri alle' p",
                    today: "'oggi alle' p",
                    tomorrow: "'domani alle' p",
                    nextWeek: function(e, t, a) {
                        var r = e.getUTCDay();
                        return (0, n.default)(e, t, a) ? o(r) : function(e) {
                            if (0 === e) return "'domenica prossima alle' p";
                            return "'" + i[e] + " prossimo alle' p"
                        }(r)
                    },
                    other: "P"
                },
                d = function(e, t, a, n) {
                    var i = r[e];
                    return "function" == typeof i ? i(t, a, n) : i
                }
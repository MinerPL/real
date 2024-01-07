            "use strict";
            i.r(n), i.d(n, {
                default: function() {
                    return c
                }
            }), i("70102");
            var t = i("86319"),
                o = {
                    masculine: "ostatni",
                    feminine: "ostatnia"
                },
                a = {
                    masculine: "ten",
                    feminine: "ta"
                },
                r = {
                    masculine: "następny",
                    feminine: "następna"
                },
                u = {
                    0: "feminine",
                    1: "masculine",
                    2: "masculine",
                    3: "feminine",
                    4: "masculine",
                    5: "masculine",
                    6: "feminine"
                };

            function d(e, n, i, d) {
                if ((0, t.default)(n, i, d)) s = a;
                else if ("lastWeek" === e) s = o;
                else if ("nextWeek" === e) s = r;
                else throw Error("Cannot determine adjectives for token ".concat(e));
                var s, c = s[u[n.getUTCDay()]];
                return "'".concat(c, "' eeee 'o' p")
            }
            var s = {
                    lastWeek: d,
                    yesterday: "'wczoraj o' p",
                    today: "'dzisiaj o' p",
                    tomorrow: "'jutro o' p",
                    nextWeek: d,
                    other: "P"
                },
                c = function(e, n, i, t) {
                    var o = s[e];
                    return "function" == typeof o ? o(e, n, i, t) : o
                }
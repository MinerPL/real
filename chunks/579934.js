            "use strict";
            n.r(t), n.d(t, {
                areCoordsEqual: function() {
                    return o
                },
                areArraysEqual: function() {
                    return a
                }
            });
            var r = function(e, t) {
                return e === t
            };

            function o(e, t) {
                return !e && !t || !!e && !!t && e.x === t.x && e.y === t.y
            }

            function a(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
                if (e.length !== t.length) return !1;
                for (var o = 0; o < e.length; ++o)
                    if (!n(e[o], t[o])) return !1;
                return !0
            }
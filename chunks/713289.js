            "use strict";

            function r(e) {
                return function(t) {
                    var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        a = r.width,
                        o = a && e.matchPatterns[a] || e.matchPatterns[e.defaultMatchWidth],
                        i = t.match(o);
                    if (!i) return null;
                    var s = i[0],
                        u = a && e.parsePatterns[a] || e.parsePatterns[e.defaultParseWidth],
                        l = Array.isArray(u) ? function(e, t) {
                            for (var n = 0; n < e.length; n++)
                                if (t(e[n])) return n
                        }(u, function(e) {
                            return e.test(s)
                        }) : function(e, t) {
                            for (var n in e)
                                if (e.hasOwnProperty(n) && t(e[n])) return n
                        }(u, function(e) {
                            return e.test(s)
                        });
                    return n = e.valueCallback ? e.valueCallback(l) : l, {
                        value: n = r.valueCallback ? r.valueCallback(n) : n,
                        rest: t.slice(s.length)
                    }
                }
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            })
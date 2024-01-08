            "use strict";
            r("808653");
            var i, n = r("129752").codes,
                a = n.ERR_MISSING_ARGS,
                o = n.ERR_STREAM_DESTROYED;

            function s(t) {
                if (t) throw t
            }

            function f(t) {
                t()
            }

            function h(t, e) {
                return t.pipe(e)
            }
            t.exports = function() {
                for (var t, e, n = arguments.length, c = Array(n), u = 0; u < n; u++) c[u] = arguments[u];
                var d = (t = c).length && "function" == typeof t[t.length - 1] ? t.pop() : s;
                if (Array.isArray(c[0]) && (c = c[0]), c.length < 2) throw new a("streams");
                var l = c.map(function(t, n) {
                    var a, s, h, u, p, b, m, g, v = n < c.length - 1;
                    return a = t, s = v, h = n > 0, p = u = function(t) {
                            !e && (e = t), t && l.forEach(f), !v && (l.forEach(f), d(e))
                        }, b = !1, u = function() {
                            !b && (b = !0, p.apply(void 0, arguments))
                        }, m = !1, a.on("close", function() {
                            m = !0
                        }), void 0 === i && (i = r("362796")), i(a, {
                            readable: s,
                            writable: h
                        }, function(t) {
                            if (t) return u(t);
                            m = !0, u()
                        }), g = !1,
                        function(t) {
                            if (!m) {
                                if (!g) {
                                    var e;
                                    if (g = !0, (e = a).setHeader && "function" == typeof e.abort) return a.abort();
                                    if ("function" == typeof a.destroy) return a.destroy();
                                    u(t || new o("pipe"))
                                }
                            }
                        }
                });
                return c.reduce(h)
            }
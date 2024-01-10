            "use strict";
            r("808653");
            var i, n = r("129752").codes,
                o = n.ERR_MISSING_ARGS,
                a = n.ERR_STREAM_DESTROYED;

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
                if (Array.isArray(c[0]) && (c = c[0]), c.length < 2) throw new o("streams");
                var l = c.map(function(t, n) {
                    var o, s, h, u, p, b, m, g, y = n < c.length - 1;
                    return o = t, s = y, h = n > 0, p = u = function(t) {
                            !e && (e = t), t && l.forEach(f), !y && (l.forEach(f), d(e))
                        }, b = !1, u = function() {
                            !b && (b = !0, p.apply(void 0, arguments))
                        }, m = !1, o.on("close", function() {
                            m = !0
                        }), void 0 === i && (i = r("362796")), i(o, {
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
                                    if (g = !0, (e = o).setHeader && "function" == typeof e.abort) return o.abort();
                                    if ("function" == typeof o.destroy) return o.destroy();
                                    u(t || new a("pipe"))
                                }
                            }
                        }
                });
                return c.reduce(h)
            }
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            }), r("70102");
            var n = r("794666"),
                o = r("115772"),
                a = r("148126"),
                i = Math.max,
                u = Math.min,
                l = function(e, t, r) {
                    var l, c, s, f, d, p, h = 0,
                        b = !1,
                        v = !1,
                        g = !0;
                    if ("function" != typeof e) throw TypeError("Expected a function");

                    function x(t) {
                        var r = l,
                            n = c;
                        return l = c = void 0, h = t, f = e.apply(n, r)
                    }
                    t = (0, a.default)(t) || 0, (0, n.default)(r) && (b = !!r.leading, s = (v = "maxWait" in r) ? i((0, a.default)(r.maxWait) || 0, t) : s, g = "trailing" in r ? !!r.trailing : g);

                    function y(e) {
                        var r = e - p,
                            n = e - h;
                        return void 0 === p || r >= t || r < 0 || v && n >= s
                    }

                    function m() {
                        var e, r, n, a, i = (0, o.default)();
                        if (y(i)) return w(i);
                        d = setTimeout(m, (r = (e = i) - p, n = e - h, a = t - r, v ? u(a, s - n) : a))
                    }

                    function w(e) {
                        return (d = void 0, g && l) ? x(e) : (l = c = void 0, f)
                    }

                    function E() {
                        var e, r = (0, o.default)(),
                            n = y(r);
                        if (l = arguments, c = this, p = r, n) {
                            if (void 0 === d) {
                                ;
                                return h = e = p, d = setTimeout(m, t), b ? x(e) : f
                            }
                            if (v) return clearTimeout(d), d = setTimeout(m, t), x(p)
                        }
                        return void 0 === d && (d = setTimeout(m, t)), f
                    }
                    return E.cancel = function() {
                        void 0 !== d && clearTimeout(d), h = 0, l = p = c = d = void 0
                    }, E.flush = function() {
                        return void 0 === d ? f : w((0, o.default)())
                    }, E
                }
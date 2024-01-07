                n("70102");
                var r = n("285162"),
                    o = n("271388"),
                    i = n("16282"),
                    u = Math.max,
                    c = Math.min;
                t.exports = function(t, e, n) {
                    var l, a, f, s, d, p, v = 0,
                        b = !1,
                        g = !1,
                        h = !0;
                    if ("function" != typeof t) throw TypeError("Expected a function");

                    function y(e) {
                        var n = l,
                            r = a;
                        return l = a = void 0, v = e, s = t.apply(r, n)
                    }
                    e = i(e) || 0, r(n) && (b = !!n.leading, f = (g = "maxWait" in n) ? u(i(n.maxWait) || 0, e) : f, h = "trailing" in n ? !!n.trailing : h);

                    function m(t) {
                        var n = t - p,
                            r = t - v;
                        return void 0 === p || n >= e || n < 0 || g && r >= f
                    }

                    function E() {
                        var t, n, r, i, u = o();
                        if (m(u)) return S(u);
                        d = setTimeout(E, (n = (t = u) - p, r = t - v, i = e - n, g ? c(i, f - r) : i))
                    }

                    function S(t) {
                        return (d = void 0, h && l) ? y(t) : (l = a = void 0, s)
                    }

                    function x() {
                        var t, n = o(),
                            r = m(n);
                        if (l = arguments, a = this, p = n, r) {
                            if (void 0 === d) {
                                ;
                                return v = t = p, d = setTimeout(E, e), b ? y(t) : s
                            }
                            if (g) return clearTimeout(d), d = setTimeout(E, e), y(p)
                        }
                        return void 0 === d && (d = setTimeout(E, e)), s
                    }
                    return x.cancel = function() {
                        void 0 !== d && clearTimeout(d), v = 0, l = p = a = d = void 0
                    }, x.flush = function() {
                        return void 0 === d ? s : S(o())
                    }, x
                }
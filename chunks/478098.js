            A("70102");
            var a = A("952133"),
                l = A("645942"),
                n = A("261497"),
                r = Math.max,
                s = Math.min;
            e.exports = function(e, t, A) {
                var o, i, d, u, c, f, C = 0,
                    g = !1,
                    h = !1,
                    T = !0;
                if ("function" != typeof e) throw TypeError("Expected a function");

                function m(t) {
                    var A = o,
                        a = i;
                    return o = i = void 0, C = t, u = e.apply(a, A)
                }
                t = n(t) || 0, a(A) && (g = !!A.leading, d = (h = "maxWait" in A) ? r(n(A.maxWait) || 0, t) : d, T = "trailing" in A ? !!A.trailing : T);

                function p(e) {
                    var A = e - f,
                        a = e - C;
                    return void 0 === f || A >= t || A < 0 || h && a >= d
                }

                function U() {
                    var e, A, a, n, r = l();
                    if (p(r)) return I(r);
                    c = setTimeout(U, (A = (e = r) - f, a = e - C, n = t - A, h ? s(n, d - a) : n))
                }

                function I(e) {
                    return (c = void 0, T && o) ? m(e) : (o = i = void 0, u)
                }

                function v() {
                    var e, A = l(),
                        a = p(A);
                    if (o = arguments, i = this, f = A, a) {
                        if (void 0 === c) {
                            ;
                            return C = e = f, c = setTimeout(U, t), g ? m(e) : u
                        }
                        if (h) return clearTimeout(c), c = setTimeout(U, t), m(f)
                    }
                    return void 0 === c && (c = setTimeout(U, t)), u
                }
                return v.cancel = function() {
                    void 0 !== c && clearTimeout(c), C = 0, o = f = i = c = void 0
                }, v.flush = function() {
                    return void 0 === c ? u : I(l())
                }, v
            }
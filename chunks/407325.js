            "use strict";
            var e = n("503486"),
                o = n("64980"),
                i = n("814026"),
                u = n("341088"),
                f = n("611769"),
                c = n("366483"),
                a = n("18563"),
                s = n("985797"),
                y = n("664144"),
                h = n("88052"),
                p = n("969708"),
                v = n("113806"),
                d = n("441716"),
                g = n("78259"),
                l = n("80282"),
                A = n("823493"),
                w = n("431357").f,
                x = n("620756"),
                b = n("355540"),
                T = n("89157"),
                I = n("515011"),
                E = f.PROPER,
                R = f.CONFIGURABLE,
                m = "ArrayBuffer",
                F = "DataView",
                M = "prototype",
                _ = "Wrong index",
                L = I.getterFor(m),
                U = I.getterFor(F),
                B = I.set,
                O = e[m],
                C = O,
                V = C && C[M],
                N = e[F],
                W = N && N[M],
                P = Object.prototype,
                Array = e.Array,
                RangeError = e.RangeError,
                Y = o(x),
                S = o([].reverse),
                D = g.pack,
                k = g.unpack,
                G = function(t) {
                    return [255 & t]
                },
                j = function(t) {
                    return [255 & t, t >> 8 & 255]
                },
                K = function(t) {
                    return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
                },
                q = function(t) {
                    return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
                },
                z = function(t) {
                    return D(t, 23, 4)
                },
                H = function(t) {
                    return D(t, 52, 8)
                },
                J = function(t, r, n) {
                    a(t[M], r, {
                        configurable: !0,
                        get: function() {
                            return n(this)[r]
                        }
                    })
                },
                Q = function(t, r, n, e) {
                    var o = U(t),
                        i = d(n);
                    if (i + r > o.byteLength) throw RangeError(_);
                    var u = o.bytes,
                        f = i + o.byteOffset,
                        c = b(u, f, f + r);
                    return e ? c : S(c)
                },
                X = function(t, r, n, e, o, i) {
                    var u = U(t),
                        f = d(n),
                        c = e(+o),
                        a = !!i;
                    if (f + r > u.byteLength) throw RangeError(_);
                    for (var s = u.bytes, y = f + u.byteOffset, h = 0; h < r; h++) s[y + h] = c[a ? h : r - h - 1]
                };
            if (u) {
                var Z = E && O.name !== m;
                if (!y(function() {
                        O(1)
                    }) || !y(function() {
                        new O(-1)
                    }) || y(function() {
                        return new O, new O(1.5), new O(NaN), 1 !== O.length || Z && !R
                    })) {
                    (C = function(t) {
                        return h(this, V), new O(d(t))
                    })[M] = V;
                    for (var $, tt = w(O), tr = 0; tt.length > tr;) !(($ = tt[tr++]) in C) && c(C, $, O[$]);
                    V.constructor = C
                } else Z && R && c(O, "name", m);
                A && l(W) !== P && A(W, P);
                var tn = new N(new C(2)),
                    te = o(W.setInt8);
                tn.setInt8(0, 2147483648), tn.setInt8(1, 2147483649), (tn.getInt8(0) || !tn.getInt8(1)) && s(W, {
                    setInt8: function(t, r) {
                        te(this, t, r << 24 >> 24)
                    },
                    setUint8: function(t, r) {
                        te(this, t, r << 24 >> 24)
                    }
                }, {
                    unsafe: !0
                })
            } else V = (C = function(t) {
                h(this, V);
                var r = d(t);
                B(this, {
                    type: m,
                    bytes: Y(Array(r), 0),
                    byteLength: r
                }), !i && (this.byteLength = r, this.detached = !1)
            })[M], W = (N = function(t, r, n) {
                h(this, W), h(t, V);
                var e = L(t),
                    o = e.byteLength,
                    u = p(r);
                if (u < 0 || u > o) throw RangeError("Wrong offset");
                if (n = void 0 === n ? o - u : v(n), u + n > o) throw RangeError("Wrong length");
                B(this, {
                    type: F,
                    buffer: t,
                    byteLength: n,
                    byteOffset: u,
                    bytes: e.bytes
                }), !i && (this.buffer = t, this.byteLength = n, this.byteOffset = u)
            })[M], i && (J(C, "byteLength", L), J(N, "buffer", U), J(N, "byteLength", U), J(N, "byteOffset", U)), s(W, {
                getInt8: function(t) {
                    return Q(this, 1, t)[0] << 24 >> 24
                },
                getUint8: function(t) {
                    return Q(this, 1, t)[0]
                },
                getInt16: function(t) {
                    var r = Q(this, 2, t, arguments.length > 1 && arguments[1]);
                    return (r[1] << 8 | r[0]) << 16 >> 16
                },
                getUint16: function(t) {
                    var r = Q(this, 2, t, arguments.length > 1 && arguments[1]);
                    return r[1] << 8 | r[0]
                },
                getInt32: function(t) {
                    return q(Q(this, 4, t, arguments.length > 1 && arguments[1]))
                },
                getUint32: function(t) {
                    return q(Q(this, 4, t, arguments.length > 1 && arguments[1])) >>> 0
                },
                getFloat32: function(t) {
                    return k(Q(this, 4, t, arguments.length > 1 && arguments[1]), 23)
                },
                getFloat64: function(t) {
                    return k(Q(this, 8, t, arguments.length > 1 && arguments[1]), 52)
                },
                setInt8: function(t, r) {
                    X(this, 1, t, G, r)
                },
                setUint8: function(t, r) {
                    X(this, 1, t, G, r)
                },
                setInt16: function(t, r) {
                    X(this, 2, t, j, r, arguments.length > 2 && arguments[2])
                },
                setUint16: function(t, r) {
                    X(this, 2, t, j, r, arguments.length > 2 && arguments[2])
                },
                setInt32: function(t, r) {
                    X(this, 4, t, K, r, arguments.length > 2 && arguments[2])
                },
                setUint32: function(t, r) {
                    X(this, 4, t, K, r, arguments.length > 2 && arguments[2])
                },
                setFloat32: function(t, r) {
                    X(this, 4, t, z, r, arguments.length > 2 && arguments[2])
                },
                setFloat64: function(t, r) {
                    X(this, 8, t, H, r, arguments.length > 2 && arguments[2])
                }
            });
            T(C, m), T(N, F), t.exports = {
                ArrayBuffer: C,
                DataView: N
            }
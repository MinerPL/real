            "use strict";
            var e = n("859514"),
                o = n("503486"),
                i = n("868822"),
                u = n("814026"),
                f = n("251250"),
                c = n("188523"),
                a = n("407325"),
                s = n("88052"),
                y = n("16447"),
                h = n("366483"),
                p = n("446286"),
                v = n("113806"),
                d = n("441716"),
                g = n("969006"),
                l = n("18808"),
                A = n("179695"),
                w = n("59393"),
                x = n("681802"),
                b = n("472960"),
                T = n("44338"),
                I = n("148066"),
                E = n("470984"),
                R = n("823493"),
                m = n("431357").f,
                F = n("460191"),
                M = n("462968").forEach,
                _ = n("312189"),
                L = n("18563"),
                U = n("541368"),
                B = n("85181"),
                O = n("515011"),
                C = n("688358"),
                V = O.get,
                N = O.set,
                W = O.enforce,
                P = U.f,
                Y = B.f,
                RangeError = o.RangeError,
                ArrayBuffer = a.ArrayBuffer,
                S = ArrayBuffer.prototype,
                DataView = a.DataView,
                D = c.NATIVE_ARRAY_BUFFER_VIEWS,
                k = c.TYPED_ARRAY_TAG,
                G = c.TypedArray,
                j = c.TypedArrayPrototype,
                K = c.aTypedArrayConstructor,
                q = c.isTypedArray,
                z = "BYTES_PER_ELEMENT",
                H = "Wrong length",
                J = function(t, r) {
                    K(t);
                    for (var n = 0, e = r.length, o = new t(e); e > n;) o[n] = r[n++];
                    return o
                },
                Q = function(t, r) {
                    L(t, r, {
                        configurable: !0,
                        get: function() {
                            return V(this)[r]
                        }
                    })
                },
                X = function(t) {
                    var r;
                    return E(S, t) || "ArrayBuffer" === (r = x(t)) || "SharedArrayBuffer" === r
                },
                Z = function(t, r) {
                    return q(t) && !T(r) && r in t && p(+r) && r >= 0
                },
                $ = function(t, r) {
                    return Z(t, r = A(r)) ? y(2, t[r]) : Y(t, r)
                },
                tt = function(t, r, n) {
                    return Z(t, r = A(r)) && b(n) && w(n, "value") && !w(n, "get") && !w(n, "set") && !n.configurable && (!w(n, "writable") || n.writable) && (!w(n, "enumerable") || n.enumerable) ? (t[r] = n.value, t) : P(t, r, n)
                };
            u ? (!D && (B.f = $, U.f = tt, Q(j, "buffer"), Q(j, "byteOffset"), Q(j, "byteLength"), Q(j, "length")), e({
                target: "Object",
                stat: !0,
                forced: !D
            }, {
                getOwnPropertyDescriptor: $,
                defineProperty: tt
            }), t.exports = function(t, r, n) {
                var u = t.match(/\d+/)[0] / 8,
                    c = t + (n ? "Clamped" : "") + "Array",
                    a = "get" + t,
                    y = "set" + t,
                    p = o[c],
                    A = p,
                    w = A && A.prototype,
                    x = {},
                    T = function(t, r) {
                        var n = V(t);
                        return n.view[a](r * u + n.byteOffset, !0)
                    },
                    E = function(t, r, e) {
                        var o = V(t);
                        o.view[y](r * u + o.byteOffset, n ? l(e) : e, !0)
                    },
                    L = function(t, r) {
                        P(t, r, {
                            get: function() {
                                return T(this, r)
                            },
                            set: function(t) {
                                return E(this, r, t)
                            },
                            enumerable: !0
                        })
                    };
                D ? f && (A = r(function(t, r, n, e) {
                    return s(t, w), C(b(r) ? X(r) ? void 0 !== e ? new p(r, g(n, u), e) : void 0 !== n ? new p(r, g(n, u)) : new p(r) : q(r) ? J(A, r) : i(F, A, r) : new p(d(r)), t, A)
                }), R && R(A, G), M(m(p), function(t) {
                    !(t in A) && h(A, t, p[t])
                }), A.prototype = w) : (A = r(function(t, r, n, e) {
                    s(t, w);
                    var o, f, c, a = 0,
                        y = 0;
                    if (b(r)) {
                        if (X(r)) {
                            o = r, y = g(n, u);
                            var h = r.byteLength;
                            if (void 0 === e) {
                                if (h % u || (f = h - y) < 0) throw RangeError(H)
                            } else if ((f = v(e) * u) + y > h) throw RangeError(H);
                            c = f / u
                        } else if (q(r)) return J(A, r);
                        else return i(F, A, r)
                    } else o = new ArrayBuffer(f = (c = d(r)) * u);
                    for (N(t, {
                            buffer: o,
                            byteOffset: y,
                            byteLength: f,
                            length: c,
                            view: new DataView(o)
                        }); a < c;) L(t, a++)
                }), R && R(A, G), w = A.prototype = I(j)), w.constructor !== A && h(w, "constructor", A), W(w).TypedArrayConstructor = A, k && h(w, k, c);
                var U = A !== p;
                x[c] = A, e({
                    global: !0,
                    constructor: !0,
                    forced: U,
                    sham: !D
                }, x), !(z in A) && h(A, z, u), !(z in w) && h(w, z, u), _(c)
            }) : t.exports = function() {}
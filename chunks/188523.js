            "use strict";
            var e, o, i, u = n("341088"),
                f = n("814026"),
                c = n("503486"),
                a = n("125359"),
                s = n("472960"),
                y = n("59393"),
                h = n("681802"),
                p = n("649675"),
                v = n("366483"),
                d = n("484784"),
                g = n("18563"),
                l = n("470984"),
                A = n("80282"),
                w = n("823493"),
                x = n("174669"),
                b = n("319778"),
                T = n("515011"),
                I = T.enforce,
                E = T.get,
                Int8Array = c.Int8Array,
                R = Int8Array && Int8Array.prototype,
                Uint8ClampedArray = c.Uint8ClampedArray,
                m = Uint8ClampedArray && Uint8ClampedArray.prototype,
                F = Int8Array && A(Int8Array),
                M = R && A(R),
                _ = Object.prototype,
                TypeError = c.TypeError,
                L = x("toStringTag"),
                U = b("TYPED_ARRAY_TAG"),
                B = "TypedArrayConstructor",
                O = u && !!w && "Opera" !== h(c.opera),
                C = !1,
                V = {
                    Int8Array: 1,
                    Uint8Array: 1,
                    Uint8ClampedArray: 1,
                    Int16Array: 2,
                    Uint16Array: 2,
                    Int32Array: 4,
                    Uint32Array: 4,
                    Float32Array: 4,
                    Float64Array: 8
                },
                N = {
                    BigInt64Array: 8,
                    BigUint64Array: 8
                },
                W = function(t) {
                    var r = A(t);
                    if (s(r)) {
                        var n = E(r);
                        return n && y(n, B) ? n[B] : W(r)
                    }
                },
                P = function(t) {
                    if (!s(t)) return !1;
                    var r = h(t);
                    return y(V, r) || y(N, r)
                };
            for (e in V)(i = (o = c[e]) && o.prototype) ? I(i)[B] = o : O = !1;
            for (e in N)(i = (o = c[e]) && o.prototype) && (I(i)[B] = o);
            if ((!O || !a(F) || F === Function.prototype) && (F = function() {
                    throw TypeError("Incorrect invocation")
                }, O))
                for (e in V) c[e] && w(c[e], F);
            if ((!O || !M || M === _) && (M = F.prototype, O))
                for (e in V) c[e] && w(c[e].prototype, M);
            if (O && A(m) !== M && w(m, M), f && !y(M, L))
                for (e in C = !0, g(M, L, {
                        configurable: !0,
                        get: function() {
                            return s(this) ? this[U] : void 0
                        }
                    }), V) c[e] && v(c[e], U, e);
            t.exports = {
                NATIVE_ARRAY_BUFFER_VIEWS: O,
                TYPED_ARRAY_TAG: C && U,
                aTypedArray: function(t) {
                    if (P(t)) return t;
                    throw TypeError("Target is not a typed array")
                },
                aTypedArrayConstructor: function(t) {
                    if (a(t) && (!w || l(F, t))) return t;
                    throw TypeError(p(t) + " is not a typed array constructor")
                },
                exportTypedArrayMethod: function(t, r, n, e) {
                    if (f) {
                        if (n)
                            for (var o in V) {
                                var i = c[o];
                                if (i && y(i.prototype, t)) try {
                                    delete i.prototype[t]
                                } catch (n) {
                                    try {
                                        i.prototype[t] = r
                                    } catch (t) {}
                                }
                            }(!M[t] || n) && d(M, t, n ? r : O && R[t] || r, e)
                    }
                },
                exportTypedArrayStaticMethod: function(t, r, n) {
                    var e, o;
                    if (f) {
                        if (w) {
                            if (n) {
                                for (e in V)
                                    if ((o = c[e]) && y(o, t)) try {
                                        delete o[t]
                                    } catch (t) {}
                            }
                            if (F[t] && !n) return;
                            try {
                                return d(F, t, n ? r : O && F[t] || r)
                            } catch (t) {}
                        }
                        for (e in V)(o = c[e]) && (!o[t] || n) && d(o, t, r)
                    }
                },
                getTypedArrayConstructor: W,
                isView: function(t) {
                    if (!s(t)) return !1;
                    var r = h(t);
                    return "DataView" === r || y(V, r) || y(N, r)
                },
                isTypedArray: P,
                TypedArray: F,
                TypedArrayPrototype: M
            }
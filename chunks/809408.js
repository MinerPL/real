            var e = n("146007"),
                o = n("334782"),
                c = n("253792"),
                u = n("366726"),
                a = n("855023"),
                i = n("552500"),
                f = n("561449"),
                s = n("619754"),
                p = n("310524"),
                b = n("904526"),
                v = n("552647"),
                j = n("540956"),
                l = n("925400"),
                y = n("493118"),
                x = n("789078"),
                d = n("725502"),
                h = n("591350"),
                w = n("751279"),
                A = n("285162"),
                g = n("154948"),
                O = n("466731"),
                S = "[object Arguments]",
                m = "[object Function]",
                I = "[object Object]",
                U = {};
            U[S] = U["[object Array]"] = U["[object ArrayBuffer]"] = U["[object DataView]"] = U["[object Boolean]"] = U["[object Date]"] = U["[object Float32Array]"] = U["[object Float64Array]"] = U["[object Int8Array]"] = U["[object Int16Array]"] = U["[object Int32Array]"] = U["[object Map]"] = U["[object Number]"] = U[I] = U["[object RegExp]"] = U["[object Set]"] = U["[object String]"] = U["[object Symbol]"] = U["[object Uint8Array]"] = U["[object Uint8ClampedArray]"] = U["[object Uint16Array]"] = U["[object Uint32Array]"] = !0, U["[object Error]"] = U[m] = U["[object WeakMap]"] = !1;
            t.exports = function t(r, n, F, k, P, B) {
                var E, M = 1 & n,
                    C = 2 & n,
                    D = 4 & n;
                if (F && (E = P ? F(r, k, P, B) : F(r)), void 0 !== E) return E;
                if (!A(r)) return r;
                var L = d(r);
                if (L) {
                    if (E = l(r), !M) return f(r, E)
                } else {
                    var N = j(r),
                        R = N == m || "[object GeneratorFunction]" == N;
                    if (h(r)) return i(r, M);
                    if (N == I || N == S || R && !P) {
                        if (E = C || R ? {} : x(r), !M) return C ? p(r, a(E, r)) : s(r, u(E, r))
                    } else {
                        if (!U[N]) return P ? r : {};
                        E = y(r, N, M)
                    }
                }
                B || (B = new e);
                var T = B.get(r);
                if (T) return T;
                B.set(r, E), g(r) ? r.forEach(function(e) {
                    E.add(t(e, n, F, e, r, B))
                }) : w(r) && r.forEach(function(e, o) {
                    E.set(o, t(e, n, F, o, r, B))
                });
                var V = D ? C ? v : b : C ? keysIn : O,
                    _ = L ? void 0 : V(r);
                return o(_ || r, function(e, o) {
                    _ && (e = r[o = e]), c(E, o, t(e, n, F, o, r, B))
                }), E
            }
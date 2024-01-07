            var n = r("863847"),
                o = r("396494"),
                a = r("931492"),
                i = r("464477"),
                u = r("208011"),
                l = r("28279"),
                c = r("19381"),
                s = r("333714"),
                f = r("883687"),
                d = r("363863"),
                p = r("661495"),
                h = r("364599"),
                b = r("622142"),
                v = r("302549"),
                g = r("12062"),
                x = r("486036"),
                y = r("474710"),
                m = r("771642"),
                w = r("952133"),
                E = r("883751"),
                C = r("436335"),
                O = r("298169"),
                j = "[object Arguments]",
                _ = "[object Function]",
                S = "[object Object]",
                k = {};
            k[j] = k["[object Array]"] = k["[object ArrayBuffer]"] = k["[object DataView]"] = k["[object Boolean]"] = k["[object Date]"] = k["[object Float32Array]"] = k["[object Float64Array]"] = k["[object Int8Array]"] = k["[object Int16Array]"] = k["[object Int32Array]"] = k["[object Map]"] = k["[object Number]"] = k[S] = k["[object RegExp]"] = k["[object Set]"] = k["[object String]"] = k["[object Symbol]"] = k["[object Uint8Array]"] = k["[object Uint8ClampedArray]"] = k["[object Uint16Array]"] = k["[object Uint32Array]"] = !0, k["[object Error]"] = k[_] = k["[object WeakMap]"] = !1;
            e.exports = function e(t, r, R, P, M, B) {
                var F, A = 1 & r,
                    T = 2 & r,
                    D = 4 & r;
                if (R && (F = M ? R(t, P, M, B) : R(t)), void 0 !== F) return F;
                if (!w(t)) return t;
                var H = x(t);
                if (H) {
                    if (F = b(t), !A) return c(t, F)
                } else {
                    var L = h(t),
                        z = L == _ || "[object GeneratorFunction]" == L;
                    if (y(t)) return l(t, A);
                    if (L == S || L == j || z && !M) {
                        if (F = T || z ? {} : g(t), !A) return T ? f(t, u(F, t)) : s(t, i(F, t))
                    } else {
                        if (!k[L]) return M ? t : {};
                        F = v(t, L, A)
                    }
                }
                B || (B = new n);
                var U = B.get(t);
                if (U) return U;
                B.set(t, F), E(t) ? t.forEach(function(n) {
                    F.add(e(n, r, R, n, t, B))
                }) : m(t) && t.forEach(function(n, o) {
                    F.set(o, e(n, r, R, o, t, B))
                });
                var N = D ? T ? p : d : T ? O : C,
                    I = H ? void 0 : N(t);
                return o(I || t, function(n, o) {
                    I && (n = t[o = n]), a(F, o, e(n, r, R, o, t, B))
                }), F
            }
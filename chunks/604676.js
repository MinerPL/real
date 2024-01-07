            "use strict";

            function n(e) {
                return "object" == typeof e && null != e && 1 === e.nodeType
            }

            function u(e, t) {
                return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e
            }

            function a(e, t) {
                if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
                    var r, n, a = getComputedStyle(e, null);
                    return u(a.overflowY, t) || u(a.overflowX, t) || !!(n = function(e) {
                        if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
                        try {
                            return e.ownerDocument.defaultView.frameElement
                        } catch (e) {
                            return null
                        }
                    }(r = e)) && (n.clientHeight < r.scrollHeight || n.clientWidth < r.scrollWidth)
                }
                return !1
            }

            function o(e, t, r, n, u, a, o, i) {
                return a < e && o > t || a > e && o < t ? 0 : a <= e && i <= r || o >= t && i >= r ? a - e - n : o > t && i < r || a < e && i > r ? o - t + u : 0
            }
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            }), r("70102"), r("424973");
            var i = function(e, t) {
                var r = window,
                    u = t.scrollMode,
                    i = t.block,
                    s = t.inline,
                    l = t.boundary,
                    c = t.skipOverflowHiddenElements,
                    d = "function" == typeof l ? l : function(e) {
                        return e !== l
                    };
                if (!n(e)) throw TypeError("Invalid target");
                for (var f, D, h = document.scrollingElement || document.documentElement, v = [], p = e; n(p) && d(p);) {
                    if ((p = null == (D = (f = p).parentElement) ? f.getRootNode().host || null : D) === h) {
                        v.push(p);
                        break
                    }
                    null != p && p === document.body && a(p) && !a(document.documentElement) || null != p && a(p, c) && v.push(p)
                }
                for (var C = r.visualViewport ? r.visualViewport.width : innerWidth, g = r.visualViewport ? r.visualViewport.height : innerHeight, B = window.scrollX || pageXOffset, E = window.scrollY || pageYOffset, m = e.getBoundingClientRect(), A = m.height, F = m.width, b = m.top, y = m.right, w = m.bottom, O = m.left, x = "start" === i || "nearest" === i ? b : "end" === i ? w : b + A / 2, k = "center" === s ? O + F / 2 : "end" === s ? y : O, P = [], R = 0; R < v.length; R++) {
                    var S = v[R],
                        T = S.getBoundingClientRect(),
                        j = T.height,
                        N = T.width,
                        M = T.top,
                        z = T.right,
                        W = T.bottom,
                        _ = T.left;
                    if ("if-needed" === u && b >= 0 && O >= 0 && w <= g && y <= C && b >= M && w <= W && O >= _ && y <= z) break;
                    var L = getComputedStyle(S),
                        I = parseInt(L.borderLeftWidth, 10),
                        q = parseInt(L.borderTopWidth, 10),
                        V = parseInt(L.borderRightWidth, 10),
                        H = parseInt(L.borderBottomWidth, 10),
                        K = 0,
                        U = 0,
                        $ = "offsetWidth" in S ? S.offsetWidth - S.clientWidth - I - V : 0,
                        X = "offsetHeight" in S ? S.offsetHeight - S.clientHeight - q - H : 0,
                        J = "offsetWidth" in S ? 0 === S.offsetWidth ? 0 : N / S.offsetWidth : 0,
                        Y = "offsetHeight" in S ? 0 === S.offsetHeight ? 0 : j / S.offsetHeight : 0;
                    if (h === S) K = "start" === i ? x : "end" === i ? x - g : "nearest" === i ? o(E, E + g, g, q, H, E + x, E + x + A, A) : x - g / 2, U = "start" === s ? k : "center" === s ? k - C / 2 : "end" === s ? k - C : o(B, B + C, C, I, V, B + k, B + k + F, F), K = Math.max(0, K + E), U = Math.max(0, U + B);
                    else {
                        K = "start" === i ? x - M - q : "end" === i ? x - W + H + X : "nearest" === i ? o(M, W, j, q, H + X, x, x + A, A) : x - (M + j / 2) + X / 2, U = "start" === s ? k - _ - I : "center" === s ? k - (_ + N / 2) + $ / 2 : "end" === s ? k - z + V + $ : o(_, z, N, I, V + $, k, k + F, F);
                        var G = S.scrollLeft,
                            Z = S.scrollTop;
                        x += Z - (K = Math.max(0, Math.min(Z + K / Y, S.scrollHeight - j / Y + X))), k += G - (U = Math.max(0, Math.min(G + U / J, S.scrollWidth - N / J + $)))
                    }
                    P.push({
                        el: S,
                        top: K,
                        left: U
                    })
                }
                return P
            }
            "use strict";

            function i(e, t) {
                if (e === t) return !0;
                if (null == e || null == t || e.length !== t.length) return !1;
                let n = e.length;
                for (let i = 0; i < n; i++)
                    if (e[i] !== t[i]) return !1;
                return !0
            }

            function r(e) {
                let t = null,
                    n = null;
                return function() {
                    for (var r = arguments.length, s = Array(r), a = 0; a < r; a++) s[a] = arguments[a];
                    return !i(t, s) && (n = e(...s)), t = s, n
                }
            }

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5e3,
                    n = -1,
                    i = null;
                return () => ((null == i || Date.now() >= n) && (n = Date.now() + t, i = e()), i)
            }

            function a(e) {
                for (var t in e) e.hasOwnProperty(t) && delete e[t]
            }
            n.r(t), n.d(t, {
                areArraysShallowlyEqual: function() {
                    return i
                },
                cachedFunction: function() {
                    return r
                },
                promiseThrottle: function() {
                    return s
                },
                clearObject: function() {
                    return a
                }
            }), n("424973"), n("860677"), n("222007")
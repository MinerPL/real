            "use strict";

            function i(e, t, n) {
                let i;
                let a = [],
                    l = function() {
                        for (var s = arguments.length, r = Array(s), u = 0; u < s; u++) r[u] = arguments[u];
                        let o = Date.now();
                        for (null != i && (clearTimeout(i), i = null); a.length > 0 && a[0] <= o;) a.shift();
                        a.length < e ? (a.push(o + t), n(...r)) : i = setTimeout(() => l(...r), a[0] - o)
                    };
                return l
            }
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("424973"), n("222007")
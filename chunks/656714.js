            "use strict";
            n.r(e), n.d(e, {
                isRateLimited: function() {
                    return i
                },
                parseRetryAfterHeader: function() {
                    return r
                },
                updateRateLimits: function() {
                    return a
                }
            }), n("222007");

            function r(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
                    n = parseInt("".concat(t), 10);
                if (!isNaN(n)) return 1e3 * n;
                let r = Date.parse("".concat(t));
                return isNaN(r) ? 6e4 : r - e
            }

            function i(t, e) {
                var n;
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
                return ((n = t)[e] || n.all || 0) > r
            }

            function a(t, e) {
                let {
                    statusCode: n,
                    headers: i
                } = e, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(), s = {
                    ...t
                }, o = i && i["x-sentry-rate-limits"], c = i && i["retry-after"];
                if (o)
                    for (let t of o.trim().split(",")) {
                        let [e, n] = t.split(":", 2), r = parseInt(e, 10), i = (isNaN(r) ? 60 : r) * 1e3;
                        if (n)
                            for (let t of n.split(";")) s[t] = a + i;
                        else s.all = a + i
                    } else c ? s.all = a + r(c, a) : 429 === n && (s.all = a + 6e4);
                return s
            }
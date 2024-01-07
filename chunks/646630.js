            "use strict";
            n.r(t), n.d(t, {
                TIMESTAMP_FORMATS: function() {
                    return s
                },
                DEFAULT_TIMESTAMP_FORMAT: function() {
                    return r
                },
                TIMESTAMP_REGEX: function() {
                    return o
                },
                parseTimestamp: function() {
                    return d
                },
                unparseTimestamp: function() {
                    return c
                }
            });
            var i = n("866227"),
                a = n.n(i),
                l = n("888400");
            let s = {
                    t: e => (0, l.dateFormat)(e, "LT"),
                    T: e => (0, l.dateFormat)(e, "LTS"),
                    d: e => (0, l.dateFormat)(e, "L"),
                    D: e => (0, l.dateFormat)(e, "LL"),
                    f: e => (0, l.dateFormat)(e, "LLL"),
                    F: e => (0, l.dateFormat)(e, "LLLL"),
                    R: e => {
                        let t = a.relativeTimeThreshold("s");
                        a.relativeTimeThreshold("s", 60);
                        let n = a.relativeTimeThreshold("ss");
                        a.relativeTimeThreshold("ss", -1);
                        let i = a.relativeTimeThreshold("m");
                        a.relativeTimeThreshold("m", 60);
                        let l = a(e.toDate()).fromNow();
                        return a.relativeTimeThreshold("s", t), a.relativeTimeThreshold("ss", n), a.relativeTimeThreshold("m", i), l
                    }
                },
                r = "f";
            Object.setPrototypeOf(s, null);
            let u = Object.keys(s).join("|"),
                o = new RegExp("^<t:(-?\\d{1,17})(?::(".concat(u, "))?>"));

            function d(e, t) {
                let n = a(1e3 * Number(e));
                if (!n.isValid()) return null;
                let i = null != t ? s[t] : void 0;
                return null == i && (i = s[r]), {
                    timestamp: e,
                    format: t,
                    parsed: n,
                    full: s.F(n),
                    formatted: i(n)
                }
            }

            function c(e, t) {
                return null != t ? "<t:".concat(e, ":").concat(t, ">") : "<t:".concat(e, ">")
            }
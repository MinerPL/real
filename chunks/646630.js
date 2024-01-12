            "use strict";
            n.r(t), n.d(t, {
                TIMESTAMP_FORMATS: function() {
                    return a
                },
                DEFAULT_TIMESTAMP_FORMAT: function() {
                    return o
                },
                TIMESTAMP_REGEX: function() {
                    return u
                },
                parseTimestamp: function() {
                    return l
                },
                unparseTimestamp: function() {
                    return f
                }
            });
            var s = n("866227"),
                i = n.n(s),
                r = n("888400");
            let a = {
                    t: e => (0, r.dateFormat)(e, "LT"),
                    T: e => (0, r.dateFormat)(e, "LTS"),
                    d: e => (0, r.dateFormat)(e, "L"),
                    D: e => (0, r.dateFormat)(e, "LL"),
                    f: e => (0, r.dateFormat)(e, "LLL"),
                    F: e => (0, r.dateFormat)(e, "LLLL"),
                    R: e => {
                        let t = i.relativeTimeThreshold("s");
                        i.relativeTimeThreshold("s", 60);
                        let n = i.relativeTimeThreshold("ss");
                        i.relativeTimeThreshold("ss", -1);
                        let s = i.relativeTimeThreshold("m");
                        i.relativeTimeThreshold("m", 60);
                        let r = null;
                        try {
                            r = i(e.toDate()).fromNow()
                        } catch (e) {}
                        return i.relativeTimeThreshold("s", t), i.relativeTimeThreshold("ss", n), i.relativeTimeThreshold("m", s), null != r ? r : i(e.toDate()).fromNow()
                    }
                },
                o = "f";
            Object.setPrototypeOf(a, null);
            let d = Object.keys(a).join("|"),
                u = new RegExp("^<t:(-?\\d{1,17})(?::(".concat(d, "))?>"));

            function l(e, t) {
                let n = i(1e3 * Number(e));
                if (!n.isValid()) return null;
                let s = null != t ? a[t] : void 0;
                return null == s && (s = a[o]), {
                    timestamp: e,
                    format: t,
                    parsed: n,
                    full: a.F(n),
                    formatted: s(n)
                }
            }

            function f(e, t) {
                return null != t ? "<t:".concat(e, ":").concat(t, ">") : "<t:".concat(e, ">")
            }
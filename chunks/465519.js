            "use strict";
            a.r(t), a.d(t, {
                getFeaturedExpirationTextColor: function() {
                    return d
                },
                areSecondLevelArraysEqual: function() {
                    return r
                }
            });
            var l = a("866227"),
                n = a.n(l),
                s = a("669491"),
                i = a("886484");
            let d = e => {
                let t = n(e).diff(n(), "s");
                return t <= i.FEATURE_EXPIRES_SECONDS.ONE_DAY ? s.default.colors.TEXT_DANGER : t <= i.FEATURE_EXPIRES_SECONDS.THREE_DAYS ? s.default.colors.TEXT_WARNING : s.default.colors.TEXT_POSITIVE
            };

            function r(e, t) {
                if (e.length !== t.length) return !1;
                for (let a = 0; a < e.length; a++) {
                    let l = e[a],
                        n = t[a];
                    if (l.length !== n.length || !l.some((e, t) => n[t] !== e)) return !1
                }
                return !0
            }
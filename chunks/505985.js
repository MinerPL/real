            "use strict";
            n.r(s), n.d(s, {
                canUseRoleSubscriptionIAP: function() {
                    return f
                }
            }), n("884691"), n("65597");
            var i = n("305961"),
                r = n("773336"),
                o = n("954224"),
                t = n("49111");
            let a = [t.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE];

            function f(e) {
                if (!(0, r.isIOS)()) return !1;
                let s = (0, o.getSystemVersion)();
                if (null == s || -1 === function(e, s) {
                        let n = e.split(".").map(Number),
                            i = s.split(".").map(Number),
                            r = Math.max(n.length, i.length);
                        for (let e = 0; e < r; e++) {
                            var o, t;
                            let s = null !== (o = n[e]) && void 0 !== o ? o : 0,
                                r = null !== (t = i[e]) && void 0 !== t ? t : 0;
                            if (s < r) return -1;
                            if (s > r) return 1
                        }
                        return 0
                    }(s, "13.2")) return !1;
                let n = i.default.getGuild(e);
                if (null == n) return !1;
                let t = a.every(e => n.hasFeature(e));
                return !!t || !1
            }
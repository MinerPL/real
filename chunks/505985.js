            "use strict";
            n.r(t), n.d(t, {
                canUseRoleSubscriptionIAP: function() {
                    return d
                }
            }), n("884691"), n("65597");
            var s = n("305961"),
                i = n("773336"),
                r = n("954224"),
                a = n("49111");
            let o = [a.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE];

            function d(e) {
                if (!(0, i.isIOS)()) return !1;
                let t = (0, r.getSystemVersion)();
                if (null == t || -1 === function(e, t) {
                        let n = e.split(".").map(Number),
                            s = t.split(".").map(Number),
                            i = Math.max(n.length, s.length);
                        for (let e = 0; e < i; e++) {
                            var r, a;
                            let t = null !== (r = n[e]) && void 0 !== r ? r : 0,
                                i = null !== (a = s[e]) && void 0 !== a ? a : 0;
                            if (t < i) return -1;
                            if (t > i) return 1
                        }
                        return 0
                    }(t, "13.2")) return !1;
                let n = s.default.getGuild(e);
                if (null == n) return !1;
                let a = o.every(e => n.hasFeature(e));
                return !!a || !1
            }
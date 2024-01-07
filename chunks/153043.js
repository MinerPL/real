            "use strict";
            n.r(s), n.d(s, {
                isRoleSubscriptionEmoji: function() {
                    return r
                },
                isPurchasableRoleSubscriptionEmoji: function() {
                    return o
                },
                isUnusableRoleSubscriptionEmoji: function() {
                    return t
                }
            });
            var i = n("256941");

            function r(e, s) {
                if ((null == e ? void 0 : e.roles) == null || 0 === e.roles.length || null == s) return !1;
                let n = i.default.getSubscriptionRoles(s);
                return e.roles.some(e => n.has(e))
            }

            function o(e) {
                if ((null == e ? void 0 : e.roles) == null || 0 === e.roles.length || null == e.guildId) return !1;
                let s = i.default.getPurchasableSubscriptionRoles(e.guildId);
                return e.roles.some(e => s.has(e))
            }

            function t(e, s) {
                if ((null == e ? void 0 : e.roles) == null || 0 === e.roles.length || null == e.guildId) return !1;
                if (o(e)) {
                    let n = i.default.getUserSubscriptionRoles(e.guildId),
                        r = e.roles.some(e => n.has(e)),
                        o = s === e.guildId,
                        t = o && i.default.getUserIsAdmin(e.guildId);
                    if (!(r || t)) return !0
                }
                return !1
            }
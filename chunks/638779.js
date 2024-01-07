            "use strict";
            n.r(t), n.d(t, {
                computeHasRoleSubscriptionsInGuild: function() {
                    return u
                },
                default: function() {
                    return o
                }
            }), n("222007");
            var i = n("446674"),
                a = n("271938"),
                l = n("26989"),
                s = n("305961"),
                r = n("49111");

            function u(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == e ? null : l.default.getMember(e, a.default.getId()),
                    [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.default],
                    i = n.getGuild(e);
                if (null == i || null == t || !i.hasFeature(r.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) return !1;
                for (let e of t.roles) {
                    var u;
                    let t = i.getRole(e);
                    if ((null == t ? void 0 : null === (u = t.tags) || void 0 === u ? void 0 : u.subscription_listing_id) != null) return !0
                }
                return !1
            }

            function o(e) {
                let t = (0, i.useStateFromStores)([a.default, l.default], () => null == e ? null : l.default.getMember(e, a.default.getId()));
                return (0, i.useStateFromStores)([s.default], () => u(e, t, [s.default]), [e, t])
            }
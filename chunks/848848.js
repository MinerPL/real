            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                },
                getChannelRoleSubscriptionStatus: function() {
                    return l
                }
            });
            var s = n("446674"),
                i = n("203288"),
                r = n("42203"),
                a = n("957255"),
                o = n("49111");
            let d = {
                needSubscriptionToAccess: !1,
                isSubscriptionGated: !1
            };

            function u(e) {
                return (0, s.useStateFromStoresObject)([r.default, i.default, a.default], () => l(e, r.default, i.default, a.default), [e])
            }

            function l(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.default,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.default,
                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.default,
                    u = t.getChannel(e);
                if (null == u ? void 0 : u.isRoleSubscriptionTemplatePreviewChannel()) return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: !0
                };
                if (null == u || !n.isChannelGated(u.guild_id, u.id)) return d;
                let l = u.isGuildVocal() ? !s.can(o.Permissions.CONNECT, u) : !s.can(o.Permissions.VIEW_CHANNEL, u);
                return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: l
                }
            }
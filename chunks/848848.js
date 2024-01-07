            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                },
                getChannelRoleSubscriptionStatus: function() {
                    return d
                }
            });
            var i = n("446674"),
                a = n("203288"),
                l = n("42203"),
                s = n("957255"),
                r = n("49111");
            let u = {
                needSubscriptionToAccess: !1,
                isSubscriptionGated: !1
            };

            function o(e) {
                return (0, i.useStateFromStoresObject)([l.default, a.default, s.default], () => d(e, l.default, a.default, s.default), [e])
            }

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.default,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.default,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.default,
                    o = t.getChannel(e);
                if (null == o ? void 0 : o.isRoleSubscriptionTemplatePreviewChannel()) return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: !0
                };
                if (null == o || !n.isChannelGated(o.guild_id, o.id)) return u;
                let d = o.isGuildVocal() ? !i.can(r.Permissions.CONNECT, o) : !i.can(r.Permissions.VIEW_CHANNEL, o);
                return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: d
                }
            }
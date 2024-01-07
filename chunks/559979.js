            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                r = n("139375"),
                s = n("419830"),
                a = n("990745"),
                u = n("449008"),
                o = n("432153"),
                d = n("677795"),
                c = n("782340"),
                f = n("856972");

            function E(e) {
                let {
                    channelId: t
                } = e, n = (0, o.useChannelWithTemplateFallback)(t);
                if (null == n) return (0, i.jsx)(i.Fragment, {
                    children: "[".concat(c.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETED_CHANNEL_LABEL, "]")
                });
                let u = n.isMediaChannel() ? a.default : (0, s.getSimpleChannelIconComponent)(n.type);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(l.HiddenVisually, {
                        children: (0, r.default)({
                            channel: n
                        })
                    }), (0, i.jsxs)("div", {
                        "aria-hidden": !0,
                        children: [null != u && (0, i.jsx)(u, {
                            className: f.icon,
                            "aria-hidden": !0
                        }), n.name]
                    })]
                })
            }

            function _(e) {
                switch (e.ref_type) {
                    case d.GuildRoleSubscriptionBenefitTypes.CHANNEL:
                        return (0, i.jsx)(E, {
                            channelId: e.ref_id
                        });
                    case d.GuildRoleSubscriptionBenefitTypes.INTANGIBLE:
                        return e.name;
                    default:
                        (0, u.assertNever)(e)
                }
            }
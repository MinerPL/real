            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("79112"),
                i = n("191814"),
                l = n("755574"),
                r = n("49111"),
                o = n("397336"),
                u = n("782340");

            function d(e) {
                let {
                    subscription: t
                } = e;
                return null == t ? null : t.status === r.SubscriptionStatusTypes.PAST_DUE ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(i.default, {
                        size: 16
                    }), (0, a.jsx)(l.default, {
                        message: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_WARNING,
                        ctaMessage: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_CTA,
                        onClick: () => {
                            s.default.open(r.UserSettingsSections.SUBSCRIPTIONS, o.ROLE_SUBSCRIPTION_SUBSECTION)
                        }
                    })]
                }) : null
            }
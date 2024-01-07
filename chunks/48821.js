            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                i = n("77078"),
                l = n("363025"),
                r = n("963662"),
                o = n("592407"),
                u = n("735201"),
                d = n("427459"),
                c = n("49111"),
                E = n("782340"),
                f = n("557659"),
                _ = e => {
                    let {
                        guild: t
                    } = e, n = t.id, _ = (0, s.useStateFromStores)([u.default], () => u.default.getAppliedGuildBoostsForGuild(t.id));
                    return null == _ || 0 >= (0, d.appliedGuildBoostsRequiredForPerks)(_, n) ? null : (0, a.jsx)(r.default, {
                        guild: t,
                        onDismissed: () => {
                            (0, l.hidePremiumGuildGracePeriodNotice)(n)
                        },
                        onClick: () => {
                            o.default.open(n, c.GuildSettingsSections.GUILD_PREMIUM)
                        },
                        message: E.default.Messages.PREMIUM_GUILD_GRACE_PERIOD_NOTICE,
                        trackingSource: c.ChannelNoticeCtaSources.GRACE_PERIOD_NOTICE,
                        type: c.ChannelNoticeTypes.GUILD_BOOSTING_GRACE_PERIOD,
                        image: f,
                        cta: E.default.Messages.PREMIUM_GUILD_GRACE_PERIOD_NOTICE_BUTTON,
                        ctaColor: i.ButtonColors.PRIMARY
                    })
                }
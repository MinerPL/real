            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("592407"),
                i = n("5667"),
                l = n("58608"),
                r = n("49111"),
                o = n("782340"),
                u = n("992703");

            function d(e) {
                let {
                    guildId: t,
                    markAsDismissed: n
                } = e;
                return (0, a.jsx)("div", {
                    className: u.container,
                    children: (0, a.jsx)(i.default, {
                        header: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_UPSELL_TITLE,
                        content: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_UPSELL_BODY,
                        asset: (0, a.jsx)(l.default, {
                            className: u.video,
                            src: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
                            autoPlay: !0,
                            loop: !0
                        }),
                        buttonCTA: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_UPSELL_CTA,
                        onClick: () => {
                            s.default.open(t, r.GuildSettingsSections.ROLE_SUBSCRIPTIONS, void 0, r.GuildSettingsSubsections.ROLE_SUBSCRIPTION_TIER_TEMPLATE)
                        },
                        secondaryButtonCTA: o.default.Messages.DISMISS,
                        markAsDismissed: n
                    })
                })
            }
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("65597"),
                l = n("151426"),
                r = n("10641"),
                o = n("592407"),
                u = n("305961"),
                d = n("162771"),
                c = n("489622"),
                E = n("599110"),
                f = n("179803"),
                _ = n("49111"),
                h = n("782340");

            function C(e) {
                let {
                    dismissCurrentNotice: t
                } = e, n = (0, i.default)([d.default], () => d.default.getGuildId(), []), C = (0, i.default)([u.default], () => u.default.getGuild(n), [n]);
                return (s.useEffect(() => {
                    (0, r.requestMarkDismissibleContentAsShown)(l.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR)
                }, []), null == C) ? null : (0, a.jsxs)(c.default, {
                    color: c.NoticeColors.DEFAULT,
                    children: [(0, a.jsx)(c.NoticeCloseButton, {
                        onClick: () => {
                            E.default.track(_.AnalyticEvents.UPSELL_CLICKED, {
                                type: l.DismissibleContent[l.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR],
                                action: "dismiss"
                            }), t(), (0, f.dismissedGuildOnboardingUpsell)(C.id, l.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR)
                        }
                    }), h.default.Messages.GUILD_ONBOARDING_NAGBAR_MESSAGE, (0, a.jsx)(c.NoticeButton, {
                        onClick: () => {
                            E.default.track(_.AnalyticEvents.UPSELL_CLICKED, {
                                type: l.DismissibleContent[l.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR],
                                action: "primary"
                            }), o.default.open(C.id, _.GuildSettingsSections.ONBOARDING), (0, f.dismissedGuildOnboardingUpsell)(C.id, l.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR)
                        },
                        children: h.default.Messages.GUILD_ONBOARDING_UPSELL_COACHMARK_CHECK_IT_OUT
                    })]
                })
            }
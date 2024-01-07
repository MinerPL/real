            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var l = a("37983");
            a("884691");
            var n = a("474643"),
                s = a("254490"),
                r = a("412861"),
                o = a("626301"),
                i = a("789946"),
                d = a("646718"),
                u = a("49111"),
                _ = a("782340");

            function f(e) {
                var t;
                let {
                    channel: f,
                    onClose: E,
                    content: c,
                    ...p
                } = e;

                function A() {
                    E(), (0, o.navigateToPremiumMarketingPage)(!0)
                }
                return (0, l.jsx)(i.default, {
                    artURL: a("7115"),
                    type: d.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL,
                    title: _.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_HEADER,
                    body: _.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_BODY.format({
                        maxLength: u.MAX_MESSAGE_LENGTH,
                        onLearnMore: A
                    }),
                    context: _.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT.format({
                        maxLength: u.MAX_MESSAGE_LENGTH
                    }),
                    glowUp: _.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_GLOW_UP.format({
                        onLearnMore: A
                    }),
                    analyticsSource: {
                        page: (null == (t = f) ? void 0 : t.getGuildId()) != null ? u.AnalyticsPages.GUILD_CHANNEL : (null == t ? void 0 : t.isGroupDM()) || (null == t ? void 0 : t.isPrivate()) ? u.AnalyticsPages.DM_CHANNEL : null
                    },
                    analyticsLocation: {
                        section: u.AnalyticsSections.MESSAGE_LENGTH_UPSELL_MODAL,
                        object: u.AnalyticsObjects.BUTTON_CTA
                    },
                    onClose: E,
                    secondaryCTA: _.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_UPLOAD,
                    onSecondaryClick: function() {
                        E();
                        let e = new Blob([c], {
                            type: "text/plain"
                        });
                        (0, r.promptToUpload)([(0, s.makeFile)(e, "message.txt")], f, n.DraftType.ChannelMessage, {
                            requireConfirm: !0,
                            showLargeMessageDialog: !0
                        })
                    },
                    ...p
                })
            }
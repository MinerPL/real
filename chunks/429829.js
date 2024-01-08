            "use strict";
            n.r(t), n.d(t, {
                CustomCallSoundUpsell: function() {
                    return T
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("271841"),
                i = n("605451"),
                r = n("577776"),
                u = n("77078"),
                o = n("79112"),
                d = n("635956"),
                c = n("632892"),
                f = n("697218"),
                h = n("945330"),
                p = n("216422"),
                m = n("719923"),
                E = n("49111"),
                C = n("994428"),
                g = n("646718"),
                S = n("397336"),
                _ = n("782340"),
                I = n("948197");

            function T(e) {
                var t;
                let {
                    onClose: n,
                    markAsDismissed: T
                } = e, v = (0, l.useStateFromStores)([f.default], () => f.default.getCurrentUser());
                let x = (t = null == v ? void 0 : v.premiumType) === g.PremiumTypes.TIER_2 ? _.default.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_TIER_2 : null == t ? _.default.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_NON_SUB : _.default.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_NON_TIER_2,
                    N = m.default.canUseCustomCallSounds(v);
                return (0, a.jsxs)(c.default, {
                    isShown: !0,
                    type: c.FeatureBorderTypes.PREMIUM,
                    className: I.upsellOuter,
                    backgroundClassName: I.upsellInner,
                    children: [null != T ? (0, a.jsx)(u.Clickable, {
                        className: I.close,
                        onClick: () => null == T ? void 0 : T(C.ContentDismissActionType.DISMISS),
                        "aria-label": _.default.Messages.CLOSE,
                        children: (0, a.jsx)(h.default, {
                            className: I.closeIcon,
                            width: 16,
                            height: 16
                        })
                    }) : null, (0, a.jsxs)("div", {
                        className: I.upsellTitle,
                        children: [(0, a.jsx)(p.default, {
                            className: I.nitroWheel,
                            width: 18,
                            height: 18
                        }), (0, a.jsx)(i.Heading, {
                            variant: "heading-sm/bold",
                            children: _.default.Messages.CALL_SOUNDS_UPSELL_TITLE_NON_SUB
                        })]
                    }), (0, a.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        children: x
                    }), N ? (0, a.jsx)(s.Button, {
                        onClick: function() {
                            o.default.open(E.UserSettingsSections.VOICE, S.SOUNDBOARD_SUBSECTION), null == n || n(), null == T || T(C.ContentDismissActionType.PRIMARY)
                        },
                        children: _.default.Messages.CHECK_IT_OUT
                    }) : (0, a.jsx)(d.default, {
                        buttonText: _.default.Messages.PREMIUM_UPSELL_GET_NITRO,
                        subscriptionTier: g.PremiumSubscriptionSKUs.TIER_2,
                        premiumModalAnalyticsLocation: {
                            section: E.AnalyticsSections.SOUNDBOARD_SOUND_PICKER,
                            object: E.AnalyticsObjects.BUTTON_CTA
                        },
                        color: s.Button.Colors.GREEN,
                        onSubscribeModalClose: () => null == T ? void 0 : T(C.ContentDismissActionType.PRIMARY)
                    })]
                })
            }
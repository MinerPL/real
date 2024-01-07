            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414055"),
                o = n("819855"),
                s = n("206625"),
                a = n("841098"),
                u = n("812204"),
                d = n("685665"),
                c = n("166960"),
                f = n("488705"),
                p = n("551305"),
                m = n("433328"),
                h = n("599110"),
                E = n("49111"),
                S = n("646718"),
                g = n("782340"),
                C = n("537461"),
                T = i.memo(function(e) {
                    let {
                        disabled: t,
                        referralsRemaining: n,
                        channel: T,
                        isResending: v
                    } = e, {
                        enabled: y
                    } = c.default.useExperiment({
                        location: "ec41f5_1"
                    }, {
                        autoTrackExposure: !0
                    }), x = y ? g.default.Messages.SHARE_NITRO_BIRTHDAY_TOOLTIP.format() : v ? g.default.Messages.SHARE_NITRO_RESEND_TOOLTIP : g.default.Messages.SHARE_NITRO_TOOLTIP, I = y ? g.default.Messages.SHARE_NITRO_BIRTHDAY_TOOLTIP_UNFORMATTED : null, [N, _] = i.useState(!1), [A, R] = i.useState(!1), O = (0, s.default)(null, () => R(!1)), {
                        analyticsLocations: M
                    } = (0, d.default)(u.default.REFERRAL_TRIALS_COMPOSER_BUTTON), k = T.isDM() && void 0 !== T.recipients ? T.recipients[0] : null, b = (0, a.default)();
                    return t ? null : (0, l.jsxs)("div", {
                        ref: O,
                        className: C.buttonContainer,
                        children: [(0, l.jsx)(f.default, {
                            shouldShowPopout: A,
                            referralsRemaining: n,
                            channel: T,
                            onClose: () => R(!1),
                            isResending: v
                        }), (0, l.jsx)(r.Tooltip, {
                            text: x,
                            shouldShow: !A,
                            "aria-label": null != I ? I : x,
                            children: e => (0, l.jsx)("div", {
                                onMouseEnter: () => {
                                    !A && !N && (_(!0), h.default.track(E.AnalyticEvents.SHARE_NITRO_FLOW_STEPS, {
                                        location_stack: M,
                                        step: S.ReferralTrialsAnalyticSteps.BADGE_TOOLTIP_VIEWED,
                                        other_user_id: Number(k)
                                    }))
                                },
                                onMouseLeave: () => {
                                    _(!1)
                                },
                                children: (0, l.jsx)(p.default, {
                                    ...e,
                                    innerClassName: C.button,
                                    isActive: A,
                                    "aria-label": null != I ? I : x,
                                    "aria-haspopup": "dialog",
                                    onClick: () => {
                                        R(e => !e), h.default.track(E.AnalyticEvents.SHARE_NITRO_FLOW_STEPS, {
                                            location_stack: M,
                                            step: S.ReferralTrialsAnalyticSteps.BADGE_CLICKED,
                                            other_user_id: Number(k)
                                        })
                                    },
                                    children: (0, l.jsx)(m.default, {
                                        referralsRemaining: n,
                                        hovered: N,
                                        isResending: v,
                                        shouldShowBirthdayUX: y,
                                        isLightTheme: (0, o.isThemeLight)(b)
                                    })
                                })
                            })
                        })]
                    })
                })
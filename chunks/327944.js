            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return x
                }
            });
            var s = t("37983"),
                n = t("884691"),
                l = t("414456"),
                d = t.n(l),
                i = t("65597"),
                o = t("877585"),
                c = t("77078"),
                r = t("251144"),
                u = t("20662"),
                E = t("277734"),
                N = t("764828"),
                R = t("844911"),
                T = t("782340"),
                _ = t("657792"),
                A = t("677841");

            function f() {
                return (0, s.jsxs)("div", {
                    className: d(A.toast, _.toast),
                    children: [(0, s.jsx)(o.ShieldIcon, {
                        color: c.tokens.colors.TEXT_BRAND
                    }), (0, s.jsx)(c.Text, {
                        className: A.content,
                        color: "header-primary",
                        variant: "text-md/normal",
                        children: T.default.Messages.STRANGER_DANGER_FEEDBACK_CONFIRM
                    })]
                })
            }

            function x(e) {
                let {
                    channelId: a,
                    warningId: t,
                    senderId: l
                } = e, o = (0, i.default)([N.default], () => N.default.getChannelSafetyWarning(a, t)), A = n.useMemo(() => (null == o ? void 0 : o.feedback_type) === N.SafetyWarningFeedbackTypes.UPVOTE, [o]), x = n.useMemo(() => (null == o ? void 0 : o.feedback_type) === N.SafetyWarningFeedbackTypes.DOWNVOTE, [o]), m = n.useCallback((e, n) => {
                    (null == o ? void 0 : o.feedback_type) !== e && ((0, E.setChannelSafetyWarningFeedback)(a, t, e), (0, c.showToast)((0, c.createToast)(T.default.Messages.STRANGER_DANGER_FEEDBACK_CONFIRM, c.ToastType.CUSTOM, {
                        component: (0, s.jsx)(f, {})
                    })), (0, R.trackCtaEvent)({
                        channelId: a,
                        warningId: t,
                        senderId: l,
                        cta: n
                    }))
                }, [o, a, t, l]);
                return (0, s.jsxs)("div", {
                    className: _.feedback,
                    children: [(0, s.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        color: "text-normal",
                        children: T.default.Messages.STRANGER_DANGER_WAS_THIS_HELPFUL
                    }), (0, s.jsxs)("div", {
                        className: _.buttonsContainer,
                        children: [(0, s.jsx)(c.Clickable, {
                            className: d([_.buttonsBackground, A ? _.buttonsBackgroundActive : _.buttonsBackgroundInactive, {
                                [_.disabled]: A
                            }]),
                            onClick: () => m(N.SafetyWarningFeedbackTypes.UPVOTE, R.CtaEventTypes.FEEDBACK_UPVOTE),
                            "aria-label": T.default.Messages.STRANGER_DANGER_THUMBS_UP_A11Y,
                            children: (0, s.jsx)(u.default, {
                                className: _.buttonIcon,
                                color: "interactive-normal"
                            })
                        }), (0, s.jsx)(c.Clickable, {
                            className: d([_.buttonsBackground, x ? _.buttonsBackgroundActive : _.buttonsBackgroundInactive, {
                                [_.disabled]: x
                            }]),
                            onClick: () => m(N.SafetyWarningFeedbackTypes.DOWNVOTE, R.CtaEventTypes.FEEDBACK_DOWNVOTE),
                            "aria-label": T.default.Messages.STRANGER_DANGER_THUMBS_DOWN_A11Y,
                            children: (0, s.jsx)(r.default, {
                                className: _.buttonIcon,
                                color: "interactive-normal"
                            })
                        })]
                    })]
                })
            }
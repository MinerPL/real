(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["20132"], {
        917500: function(e, a, t) {
            "use strict";
            e.exports = t.p + "0e2d1c2de9e9f557d79e.jpg"
        },
        664639: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return f
                }
            });
            var s = t("37983"),
                n = t("884691"),
                l = t("432710"),
                d = t("65597"),
                i = t("77078"),
                o = t("519705"),
                r = t("155084"),
                c = t("282109"),
                u = t("945330"),
                E = t("898260"),
                N = t("844911"),
                R = t("327944"),
                T = t("964974"),
                _ = t("49111"),
                A = t("782340"),
                x = t("572266");

            function f(e) {
                let {
                    transitionState: a,
                    onClose: t,
                    handleBlock: f,
                    channelId: h,
                    warningId: m,
                    senderId: S
                } = e, M = () => {
                    t()
                }, v = (0, T.getSafetyTips)();
                n.useEffect(() => {
                    (0, N.trackViewedEvent)(_.AnalyticEvents.SAFETY_WARNING_MODAL_VIEWED, {
                        channelId: h,
                        warningId: m,
                        senderId: S
                    }), r.default.increment({
                        name: l.MetricEvents.SAFETY_WARNING_MODAL_VIEW
                    })
                }, [h, m, S]);
                let C = (0, d.default)([c.default], () => c.default.isChannelMuted(null, h));
                return (0, s.jsx)(i.ModalRoot, {
                    transitionState: a,
                    children: (0, s.jsxs)(i.Scroller, {
                        style: {
                            overflow: "hidden auto"
                        },
                        children: [(0, s.jsxs)(i.ModalHeader, {
                            className: x.modalHeader,
                            children: [(0, s.jsxs)("div", {
                                className: x.modalHeaderText,
                                children: [(0, s.jsx)(i.Text, {
                                    variant: "eyebrow",
                                    color: "status-positive-text",
                                    children: A.default.Messages.STRANGER_DANGER_TIPS_HEADER
                                }), (0, s.jsx)(i.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "status-positive-text",
                                    children: A.default.Messages.STRANGER_DANGER_TIPS_DESCRIPTION
                                })]
                            }), (0, s.jsx)(i.Button, {
                                "aria-label": A.default.Messages.CLOSE,
                                look: i.Button.Looks.BLANK,
                                size: i.Button.Sizes.NONE,
                                onClick: t,
                                innerClassName: x.closeButtonInner,
                                className: x.closeButton,
                                children: (0, s.jsx)(u.default, {
                                    width: 18,
                                    height: 18,
                                    className: x.closeIcon
                                })
                            })]
                        }), (0, s.jsxs)(i.ModalContent, {
                            className: x.modalContent,
                            children: [(0, s.jsx)("div", {
                                className: x.tipsSection,
                                children: v.map((e, a) => (0, s.jsxs)("div", {
                                    className: x.tipRow,
                                    children: [(0, s.jsx)(i.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "text-brand",
                                        className: x.tipNumber,
                                        children: a + 1
                                    }), (0, s.jsx)(i.Text, {
                                        variant: "text-sm/medium",
                                        color: "header-secondary",
                                        children: e
                                    })]
                                }, a))
                            }), (0, s.jsxs)("div", {
                                children: [(0, s.jsx)(i.Text, {
                                    className: x.moreHeading,
                                    variant: "eyebrow",
                                    color: "header-secondary",
                                    children: A.default.Messages.STRANGER_DANGER_MORE_HEADER
                                }), (0, s.jsxs)("div", {
                                    className: x.tipsSection,
                                    children: [(0, s.jsxs)("div", {
                                        className: x.safetyAction,
                                        children: [(0, s.jsxs)("div", {
                                            className: x.safetyActionText,
                                            children: [(0, s.jsx)(i.Text, {
                                                variant: "text-md/semibold",
                                                color: "header-primary",
                                                children: A.default.Messages.STRANGER_DANGER_MORE_MUTE
                                            }), (0, s.jsx)(i.Text, {
                                                variant: "text-xs/medium",
                                                color: "header-secondary",
                                                children: A.default.Messages.STRANGER_DANGER_MORE_MUTE_DESCRIPTION
                                            })]
                                        }), (0, s.jsx)(i.Button, {
                                            size: i.Button.Sizes.SMALL,
                                            color: i.Button.Colors.PRIMARY,
                                            "aria-label": A.default.Messages.STRANGER_DANGER_MORE_MUTE,
                                            onClick: C ? () => {
                                                o.default.updateChannelOverrideSettings(null, h, {
                                                    muted: !1
                                                }), (0, i.showToast)((0, i.createToast)(A.default.Messages.STRANGER_DANGER_UNMUTE_CONFIRM, i.ToastType.SUCCESS)), (0, N.trackCtaEvent)({
                                                    channelId: h,
                                                    warningId: m,
                                                    senderId: S,
                                                    cta: N.CtaEventTypes.USER_MODAL_UNMUTE
                                                })
                                            } : () => {
                                                o.default.updateChannelOverrideSettings(null, h, {
                                                    muted: !0
                                                }), (0, i.showToast)((0, i.createToast)(A.default.Messages.STRANGER_DANGER_MUTE_CONFIRM, i.ToastType.SUCCESS)), (0, N.trackCtaEvent)({
                                                    channelId: h,
                                                    warningId: m,
                                                    senderId: S,
                                                    cta: N.CtaEventTypes.USER_MODAL_MUTE
                                                })
                                            },
                                            children: C ? A.default.Messages.STRANGER_DANGER_MORE_UNMUTE : A.default.Messages.STRANGER_DANGER_MORE_MUTE
                                        })]
                                    }), (0, s.jsx)(E.default, {}), (0, s.jsxs)("div", {
                                        className: x.safetyAction,
                                        children: [(0, s.jsxs)("div", {
                                            className: x.safetyActionText,
                                            children: [(0, s.jsx)(i.Text, {
                                                variant: "text-md/semibold",
                                                color: "header-primary",
                                                children: A.default.Messages.STRANGER_DANGER_MORE_BLOCK
                                            }), (0, s.jsx)(i.Text, {
                                                variant: "text-xs/medium",
                                                color: "header-secondary",
                                                children: A.default.Messages.STRANGER_DANGER_MORE_BLOCK_DESCRIPTION
                                            })]
                                        }), (0, s.jsx)(i.Button, {
                                            size: i.Button.Sizes.SMALL,
                                            color: i.Button.Colors.RED,
                                            "aria-label": A.default.Messages.STRANGER_DANGER_BANNER_BLOCK,
                                            onClick: () => {
                                                M(), f()
                                            },
                                            children: A.default.Messages.STRANGER_DANGER_BANNER_BLOCK
                                        })]
                                    })]
                                })]
                            }), (0, s.jsx)(R.default, {
                                channelId: h,
                                warningId: m,
                                senderId: S
                            })]
                        })]
                    })
                })
            }
        },
        327944: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return f
                }
            });
            var s = t("37983"),
                n = t("884691"),
                l = t("414456"),
                d = t.n(l),
                i = t("65597"),
                o = t("877585"),
                r = t("77078"),
                c = t("251144"),
                u = t("20662"),
                E = t("277734"),
                N = t("764828"),
                R = t("844911"),
                T = t("782340"),
                _ = t("657792"),
                A = t("677841");

            function x() {
                return (0, s.jsxs)("div", {
                    className: d(A.toast, _.toast),
                    children: [(0, s.jsx)(o.ShieldIcon, {
                        color: r.tokens.colors.TEXT_BRAND
                    }), (0, s.jsx)(r.Text, {
                        className: A.content,
                        color: "header-primary",
                        variant: "text-md/normal",
                        children: T.default.Messages.STRANGER_DANGER_FEEDBACK_CONFIRM
                    })]
                })
            }

            function f(e) {
                let {
                    channelId: a,
                    warningId: t,
                    senderId: l
                } = e, o = (0, i.default)([N.default], () => N.default.getChannelSafetyWarning(a, t)), A = n.useMemo(() => (null == o ? void 0 : o.feedback_type) === N.SafetyWarningFeedbackTypes.UPVOTE, [o]), f = n.useMemo(() => (null == o ? void 0 : o.feedback_type) === N.SafetyWarningFeedbackTypes.DOWNVOTE, [o]), h = n.useCallback((e, n) => {
                    (null == o ? void 0 : o.feedback_type) !== e && ((0, E.setChannelSafetyWarningFeedback)(a, t, e), (0, r.showToast)((0, r.createToast)(T.default.Messages.STRANGER_DANGER_FEEDBACK_CONFIRM, r.ToastType.CUSTOM, {
                        component: (0, s.jsx)(x, {})
                    })), (0, R.trackCtaEvent)({
                        channelId: a,
                        warningId: t,
                        senderId: l,
                        cta: n
                    }))
                }, [o, a, t, l]);
                return (0, s.jsxs)("div", {
                    className: _.feedback,
                    children: [(0, s.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        color: "text-normal",
                        children: T.default.Messages.STRANGER_DANGER_WAS_THIS_HELPFUL
                    }), (0, s.jsxs)("div", {
                        className: _.buttonsContainer,
                        children: [(0, s.jsx)(r.Clickable, {
                            className: d([_.buttonsBackground, A ? _.buttonsBackgroundActive : _.buttonsBackgroundInactive, {
                                [_.disabled]: A
                            }]),
                            onClick: () => h(N.SafetyWarningFeedbackTypes.UPVOTE, R.CtaEventTypes.FEEDBACK_UPVOTE),
                            "aria-label": T.default.Messages.STRANGER_DANGER_THUMBS_UP_A11Y,
                            children: (0, s.jsx)(u.default, {
                                className: _.buttonIcon,
                                color: "interactive-normal"
                            })
                        }), (0, s.jsx)(r.Clickable, {
                            className: d([_.buttonsBackground, f ? _.buttonsBackgroundActive : _.buttonsBackgroundInactive, {
                                [_.disabled]: f
                            }]),
                            onClick: () => h(N.SafetyWarningFeedbackTypes.DOWNVOTE, R.CtaEventTypes.FEEDBACK_DOWNVOTE),
                            "aria-label": T.default.Messages.STRANGER_DANGER_THUMBS_DOWN_A11Y,
                            children: (0, s.jsx)(c.default, {
                                className: _.buttonIcon,
                                color: "interactive-normal"
                            })
                        })]
                    })]
                })
            }
        }
    }
]);
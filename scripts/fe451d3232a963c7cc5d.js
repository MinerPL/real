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
                    return _
                }
            });
            var s = t("37983"),
                n = t("884691"),
                l = t("65597"),
                d = t("77078"),
                i = t("519705"),
                c = t("282109"),
                r = t("898260"),
                o = t("844911"),
                u = t("327944"),
                E = t("964974"),
                R = t("49111"),
                N = t("782340"),
                T = t("572266");

            function _(e) {
                let {
                    transitionState: a,
                    onClose: t,
                    handleBlock: _,
                    channelId: A,
                    warningId: x,
                    senderId: f
                } = e, m = () => {
                    t()
                }, M = (0, E.getSafetyTips)();
                n.useEffect(() => {
                    (0, o.trackViewedEvent)(R.AnalyticEvents.SAFETY_WARNING_MODAL_VIEWED, {
                        channelId: A,
                        warningId: x,
                        senderId: f
                    })
                }, [A, x, f]);
                let h = (0, l.default)([c.default], () => c.default.isChannelMuted(null, A));
                return (0, s.jsxs)(d.ModalRoot, {
                    transitionState: a,
                    children: [(0, s.jsxs)(d.ModalHeader, {
                        className: T.modalHeader,
                        children: [(0, s.jsxs)("div", {
                            className: T.modalHeaderText,
                            children: [(0, s.jsx)(d.Text, {
                                variant: "eyebrow",
                                color: "status-positive-text",
                                children: N.default.Messages.STRANGER_DANGER_TIPS_HEADER
                            }), (0, s.jsx)(d.Heading, {
                                variant: "heading-xl/bold",
                                color: "status-positive-text",
                                children: N.default.Messages.STRANGER_DANGER_TIPS_DESCRIPTION
                            })]
                        }), (0, s.jsx)(d.ModalCloseButton, {
                            withCircleBackground: !0,
                            onClick: m,
                            className: T.closeButton
                        })]
                    }), (0, s.jsxs)(d.ModalContent, {
                        className: T.modalContent,
                        children: [(0, s.jsx)("div", {
                            className: T.tipsSection,
                            children: M.map((e, a) => (0, s.jsxs)("div", {
                                className: T.tipRow,
                                children: [(0, s.jsx)(d.Heading, {
                                    variant: "heading-md/semibold",
                                    color: "text-brand",
                                    className: T.tipNumber,
                                    children: a + 1
                                }), (0, s.jsx)(d.Text, {
                                    variant: "text-sm/medium",
                                    color: "header-secondary",
                                    children: e
                                })]
                            }, a))
                        }), (0, s.jsxs)("div", {
                            children: [(0, s.jsx)(d.Text, {
                                className: T.moreHeading,
                                variant: "eyebrow",
                                color: "header-secondary",
                                children: N.default.Messages.STRANGER_DANGER_MORE_HEADER
                            }), (0, s.jsxs)("div", {
                                className: T.tipsSection,
                                children: [(0, s.jsxs)("div", {
                                    className: T.safetyAction,
                                    children: [(0, s.jsxs)("div", {
                                        className: T.safetyActionText,
                                        children: [(0, s.jsx)(d.Text, {
                                            variant: "text-md/semibold",
                                            color: "header-primary",
                                            children: N.default.Messages.STRANGER_DANGER_MORE_MUTE
                                        }), (0, s.jsx)(d.Text, {
                                            variant: "text-xs/medium",
                                            color: "header-secondary",
                                            children: N.default.Messages.STRANGER_DANGER_MORE_MUTE_DESCRIPTION
                                        })]
                                    }), (0, s.jsx)(d.Button, {
                                        size: d.Button.Sizes.SMALL,
                                        color: d.Button.Colors.PRIMARY,
                                        "aria-label": N.default.Messages.STRANGER_DANGER_MORE_MUTE,
                                        onClick: h ? () => {
                                            i.default.updateChannelOverrideSettings(null, A, {
                                                muted: !1
                                            }), (0, d.showToast)((0, d.createToast)(N.default.Messages.STRANGER_DANGER_UNMUTE_CONFIRM, d.ToastType.SUCCESS)), (0, o.trackCtaEvent)({
                                                channelId: A,
                                                warningId: x,
                                                senderId: f,
                                                cta: o.CtaEventTypes.USER_MODAL_UNMUTE
                                            })
                                        } : () => {
                                            i.default.updateChannelOverrideSettings(null, A, {
                                                muted: !0
                                            }), (0, d.showToast)((0, d.createToast)(N.default.Messages.STRANGER_DANGER_MUTE_CONFIRM, d.ToastType.SUCCESS)), (0, o.trackCtaEvent)({
                                                channelId: A,
                                                warningId: x,
                                                senderId: f,
                                                cta: o.CtaEventTypes.USER_MODAL_MUTE
                                            })
                                        },
                                        children: h ? N.default.Messages.STRANGER_DANGER_MORE_UNMUTE : N.default.Messages.STRANGER_DANGER_MORE_MUTE
                                    })]
                                }), (0, s.jsx)(r.default, {}), (0, s.jsxs)("div", {
                                    className: T.safetyAction,
                                    children: [(0, s.jsxs)("div", {
                                        className: T.safetyActionText,
                                        children: [(0, s.jsx)(d.Text, {
                                            variant: "text-md/semibold",
                                            color: "header-primary",
                                            children: N.default.Messages.STRANGER_DANGER_MORE_BLOCK
                                        }), (0, s.jsx)(d.Text, {
                                            variant: "text-xs/medium",
                                            color: "header-secondary",
                                            children: N.default.Messages.STRANGER_DANGER_MORE_BLOCK_DESCRIPTION
                                        })]
                                    }), (0, s.jsx)(d.Button, {
                                        size: d.Button.Sizes.SMALL,
                                        color: d.Button.Colors.RED,
                                        "aria-label": N.default.Messages.STRANGER_DANGER_BANNER_BLOCK,
                                        onClick: () => {
                                            m(), _()
                                        },
                                        children: N.default.Messages.STRANGER_DANGER_BANNER_BLOCK
                                    })]
                                })]
                            })]
                        }), (0, s.jsx)(u.default, {
                            channelId: A,
                            warningId: x,
                            senderId: f
                        })]
                    })]
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
                c = t("877585"),
                r = t("77078"),
                o = t("251144"),
                u = t("20662"),
                E = t("277734"),
                R = t("764828"),
                N = t("844911"),
                T = t("782340"),
                _ = t("657792"),
                A = t("677841");

            function x() {
                return (0, s.jsxs)("div", {
                    className: d(A.toast, _.toast),
                    children: [(0, s.jsx)(c.ShieldIcon, {
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
                } = e, c = (0, i.default)([R.default], () => R.default.getChannelSafetyWarning(a, t)), A = n.useMemo(() => (null == c ? void 0 : c.feedback_type) === R.SafetyWarningFeedbackTypes.UPVOTE, [c]), f = n.useMemo(() => (null == c ? void 0 : c.feedback_type) === R.SafetyWarningFeedbackTypes.DOWNVOTE, [c]), m = n.useCallback((e, n) => {
                    (null == c ? void 0 : c.feedback_type) !== e && ((0, E.setChannelSafetyWarningFeedback)(a, t, e), (0, r.showToast)((0, r.createToast)(T.default.Messages.STRANGER_DANGER_FEEDBACK_CONFIRM, r.ToastType.CUSTOM, {
                        component: (0, s.jsx)(x, {})
                    })), (0, N.trackCtaEvent)({
                        channelId: a,
                        warningId: t,
                        senderId: l,
                        cta: n
                    }))
                }, [c, a, t, l]);
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
                            onClick: () => m(R.SafetyWarningFeedbackTypes.UPVOTE, N.CtaEventTypes.FEEDBACK_UPVOTE),
                            "aria-label": T.default.Messages.STRANGER_DANGER_THUMBS_UP_A11Y,
                            children: (0, s.jsx)(u.default, {
                                className: _.buttonIcon,
                                color: "interactive-normal"
                            })
                        }), (0, s.jsx)(r.Clickable, {
                            className: d([_.buttonsBackground, f ? _.buttonsBackgroundActive : _.buttonsBackgroundInactive, {
                                [_.disabled]: f
                            }]),
                            onClick: () => m(R.SafetyWarningFeedbackTypes.DOWNVOTE, N.CtaEventTypes.FEEDBACK_DOWNVOTE),
                            "aria-label": T.default.Messages.STRANGER_DANGER_THUMBS_DOWN_A11Y,
                            children: (0, s.jsx)(o.default, {
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
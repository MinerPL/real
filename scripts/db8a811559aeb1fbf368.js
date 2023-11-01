(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["20132"], {
        80426: function(e, a, t) {
            "use strict";
            e.exports = t.p + "d39437f043f4b24db4bf.png"
        },
        142053: function(e, a, t) {
            "use strict";
            e.exports = t.p + "fbef539d0f7401c2bf4e.png"
        },
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
                    channelId: x,
                    warningId: A,
                    senderId: f
                } = e, m = () => {
                    t()
                }, M = (0, E.getSafetyTips)();
                n.useEffect(() => {
                    (0, o.trackViewedEvent)(R.AnalyticEvents.SAFETY_WARNING_MODAL_VIEWED, {
                        channelId: x,
                        warningId: A,
                        senderId: f
                    })
                }, [x, A, f]);
                let h = (0, l.default)([c.default], () => c.default.isChannelMuted(null, x));
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
                                            i.default.updateChannelOverrideSettings(null, x, {
                                                muted: !1
                                            }), (0, d.showToast)((0, d.createToast)(N.default.Messages.STRANGER_DANGER_UNMUTE_CONFIRM, d.ToastType.SUCCESS)), (0, o.trackCtaEvent)({
                                                channelId: x,
                                                warningId: A,
                                                senderId: f,
                                                cta: o.CtaEventTypes.USER_MODAL_UNMUTE
                                            })
                                        } : () => {
                                            i.default.updateChannelOverrideSettings(null, x, {
                                                muted: !0
                                            }), (0, d.showToast)((0, d.createToast)(N.default.Messages.STRANGER_DANGER_MUTE_CONFIRM, d.ToastType.SUCCESS)), (0, o.trackCtaEvent)({
                                                channelId: x,
                                                warningId: A,
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
                            channelId: x,
                            warningId: A,
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
                o = t("277734"),
                u = t("764828"),
                E = t("844911"),
                R = t("782340"),
                N = t("657792"),
                T = t("677841"),
                _ = t("80426"),
                x = t("142053");

            function A() {
                return (0, s.jsxs)("div", {
                    className: d(T.toast, N.toast),
                    children: [(0, s.jsx)(c.ShieldIcon, {
                        color: r.tokens.colors.TEXT_BRAND
                    }), (0, s.jsx)(r.Text, {
                        className: T.content,
                        color: "header-primary",
                        variant: "text-md/normal",
                        children: R.default.Messages.STRANGER_DANGER_FEEDBACK_CONFIRM
                    })]
                })
            }

            function f(e) {
                let {
                    channelId: a,
                    warningId: t,
                    senderId: l
                } = e, c = (0, i.default)([u.default], () => u.default.getChannelSafetyWarning(a, t)), T = n.useMemo(() => (null == c ? void 0 : c.feedback_type) === u.SafetyWarningFeedbackTypes.UPVOTE, [c]), f = n.useMemo(() => (null == c ? void 0 : c.feedback_type) === u.SafetyWarningFeedbackTypes.DOWNVOTE, [c]), m = n.useCallback((e, n) => {
                    (null == c ? void 0 : c.feedback_type) !== e && ((0, o.setChannelSafetyWarningFeedback)(a, t, e), (0, r.showToast)((0, r.createToast)(R.default.Messages.STRANGER_DANGER_FEEDBACK_CONFIRM, r.ToastType.CUSTOM, {
                        component: (0, s.jsx)(A, {})
                    })), (0, E.trackCtaEvent)({
                        channelId: a,
                        warningId: t,
                        senderId: l,
                        cta: n
                    }))
                }, [c, a, t, l]);
                return (0, s.jsxs)("div", {
                    className: N.feedback,
                    children: [(0, s.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        color: "text-normal",
                        children: R.default.Messages.STRANGER_DANGER_WAS_THIS_HELPFUL
                    }), (0, s.jsxs)("div", {
                        className: N.buttonsContainer,
                        children: [(0, s.jsx)(r.Clickable, {
                            className: d([N.buttonsBackground, T ? N.buttonsBackgroundActive : N.buttonsBackgroundInactive, {
                                [N.disabled]: T
                            }]),
                            onClick: () => m(u.SafetyWarningFeedbackTypes.UPVOTE, E.CtaEventTypes.FEEDBACK_UPVOTE),
                            "aria-label": R.default.Messages.STRANGER_DANGER_THUMBS_UP_A11Y,
                            children: (0, s.jsx)("img", {
                                className: N.buttonIcon,
                                src: x,
                                alt: ""
                            })
                        }), (0, s.jsx)(r.Clickable, {
                            className: d([N.buttonsBackground, f ? N.buttonsBackgroundActive : N.buttonsBackgroundInactive, {
                                [N.disabled]: f
                            }]),
                            onClick: () => m(u.SafetyWarningFeedbackTypes.DOWNVOTE, E.CtaEventTypes.FEEDBACK_DOWNVOTE),
                            "aria-label": R.default.Messages.STRANGER_DANGER_THUMBS_DOWN_A11Y,
                            children: (0, s.jsx)("img", {
                                className: N.buttonIcon,
                                src: _,
                                alt: ""
                            })
                        })]
                    })]
                })
            }
        }
    }
]);
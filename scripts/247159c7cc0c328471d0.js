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
            var s = t("920040"),
                n = t("773670"),
                d = t("744196"),
                l = t("77078"),
                c = t("519705"),
                i = t("282109"),
                r = t("898260"),
                o = t("844911"),
                u = t("327944"),
                E = t("964974"),
                R = t("49111"),
                N = t("782340"),
                T = t("886735");

            function _(e) {
                let {
                    transitionState: a,
                    onClose: t,
                    handleBlock: _,
                    channelId: x,
                    warningId: f,
                    senderId: A
                } = e, m = () => {
                    t()
                }, h = (0, E.getSafetyTips)();
                n.useEffect(() => {
                    (0, o.trackViewedEvent)(R.AnalyticEvents.SAFETY_WARNING_MODAL_VIEWED, {
                        channelId: x,
                        warningId: f,
                        senderId: A
                    })
                }, [x, f, A]);
                let M = (0, d.default)([i.default], () => i.default.isChannelMuted(null, x));
                return (0, s.jsxs)(l.ModalRoot, {
                    transitionState: a,
                    children: [(0, s.jsxs)(l.ModalHeader, {
                        className: T.modalHeader,
                        children: [(0, s.jsxs)("div", {
                            className: T.modalHeaderText,
                            children: [(0, s.jsx)(l.Text, {
                                variant: "eyebrow",
                                children: N.default.Messages.STRANGER_DANGER_TIPS_HEADER
                            }), (0, s.jsx)(l.Heading, {
                                variant: "heading-xl/bold",
                                children: N.default.Messages.STRANGER_DANGER_TIPS_DESCRIPTION
                            })]
                        }), (0, s.jsx)(l.ModalCloseButton, {
                            withCircleBackground: !0,
                            onClick: m,
                            className: T.closeButton
                        })]
                    }), (0, s.jsxs)(l.ModalContent, {
                        className: T.modalContent,
                        children: [(0, s.jsx)("div", {
                            className: T.tipsSection,
                            children: h.map((e, a) => (0, s.jsxs)("div", {
                                className: T.tipRow,
                                children: [(0, s.jsx)(l.Heading, {
                                    variant: "heading-md/semibold",
                                    color: "text-brand",
                                    className: T.tipNumber,
                                    children: a + 1
                                }), (0, s.jsx)(l.Text, {
                                    variant: "text-sm/medium",
                                    color: "header-secondary",
                                    children: e
                                })]
                            }, a))
                        }), (0, s.jsxs)("div", {
                            children: [(0, s.jsx)(l.Text, {
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
                                        children: [(0, s.jsx)(l.Text, {
                                            variant: "text-md/semibold",
                                            color: "header-primary",
                                            children: N.default.Messages.STRANGER_DANGER_MORE_MUTE
                                        }), (0, s.jsx)(l.Text, {
                                            variant: "text-xs/medium",
                                            color: "header-secondary",
                                            children: N.default.Messages.STRANGER_DANGER_MORE_MUTE_DESCRIPTION
                                        })]
                                    }), (0, s.jsx)(l.Button, {
                                        size: l.Button.Sizes.SMALL,
                                        color: l.Button.Colors.PRIMARY,
                                        "aria-label": N.default.Messages.STRANGER_DANGER_MORE_MUTE,
                                        onClick: M ? () => {
                                            c.default.updateChannelOverrideSettings(null, x, {
                                                muted: !1
                                            }), (0, l.showToast)((0, l.createToast)(N.default.Messages.STRANGER_DANGER_UNMUTE_CONFIRM, l.ToastType.SUCCESS)), (0, o.trackCtaEvent)({
                                                channelId: x,
                                                warningId: f,
                                                senderId: A,
                                                cta: o.CtaEventTypes.USER_MODAL_UNMUTE
                                            })
                                        } : () => {
                                            c.default.updateChannelOverrideSettings(null, x, {
                                                muted: !0
                                            }), (0, l.showToast)((0, l.createToast)(N.default.Messages.STRANGER_DANGER_MUTE_CONFIRM, l.ToastType.SUCCESS)), (0, o.trackCtaEvent)({
                                                channelId: x,
                                                warningId: f,
                                                senderId: A,
                                                cta: o.CtaEventTypes.USER_MODAL_MUTE
                                            })
                                        },
                                        children: M ? N.default.Messages.STRANGER_DANGER_MORE_UNMUTE : N.default.Messages.STRANGER_DANGER_MORE_MUTE
                                    })]
                                }), (0, s.jsx)(r.default, {}), (0, s.jsxs)("div", {
                                    className: T.safetyAction,
                                    children: [(0, s.jsxs)("div", {
                                        className: T.safetyActionText,
                                        children: [(0, s.jsx)(l.Text, {
                                            variant: "text-md/semibold",
                                            color: "header-primary",
                                            children: N.default.Messages.STRANGER_DANGER_MORE_BLOCK
                                        }), (0, s.jsx)(l.Text, {
                                            variant: "text-xs/medium",
                                            color: "header-secondary",
                                            children: N.default.Messages.STRANGER_DANGER_MORE_BLOCK_DESCRIPTION
                                        })]
                                    }), (0, s.jsx)(l.Button, {
                                        size: l.Button.Sizes.SMALL,
                                        color: l.Button.Colors.RED,
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
                            warningId: f,
                            senderId: A
                        })]
                    })]
                })
            }
        },
        327944: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return A
                }
            });
            var s = t("920040"),
                n = t("773670"),
                d = t("575482"),
                l = t.n(d),
                c = t("744196"),
                i = t("877585"),
                r = t("77078"),
                o = t("277734"),
                u = t("764828"),
                E = t("844911"),
                R = t("782340"),
                N = t("599493"),
                T = t("474555"),
                _ = t("80426"),
                x = t("142053");

            function f() {
                return (0, s.jsxs)("div", {
                    className: l(T.toast, N.toast),
                    children: [(0, s.jsx)(i.ShieldIcon, {
                        color: r.tokens.colors.TEXT_BRAND
                    }), (0, s.jsx)(r.Text, {
                        className: T.content,
                        color: "header-primary",
                        variant: "text-md/normal",
                        children: R.default.Messages.STRANGER_DANGER_FEEDBACK_CONFIRM
                    })]
                })
            }

            function A(e) {
                let {
                    channelId: a,
                    warningId: t,
                    senderId: d
                } = e, i = (0, c.default)([u.default], () => u.default.getChannelSafetyWarning(a, t)), T = n.useMemo(() => (null == i ? void 0 : i.feedback_type) === u.SafetyWarningFeedbackTypes.UPVOTE, [i]), A = n.useMemo(() => (null == i ? void 0 : i.feedback_type) === u.SafetyWarningFeedbackTypes.DOWNVOTE, [i]), m = n.useCallback((e, n) => {
                    (null == i ? void 0 : i.feedback_type) !== e && ((0, o.setChannelSafetyWarningFeedback)(a, t, e), (0, r.showToast)((0, r.createToast)(R.default.Messages.STRANGER_DANGER_FEEDBACK_CONFIRM, r.ToastType.CUSTOM, {
                        component: (0, s.jsx)(f, {})
                    })), (0, E.trackCtaEvent)({
                        channelId: a,
                        warningId: t,
                        senderId: d,
                        cta: n
                    }))
                }, [i, a, t, d]);
                return (0, s.jsxs)("div", {
                    className: N.feedback,
                    children: [(0, s.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        color: "text-normal",
                        children: R.default.Messages.STRANGER_DANGER_WAS_THIS_HELPFUL
                    }), (0, s.jsxs)("div", {
                        className: N.buttonsContainer,
                        children: [(0, s.jsx)(r.Clickable, {
                            className: l([N.buttonsBackground, T ? N.buttonsBackgroundActive : N.buttonsBackgroundInactive, {
                                [N.disabled]: T
                            }]),
                            onClick: () => m(u.SafetyWarningFeedbackTypes.UPVOTE, E.CtaEventTypes.FEEDBACK_UPVOTE),
                            children: (0, s.jsx)("img", {
                                className: N.buttonIcon,
                                src: x,
                                alt: ""
                            })
                        }), (0, s.jsx)(r.Clickable, {
                            className: l([N.buttonsBackground, A ? N.buttonsBackgroundActive : N.buttonsBackgroundInactive, {
                                [N.disabled]: A
                            }]),
                            onClick: () => m(u.SafetyWarningFeedbackTypes.DOWNVOTE, E.CtaEventTypes.FEEDBACK_DOWNVOTE),
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
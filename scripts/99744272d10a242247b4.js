(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["20132"], {
        80426: function(e, t, a) {
            "use strict";
            e.exports = a.p + "d39437f043f4b24db4bf.png"
        },
        142053: function(e, t, a) {
            "use strict";
            e.exports = a.p + "fbef539d0f7401c2bf4e.png"
        },
        917500: function(e, t, a) {
            "use strict";
            e.exports = a.p + "0e2d1c2de9e9f557d79e.jpg"
        },
        664639: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return _
                }
            });
            var s = a("920040"),
                n = a("773670"),
                l = a("744196"),
                d = a("77078"),
                c = a("519705"),
                i = a("282109"),
                r = a("898260"),
                o = a("844911"),
                u = a("327944"),
                E = a("964974"),
                R = a("49111"),
                N = a("782340"),
                T = a("886735");

            function _(e) {
                let {
                    transitionState: t,
                    onClose: a,
                    handleBlock: _,
                    channelId: x,
                    warningId: f,
                    senderId: A
                } = e, m = () => {
                    a()
                }, h = (0, E.getSafetyTips)();
                n.useEffect(() => {
                    (0, o.trackViewedEvent)(R.AnalyticEvents.SAFETY_WARNING_MODAL_VIEWED, {
                        channelId: x,
                        warningId: f,
                        senderId: A
                    })
                }, [x, f, A]);
                let M = (0, l.default)([i.default], () => i.default.isChannelMuted(null, x));
                return (0, s.jsxs)(d.ModalRoot, {
                    transitionState: t,
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
                            children: h.map((e, t) => (0, s.jsxs)("div", {
                                className: T.tipRow,
                                children: [(0, s.jsx)(d.Heading, {
                                    variant: "heading-md/semibold",
                                    color: "text-brand",
                                    className: T.tipNumber,
                                    children: t + 1
                                }), (0, s.jsx)(d.Text, {
                                    variant: "text-sm/medium",
                                    color: "header-secondary",
                                    children: e
                                })]
                            }, t))
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
                                        onClick: M ? () => {
                                            c.default.updateChannelOverrideSettings(null, x, {
                                                muted: !1
                                            }), (0, d.showToast)((0, d.createToast)(N.default.Messages.STRANGER_DANGER_UNMUTE_CONFIRM, d.ToastType.SUCCESS)), (0, o.trackCtaEvent)({
                                                channelId: x,
                                                warningId: f,
                                                senderId: A,
                                                cta: o.CtaEventTypes.USER_MODAL_UNMUTE
                                            })
                                        } : () => {
                                            c.default.updateChannelOverrideSettings(null, x, {
                                                muted: !0
                                            }), (0, d.showToast)((0, d.createToast)(N.default.Messages.STRANGER_DANGER_MUTE_CONFIRM, d.ToastType.SUCCESS)), (0, o.trackCtaEvent)({
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
                            warningId: f,
                            senderId: A
                        })]
                    })]
                })
            }
        },
        327944: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return A
                }
            });
            var s = a("920040"),
                n = a("773670"),
                l = a("575482"),
                d = a.n(l),
                c = a("744196"),
                i = a("877585"),
                r = a("77078"),
                o = a("277734"),
                u = a("764828"),
                E = a("844911"),
                R = a("782340"),
                N = a("599493"),
                T = a("474555"),
                _ = a("80426"),
                x = a("142053");

            function f() {
                return (0, s.jsxs)("div", {
                    className: d(T.toast, N.toast),
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
                    channelId: t,
                    warningId: a,
                    senderId: l
                } = e, i = (0, c.default)([u.default], () => u.default.getChannelSafetyWarning(t, a)), T = n.useMemo(() => (null == i ? void 0 : i.feedback_type) === u.SafetyWarningFeedbackTypes.UPVOTE, [i]), A = n.useMemo(() => (null == i ? void 0 : i.feedback_type) === u.SafetyWarningFeedbackTypes.DOWNVOTE, [i]), m = n.useCallback((e, n) => {
                    (null == i ? void 0 : i.feedback_type) !== e && ((0, o.setChannelSafetyWarningFeedback)(t, a, e), (0, r.showToast)((0, r.createToast)(R.default.Messages.STRANGER_DANGER_FEEDBACK_CONFIRM, r.ToastType.CUSTOM, {
                        component: (0, s.jsx)(f, {})
                    })), (0, E.trackCtaEvent)({
                        channelId: t,
                        warningId: a,
                        senderId: l,
                        cta: n
                    }))
                }, [i, t, a, l]);
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
                            children: (0, s.jsx)("img", {
                                className: N.buttonIcon,
                                src: x,
                                alt: ""
                            })
                        }), (0, s.jsx)(r.Clickable, {
                            className: d([N.buttonsBackground, A ? N.buttonsBackgroundActive : N.buttonsBackgroundInactive, {
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
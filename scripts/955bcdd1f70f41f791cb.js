(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["20132"], {
        80426: function(e, s, a) {
            "use strict";
            e.exports = a.p + "d39437f043f4b24db4bf.png"
        },
        142053: function(e, s, a) {
            "use strict";
            e.exports = a.p + "fbef539d0f7401c2bf4e.png"
        },
        917500: function(e, s, a) {
            "use strict";
            e.exports = a.p + "0e2d1c2de9e9f557d79e.jpg"
        },
        664639: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return N
                }
            });
            var t = a("920040"),
                n = a("773670"),
                c = a("77078"),
                d = a("898260"),
                i = a("844911"),
                l = a("327944"),
                r = a("964974"),
                o = a("49111"),
                u = a("782340"),
                E = a("886735");

            function N(e) {
                let {
                    transitionState: s,
                    onClose: a,
                    handleBlock: N,
                    handleMute: R,
                    channelId: x,
                    warningId: T,
                    senderId: _
                } = e, m = () => {
                    a()
                }, f = (0, r.getSafetyTips)();
                return n.useEffect(() => {
                    (0, i.trackViewedEvent)(o.AnalyticEvents.CHANNEL_SAFETY_WARNING_MODAL_VIEWED, {
                        channelId: x,
                        warningId: T,
                        senderId: _
                    })
                }, [x, T, _]), (0, t.jsxs)(c.ModalRoot, {
                    transitionState: s,
                    children: [(0, t.jsxs)(c.ModalHeader, {
                        className: E.modalHeader,
                        children: [(0, t.jsxs)("div", {
                            className: E.modalHeaderText,
                            children: [(0, t.jsx)(c.Text, {
                                variant: "eyebrow",
                                children: u.default.Messages.STRANGER_DANGER_TIPS_HEADER
                            }), (0, t.jsx)(c.Heading, {
                                variant: "heading-xl/bold",
                                children: u.default.Messages.STRANGER_DANGER_TIPS_DESCRIPTION
                            })]
                        }), (0, t.jsx)(c.ModalCloseButton, {
                            withCircleBackground: !0,
                            onClick: m,
                            className: E.closeButton
                        })]
                    }), (0, t.jsxs)(c.ModalContent, {
                        className: E.modalContent,
                        children: [(0, t.jsx)("div", {
                            className: E.tipsSection,
                            children: f.map((e, s) => (0, t.jsxs)("div", {
                                className: E.tipRow,
                                children: [(0, t.jsx)(c.Heading, {
                                    variant: "heading-md/semibold",
                                    color: "text-brand",
                                    className: E.tipNumber,
                                    children: s + 1
                                }), (0, t.jsx)(c.Text, {
                                    variant: "text-sm/medium",
                                    color: "header-secondary",
                                    children: e
                                })]
                            }, s))
                        }), (0, t.jsxs)("div", {
                            children: [(0, t.jsx)(c.Text, {
                                className: E.moreHeading,
                                variant: "eyebrow",
                                color: "header-secondary",
                                children: u.default.Messages.STRANGER_DANGER_MORE_HEADER
                            }), (0, t.jsxs)("div", {
                                className: E.tipsSection,
                                children: [(0, t.jsxs)("div", {
                                    className: E.safetyAction,
                                    children: [(0, t.jsxs)("div", {
                                        className: E.safetyActionText,
                                        children: [(0, t.jsx)(c.Text, {
                                            variant: "text-md/semibold",
                                            color: "header-primary",
                                            children: u.default.Messages.STRANGER_DANGER_MORE_MUTE
                                        }), (0, t.jsx)(c.Text, {
                                            variant: "text-xs/medium",
                                            color: "header-secondary",
                                            children: u.default.Messages.STRANGER_DANGER_MORE_MUTE_DESCRIPTION
                                        })]
                                    }), (0, t.jsx)(c.Button, {
                                        size: c.Button.Sizes.SMALL,
                                        color: c.Button.Colors.PRIMARY,
                                        "aria-label": u.default.Messages.STRANGER_DANGER_MORE_MUTE,
                                        onClick: () => {
                                            m(), R()
                                        },
                                        children: u.default.Messages.STRANGER_DANGER_MORE_MUTE
                                    })]
                                }), (0, t.jsx)(d.default, {}), (0, t.jsxs)("div", {
                                    className: E.safetyAction,
                                    children: [(0, t.jsxs)("div", {
                                        className: E.safetyActionText,
                                        children: [(0, t.jsx)(c.Text, {
                                            variant: "text-md/semibold",
                                            color: "header-primary",
                                            children: u.default.Messages.STRANGER_DANGER_MORE_BLOCK
                                        }), (0, t.jsx)(c.Text, {
                                            variant: "text-xs/medium",
                                            color: "header-secondary",
                                            children: u.default.Messages.STRANGER_DANGER_MORE_BLOCK_DESCRIPTION
                                        })]
                                    }), (0, t.jsx)(c.Button, {
                                        size: c.Button.Sizes.SMALL,
                                        color: c.Button.Colors.RED,
                                        "aria-label": u.default.Messages.STRANGER_DANGER_BANNER_BLOCK,
                                        onClick: () => {
                                            m(), N()
                                        },
                                        children: u.default.Messages.STRANGER_DANGER_BANNER_BLOCK
                                    })]
                                })]
                            })]
                        }), (0, t.jsx)(l.default, {
                            channelId: x,
                            warningId: T,
                            senderId: _
                        })]
                    })]
                })
            }
        },
        327944: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return f
                }
            });
            var t = a("920040"),
                n = a("773670"),
                c = a("575482"),
                d = a.n(c),
                i = a("744196"),
                l = a("877585"),
                r = a("77078"),
                o = a("277734"),
                u = a("764828"),
                E = a("844911"),
                N = a("782340"),
                R = a("599493"),
                x = a("474555"),
                T = a("80426"),
                _ = a("142053");

            function m() {
                return (0, t.jsxs)("div", {
                    className: d(x.toast, R.toast),
                    children: [(0, t.jsx)(l.ShieldIcon, {
                        color: r.tokens.colors.TEXT_BRAND
                    }), (0, t.jsx)(r.Text, {
                        className: x.content,
                        color: "header-primary",
                        variant: "text-md/normal",
                        children: N.default.Messages.STRANGER_DANGER_FEEDBACK_CONFIRM
                    })]
                })
            }

            function f(e) {
                let {
                    channelId: s,
                    warningId: a,
                    senderId: c
                } = e, l = (0, i.default)([u.default], () => u.default.getChannelSafetyWarning(s, a)), x = n.useMemo(() => (null == l ? void 0 : l.feedback_type) === u.SafetyWarningFeedbackTypes.UPVOTE, [l]), f = n.useMemo(() => (null == l ? void 0 : l.feedback_type) === u.SafetyWarningFeedbackTypes.DOWNVOTE, [l]), A = n.useCallback((e, n) => {
                    !f && !x && ((0, o.setChannelSafetyWarningFeedback)(s, a, e), (0, r.showToast)((0, r.createToast)(N.default.Messages.STRANGER_DANGER_FEEDBACK_CONFIRM, r.ToastType.CUSTOM, {
                        component: (0, t.jsx)(m, {})
                    })), (0, E.trackCtaEvent)({
                        channelId: s,
                        warningId: a,
                        senderId: c,
                        cta: n
                    }))
                }, [x, f, s, a, c]);
                return (0, t.jsxs)("div", {
                    className: R.feedback,
                    children: [(0, t.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        color: "text-normal",
                        children: N.default.Messages.STRANGER_DANGER_WAS_THIS_HELPFUL
                    }), (0, t.jsxs)("div", {
                        className: R.buttonsContainer,
                        children: [(0, t.jsx)(r.Clickable, {
                            className: d([R.buttonsBackground, x ? R.buttonsBackgroundActive : R.buttonsBackgroundInactive]),
                            onClick: () => A(u.SafetyWarningFeedbackTypes.UPVOTE, E.CtaEventTypes.FEEDBACK_UPVOTE),
                            children: (0, t.jsx)("img", {
                                className: R.buttonIcon,
                                src: _,
                                alt: ""
                            })
                        }), (0, t.jsx)(r.Clickable, {
                            className: d([R.buttonsBackground, f ? R.buttonsBackgroundActive : R.buttonsBackgroundInactive]),
                            onClick: () => A(u.SafetyWarningFeedbackTypes.DOWNVOTE, E.CtaEventTypes.FEEDBACK_DOWNVOTE),
                            children: (0, t.jsx)("img", {
                                className: R.buttonIcon,
                                src: T,
                                alt: ""
                            })
                        })]
                    })]
                })
            }
        }
    }
]);
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("794252");
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("506838"),
                o = n("418009"),
                u = n("77078"),
                d = n("847511"),
                c = n("619544"),
                f = n("74232"),
                m = n("316350"),
                E = n("909366"),
                _ = n("879958");

            function h(e) {
                let {
                    media: t
                } = e;
                return (0, a.jsx)(u.Text, {
                    variant: "text-md/medium",
                    children: t.text
                })
            }

            function p(e) {
                let {
                    children: t
                } = e;
                return (0, a.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: t
                })
            }

            function I(e) {
                let {
                    children: t,
                    onClick: n,
                    className: s,
                    buttonRef: l
                } = e;
                return (0, a.jsx)(u.Button, {
                    onClick: n,
                    className: i(s, _.textButton),
                    look: u.Button.Looks.BLANK,
                    size: u.Button.Sizes.NONE,
                    buttonRef: l,
                    children: (0, a.jsx)(u.Text, {
                        variant: "text-sm/semibold",
                        color: "text-link",
                        children: t
                    })
                })
            }

            function T(e) {
                let {
                    action: t,
                    channelId: n,
                    messageId: l
                } = e, {
                    actionButtonRef: i,
                    manageFocusOnAction: r
                } = (0, m.usePollFocusManager)(), o = s.useCallback(async () => {
                    (null == t ? void 0 : t.type) != null && (await d.default.handlePollActionTapped({
                        channelId: n,
                        messageId: l,
                        type: t.type
                    }), r(t.type))
                }, [null == t ? void 0 : t.type, n, l, r]);
                return null == t ? null : "button" === t.presentation ? (0, a.jsx)(u.Button, {
                    buttonRef: i,
                    onClick: o,
                    disabled: !t.enabled,
                    children: t.label
                }) : "textButton" === t.presentation ? (0, a.jsx)(I, {
                    buttonRef: i,
                    onClick: o,
                    children: t.label
                }) : (0, a.jsx)(p, {
                    children: t.label
                })
            }

            function g(e) {
                let {
                    message: t,
                    poll: n,
                    className: s
                } = e, l = (0, f.useStyleClass)(n.containerStyle), u = function(e, t) {
                    let n = {
                        answers: t.answers,
                        answersInteraction: t.answersInteraction,
                        answerTapAccessibilityLabel: t.answerTapAccessibilityLabel,
                        isExpired: t.isExpired,
                        isInteractive: t.canTapAnswers,
                        hasSelectedAnyAnswer: t.hasSelectedAnswer,
                        hasVoted: t.hasVoted,
                        myAvatarUrl: t.myAvatarUrl
                    };
                    return (0, r.match)(t.layoutType).with(o.PollLayoutTypes.DEFAULT, () => (0, a.jsx)(E.TextAndImageAnswers, {
                        ...n
                    })).with(o.PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => (0, a.jsx)(c.default, {
                        ...n
                    })).otherwise(() => null)
                }(0, n);
                return null == u ? null : (0, a.jsxs)("div", {
                    className: i(_.container, l, s),
                    children: [(0, a.jsx)(h, {
                        media: n.question
                    }), u, (0, a.jsxs)("div", {
                        className: _.bottomBar,
                        children: [(0, a.jsx)(T, {
                            channelId: t.getChannelId(),
                            messageId: t.id,
                            action: n.secondaryAction
                        }), (0, a.jsx)(T, {
                            channelId: t.getChannelId(),
                            messageId: t.id,
                            action: n.primaryAction
                        })]
                    })]
                })
            }

            function C(e) {
                let {
                    message: t,
                    poll: n,
                    className: s
                } = e;
                return (0, a.jsx)(f.PollContextProvider, {
                    message: t,
                    poll: n,
                    children: (0, a.jsx)(m.PollFocusManager, {
                        children: (0, a.jsx)(g, {
                            message: t,
                            poll: n,
                            className: s
                        })
                    })
                })
            }
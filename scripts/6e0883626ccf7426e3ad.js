(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3253"], {
        59407: function(e, t, s) {
            "use strict";
            e.exports = s.p + "9e81dce3b3235147e088.svg"
        },
        609872: function(e, t, s) {
            "use strict";
            e.exports = s.p + "d2957a53837bc444a305.svg"
        },
        407648: function(e, t, s) {
            "use strict";
            e.exports = s.p + "5161f8a4f8050a34ef98.svg"
        },
        713640: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                shuffleProblems: function() {
                    return a
                }
            });
            var l = s("917351"),
                n = s.n(l);
            let a = (e, t) => {
                let s = n.shuffle(e),
                    l = s.findIndex(e => e.value === t);
                if (l > -1) {
                    let e = s[l];
                    s.splice(l, 1), s.push(e)
                }
                return s
            }
        },
        866380: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return R
                }
            });
            var l = s("37983"),
                n = s("884691"),
                a = s("917351"),
                u = s.n(a),
                o = s("77078"),
                r = s("84339"),
                d = s("385042"),
                i = s("229850"),
                c = s("145131"),
                E = s("476765"),
                f = s("561744"),
                _ = s("258078"),
                m = s("701909"),
                O = s("713640"),
                h = s("200521"),
                C = s("782340"),
                M = s("279537");

            function N() {
                return (0, l.jsx)(o.Text, {
                    className: M.helpdeskLink,
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: C.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
                        helpdeskURL: m.default.getSubmitRequestURL()
                    })
                })
            }

            function R(e) {
                let {
                    header: t,
                    body: s,
                    problems: a,
                    transitionState: m,
                    feedbackProblems: R = [],
                    otherKey: I,
                    hasCloseButton: L,
                    onSubmit: H,
                    onClose: T,
                    canDismissForever: x = !0,
                    showHelpdeskLink: S = !0
                } = e, g = (0, r.default)(a), [v, b] = n.useState(!1), [A, p] = n.useState(null), [B, D] = n.useState(u.shuffle(a)), [k, G] = n.useState(""), j = (0, E.useUID)(), F = (0, f.default)(v), U = (0, f.default)(A), V = (0, f.default)(H), P = (0, f.default)(k), K = null != A && R.includes(A);
                return n.useEffect(() => {
                    !u.isEqual(g, a) && D((0, O.shuffleProblems)(a, I))
                }, [a, g, I]), n.useEffect(() => () => {
                    V.current({
                        problem: U.current,
                        dontShowAgain: F.current,
                        feedback: P.current
                    })
                }, []), (0, l.jsxs)(o.ModalRoot, {
                    transitionState: m,
                    className: M.modalRoot,
                    "aria-labelledby": j,
                    children: [(0, l.jsx)(d.default, {}), (0, l.jsxs)(o.ModalHeader, {
                        separator: !1,
                        className: M.headerContainer,
                        children: [(0, l.jsx)(_.default, {
                            id: j,
                            className: M.header,
                            color: _.default.Colors.CUSTOM,
                            size: _.default.Sizes.SIZE_24,
                            children: t
                        }), (0, l.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: M.ratingBody,
                            children: s
                        }), L ? (0, l.jsx)(o.ModalCloseButton, {
                            className: M.modalCloseButton,
                            onClick: T
                        }) : null]
                    }), (0, l.jsxs)(o.ModalContent, {
                        className: M.content,
                        children: [K ? null : (0, l.jsx)(o.FormItem, {
                            className: M.problemInfo,
                            children: (0, l.jsx)(i.default, {
                                options: B,
                                onClick: function(e) {
                                    let {
                                        value: t
                                    } = e;
                                    p(t), !R.includes(t) && T()
                                }
                            })
                        }), K ? (0, l.jsxs)(o.FormItem, {
                            title: C.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
                            className: M.problemInfo,
                            children: [(0, l.jsx)(o.TextArea, {
                                value: k,
                                maxLength: h.FEEDBACK_FREEFORM_LENGTH,
                                onChange: G
                            }), S ? (0, l.jsx)(N, {}) : null]
                        }) : null]
                    }), x || K ? (0, l.jsx)(o.ModalFooter, {
                        className: M.footer,
                        direction: c.default.Direction.HORIZONTAL,
                        children: K ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(o.Button, {
                                size: o.Button.Sizes.SMALL,
                                look: o.Button.Looks.LINK,
                                color: o.Button.Colors.PRIMARY,
                                onClick: () => {
                                    p(null), G("")
                                },
                                children: C.default.Messages.BACK
                            }), (0, l.jsx)(o.Button, {
                                size: o.Button.Sizes.SMALL,
                                onClick: T,
                                children: C.default.Messages.SUBMIT
                            })]
                        }) : x ? (0, l.jsx)(o.Checkbox, {
                            size: 18,
                            type: o.Checkbox.Types.INVERTED,
                            value: v,
                            onChange: () => b(!v),
                            children: (0, l.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children: C.default.Messages.DONT_SHOW_AGAIN
                            })
                        }) : null
                    }) : null]
                })
            }
        },
        385042: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var l = s("884691"),
                n = s("69927"),
                a = s("773336"),
                u = s("782340");

            function o() {
                return l.useEffect(() => {
                    !a.isPlatformEmbedded && (0, n.flashPageTitle)({
                        messages: [u.default.Messages.GO_LIVE_HEY, u.default.Messages.GO_LIVE_LOOK, u.default.Messages.GO_LIVE_LISTEN],
                        interval: 600,
                        count: 20,
                        onlyWhenBlurred: !0
                    })
                }, []), null
            }
        },
        348224: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                GuildHomeRemoveChannelReasons: function() {
                    return n
                },
                getGuildHomeRemoveChannelReasons: function() {
                    return d
                },
                trackGuildHomeRemoveChannelFeedback: function() {
                    return i
                }
            });
            var l, n, a = s("42203"),
                u = s("599110"),
                o = s("49111"),
                r = s("782340");

            function d() {
                return [{
                    value: n.BOT_SPAM,
                    label: r.default.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_OPTION_BOTS
                }, {
                    value: n.NO_GO,
                    label: r.default.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_OPTION_NO_GO
                }, {
                    value: n.OVERWHELM,
                    label: r.default.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_OPTION_TOO_MUCH
                }, {
                    value: n.SENSITIVE,
                    label: r.default.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_OPTION_SENSITIVE
                }, {
                    value: n.OTHER,
                    label: r.default.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_OPTION_OTHER
                }]
            }

            function i(e, t, s, l) {
                let n = a.default.getChannel(e);
                null != n && u.default.track(o.AnalyticEvents.USER_REPORT_SUBMITTED, {
                    report_name: "Guild Home Channel Removed",
                    guild_id: n.guild_id,
                    channel_id: n.id,
                    reason: t,
                    feedback: s,
                    skipped: l
                })
            }(l = n || (n = {})).BOT_SPAM = "bot-spam", l.NO_GO = "no-go", l.OVERWHELM = "overwhelm", l.SENSITIVE = "sensitive", l.OTHER = "other"
        },
        360476: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var l = s("37983");
            s("884691");
            var n = s("775560"),
                a = s("866380"),
                u = s("348224"),
                o = s("782340");
            let r = [u.GuildHomeRemoveChannelReasons.OTHER];

            function d(e) {
                let {
                    transitionState: t,
                    onClose: s,
                    channelId: d,
                    onSubmit: i
                } = e, c = (0, n.useLazyValue)(u.getGuildHomeRemoveChannelReasons);
                return (0, l.jsx)(a.default, {
                    header: o.default.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_TITLE,
                    body: o.default.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_SUBTITLE,
                    problems: c,
                    feedbackProblems: r,
                    onSubmit: function(e) {
                        let {
                            problem: t,
                            feedback: s
                        } = e, l = null == t;
                        !l && ((0, u.trackGuildHomeRemoveChannelFeedback)(d, t, s, l), i())
                    },
                    onClose: s,
                    transitionState: t,
                    otherKey: u.GuildHomeRemoveChannelReasons.OTHER,
                    canDismissForever: !1,
                    showHelpdeskLink: !1
                })
            }
        }
    }
]);
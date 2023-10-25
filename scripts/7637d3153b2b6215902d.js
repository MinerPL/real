(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3253"], {
        59407: function(e, t, l) {
            "use strict";
            e.exports = l.p + "9e81dce3b3235147e088.svg"
        },
        609872: function(e, t, l) {
            "use strict";
            e.exports = l.p + "d2957a53837bc444a305.svg"
        },
        407648: function(e, t, l) {
            "use strict";
            e.exports = l.p + "5161f8a4f8050a34ef98.svg"
        },
        713640: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                shuffleProblems: function() {
                    return a
                }
            });
            var s = l("427964"),
                n = l.n(s);
            let a = (e, t) => {
                let l = n.shuffle(e),
                    s = l.findIndex(e => e.value === t);
                if (s > -1) {
                    let e = l[s];
                    l.splice(s, 1), l.push(e)
                }
                return l
            }
        },
        866380: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return R
                }
            });
            var s = l("920040"),
                n = l("773670"),
                a = l("427964"),
                o = l.n(a),
                u = l("77078"),
                r = l("84339"),
                i = l("385042"),
                d = l("229850"),
                c = l("145131"),
                E = l("476765"),
                f = l("561744"),
                _ = l("258078"),
                m = l("701909"),
                O = l("713640"),
                h = l("200521"),
                C = l("782340"),
                M = l("176252");

            function N() {
                return (0, s.jsx)(u.Text, {
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
                    body: l,
                    problems: a,
                    transitionState: m,
                    feedbackProblems: R = [],
                    otherKey: x,
                    hasCloseButton: I,
                    onSubmit: T,
                    onClose: v,
                    canDismissForever: H = !0,
                    showHelpdeskLink: L = !0
                } = e, S = (0, r.default)(a), [g, b] = n.useState(!1), [p, A] = n.useState(null), [B, k] = n.useState(o.shuffle(a)), [D, j] = n.useState(""), G = (0, E.useUID)(), F = (0, f.default)(g), U = (0, f.default)(p), V = (0, f.default)(T), P = (0, f.default)(D), K = null != p && R.includes(p);
                return n.useEffect(() => {
                    !o.isEqual(S, a) && k((0, O.shuffleProblems)(a, x))
                }, [a, S, x]), n.useEffect(() => () => {
                    V.current({
                        problem: U.current,
                        dontShowAgain: F.current,
                        feedback: P.current
                    })
                }, []), (0, s.jsxs)(u.ModalRoot, {
                    transitionState: m,
                    className: M.modalRoot,
                    "aria-labelledby": G,
                    children: [(0, s.jsx)(i.default, {}), (0, s.jsxs)(u.ModalHeader, {
                        separator: !1,
                        className: M.headerContainer,
                        children: [(0, s.jsx)(_.default, {
                            id: G,
                            className: M.header,
                            color: _.default.Colors.CUSTOM,
                            size: _.default.Sizes.SIZE_24,
                            children: t
                        }), (0, s.jsx)(u.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: M.ratingBody,
                            children: l
                        }), I ? (0, s.jsx)(u.ModalCloseButton, {
                            className: M.modalCloseButton,
                            onClick: v
                        }) : null]
                    }), (0, s.jsxs)(u.ModalContent, {
                        className: M.content,
                        children: [K ? null : (0, s.jsx)(u.FormItem, {
                            className: M.problemInfo,
                            children: (0, s.jsx)(d.default, {
                                options: B,
                                onClick: function(e) {
                                    let {
                                        value: t
                                    } = e;
                                    A(t), !R.includes(t) && v()
                                }
                            })
                        }), K ? (0, s.jsxs)(u.FormItem, {
                            title: C.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
                            className: M.problemInfo,
                            children: [(0, s.jsx)(u.TextArea, {
                                value: D,
                                maxLength: h.FEEDBACK_FREEFORM_LENGTH,
                                onChange: j
                            }), L ? (0, s.jsx)(N, {}) : null]
                        }) : null]
                    }), H || K ? (0, s.jsx)(u.ModalFooter, {
                        className: M.footer,
                        direction: c.default.Direction.HORIZONTAL,
                        children: K ? (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(u.Button, {
                                size: u.Button.Sizes.SMALL,
                                look: u.Button.Looks.LINK,
                                color: u.Button.Colors.PRIMARY,
                                onClick: () => {
                                    A(null), j("")
                                },
                                children: C.default.Messages.BACK
                            }), (0, s.jsx)(u.Button, {
                                size: u.Button.Sizes.SMALL,
                                onClick: v,
                                children: C.default.Messages.SUBMIT
                            })]
                        }) : H ? (0, s.jsx)(u.Checkbox, {
                            size: 18,
                            type: u.Checkbox.Types.INVERTED,
                            value: g,
                            onChange: () => b(!g),
                            children: (0, s.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                children: C.default.Messages.DONT_SHOW_AGAIN
                            })
                        }) : null
                    }) : null]
                })
            }
        },
        385042: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var s = l("773670"),
                n = l("69927"),
                a = l("773336"),
                o = l("782340");

            function u() {
                return s.useEffect(() => {
                    !a.isPlatformEmbedded && (0, n.flashPageTitle)({
                        messages: [o.default.Messages.GO_LIVE_HEY, o.default.Messages.GO_LIVE_LOOK, o.default.Messages.GO_LIVE_LISTEN],
                        interval: 600,
                        count: 20,
                        onlyWhenBlurred: !0
                    })
                }, []), null
            }
        },
        348224: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                GuildHomeRemoveChannelReasons: function() {
                    return n
                },
                getGuildHomeRemoveChannelReasons: function() {
                    return i
                },
                trackGuildHomeRemoveChannelFeedback: function() {
                    return d
                }
            });
            var s, n, a = l("42203"),
                o = l("599110"),
                u = l("49111"),
                r = l("782340");

            function i() {
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

            function d(e, t, l, s) {
                let n = a.default.getChannel(e);
                null != n && o.default.track(u.AnalyticEvents.USER_REPORT_SUBMITTED, {
                    report_name: "Guild Home Channel Removed",
                    guild_id: n.guild_id,
                    channel_id: n.id,
                    reason: t,
                    feedback: l,
                    skipped: s
                })
            }(s = n || (n = {})).BOT_SPAM = "bot-spam", s.NO_GO = "no-go", s.OVERWHELM = "overwhelm", s.SENSITIVE = "sensitive", s.OTHER = "other"
        },
        360476: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var s = l("920040");
            l("773670");
            var n = l("365444"),
                a = l("866380"),
                o = l("348224"),
                u = l("782340");
            let r = [o.GuildHomeRemoveChannelReasons.OTHER];

            function i(e) {
                let {
                    transitionState: t,
                    onClose: l,
                    channelId: i,
                    onSubmit: d
                } = e, c = (0, n.useLazyValue)(o.getGuildHomeRemoveChannelReasons);
                return (0, s.jsx)(a.default, {
                    header: u.default.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_TITLE,
                    body: u.default.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_SUBTITLE,
                    problems: c,
                    feedbackProblems: r,
                    onSubmit: function(e) {
                        let {
                            problem: t,
                            feedback: l
                        } = e, s = null == t;
                        !s && ((0, o.trackGuildHomeRemoveChannelFeedback)(i, t, l, s), d())
                    },
                    onClose: l,
                    transitionState: t,
                    otherKey: o.GuildHomeRemoveChannelReasons.OTHER,
                    canDismissForever: !1,
                    showHelpdeskLink: !1
                })
            }
        },
        229850: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var s = l("920040");
            l("773670");
            var n = l("575482"),
                a = l.n(n),
                o = l("77078"),
                u = l("461380"),
                r = l("850073");

            function i(e) {
                let {
                    options: t,
                    onClick: l,
                    className: n,
                    optionClassName: i,
                    hideCaret: d
                } = e;
                return (0, s.jsx)("div", {
                    className: a(r.root, n),
                    children: t.map((e, t) => (0, s.jsxs)(o.Clickable, {
                        onClick: () => l(e),
                        className: a(r.option, i),
                        children: [(0, s.jsx)(o.Text, {
                            className: r.text,
                            color: "none",
                            variant: "text-md/normal",
                            children: e.label
                        }), !(null == d ? void 0 : d(e)) && (0, s.jsx)(u.default, {
                            className: r.caret,
                            direction: u.default.Directions.RIGHT
                        })]
                    }, t))
                })
            }
        }
    }
]);
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("446674"),
                a = n("77078"),
                u = n("716241"),
                d = n("574073"),
                c = n("529805"),
                f = n("393414"),
                p = n("300322"),
                m = n("967241"),
                h = n("377253"),
                E = n("116320"),
                S = n("381546"),
                g = n("49111"),
                C = n("782340"),
                T = n("650593");

            function v(e) {
                let {
                    channel: t,
                    message: n,
                    replyChainLength: r
                } = e;
                return i.useEffect(() => {
                    (0, u.trackWithMetadata)(g.AnalyticEvents.THREAD_NUDGE_SHOWN, {
                        type: "Reply Chain (".concat(3, ")"),
                        reply_chain_length: r + 1,
                        channel_id: t.id,
                        guild_id: t.guild_id
                    })
                }, [t]), (0, l.jsxs)(a.Clickable, {
                    onClick: function() {
                        (0, c.deletePendingReply)(t.id), (0, m.openThreadSidebarForCreating)(t, n, "Reply Chain Nudge")
                    },
                    className: T.threadSuggestionBar,
                    focusProps: {
                        offset: {
                            right: -4,
                            left: -4
                        }
                    },
                    children: [(0, l.jsx)(a.Text, {
                        color: "header-secondary",
                        className: T.text,
                        variant: "text-sm/normal",
                        children: C.default.Messages.THREAD_REPLY_SUGGESTION.format({
                            count: Math.min(10, r + 1)
                        })
                    }), (0, l.jsx)(a.Text, {
                        color: "text-link",
                        className: T.createThreadButton,
                        variant: "text-sm/semibold",
                        children: C.default.Messages.CREATE_THREAD
                    })]
                })
            }

            function y(e) {
                let {
                    reply: t,
                    chatInputType: n
                } = e, {
                    channel: i,
                    message: r,
                    shouldMention: u,
                    showMentionToggle: m
                } = t, {
                    nick: y,
                    colorString: x,
                    colorRoleName: I
                } = (0, d.default)(r), N = function(e, t) {
                    let n = e.id,
                        l = t.id;
                    return (0, s.useStateFromStores)([h.default], () => {
                        let e = l;
                        for (let t = 0; t < 10; t++) {
                            let l = h.default.getMessage(n, e);
                            if ((null == l ? void 0 : l.type) !== g.MessageTypes.REPLY || null == l.messageReference) return t;
                            e = l.messageReference.message_id
                        }
                        return 10
                    }, [n, l])
                }(i, r), _ = (0, p.useCanStartPublicThread)(i, r), A = n.showThreadPromptOnReply && N >= 2 && _;

                function R(e) {
                    e.stopPropagation(), (0, c.setPendingReplyShouldMention)(i.id, !u)
                }
                return (0, l.jsx)("div", {
                    className: T.clipContainer,
                    children: (0, l.jsxs)("div", {
                        className: T.container,
                        children: [(0, l.jsxs)("div", {
                            className: T.replyBar,
                            children: [(0, l.jsx)(a.Clickable, {
                                onClick: () => (0, f.transitionTo)(g.Routes.CHANNEL(i.getGuildId(), i.id, r.id)),
                                focusProps: {
                                    offset: {
                                        top: -8,
                                        right: -4,
                                        bottom: -8,
                                        left: -4
                                    }
                                },
                                children: (0, l.jsx)(a.Text, {
                                    color: "header-secondary",
                                    className: o(T.text, T.replyLabel),
                                    variant: "text-sm/normal",
                                    children: C.default.Messages.REPLYING_TO.format({
                                        userHook: (e, t) => (0, l.jsx)(a.NameWithRole, {
                                            className: T.name,
                                            name: y,
                                            color: x,
                                            roleName: I
                                        }, t)
                                    })
                                })
                            }), (0, l.jsxs)("div", {
                                className: T.actions,
                                children: [m && (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)(a.Tooltip, {
                                        text: u ? C.default.Messages.REPLY_MENTION_ON_TOOLTIP : C.default.Messages.REPLY_MENTION_OFF_TOOLTIP,
                                        children: e => {
                                            let {
                                                onMouseEnter: t,
                                                onMouseLeave: n,
                                                onFocus: i,
                                                onBlur: r
                                            } = e;
                                            return (0, l.jsx)(a.Clickable, {
                                                role: "switch",
                                                "aria-checked": u,
                                                onClick: R,
                                                onMouseEnter: t,
                                                onMouseLeave: n,
                                                onFocus: i,
                                                onBlur: r,
                                                children: (0, l.jsxs)(a.Text, {
                                                    variant: "text-sm/bold",
                                                    color: u ? "text-link" : "text-muted",
                                                    className: T.mentionButton,
                                                    children: [(0, l.jsx)(E.default, {
                                                        "aria-label": C.default.Messages.MENTION,
                                                        className: T.mentionIcon
                                                    }), u ? C.default.Messages.REPLY_MENTION_ON : C.default.Messages.REPLY_MENTION_OFF]
                                                })
                                            })
                                        }
                                    }), (0, l.jsx)("div", {
                                        className: T.separator,
                                        "aria-hidden": !0
                                    })]
                                }), (0, l.jsx)(a.Clickable, {
                                    className: T.closeButton,
                                    onClick: function(e) {
                                        e.stopPropagation(), (0, c.deletePendingReply)(i.id)
                                    },
                                    children: (0, l.jsx)(S.default, {
                                        className: T.closeIcon
                                    })
                                })]
                            })]
                        }), A && (0, l.jsx)(v, {
                            channel: i,
                            message: r,
                            replyChainLength: N
                        })]
                    })
                })
            }
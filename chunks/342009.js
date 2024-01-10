            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("77078"),
                o = n("945330"),
                u = n("780571"),
                d = n("304198"),
                c = n("556118"),
                f = n("97810"),
                h = n("49111"),
                C = n("782340"),
                p = n("555821"),
                m = n("877671");

            function E(e) {
                let {
                    expanded: t,
                    onClick: n,
                    count: s,
                    compact: l,
                    collapsedReason: i
                } = e;
                return (0, a.jsx)(u.default, {
                    compact: l,
                    role: "group",
                    childrenMessageContent: (0, a.jsx)(d.default, {
                        compact: l,
                        className: p.blockedSystemMessage,
                        iconNode: (0, a.jsx)(o.default, {
                            className: p.blockedIcon
                        }),
                        children: (0, a.jsxs)("div", {
                            className: p.blockedMessageText,
                            children: [i.format({
                                count: s
                            }), " —", " ", (0, a.jsx)(r.Clickable, {
                                tag: "span",
                                onClick: n,
                                className: p.blockedAction,
                                children: t ? C.default.Messages.BLOCKED_MESSAGES_HIDE.format({
                                    count: s
                                }) : C.default.Messages.BLOCKED_MESSAGES_SHOW.format({
                                    count: s
                                })
                            })]
                        })
                    })
                })
            }
            var g = s.memo(function(e) {
                var t;
                let {
                    messages: n,
                    channel: l,
                    compact: r = !1,
                    unreadId: o,
                    collapsedReason: u
                } = e, {
                    hasJumpTarget: d = !1
                } = n, [C, g] = s.useState(d), S = s.useCallback(() => g(e => !e), []), _ = n.hasUnread ? n.content.length - 1 : n.content.length;
                return (0, a.jsxs)("div", {
                    className: i({
                        [m.groupStart]: !0,
                        [p.expanded]: C
                    }),
                    children: [n.hasUnread && (!C || (null === (t = n.content[0]) || void 0 === t ? void 0 : t.type) === h.ChannelStreamTypes.DIVIDER) ? (0, a.jsx)(f.default, {
                        isUnread: !0,
                        id: o
                    }, "divider") : null, (0, a.jsx)(E, {
                        count: _,
                        compact: r,
                        expanded: C,
                        onClick: S,
                        collapsedReason: u
                    }, "collapsed-message-item"), C ? n.content.map((e, t) => {
                        if (e.type === h.ChannelStreamTypes.DIVIDER && t > 0) {
                            var s, i;
                            let e = null !== (i = null === (s = n.content[t + 1]) || void 0 === s ? void 0 : s.isGroupStart) && void 0 !== i && i;
                            return (0, a.jsx)(f.default, {
                                isUnread: !0,
                                isBeforeGroup: e,
                                id: o
                            }, "divider")
                        }
                        if (e.type === h.ChannelStreamTypes.MESSAGE || e.type === h.ChannelStreamTypes.THREAD_STARTER_MESSAGE) {
                            let t = e.type === h.ChannelStreamTypes.THREAD_STARTER_MESSAGE ? c.ThreadStarterChatMessage : c.default;
                            return (0, a.jsx)(t, {
                                className: p.blocked,
                                compact: r,
                                channel: l,
                                message: e.content,
                                groupId: e.groupId,
                                flashKey: e.flashKey,
                                isLastItem: !1,
                                renderContentOnly: !1
                            }, e.content.id)
                        }
                    }) : null]
                })
            })
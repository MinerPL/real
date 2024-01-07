            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007"), n("834022");
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("446674"),
                o = n("77078"),
                u = n("529805"),
                d = n("364685"),
                c = n("41170"),
                f = n("46829"),
                m = n("840817"),
                E = n("304198"),
                _ = n("599110"),
                h = n("659500"),
                p = n("315176"),
                I = n("49111"),
                T = n("782340"),
                g = n("779194");

            function C(e) {
                let {
                    message: t,
                    channel: l,
                    compact: C
                } = e, S = (0, r.useStateFromStoresArray)([d.default], () => {
                    let e = d.default.getAllGuildStickers();
                    return Array.from(e.values()).flat()
                }), A = S.slice(0, 20), [N, M] = s.useState(null);
                return (s.useEffect(() => {
                    let e = setInterval(() => {
                        A.length > 0 && M(A[Math.floor(Math.random() * A.length)])
                    }, 500);
                    return () => clearInterval(e)
                }, [A]), null == l.guild_id) ? null : (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(E.default, {
                        className: i(g.mainContainer, {
                            [g.compact]: C
                        }),
                        icon: n("127067"),
                        compact: C,
                        children: (0, a.jsx)("div", {
                            className: i(g.content, {
                                [g.compact]: C
                            }),
                            children: (0, a.jsx)("div", {
                                className: i(g.messageContent, {
                                    [g.compact]: C
                                }),
                                children: "" !== t.content ? t.content : T.default.Messages.DEADCHAT_PROMPT_1
                            })
                        })
                    }), (0, a.jsxs)("div", {
                        className: g.actions,
                        children: [(0, a.jsx)(o.TooltipContainer, {
                            text: T.default.Messages.CHANNEL_PROMPT_UPLOAD_IMAGE_CTA,
                            children: (0, a.jsx)(o.Button, {
                                color: o.Button.Colors.PRIMARY,
                                onClick: () => {
                                    _.default.track(I.AnalyticEvents.CHANNEL_PROMPT_ACTION_CLICKED, {
                                        message_id: t.id,
                                        channel_id: l.id,
                                        guild_id: l.guild_id,
                                        action_type: "upload_file"
                                    }), h.ComponentDispatch.dispatch(I.ComponentActions.UPLOAD_FILE), (0, u.createPendingReply)({
                                        message: t,
                                        channel: l,
                                        shouldMention: !0
                                    })
                                },
                                children: (0, a.jsx)(m.default, {})
                            })
                        }), (0, a.jsx)(o.TooltipContainer, {
                            text: T.default.Messages.CHANNEL_PROMPT_RANDOM_STICKER_CTA,
                            children: (0, a.jsx)(o.Button, {
                                color: o.Button.Colors.PRIMARY,
                                onClick: () => {
                                    _.default.track(I.AnalyticEvents.CHANNEL_PROMPT_ACTION_CLICKED, {
                                        message_id: t.id,
                                        channel_id: l.id,
                                        guild_id: l.guild_id,
                                        action_type: "sticker"
                                    }), (0, p.sendRandomStickerOrEmoji)(t.id, l)
                                },
                                children: null != N ? (0, a.jsx)(c.default, {
                                    size: 32,
                                    sticker: N
                                }) : (0, a.jsx)(f.default, {})
                            })
                        })]
                    })]
                })
            }
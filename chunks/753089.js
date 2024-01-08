            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007");
            var s = n("37983"),
                a = n("884691"),
                l = n("917351"),
                i = n.n(l),
                r = n("446674"),
                o = n("77078"),
                u = n("819689"),
                d = n("467094"),
                c = n("364685"),
                f = n("41170"),
                h = n("271938"),
                C = n("377253"),
                p = n("697218"),
                m = n("599110"),
                E = n("913491"),
                g = n("49111"),
                S = n("782340"),
                A = n("649755");
            let _ = "749054660769218631";

            function T(e) {
                let {
                    channel: t
                } = e, [n, l] = a.useState("");
                a.useEffect(() => {
                    (0, d.fetchStickerPack)("847199849233514549", !0)
                }, []);
                let T = (0, r.useStateFromStores)([C.default, h.default], () => !!i(C.default.getMessages(t.id).toArray()).reverse().find(e => e.author.id !== h.default.getId() && e.state === g.MessageStates.SENT && !(0, E.default)(e))),
                    M = (0, r.useStateFromStores)([p.default], () => {
                        var e, n;
                        return null !== (n = null === (e = p.default.getUser(t.isPrivate() ? t.getRecipientId() : null)) || void 0 === e ? void 0 : e.username) && void 0 !== n ? n : S.default.Messages.WAVE_DEFAULT_RECIPIENT
                    }),
                    I = (0, r.useStateFromStores)([c.default], () => c.default.getStickerById(_)),
                    N = a.useCallback(async () => {
                        if (null == n || "" === n) try {
                            await u.default.sendGreetMessage(t.id, _), m.default.track(g.AnalyticEvents.DM_EMPTY_ACTION, {
                                channel_id: t.id,
                                channel_type: t.type,
                                source: "Wave",
                                type: "Send wave"
                            })
                        } catch (e) {
                            !e.ok && 429 === e.status && l(S.default.Messages.RATE_LIMITED)
                        }
                    }, [t.id, t.type, n]),
                    v = S.default.Messages.WAVE_TO.format({
                        username: M
                    }),
                    L = null != n && "" !== n ? (0, s.jsx)(o.Text, {
                        className: A.error,
                        color: "text-danger",
                        variant: "text-sm/normal",
                        children: n
                    }) : null;
                return T ? (0, s.jsxs)("div", {
                    className: A.containerCompact,
                    children: [(0, s.jsxs)(o.Clickable, {
                        className: null != n && "" !== n ? A.compactButtonDisabled : A.compactButton,
                        "aria-label": S.default.Messages.SEND_WAVE,
                        onClick: N,
                        children: [(0, s.jsx)(f.default, {
                            sticker: I,
                            size: 24
                        }), (0, s.jsx)(o.Text, {
                            className: A.text,
                            variant: "text-md/medium",
                            children: v
                        })]
                    }), L]
                }) : (0, s.jsxs)("div", {
                    className: A.containerExpanded,
                    children: [(0, s.jsx)(f.default, {
                        sticker: I,
                        size: 160
                    }), (0, s.jsx)(o.Button, {
                        className: A.button,
                        onClick: N,
                        disabled: !!n,
                        children: v
                    }), L]
                })
            }
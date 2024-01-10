            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
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
                E = n("158998"),
                g = n("913491"),
                S = n("49111"),
                _ = n("782340"),
                A = n("649755");
            let T = "749054660769218631";

            function M(e) {
                var t;
                let {
                    channel: n
                } = e, [l, M] = s.useState("");
                s.useEffect(() => {
                    (0, d.fetchStickerPack)("847199849233514549", !0)
                }, []);
                let N = (0, r.useStateFromStores)([C.default, h.default], () => !!i(C.default.getMessages(n.id).toArray()).reverse().find(e => e.author.id !== h.default.getId() && e.state === S.MessageStates.SENT && !(0, g.default)(e))),
                    I = (0, r.useStateFromStores)([p.default], () => p.default.getUser(n.isPrivate() ? n.getRecipientId() : null)),
                    v = null !== (t = E.default.useName(I)) && void 0 !== t ? t : _.default.Messages.WAVE_DEFAULT_RECIPIENT,
                    L = (0, r.useStateFromStores)([c.default], () => c.default.getStickerById(T)),
                    R = s.useCallback(async () => {
                        if (null == l || "" === l) try {
                            await u.default.sendGreetMessage(n.id, T), m.default.track(S.AnalyticEvents.DM_EMPTY_ACTION, {
                                channel_id: n.id,
                                channel_type: n.type,
                                source: "Wave",
                                type: "Send wave"
                            })
                        } catch (e) {
                            !e.ok && 429 === e.status && M(_.default.Messages.RATE_LIMITED)
                        }
                    }, [n.id, n.type, l]),
                    x = _.default.Messages.WAVE_TO.format({
                        username: v
                    }),
                    y = null != l && "" !== l ? (0, a.jsx)(o.Text, {
                        className: A.error,
                        color: "text-danger",
                        variant: "text-sm/normal",
                        children: l
                    }) : null;
                return N ? (0, a.jsxs)("div", {
                    className: A.containerCompact,
                    children: [(0, a.jsxs)(o.Clickable, {
                        className: null != l && "" !== l ? A.compactButtonDisabled : A.compactButton,
                        "aria-label": _.default.Messages.SEND_WAVE,
                        onClick: R,
                        children: [(0, a.jsx)(f.default, {
                            sticker: L,
                            size: 24
                        }), (0, a.jsx)(o.Text, {
                            className: A.text,
                            variant: "text-md/medium",
                            children: x
                        })]
                    }), y]
                }) : (0, a.jsxs)("div", {
                    className: A.containerExpanded,
                    children: [(0, a.jsx)(f.default, {
                        sticker: L,
                        size: 160
                    }), (0, a.jsx)(o.Button, {
                        className: A.button,
                        onClick: R,
                        disabled: !!l,
                        children: x
                    }), y]
                })
            }
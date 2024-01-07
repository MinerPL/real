            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            }), n("881410"), n("222007"), n("424973");
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("917351"),
                r = n.n(i),
                o = n("446674"),
                u = n("77078"),
                d = n("191225"),
                c = n("488464"),
                f = n("998716"),
                h = n("373469"),
                C = n("42203"),
                p = n("697218"),
                m = n("316133"),
                E = n("272339"),
                g = n("82636"),
                I = n("368121"),
                S = n("228427"),
                _ = n("619911"),
                N = n("811305"),
                T = n("449008"),
                A = n("379881"),
                L = n("49111"),
                v = n("782340"),
                x = n("455547"),
                R = n("805959");

            function M(e, t) {
                return 0 === t.length ? null : (0, l.jsxs)("div", {
                    className: x.row,
                    children: [(0, l.jsx)(e, {
                        className: x.activityIcon
                    }), (0, l.jsx)(N.default, {
                        guildId: void 0,
                        users: t,
                        max: 6
                    })]
                })
            }

            function O() {
                var e, t;
                let n = (0, o.useStateFromStoresArray)([A.default, C.default], () => Object.keys(A.default.getFavoriteChannels()).map(e => C.default.getChannel(e)).filter(T.isNotNullish)),
                    a = n.map(e => e.id),
                    s = n.filter(e => e.type === L.ChannelTypes.GUILD_VOICE),
                    i = n.filter(e => e.type === L.ChannelTypes.GUILD_STAGE_VOICE).map(e => e.id),
                    v = (0, o.useStateFromStoresArray)([m.default], () => r.flatMap(s, e => {
                        let t = m.default.getVoiceStatesForChannel(e);
                        return t.map(e => {
                            let {
                                user: t
                            } = e;
                            return t
                        })
                    }), [s]),
                    R = (0, o.useStateFromStoresArray)([c.default], () => r.flatMap(i, e => {
                        let t = c.default.getMutableParticipants(e, f.StageChannelParticipantNamedIndex.SPEAKER);
                        return t.filter(e => e.type === f.StageChannelParticipantTypes.VOICE).map(e => {
                            let {
                                user: t
                            } = e;
                            return t
                        })
                    })),
                    O = (0, o.useStateFromStores)([c.default], () => {
                        let e = 0;
                        for (let t of i) e += c.default.getParticipantCount(t, f.StageChannelParticipantNamedIndex.AUDIENCE);
                        return e
                    }),
                    y = (0, o.useStateFromStoresArray)([h.default], () => h.default.getAllApplicationStreams().filter(e => a.includes(e.channelId)).map(e => e.ownerId), [a]),
                    D = (0, o.useStateFromStoresArray)([d.default], () => {
                        let e = d.default.getEmbeddedActivitiesByChannel(),
                            t = [];
                        for (let s of a) {
                            var n, l;
                            t.push(...null !== (l = null === (n = e.get(s)) || void 0 === n ? void 0 : n.flatMap(e => Array.from(e.connections.keys()))) && void 0 !== l ? l : [])
                        }
                        return t
                    }, [a]),
                    b = (0, o.useStateFromStoresArray)([p.default], () => D.map(e => p.default.getUser(e)), [D]),
                    j = (0, o.useStateFromStoresArray)([p.default], () => y.map(e => p.default.getUser(e)), [y]),
                    G = M(I.default, v.filter(e => !y.includes(e.id) && !D.includes(e.id)));
                let U = (e = R, t = O, 0 === e.length ? null : (0, l.jsxs)("div", {
                        className: x.row,
                        children: [(0, l.jsx)(S.default, {
                            className: x.activityIcon
                        }), (0, l.jsx)(N.default, {
                            guildId: void 0,
                            users: e,
                            max: 3
                        }), (0, l.jsxs)("div", {
                            className: x.stageListenerPill,
                            children: [(0, l.jsx)(E.default, {
                                width: 16,
                                height: 16
                            }), (0, l.jsx)(u.Text, {
                                className: x.stageListenerCount,
                                color: "text-normal",
                                variant: "text-xs/medium",
                                children: t
                            })]
                        })]
                    })),
                    P = M(_.default, j.filter(e => null != e && !D.includes(e.id))),
                    w = M(g.default, b);
                return (0, l.jsxs)(l.Fragment, {
                    children: [U, G, P, w]
                })
            }

            function y() {
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: s(x.row, x.rowGuildName),
                        children: (0, l.jsx)("span", {
                            className: s(x.guildNameText, x.guildNameTextLimitedSize),
                            children: v.default.Messages.FAVORITES_GUILD_NAME
                        })
                    }), (0, l.jsx)(O, {})]
                })
            }

            function D(e) {
                let {
                    "aria-label": t = !1,
                    onShow: n,
                    children: a
                } = e;
                return (0, l.jsx)(u.Tooltip, {
                    hideOnClick: !0,
                    spacing: 20,
                    position: "right",
                    text: (0, l.jsx)(y, {}),
                    "aria-label": t,
                    tooltipClassName: R.listItemTooltip,
                    onTooltipShow: n,
                    children: e => (0, l.jsx)("div", {
                        ...e,
                        children: a
                    })
                })
            }
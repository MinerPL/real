            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                l = n("414456"),
                s = n.n(l),
                o = n("90915"),
                r = n("446674"),
                d = n("77078"),
                u = n("629109"),
                c = n("406189"),
                f = n("987317"),
                h = n("412026"),
                p = n("331306"),
                g = n("679653"),
                m = n("305961"),
                E = n("42887"),
                S = n("27618"),
                v = n("697218"),
                y = n("800762"),
                C = n("783419"),
                N = n("145131"),
                O = n("293137"),
                T = n("272339"),
                I = n("200639"),
                _ = n("849467"),
                A = n("97347"),
                x = n("560995"),
                R = n("962541"),
                L = n("762489"),
                M = n("49111"),
                D = n("782340"),
                j = n("79415"),
                w = n("833076");

            function k(e) {
                let {
                    lobbyId: t
                } = e, n = (0, r.useStateFromStoresObject)([C.default], () => ({
                    connectionState: C.default.getConnectionState(t),
                    hostname: C.default.getHostname(t),
                    averagePing: C.default.getAveragePing(t),
                    lastPing: C.default.getLastPing(t),
                    pings: C.default.getPings(),
                    outboundLossRate: C.default.getOutboundLossRate(t)
                }));
                return (0, i.jsx)(p.default, {
                    ...n
                })
            }
            class b extends a.PureComponent {
                handleDisconnect() {
                    f.default.selectVoiceChannel(null)
                }
                renderLobby() {
                    return (0, i.jsx)(L.default, {
                        className: w.channel,
                        children: D.default.Messages.LOBBY
                    })
                }
                renderChannelLink(e) {
                    let {
                        guild: t
                    } = this.props, n = (0, g.computeChannelName)(e, v.default, S.default), a = null != t ? "".concat(n, " / ").concat(t.name) : n, l = null != t ? t.id : M.ME;
                    return (0, i.jsx)(o.Link, {
                        to: M.Routes.CHANNEL(l),
                        onClick: t => {
                            t.stopPropagation(), c.default.channelListScrollTo(l, e.id)
                        },
                        children: (0, i.jsx)(L.default, {
                            className: w.channel,
                            children: a
                        })
                    })
                }
                render() {
                    let {
                        className: e,
                        contentClassName: t,
                        pinned: n,
                        lobbyId: a,
                        channel: l,
                        quality: o,
                        lastPing: r,
                        hasVideo: u,
                        connectionState: c,
                        deaf: f,
                        mute: p
                    } = this.props;
                    return null == l && null == a ? null : (0, i.jsx)(x.default.Bar, {
                        className: s(e, j.controls, {
                            [j.unpinned]: !n
                        }),
                        children: (0, i.jsxs)(x.default.Content, {
                            className: s(t, j.content),
                            dynamicSize: !0,
                            children: [(0, i.jsx)("div", {
                                className: w.inner,
                                children: (0, i.jsx)(d.Popout, {
                                    renderPopout: this.renderPopout,
                                    position: "top",
                                    children: e => (0, i.jsx)(d.Clickable, {
                                        ...e,
                                        children: (0, i.jsx)(h.default, {
                                            statusTextClassName: w.statusWithPopout,
                                            quality: o,
                                            lastPing: r,
                                            hasVideo: u,
                                            state: c,
                                            children: null != l ? this.renderChannelLink(l) : this.renderLobby()
                                        })
                                    })
                                })
                            }), (0, i.jsxs)(N.default, {
                                grow: 0,
                                children: [(0, i.jsx)(R.default, {
                                    tooltipText: p ? D.default.Messages.UNMUTE : D.default.Messages.MUTE,
                                    icon: p ? A.default : _.default,
                                    iconForeground: p ? j.strikethrough : null,
                                    onClick: this.handleToggleSelfMute
                                }), (0, i.jsx)(R.default, {
                                    tooltipText: f ? D.default.Messages.UNDEAFEN : D.default.Messages.DEAFEN,
                                    icon: f ? I.default : T.default,
                                    onClick: this.handleToggleSelfDeaf,
                                    iconForeground: f ? j.strikethrough : null
                                }), null == a && (0, i.jsx)(R.default, {
                                    tooltipText: D.default.Messages.DISCONNECT_SELF,
                                    onClick: this.handleDisconnect,
                                    icon: O.default
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.handleToggleSelfMute = () => {
                        let {
                            context: e
                        } = this.props;
                        u.default.toggleSelfMute({
                            context: e
                        })
                    }, this.handleToggleSelfDeaf = () => {
                        let {
                            context: e
                        } = this.props;
                        u.default.toggleSelfDeaf({
                            context: e
                        })
                    }, this.renderPopout = () => {
                        let {
                            lobbyId: e
                        } = this.props;
                        return (0, i.jsx)(k, {
                            lobbyId: e
                        })
                    }
                }
            }

            function P(e) {
                let {
                    context: t,
                    lobbyId: n,
                    channel: a,
                    ...l
                } = e, s = (0, r.useStateFromStores)([m.default], () => m.default.getGuild(null == a ? void 0 : a.getGuildId())), o = (0, r.useStateFromStores)([y.default], () => null != a && y.default.hasVideo(a.id)), [d, u] = (0, r.useStateFromStoresArray)([E.default], () => [E.default.isSelfMute(t) || E.default.isSelfMutedTemporarily(t), E.default.isSelfDeaf(t)]), [c, f, h] = (0, r.useStateFromStoresArray)([C.default], () => [C.default.getConnectionState(n), C.default.getLastPing(n), C.default.getQuality(n)]);
                return (0, i.jsx)(b, {
                    ...l,
                    context: t,
                    lobbyId: n,
                    channel: a,
                    guild: s,
                    hasVideo: o,
                    mute: d,
                    deaf: u,
                    connectionState: c,
                    lastPing: f,
                    quality: h
                })
            }
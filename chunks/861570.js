            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("917351"),
                i = n.n(s),
                r = n("446674"),
                o = n("913144"),
                u = n("272030"),
                d = n("264732"),
                c = n("716241"),
                f = n("701916"),
                h = n("679653"),
                p = n("176347"),
                m = n("850391"),
                E = n("557809"),
                C = n("144491"),
                g = n("42203"),
                S = n("474643"),
                _ = n("305961"),
                I = n("800762"),
                T = n("664336"),
                v = n("503220"),
                x = n("648564"),
                N = n("49111"),
                A = n("782340"),
                M = n("176692");

            function R(e) {
                let {
                    channelId: t,
                    baseChannelId: s,
                    channelViewSource: R = "Split View"
                } = e, j = (0, r.useStateFromStores)([g.default], () => g.default.getChannel(t)), L = (0, r.useStateFromStores)([_.default], () => _.default.getGuild(null == j ? void 0 : j.getGuildId())), O = (0, h.default)(j);
                (function(e) {
                    let t = (0, r.useStateFromStores)([I.default], () => null != e && !i.isEmpty(I.default.getVoiceStatesForChannel(e.id)));
                    l.useEffect(() => {
                        t && null != e && (o.default.dispatch({
                            type: "SIDEBAR_CLOSE",
                            baseChannelId: e.parent_id
                        }), (0, C.transitionToThread)(e, x.OpenThreadAnalyticsLocations.VOICE_AUTO_OPEN))
                    }, [t, e])
                })(j);
                let y = l.useRef(!1);
                if (l.useEffect(() => {
                        if (null == j || y.current) return;
                        y.current = !0;
                        let e = (0, f.collectThreadMetadata)(g.default.getChannel(j.id), !0);
                        (0, c.trackWithMetadata)(N.AnalyticEvents.CHANNEL_OPENED, {
                            ...e,
                            channel_id: j.id,
                            guild_id: j.guild_id,
                            parent_id: j.parent_id,
                            channel_view: R
                        })
                    }, [j, R]), null == j || null == L) return null;
                let b = (0, a.jsx)(v.default, {
                    channel: j,
                    baseChannelId: s
                });
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(d.default, {
                        channel: j,
                        draftType: S.DraftType.ChannelMessage
                    }), (0, a.jsx)(T.default, {
                        toolbar: b,
                        "aria-label": A.default.Messages.THREAD_HEADER_BAR_A11Y_LABEL,
                        children: (0, E.renderTitle)({
                            channel: j,
                            channelName: O,
                            guild: L,
                            inSidebar: !0,
                            handleContextMenu: function(e) {
                                (0, u.openContextMenuLazy)(e, async () => {
                                    let {
                                        default: e
                                    } = await n.el("994827").then(n.bind(n, "994827"));
                                    return t => (0, a.jsx)(e, {
                                        ...t,
                                        channel: j
                                    })
                                })
                            },
                            handleClick: function() {
                                null != j && (0, C.transitionToChannel)(j.id)
                            }
                        })
                    }), (0, a.jsx)("div", {
                        className: M.chat,
                        children: (0, a.jsx)(p.default, {
                            channel: j,
                            guild: L,
                            chatInputType: m.ChatInputTypes.SIDEBAR
                        }, t)
                    })]
                })
            }
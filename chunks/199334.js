            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                o = n("77078"),
                u = n("207273"),
                d = n("367376"),
                c = n("957255"),
                f = n("98292"),
                h = n("832132"),
                C = n("599110"),
                p = n("49111"),
                m = n("782340"),
                E = n("781691"),
                g = n("632215");

            function I(e) {
                let {
                    channel: t,
                    connected: n,
                    hovered: s,
                    subtitle: I,
                    onClick: S
                } = e, _ = (0, r.useStateFromStores)([u.default], () => u.default.getChannelStatus(t)), N = null != _ && _.length > 0, T = (0, r.useStateFromStores)([c.default], () => c.default.can(p.Permissions.SET_VOICE_CHANNEL_STATUS, t)), A = null != I && I.length > 0;
                a.useEffect(() => {
                    N && C.default.track(p.AnalyticEvents.VOICE_CHANNEL_TOPIC_VIEWED, {
                        guild_id: t.guild_id,
                        channel_id: t.id
                    })
                }, [t.id, N, t.guild_id]);
                let L = (0, o.useRedesignIconContext)().enabled ? 12 : 14;
                if (null == t.guild_id) return null;
                let v = i(E.statusDiv, n && T ? E.hoverable : null);
                if (N) return (0, l.jsx)(o.Clickable, {
                    className: v,
                    onClick: T ? S : void 0,
                    children: (0, l.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        className: i(E.statusText, g.markup),
                        children: (0, l.jsx)(f.default, {
                            children: d.default.parseVoiceChannelStatus(_, !0, {
                                channelId: t.id
                            })
                        })
                    })
                });
                if (n && T && (!A || s)) return (0, l.jsxs)(o.Clickable, {
                    className: v,
                    onClick: S,
                    children: [(0, l.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        className: E.statusText,
                        children: m.default.Messages.VOICE_CHANNEL_SET_STATUS
                    }), (0, l.jsx)(h.default, {
                        className: E.pencilIcon,
                        width: L,
                        height: L
                    })]
                });
                if (A) return (0, l.jsx)(f.default, {
                    children: I
                });
                return null
            }
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("884691"),
                a = n("446674"),
                s = n("130563"),
                i = n("373469"),
                r = n("945956"),
                o = n("800762");

            function u(e) {
                var t;
                let n = (0, a.useStateFromStores)([r.default], () => r.default.getGuildId()),
                    u = e.children.map(e => e.id),
                    d = null != n && u.includes(n),
                    c = !1,
                    f = !1,
                    h = !1,
                    C = (0, a.useStateFromStores)([r.default], () => r.default.getChannelId()),
                    p = null === (t = (0, s.default)()) || void 0 === t ? void 0 : t.guild_id,
                    m = null != p && u.includes(p),
                    E = (0, a.useStateFromStores)([o.default], () => null != C && o.default.hasVideo(C), [C]),
                    g = (0, a.useStateFromStores)([i.default], () => i.default.getCurrentUserActiveStream());
                return d && (c = !E, f = E, h = null != g && null != g.guildId && u.includes(g.guildId)), l.useMemo(() => ({
                    audio: c,
                    video: f,
                    screenshare: h,
                    liveStage: m,
                    isCurrentUserConnected: d
                }), [c, f, h, m, d])
            }
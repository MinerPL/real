            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var l = a("37983"),
                n = a("884691"),
                s = a("446674"),
                i = a("77078"),
                u = a("503021"),
                d = a("757414"),
                r = a("246060");

            function o(e) {
                let {
                    guildId: t,
                    channelId: a,
                    messageId: o,
                    ...c
                } = e, {
                    unavailable: f,
                    guild: h
                } = (0, s.useStateFromStoresObject)([d.default], () => ({
                    guild: d.default.getGuild(t),
                    unavailable: d.default.hasFetchFailed(t)
                }), [t]), g = null != h, m = n.useCallback(async () => {
                    try {
                        !g && await (0, u.fetchGuildForPopout)(t)
                    } catch {}
                }, [g, t]);
                return f ? (0, l.jsx)(i.Popout, {
                    position: "right",
                    renderPopout: e => (0, l.jsx)(r.GuildUnavilableDialog, {}),
                    ...c
                }) : (0, l.jsx)(i.Popout, {
                    position: "right",
                    preload: m,
                    renderPopout: e => null == h ? (0, l.jsx)(l.Fragment, {}) : (0, l.jsx)(r.GuildDialog, {
                        ...e,
                        guild: h,
                        channelId: a,
                        messageId: o
                    }),
                    ...c
                })
            }
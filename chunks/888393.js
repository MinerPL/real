            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("687521"),
                i = n("574073"),
                r = n("304198"),
                o = n("782340");

            function u(e) {
                let {
                    children: t,
                    messageReference: n
                } = e;
                if (null == n) return (0, a.jsx)(s.Anchor, {
                    children: t
                });
                let {
                    guild_id: i,
                    channel_id: r,
                    message_id: o
                } = n;
                return null == i ? (0, a.jsx)(s.Anchor, {
                    children: t
                }) : (0, a.jsx)(l.default, {
                    guildId: i,
                    channelId: r,
                    messageId: o,
                    children: e => {
                        let {
                            "aria-controls": n,
                            "aria-expanded": l,
                            ...i
                        } = e;
                        return (0, a.jsx)(s.Anchor, {
                            ...i,
                            children: t
                        })
                    }
                })
            }

            function d(e) {
                let {
                    usernameHook: t,
                    message: s,
                    compact: l
                } = e, {
                    content: d,
                    timestamp: c,
                    messageReference: f
                } = s, m = (0, i.default)(s), E = t(m), _ = o.default.Messages.SYSTEM_MESSAGE_CHANNEL_FOLLOW_ADD_HOOK.format({
                    username: m.nick,
                    usernameHook: E,
                    webhookName: d,
                    webhookNameHook: (e, t) => (0, a.jsx)(u, {
                        messageReference: f,
                        children: e
                    }, t)
                });
                return (0, a.jsx)(r.default, {
                    icon: n("127067"),
                    timestamp: c,
                    compact: l,
                    children: _
                })
            }
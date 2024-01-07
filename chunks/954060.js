            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("574073"),
                l = n("985622"),
                i = n("304198"),
                r = n("980423"),
                o = n("782340");

            function u(e) {
                var t;
                let {
                    message: n,
                    channel: u,
                    playingActivity: d,
                    onJoinStream: c,
                    usernameHook: f,
                    compact: m
                } = e, E = (0, s.default)(n), _ = null === (t = n.call) || void 0 === t ? void 0 : t.duration, h = f(E), p = o.default.Messages.SYSTEM_MESSAGE_GUILD_STREAM_ACTIVE.format({
                    username: E.nick,
                    activityName: null != d ? d.name : "unknown",
                    onJoinStream: c,
                    usernameHook: h
                });
                return null != _ && (p = o.default.Messages.SYSTEM_MESSAGE_GUILD_STREAM_ENDED.format({
                    username: E.nick,
                    duration: _.humanize(),
                    channelName: u.name,
                    usernameHook: h
                })), (0, a.jsx)(i.default, {
                    iconNode: null != _ ? (0, a.jsx)(l.default, {
                        width: 20,
                        height: 20
                    }) : (0, a.jsx)(r.default, {
                        size: r.default.Sizes.SMALL
                    }),
                    timestamp: n.timestamp,
                    compact: m,
                    children: p
                })
            }
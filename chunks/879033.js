            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("574073"),
                l = n("304198"),
                i = n("782340");

            function r(e) {
                let t, {
                        message: r,
                        usernameHook: o,
                        otherUser: u,
                        otherUsernameHook: d,
                        compact: c,
                        channel: f
                    } = e,
                    m = (0, s.default)(r),
                    E = m.nick,
                    _ = o(m),
                    h = (0, s.useNullableUserAuthor)(u, f);
                if (null != h && null != d) {
                    let e = d(h);
                    t = i.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_HOOK.format({
                        username: E,
                        usernameHook: _,
                        otherUsername: h.nick,
                        otherUsernameHook: e
                    })
                } else t = i.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF_HOOK.format({
                    username: E,
                    usernameHook: _
                });
                return (0, a.jsx)(l.default, {
                    icon: n("226315"),
                    timestamp: r.timestamp,
                    compact: c,
                    children: t
                })
            }
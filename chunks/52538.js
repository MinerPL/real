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
                let {
                    message: t,
                    otherUsername: r,
                    usernameHook: o,
                    otherUsernameHook: u,
                    compact: d
                } = e, {
                    nick: c
                } = (0, s.default)(t), f = o(), m = u(), E = i.default.Messages.SYSTEM_MESSAGE_RECIPIENT_ADD_HOOK.format({
                    username: c,
                    usernameHook: f,
                    otherUsername: r,
                    otherUsernameHook: m
                });
                return (0, a.jsx)(l.default, {
                    icon: n("127067"),
                    timestamp: t.timestamp,
                    compact: d,
                    children: E
                })
            }
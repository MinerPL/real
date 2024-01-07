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
                    usernameHook: r,
                    compact: o
                } = e, u = (0, s.default)(t), d = r(u);
                return (0, a.jsx)(l.default, {
                    icon: n("544484"),
                    timestamp: t.timestamp,
                    compact: o,
                    children: i.default.Messages.SYSTEM_MESSAGE_CHANNEL_ICON_CHANGE_HOOK.format({
                        username: u.nick,
                        usernameHook: d
                    })
                })
            }
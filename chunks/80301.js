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
                    channel: r,
                    targetUser: o,
                    actorUsernameHook: u,
                    targetUsernameHook: d,
                    compact: c
                } = e, f = (0, s.default)(t), m = (0, s.useNullableUserAuthor)(o, r), E = u(f), _ = d(null != m ? m : void 0), h = i.default.Messages.SYSTEM_MESSAGE_THREAD_MEMBER_ADD.format({
                    actorName: f.nick,
                    actorHook: E,
                    targetName: null == m ? void 0 : m.nick,
                    targetHook: _
                });
                return (0, a.jsx)(l.default, {
                    icon: n("127067"),
                    timestamp: t.timestamp,
                    compact: c,
                    children: h
                })
            }
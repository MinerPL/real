            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("669491"),
                l = n("574073"),
                i = n("228427"),
                r = n("304198"),
                o = n("782340"),
                u = n("896393");

            function d(e) {
                let {
                    message: t,
                    compact: n,
                    usernameHook: d
                } = e, c = (0, l.default)(t), f = d(c), m = o.default.Messages.SYSTEM_MESSAGE_STAGE_START_HOOK.format({
                    username: c.nick,
                    usernameHook: f,
                    topic: t.content
                });
                return (0, a.jsx)(r.default, {
                    className: u.stageSystemMessage,
                    iconNode: (0, a.jsx)(i.default, {
                        height: 24,
                        width: 24,
                        color: s.default.unsafe_rawColors.GREEN_360.css
                    }),
                    iconContainerClassName: u.iconContainer,
                    timestamp: t.timestamp,
                    compact: n,
                    children: m
                })
            }
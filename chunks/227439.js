            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983"),
                i = n("884691"),
                u = n("93332"),
                l = n("913491");
            let o = i.memo(u.default);

            function s(e) {
                let {
                    message: t,
                    channel: n,
                    author: i,
                    compact: u,
                    animateAvatar: s,
                    guildId: a,
                    isGroupStart: d = !0,
                    roleIcon: c,
                    hideTimestamp: f
                } = e;
                return !(0, l.default)(t) && (d || u) ? (0, r.jsx)(o, {
                    message: t,
                    channel: n,
                    author: i,
                    guildId: a,
                    compact: u,
                    animate: s,
                    roleIcon: c,
                    hideTimestamp: f
                }) : void 0
            }
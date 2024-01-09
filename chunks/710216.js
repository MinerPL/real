            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("277420"),
                i = n("396856"),
                r = n("549077"),
                o = n("809168"),
                u = n("724210"),
                d = s.memo(function(e) {
                    let {
                        channel: t,
                        narrow: n
                    } = e, s = (0, i.default)(t), d = !t.isPrivate() && t.hasFlag(u.ChannelFlags.CLYDE_AI);
                    return t.isArchivedLockedThread() ? (0, a.jsx)(o.ArchivedLockedThreadNotice, {
                        channel: t,
                        narrow: n
                    }) : t.isLockedThread() ? (0, a.jsx)(o.LockedThreadNotice, {
                        channel: t,
                        narrow: n
                    }) : d ? (0, a.jsx)(l.ClydeNotice, {
                        narrow: n
                    }) : s ? (0, a.jsx)(r.default, {
                        channel: t,
                        narrow: n
                    }) : null
                })
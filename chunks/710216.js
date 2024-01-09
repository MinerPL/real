            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("277420"),
                i = n("396856"),
                r = n("549077"),
                o = n("809168"),
                u = n("724210"),
                d = a.memo(function(e) {
                    let {
                        channel: t,
                        narrow: n
                    } = e, a = (0, i.default)(t), d = !t.isPrivate() && t.hasFlag(u.ChannelFlags.CLYDE_AI);
                    return t.isArchivedLockedThread() ? (0, s.jsx)(o.ArchivedLockedThreadNotice, {
                        channel: t,
                        narrow: n
                    }) : t.isLockedThread() ? (0, s.jsx)(o.LockedThreadNotice, {
                        channel: t,
                        narrow: n
                    }) : d ? (0, s.jsx)(l.ClydeNotice, {
                        narrow: n
                    }) : a ? (0, s.jsx)(r.default, {
                        channel: t,
                        narrow: n
                    }) : null
                })
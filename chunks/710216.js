            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("277420"),
                i = n("66945"),
                r = n("247982"),
                o = n("396856"),
                u = n("549077"),
                d = n("809168"),
                c = n("724210"),
                f = s.memo(function(e) {
                    let {
                        channel: t,
                        narrow: n
                    } = e, s = (0, o.default)(t), f = !t.isPrivate() && t.hasFlag(c.ChannelFlags.CLYDE_AI), {
                        canRenderNotice: h,
                        recordNoticeRender: C
                    } = (0, i.default)(t);
                    return t.isArchivedLockedThread() ? (0, a.jsx)(d.ArchivedLockedThreadNotice, {
                        channel: t,
                        narrow: n
                    }) : t.isLockedThread() ? (0, a.jsx)(d.LockedThreadNotice, {
                        channel: t,
                        narrow: n
                    }) : f ? (0, a.jsx)(l.ClydeNotice, {
                        narrow: n
                    }) : s ? (0, a.jsx)(u.default, {
                        channel: t,
                        narrow: n
                    }) : h ? (0, a.jsx)(r.default, {
                        channel: t,
                        onChannelChange: C
                    }) : null
                })
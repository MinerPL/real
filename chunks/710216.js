            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("277420"),
                i = n("66945"),
                r = n("247982"),
                o = n("396856"),
                u = n("549077"),
                d = n("809168"),
                c = n("724210"),
                f = a.memo(function(e) {
                    let {
                        channel: t,
                        narrow: n
                    } = e, a = (0, o.default)(t), f = !t.isPrivate() && t.hasFlag(c.ChannelFlags.CLYDE_AI), {
                        canRenderNotice: h,
                        recordNoticeRender: C
                    } = (0, i.default)(t);
                    return t.isArchivedLockedThread() ? (0, s.jsx)(d.ArchivedLockedThreadNotice, {
                        channel: t,
                        narrow: n
                    }) : t.isLockedThread() ? (0, s.jsx)(d.LockedThreadNotice, {
                        channel: t,
                        narrow: n
                    }) : f ? (0, s.jsx)(l.ClydeNotice, {
                        narrow: n
                    }) : a ? (0, s.jsx)(u.default, {
                        channel: t,
                        narrow: n
                    }) : h ? (0, s.jsx)(r.default, {
                        channel: t,
                        onChannelChange: C
                    }) : null
                })
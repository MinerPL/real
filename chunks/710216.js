            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("66945"),
                i = n("247982"),
                r = n("396856"),
                o = n("549077"),
                u = n("809168"),
                d = a.memo(function(e) {
                    let {
                        channel: t,
                        narrow: n
                    } = e, a = (0, r.default)(t), {
                        canRenderNotice: d,
                        recordNoticeRender: c
                    } = (0, l.default)(t);
                    return t.isArchivedLockedThread() ? (0, s.jsx)(u.ArchivedLockedThreadNotice, {
                        channel: t,
                        narrow: n
                    }) : t.isLockedThread() ? (0, s.jsx)(u.LockedThreadNotice, {
                        channel: t,
                        narrow: n
                    }) : a ? (0, s.jsx)(o.default, {
                        channel: t,
                        narrow: n
                    }) : d ? (0, s.jsx)(i.default, {
                        channel: t,
                        onChannelChange: c
                    }) : null
                })
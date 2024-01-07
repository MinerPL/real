            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983"),
                a = n("884691"),
                r = n("414456"),
                i = n.n(r),
                s = n("77078"),
                u = n("134947"),
                o = n("913979"),
                d = n("321797");

            function c(e) {
                let {
                    guildId: t,
                    goToThread: n
                } = e, r = (0, u.useActiveGuildThreads)(t), c = a.useCallback(e => {
                    let t = r[e.row];
                    return (0, l.jsx)(o.default, {
                        threadId: t,
                        goToThread: n,
                        showChannelName: !0
                    }, "".concat(e.section, "-").concat(e.row))
                }, [r, n]);
                return (0, l.jsx)(s.List, {
                    className: i(d.list, d.activeThreadsList),
                    fade: !0,
                    sections: [r.length],
                    renderSection: () => null,
                    sectionHeight: 0,
                    rowHeight: 80,
                    renderRow: c,
                    chunkSize: 20
                })
            }
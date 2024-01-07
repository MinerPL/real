            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var s = a("37983"),
                r = a("884691"),
                l = a("414456"),
                n = a.n(l),
                d = a("77078"),
                u = a("722602"),
                i = a("913979"),
                o = a("782340"),
                c = a("321797");

            function f(e) {
                let {
                    channel: t,
                    threadIds: a,
                    startThread: l,
                    goToThread: f
                } = e, h = r.useCallback(e => (0, s.jsx)(i.default, {
                    threadId: a[e.row],
                    goToThread: f
                }, "".concat(e.section, "-").concat(e.row)), [a, f]);
                return 0 === a.length ? (0, s.jsx)(u.default, {
                    channel: t,
                    header: o.default.Messages.THREAD_BROWSER_EMPTY_STATE_HEADER,
                    startThread: l
                }) : (0, s.jsx)(d.List, {
                    className: n(c.list, c.activeThreadsList),
                    fade: !0,
                    sections: [a.length],
                    sectionHeight: 0,
                    rowHeight: 80,
                    renderRow: h,
                    renderSection: () => null,
                    chunkSize: 20
                })
            }
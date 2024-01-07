            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                l = n.n(s),
                i = n("77078"),
                r = n("278915"),
                o = e => {
                    let {
                        renderTitle: t,
                        renderTagline: n,
                        renderActions: s,
                        renderMedia: o,
                        className: u,
                        isHorizontal: d = !1
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: l(r.tile, {
                            [r.tileHorizontal]: d
                        }, u),
                        children: [(0, a.jsx)("div", {
                            className: l(r.media, {
                                [r.mediaHorizontal]: d
                            }),
                            children: null == o ? void 0 : o()
                        }), (0, a.jsxs)("div", {
                            className: r.description,
                            children: [(0, a.jsx)(i.H, {
                                className: r.title,
                                children: null == t ? void 0 : t()
                            }), (0, a.jsx)("div", {
                                className: r.tagline,
                                children: null == n ? void 0 : n()
                            }), (0, a.jsx)("div", {
                                className: r.actions,
                                children: null == s ? void 0 : s()
                            })]
                        })]
                    })
                }
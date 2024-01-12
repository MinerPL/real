            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                r = l("77078"),
                i = l("258078"),
                u = l("549043");

            function d(e) {
                let {
                    steps: t,
                    stepIndex: l,
                    onClick: a
                } = e;
                return (0, n.jsx)("div", {
                    className: u.container,
                    children: t.map((e, t) => {
                        let d = l === t;
                        return (0, n.jsxs)(r.Clickable, {
                            onClick: () => a(t),
                            className: u.stepContainer,
                            children: [(0, n.jsx)("div", {
                                className: s(u.progressBar, {
                                    [u.selectedProgressBar]: d
                                })
                            }), (0, n.jsx)(i.default, {
                                color: d ? i.default.Colors.BRAND : i.default.Colors.MUTED,
                                size: i.default.Sizes.SIZE_12,
                                children: e
                            })]
                        }, e)
                    })
                })
            }
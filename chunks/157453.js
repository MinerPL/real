            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                i = l("77078"),
                r = l("272829");

            function o(e) {
                let {
                    bar: t,
                    children: l,
                    className: a,
                    inModal: o,
                    title: d
                } = e;
                return (0, n.jsxs)(i.Card, {
                    editable: !0,
                    className: s(r.card, a, {
                        [r.inModal]: o
                    }),
                    children: [(0, n.jsxs)("div", {
                        className: s(r.cardHeader, {
                            [r.inModal]: o
                        }),
                        children: [(0, n.jsx)(i.Text, {
                            variant: "text-xs/semibold",
                            className: r.title,
                            children: d
                        }), (0, n.jsx)("div", {
                            children: t
                        })]
                    }), o ? (0, n.jsx)(i.FormDivider, {}) : null, l]
                })
            }
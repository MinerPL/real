            "use strict";
            a.r(t), a.d(t, {
                Separator: function() {
                    return o
                },
                Button: function() {
                    return d
                },
                default: function() {
                    return u
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("414456"),
                n = a.n(s),
                i = a("77078"),
                r = a("412066");

            function o(e) {
                let {
                    className: t
                } = e;
                return (0, l.jsx)("div", {
                    className: n(t, r.separator)
                })
            }

            function d(e) {
                let {
                    onClick: t,
                    onContextMenu: a,
                    className: s,
                    selected: o = !1,
                    children: d,
                    disabled: u = !1,
                    dangerous: c,
                    ...m
                } = e;
                return (0, l.jsx)(i.Clickable, {
                    onClick: u ? void 0 : t,
                    onContextMenu: u ? void 0 : a,
                    className: n(s, {
                        [r.button]: !0,
                        [r.selected]: o,
                        [r.disabled]: u,
                        [r.dangerous]: c
                    }),
                    ...m,
                    children: d
                })
            }
            var u = function(e) {
                let {
                    className: t,
                    children: a
                } = e;
                return (0, l.jsx)("div", {
                    className: n(t, r.wrapper),
                    children: a
                })
            }
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                o = n("77078"),
                s = n("258078"),
                a = n("504515");

            function u(e) {
                var t;
                let {
                    name: n,
                    className: i,
                    state: u,
                    isInline: d,
                    onClick: c
                } = e, f = null, p = s.default.Colors.HEADER_PRIMARY;
                (null == u ? void 0 : u.isActive) && !d ? f = a.active : (null == u ? void 0 : null === (t = u.lastValidationResult) || void 0 === t ? void 0 : t.success) === !1 ? f = a.error : (null == u ? void 0 : u.hasValue) && !d && (f = a.set);
                let m = (0, l.jsx)(s.default, {
                    size: d ? s.default.Sizes.SIZE_16 : s.default.Sizes.SIZE_14,
                    color: p,
                    className: r(a.option, {
                        [a.inline]: d
                    }, f, i),
                    children: n + (d ? ":" : "")
                });
                return null == c ? m : (0, l.jsx)(o.Clickable, {
                    className: a.clickable,
                    onClick: () => c(n),
                    children: m
                })
            }
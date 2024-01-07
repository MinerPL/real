            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                a = n("426656"),
                o = n("851706");
            let l = Object.freeze({
                    STANDARD: a.colorStandard,
                    MUTED: a.colorMuted,
                    ERROR: a.colorError,
                    BRAND: a.colorBrand,
                    LINK: a.colorLink,
                    HEADER_PRIMARY: a.colorHeaderPrimary,
                    HEADER_SECONDARY: a.colorHeaderSecondary,
                    STATUS_YELLOW: a.colorStatusYellow,
                    STATUS_GREEN: a.colorStatusGreen,
                    STATUS_RED: a.colorStatusRed,
                    INTERACTIVE_ACTIVE: a.colorInteractiveActive,
                    INTERACTIVE_NORMAL: a.colorInteractiveNormal,
                    ALWAYS_WHITE: a.colorWhite,
                    CUSTOM: null
                }),
                u = Object.freeze({
                    SIZE_10: o.size10,
                    SIZE_12: o.size12,
                    SIZE_14: o.size14,
                    SIZE_16: o.size16,
                    SIZE_20: o.size20,
                    SIZE_24: o.size24,
                    SIZE_32: o.size32
                }),
                c = e => {
                    let {
                        className: t,
                        color: n = l.STANDARD,
                        size: r = u.SIZE_14,
                        tag: o = "div",
                        selectable: c = !1,
                        strong: d = !1,
                        children: f,
                        style: E,
                        "aria-label": h,
                        ...p
                    } = e;
                    return (0, i.jsx)(o, {
                        "aria-label": h,
                        className: s(n, r, t, {
                            [a.selectable]: c,
                            [a.strong]: d
                        }),
                        style: E,
                        ...p,
                        children: f
                    })
                };
            c.Colors = l, c.Sizes = u;
            var d = c
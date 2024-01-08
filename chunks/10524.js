            "use strict";
            n.r(t), n.d(t, {
                MaskColor: function() {
                    return l
                },
                FreeActivityIndicatorDot: function() {
                    return o
                }
            });
            var a, l, s = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                u = n("421723");
            (a = l || (l = {}))[a.POPOUT = 0] = "POPOUT", a[a.SECONDARY = 1] = "SECONDARY", a[a.BLACK = 2] = "BLACK";
            let o = e => {
                let {
                    left: t,
                    top: n = 0,
                    right: a = 0,
                    bottom: l,
                    size: i = 8,
                    alert: o = !1,
                    maskColor: d = 1
                } = e;
                return (0, s.jsx)("span", {
                    className: r(u.dot, {
                        [u.alert]: o,
                        [u.maskPopout]: 0 === d,
                        [u.maskSecondary]: 1 === d,
                        [u.maskBlack]: 2 === d
                    }),
                    style: {
                        height: i,
                        width: i,
                        left: t,
                        top: n,
                        right: a,
                        bottom: l
                    }
                })
            }
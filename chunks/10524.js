            "use strict";
            n.r(t), n.d(t, {
                MaskColor: function() {
                    return l
                },
                FreeActivityIndicatorDot: function() {
                    return u
                }
            });
            var a, l, s = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                o = n("421723");
            (a = l || (l = {}))[a.POPOUT = 0] = "POPOUT", a[a.SECONDARY = 1] = "SECONDARY", a[a.BLACK = 2] = "BLACK";
            let u = e => {
                let {
                    left: t,
                    top: n = 0,
                    right: a = 0,
                    bottom: l,
                    size: i = 8,
                    alert: u = !1,
                    maskColor: d = 1
                } = e;
                return (0, s.jsx)("span", {
                    className: r(o.dot, {
                        [o.alert]: u,
                        [o.maskPopout]: 0 === d,
                        [o.maskSecondary]: 1 === d,
                        [o.maskBlack]: 2 === d
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
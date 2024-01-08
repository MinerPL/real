            "use strict";
            n.r(t), n.d(t, {
                CallTileCTA: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                r = n.n(s),
                i = n("77078"),
                l = n("796863");

            function u(e) {
                let {
                    children: t,
                    onClick: n,
                    className: s,
                    tooltip: u
                } = e;
                return (0, a.jsx)(i.Tooltip, {
                    text: u,
                    children: e => {
                        let {
                            onClick: u,
                            ...o
                        } = e;
                        return (0, a.jsx)(i.Button, {
                            ...o,
                            onClick: e => {
                                null == n || n(e), null == u || u()
                            },
                            innerClassName: l.buttonReset,
                            color: r(l.cta, s),
                            size: i.Button.Sizes.MIN,
                            children: t
                        })
                    }
                })
            }
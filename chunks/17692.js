            "use strict";
            A.r(t), A.d(t, {
                default: function() {
                    return u
                }
            });
            var a = A("37983"),
                l = A("884691"),
                n = A("414456"),
                r = A.n(n),
                s = A("77078"),
                o = A("931164"),
                i = A("289162"),
                d = A("632215");

            function u(e) {
                let {
                    color: t,
                    className: A,
                    variant: n,
                    text: u,
                    lineClamp: c
                } = e, f = (0, s.usePrivateHeadingLevel)(), C = l.useMemo(() => null == u ? null : (0, o.default)(u, !0, {
                    allowHeading: null == c,
                    allowList: null == c,
                    initialHeaderLevel: f
                }), [u, c, f]);
                return (0, a.jsx)(s.Text, {
                    className: r(A, d.markup, {
                        [i.lineClamp2Plus]: null != c && c > 1,
                        [i.lineClamp1]: 1 === c
                    }),
                    color: t,
                    variant: n,
                    lineClamp: c,
                    children: C
                })
            }
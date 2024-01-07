            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var i = l("37983");
            l("884691");
            var a = l("414456"),
                n = l.n(a),
                s = l("77078"),
                r = l("455936");

            function c(e) {
                let {
                    loading: t,
                    children: l
                } = e;
                return (0, i.jsxs)("div", {
                    className: r.container,
                    children: [t ? (0, i.jsx)("div", {
                        className: r.spinnerContainer,
                        children: (0, i.jsx)(s.Spinner, {
                            className: r.spinner,
                            type: s.Spinner.Type.SPINNING_CIRCLE
                        })
                    }) : null, (0, i.jsx)("div", {
                        className: n({
                            [r.loading]: t
                        }),
                        children: l
                    })]
                })
            }
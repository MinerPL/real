            "use strict";
            n.r(t), n.d(t, {
                FormSection: function() {
                    return u
                }
            });
            var i = n("37983"),
                r = n("884691"),
                s = n("860226"),
                a = n("516826"),
                o = n("818810"),
                l = n("364005");

            function u(e) {
                var t;
                let {
                    children: n,
                    className: u,
                    titleClassName: c,
                    title: d,
                    icon: f,
                    disabled: E,
                    htmlFor: h,
                    tag: p = "h5",
                    ..._
                } = e, S = r.useId(), m = null !== (t = _.titleId) && void 0 !== t ? t : S;
                return null != d ? (0, i.jsx)("div", {
                    className: u,
                    children: (0, i.jsx)(s.HeadingLevel, {
                        component: (0, i.jsxs)("div", {
                            className: l.sectionTitle,
                            children: [f, null != d ? (0, i.jsx)(o.FormTitle, {
                                tag: p,
                                id: m,
                                htmlFor: h,
                                disabled: E,
                                className: c,
                                children: d
                            }) : null]
                        }),
                        children: (0, i.jsx)("div", {
                            className: l.children,
                            children: (0, i.jsx)(a.FormContextProvider, {
                                titleId: m,
                                children: n
                            })
                        })
                    })
                }) : (0, i.jsx)("div", {
                    className: u,
                    children: n
                })
            }
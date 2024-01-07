            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("917351"),
                o = n.n(r),
                s = n("355263"),
                a = n("406122"),
                u = e => {
                    let {
                        showImage: t
                    } = e, {
                        usageWidth: n,
                        descriptionWidth: r,
                        sourceWidth: u
                    } = i.useMemo(() => ({
                        usageWidth: o.random(60, 120),
                        descriptionWidth: o.random(200, 600),
                        sourceWidth: o.random(45, 90)
                    }), []);
                    return (0, l.jsxs)("div", {
                        className: a.wrapper,
                        children: [t ? (0, l.jsx)("div", {
                            className: a.image
                        }) : null, (0, l.jsxs)("div", {
                            className: a.infoWrapper,
                            children: [(0, l.jsx)("div", {
                                style: {
                                    maxWidth: (0, s.pxToRem)(n)
                                },
                                className: a.usageWrapper
                            }), (0, l.jsx)("div", {
                                style: {
                                    maxWidth: (0, s.pxToRem)(r)
                                },
                                className: a.description
                            })]
                        }), (0, l.jsx)("div", {
                            style: {
                                width: (0, s.pxToRem)(u)
                            },
                            className: a.source
                        })]
                    })
                }
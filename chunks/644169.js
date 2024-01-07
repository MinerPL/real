            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                r = l.n(s),
                i = l("77078"),
                u = l("321443"),
                o = l("770420"),
                d = l("348004");

            function c(e) {
                let {
                    title: t,
                    scrollerClassName: l,
                    scrollerInnerClassName: s,
                    children: c
                } = e, f = a.useRef(null), [m, S] = a.useState(!1), [C, E] = a.useState(!1), h = a.useCallback(() => {
                    let {
                        current: e
                    } = f;
                    null != e && (S(!e.isScrolledToTop()), E(!e.isScrolledToBottom()))
                }, []);
                return a.useLayoutEffect(() => h(), []), (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: r(d.title, d.scrollWrapper),
                        children: [(0, n.jsx)(i.FormTitle, {
                            className: o.formItemTitle,
                            children: t
                        }), (0, n.jsx)(u.default, {
                            separator: m
                        })]
                    }), (0, n.jsx)("div", {
                        className: l,
                        children: (0, n.jsx)(i.AdvancedScroller, {
                            ref: f,
                            className: r(d.scrollerInner, s, {
                                [d.bottomSeparator]: C
                            }),
                            onScroll: h,
                            children: c
                        })
                    })]
                })
            }
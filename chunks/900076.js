            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                i = n("394846"),
                r = n("77078"),
                o = n("548683"),
                u = n("158238");

            function d(e) {
                let {
                    guildId: t,
                    children: n,
                    className: l
                } = e, {
                    horizontalScrollNotice: d,
                    handleScroll: c,
                    handleSetScrollerRef: f,
                    handleSetContainerRef: h
                } = (0, o.default)(t), p = (0, a.jsx)("div", {
                    className: u.tierPreviewsContainer,
                    children: (0, a.jsx)("div", {
                        className: s(u.tierPreviews, l),
                        children: n
                    })
                });
                return !i.isMobile && (p = (0, a.jsxs)(a.Fragment, {
                    children: [d, (0, a.jsx)(r.AdvancedScroller, {
                        className: u.scroller,
                        orientation: "horizontal",
                        ref: f,
                        onScroll: c,
                        children: p
                    })]
                })), (0, a.jsx)("div", {
                    className: u.carouselMaxWidth,
                    ref: h,
                    children: p
                })
            }
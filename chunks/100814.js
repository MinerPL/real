            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var s = n("37983");
            n("884691");
            var o = n("414456"),
                i = n.n(o),
                r = n("77078"),
                a = n("439437"),
                l = n("398137");

            function c(t) {
                let {
                    className: e,
                    transitionState: n,
                    items: o,
                    startingIndex: c,
                    onClose: u,
                    onIndexChange: d,
                    modalCarouselClassName: p,
                    modalCarouselItemClassName: h
                } = t;
                return (0, s.jsx)(r.ModalRoot, {
                    hideShadow: !0,
                    className: i(l.carouselModal, e),
                    size: r.ModalSize.DYNAMIC,
                    transitionState: n,
                    "aria-label": "",
                    onClick: u,
                    children: (0, s.jsx)(a.default, {
                        className: p,
                        items: o,
                        startWith: c,
                        onIndexChange: d,
                        modalCarouselItemClassName: h
                    })
                })
            }
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("414456"),
                r = l.n(s),
                n = l("451594"),
                o = l("927694"),
                i = l("395535"),
                u = l("492666");
            let c = () => 4 * Math.random() + 8,
                d = [c(), c(), c()];
            var f = () => (0, a.jsx)(a.Fragment, {
                children: d.map(e => (0, a.jsxs)("div", {
                    className: n.cardsContainer,
                    children: [(0, a.jsx)("div", {
                        className: r(u.skeleton, o.shopBanner),
                        children: (0, a.jsx)("div", {
                            className: u.bannerBody
                        })
                    }), Array.from({
                        length: e
                    }, (e, t) => t).map(e => (0, a.jsx)("div", {
                        className: r(u.skeleton, i.shopCard),
                        children: (0, a.jsxs)("div", {
                            className: u.cardBody,
                            children: [(0, a.jsx)("div", {
                                className: u.cardAvatar
                            }), (0, a.jsx)("div", {
                                className: u.cardTitle
                            }), (0, a.jsx)("div", {
                                className: u.cardDescription
                            }), (0, a.jsx)("div", {
                                className: u.cardSummary
                            })]
                        })
                    }, e))]
                }, e))
            })
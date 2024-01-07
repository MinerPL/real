            "use strict";
            l.r(t), l.d(t, {
                openCollectiblesShopProductDetailsModal: function() {
                    return n
                },
                closeCollectiblesShopProductDetailsModal: function() {
                    return o
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("77078");
            let r = "collectibles shop product details modal",
                n = e => {
                    let {
                        product: t,
                        category: n,
                        analyticsSource: o,
                        analyticsLocations: i,
                        returnRef: u
                    } = e;
                    (0, s.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await l.el("179047").then(l.bind(l, "179047"));
                        return l => (0, a.jsx)(e, {
                            ...l,
                            product: t,
                            category: n,
                            analyticsSource: o,
                            analyticsLocations: i,
                            returnRef: u
                        })
                    }, {
                        modalKey: r
                    })
                },
                o = () => {
                    (0, s.closeModal)(r)
                }
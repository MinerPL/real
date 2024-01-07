            "use strict";
            r.r(t), r.d(t, {
                openCollectiblesShop: function() {
                    return d
                },
                closeCollectiblesShop: function() {
                    return E
                },
                productDetailsOpened: function() {
                    return _
                },
                fetchCollectiblesCategories: function() {
                    return f
                },
                fetchCollectiblesPurchases: function() {
                    return C
                },
                fetchCollectiblesProduct: function() {
                    return I
                },
                claimPremiumCollectiblesProduct: function() {
                    return A
                },
                validateCollectiblesRecipient: function() {
                    return S
                },
                setCollectiblesCategoryItemsViewed: function() {
                    return p
                }
            });
            var a = r("872717"),
                n = r("913144"),
                s = r("54239"),
                i = r("448993"),
                u = r("514296"),
                l = r("407788"),
                o = r("489134"),
                c = r("49111");
            r("853987"), r("426497"), r("775416"), r("216719");
            let d = e => {
                    let {
                        openInLayer: t = !0,
                        ...r
                    } = e;
                    n.default.dispatch({
                        type: "COLLECTIBLES_SHOP_OPEN",
                        ...r
                    }), t && (0, s.pushLayer)(c.Layers.COLLECTIBLES_SHOP)
                },
                E = () => {
                    n.default.dispatch({
                        type: "COLLECTIBLES_SHOP_CLOSE"
                    }), (0, s.popLayer)()
                },
                _ = e => {
                    n.default.dispatch({
                        type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN",
                        item: e
                    })
                },
                f = async () => {
                    n.default.dispatch({
                        type: "COLLECTIBLES_CATEGORIES_FETCH"
                    });
                    try {
                        let e = await a.default.get(c.Endpoints.COLLECTIBLES_CATEGORIES);
                        n.default.dispatch({
                            type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
                            categories: e.body.map(u.default.fromServer)
                        })
                    } catch (e) {
                        throw n.default.dispatch({
                            type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE",
                            error: e
                        }), new i.APIError(e)
                    }
                }, C = async () => {
                    n.default.dispatch({
                        type: "COLLECTIBLES_PURCHASES_FETCH"
                    });
                    try {
                        let e = await a.default.get(c.Endpoints.COLLECTIBLES_PURCHASES);
                        n.default.dispatch({
                            type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
                            purchases: e.body.map(o.default.fromServer)
                        })
                    } catch (e) {
                        throw n.default.dispatch({
                            type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE",
                            error: e
                        }), new i.APIError(e)
                    }
                }, I = async e => {
                    n.default.dispatch({
                        type: "COLLECTIBLES_PRODUCT_FETCH"
                    });
                    try {
                        let t = await a.default.get(c.Endpoints.COLLECTIBLES_PRODUCTS(e));
                        n.default.dispatch({
                            type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
                            product: l.default.fromServer(t.body)
                        })
                    } catch (e) {
                        throw n.default.dispatch({
                            type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE",
                            error: e
                        }), new i.APIError(e)
                    }
                }, A = async e => {
                    n.default.dispatch({
                        type: "COLLECTIBLES_CLAIM",
                        skuId: e
                    });
                    try {
                        var t;
                        let r = await a.default.put({
                            url: c.Endpoints.COLLECTIBLES_CLAIM,
                            body: {
                                sku_id: e
                            }
                        });
                        n.default.dispatch({
                            type: "COLLECTIBLES_CLAIM_SUCCESS",
                            skuId: e,
                            purchases: null === (t = r.body) || void 0 === t ? void 0 : t.map(o.default.fromServer)
                        })
                    } catch (t) {
                        throw n.default.dispatch({
                            type: "COLLECTIBLES_CLAIM_FAILURE",
                            skuId: e,
                            error: t
                        }), new i.APIError(t)
                    }
                }, S = async (e, t) => {
                    try {
                        let r = await a.default.get({
                            url: c.Endpoints.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                            query: {
                                sku_id: t,
                                recipient_id: e
                            }
                        });
                        return r.body.valid
                    } catch (e) {
                        throw new i.APIError(e)
                    }
                }, p = e => {
                    n.default.dispatch({
                        type: "COLLECTIBLES_CATEGORY_ITEMS_VIEWED",
                        ...e
                    })
                }
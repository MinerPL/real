            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("222007");
            var i = n("65597"),
                r = n("853987"),
                u = n("775416"),
                a = e => {
                    let [t, n] = (0, i.useStateFromStoresArray)([r.default], () => [r.default.getCategoryForProduct(e), r.default.getProduct(e)]), a = (0, i.default)([u.default], () => u.default.getPurchase(e));
                    return {
                        category: t,
                        product: n,
                        purchase: a
                    }
                }
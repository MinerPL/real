            "use strict";
            l.r(t), l.d(t, {
                usePurchasedProductsSort: function() {
                    return n
                }
            }), l("222007"), l("424973");
            var a = l("884691"),
                s = l("65597"),
                r = l("775416");
            let n = e => {
                let t = (0, s.default)([r.default], () => r.default.purchases),
                    l = (0, a.useMemo)(() => {
                        let l = [],
                            a = [];
                        for (let s of e.values()) void 0 !== t.get(s.skuId) ? l.push(s) : a.push(s);
                        return a.concat(l)
                    }, [e, t]);
                return l
            }
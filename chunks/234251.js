            "use strict";
            n.r(t), n.d(t, {
                isAnimatedAvatarDecoration: function() {
                    return i
                },
                isEqualAvatarDecoration: function() {
                    return r
                },
                parseAvatarDecorationData: function() {
                    return s
                }
            });
            let i = e => e.split("_", 2).includes("a"),
                r = (e, t) => null == e || null == t ? e === t : e.asset === t.asset && e.skuId === t.skuId,
                s = e => "object" == typeof e && null != e && "asset" in e && "string" == typeof e.asset ? "sku_id" in e && "string" == typeof e.sku_id ? {
                    asset: e.asset,
                    skuId: e.sku_id
                } : "skuId" in e && "string" == typeof e.skuId ? {
                    asset: e.asset,
                    skuId: e.skuId
                } : {
                    asset: e.asset
                } : null
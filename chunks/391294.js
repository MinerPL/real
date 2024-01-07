            "use strict";
            a.r(t), a.d(t, {
                getSkuHeaderText: function() {
                    return n
                }
            });
            var s = a("49111"),
                l = a("782340");

            function n(e, t) {
                if (e) return l.default.Messages.APPLICATION_STORE_PURCHASE_IAP;
                switch (t) {
                    case s.SKUTypes.DURABLE_PRIMARY:
                        return l.default.Messages.APPLICATION_STORE_PURCHASE_APPLICATION;
                    case s.SKUTypes.DURABLE:
                        return l.default.Messages.APPLICATION_STORE_PURCHASE_DLC;
                    case s.SKUTypes.CONSUMABLE:
                        return l.default.Messages.APPLICATION_STORE_PURCHASE_CONSUMABLE;
                    case s.SKUTypes.BUNDLE:
                        return l.default.Messages.APPLICATION_STORE_PURCHASE_BUNDLE
                }
            }
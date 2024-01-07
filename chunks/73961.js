            "use strict";
            n.r(t), n.d(t, {
                openPurchaseConfirmationModal: function() {
                    return l
                },
                closePurchaseConfirmationModal: function() {
                    return i
                }
            });
            var a = n("913144"),
                s = n("49111");

            function l(e, t, n) {
                let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return new Promise((i, r) => {
                    a.default.dispatch({
                        type: "PURCHASE_CONFIRMATION_MODAL_OPEN",
                        applicationId: e,
                        skuId: t,
                        entitlements: n,
                        context: null != l.context ? l.context : s.AppContext.APP,
                        analyticsSource: l.analyticsSource,
                        resolve: i,
                        reject: r
                    })
                })
            }

            function i() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                a.default.dispatch({
                    type: "PURCHASE_CONFIRMATION_MODAL_CLOSE",
                    error: e
                })
            }
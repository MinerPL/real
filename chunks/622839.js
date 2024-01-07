            "use strict";
            let u, i;
            n.r(e), n.d(e, {
                NO_PAYMENT_SOURCE: function() {
                    return o
                },
                default: function() {
                    return M
                }
            }), n("222007");
            var r = n("446674"),
                l = n("913144"),
                a = n("49111");
            let o = "no_payment_source",
                s = null,
                c = null,
                S = null,
                d = null,
                E = null,
                f = {},
                _ = null,
                T = !1,
                I = null,
                A = !1,
                p = !1,
                C = !1,
                P = !1,
                N = null,
                R = new Set;

            function U(t) {
                null != u && null != _ ? u(_) : null != i && i(t), u = null, i = null
            }
            class L extends r.default.Store {
                getPricesForSku(t) {
                    return f[t]
                }
                isOpen() {
                    let t = __OVERLAY__ ? a.AppContext.OVERLAY : a.AppContext.APP;
                    return N === t && C
                }
                get isPurchasingSKU() {
                    return T
                }
                get forceConfirmationStepOnMount() {
                    return A
                }
                get error() {
                    return I
                }
                get skuId() {
                    return s
                }
                get applicationId() {
                    return S
                }
                get analyticsLocation() {
                    return d
                }
                get promotionId() {
                    return E
                }
                get isIAP() {
                    return p
                }
                get giftCode() {
                    return c
                }
                get isGift() {
                    return P
                }
                isFetchingSKU(t) {
                    return R.has(t)
                }
            }
            L.displayName = "SKUPaymentModalStore";
            var M = new L(l.default, {
                SKU_PURCHASE_MODAL_OPEN: function(t) {
                    U(), s = t.skuId, S = t.applicationId, p = t.isIAP, d = t.analyticsLocation, N = t.context, P = t.isGift, C = !0, A = !1, u = t.resolve, i = t.reject, I = null, _ = null, E = t.promotionId
                },
                SKU_PURCHASE_MODAL_CLOSE: function(t) {
                    let {
                        error: e
                    } = t;
                    C = !1, N = null, U(e)
                },
                SKU_PURCHASE_PREVIEW_FETCH: function(t) {
                    let {
                        skuId: e
                    } = t;
                    R.add(e)
                },
                SKU_PURCHASE_PREVIEW_FETCH_SUCCESS: function(t) {
                    let {
                        skuId: e,
                        paymentSourceId: n,
                        price: u
                    } = t;
                    f = {
                        ...f,
                        [e]: {
                            ...f[e],
                            [null != n ? n : o]: u
                        }
                    }, R.delete(e)
                },
                SKU_PURCHASE_PREVIEW_FETCH_FAILURE: function(t) {
                    let {
                        skuId: e
                    } = t;
                    R.delete(e)
                },
                SKU_PURCHASE_START: function() {
                    T = !0
                },
                SKU_PURCHASE_SUCCESS: function(t) {
                    let {
                        entitlements: e,
                        giftCode: n
                    } = t;
                    T = !1, _ = e, c = n
                },
                SKU_PURCHASE_FAIL: function(t) {
                    let {
                        error: e
                    } = t;
                    T = !1, I = e
                },
                SKU_PURCHASE_SHOW_CONFIRMATION_STEP: function() {
                    A = !0
                },
                SKU_PURCHASE_CLEAR_ERROR: function() {
                    I = null
                },
                SKU_PURCHASE_UPDATE_IS_GIFT: function(t) {
                    P = t.isGift
                },
                OVERLAY_SET_INPUT_LOCKED: function(t) {
                    let {
                        locked: e
                    } = t;
                    if (!e || null == N) return !1;
                    C = !1, N = null, U()
                },
                GIFT_CODE_CREATE: function(t) {
                    let {
                        giftCode: e
                    } = t;
                    if (0 !== e.uses || e.sku_id !== s) return !1;
                    c = e.code
                }
            })
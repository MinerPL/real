            "use strict";
            let l, a;
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("77078"),
                r = n("913144"),
                o = n("73961"),
                u = n("49111");
            let d = null,
                c = null;

            function f(e) {
                null != l && null != d ? l(d) : null != a && a(e), l = null, a = null
            }
            var h = {
                init() {
                    r.default.subscribe("PURCHASE_CONFIRMATION_MODAL_OPEN", e => {
                        if (f(), c = e.context, d = e.entitlements, l = e.resolve, a = e.reject, u.CURRENT_APP_CONTEXT === e.context) {
                            var t, r, h, C;
                            let l;
                            t = e.context, r = e.applicationId, h = e.skuId, C = e.analyticsSource, l = null, (0, i.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("380140").then(n.bind(n, "380140"));
                                return n => {
                                    let {
                                        onClose: a,
                                        ...i
                                    } = n;
                                    return (0, s.jsx)(e, {
                                        ...i,
                                        onClose: function() {
                                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                                            l = e, a()
                                        },
                                        applicationId: r,
                                        skuId: h,
                                        analyticsSource: C,
                                        isIAP: t === u.AppContext.OVERLAY
                                    })
                                }
                            }, {
                                onCloseCallback: () => {
                                    (0, o.closePurchaseConfirmationModal)(l)
                                }
                            })
                        }
                    }), r.default.subscribe("PURCHASE_CONFIRMATION_MODAL_CLOSE", e => {
                        let {
                            error: t
                        } = e;
                        c = null, f(t)
                    }), r.default.subscribe("OVERLAY_SET_INPUT_LOCKED", e => {
                        let {
                            locked: t
                        } = e;
                        t && null != c && (c = null, f())
                    })
                }
            }
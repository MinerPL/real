            "use strict";
            let l, a;
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("77078"),
                r = n("913144"),
                o = n("427495"),
                u = n("49111");
            let d = null;

            function c(e) {
                null != l && e ? l() : null != a && a(), l = null, a = null
            }
            var f = {
                init() {
                    r.default.subscribe("PREMIUM_REQUIRED_MODAL_OPEN", e => {
                        if (c(!1), d = e.context, l = e.resolve, a = e.reject, u.CURRENT_APP_CONTEXT === e.context) {
                            let e;
                            e = !1, (0, i.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await n.el("999391").then(n.bind(n, "999391"));
                                return n => {
                                    let {
                                        onClose: l,
                                        ...a
                                    } = n;
                                    return (0, s.jsx)(t, {
                                        ...a,
                                        onClose: t => {
                                            e = t, l()
                                        }
                                    })
                                }
                            }, {
                                onCloseCallback: () => {
                                    (0, o.closeModal)(e)
                                }
                            })
                        }
                    }), r.default.subscribe("PREMIUM_REQUIRED_MODAL_CLOSE", e => {
                        let {
                            shouldContinue: t
                        } = e;
                        d = null, c(t)
                    }), r.default.subscribe("OVERLAY_SET_INPUT_LOCKED", e => {
                        let {
                            locked: t
                        } = e;
                        t && null != d && (d = null, c(!1))
                    })
                }
            }
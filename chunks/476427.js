            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var i = n("37983"),
                a = n("884691"),
                l = n("446674"),
                s = n("77078"),
                o = n("988738"),
                r = n("244201"),
                d = n("670984"),
                u = n("302537"),
                c = n("102999"),
                f = n("929479"),
                h = n("552067"),
                p = n("866681"),
                g = n("791106"),
                m = n("983782"),
                S = n("587974"),
                E = n("601415"),
                v = n("357506"),
                y = n("49111");
            n("551184"), n("762017"), l.default.initialize();
            var C = function() {
                return a.useEffect(() => (f.default.initialize(), d.default.initialize(), p.default.init(), h.default.init(), () => {
                    f.default.terminate(), d.default.terminate()
                }), []), (0, i.jsxs)(a.Fragment, {
                    children: [(0, i.jsx)(u.default, {}), (0, i.jsx)(c.default, {
                        children: (0, i.jsxs)(E.default, {
                            children: [(0, i.jsx)(S.MaskLibrary, {}), (0, i.jsx)(g.default, {}), (0, i.jsx)(r.AppWindowContextProvider, {
                                appContext: y.AppContext.OVERLAY,
                                renderWindow: window,
                                children: (0, i.jsxs)(m.AppLayerProvider, {
                                    children: [(0, i.jsx)(v.default, {}), (0, i.jsx)(s.Modals, {}), (0, i.jsx)(o.default, {}), (0, i.jsx)(m.AppLayerContainer, {})]
                                })
                            })]
                        })
                    })]
                })
            }
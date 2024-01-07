            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var l = n("884691"),
                a = n("446674"),
                u = n("77078"),
                o = n("244201"),
                i = n("778588"),
                s = n("144747"),
                r = n("49111");

            function d() {
                let e = (0, u.useModalsStore)(e => !Object.entries(e).every(e => {
                        let [t, n] = e;
                        return 0 === n.length
                    })),
                    t = (0, a.useStateFromStores)([s.default], () => s.default.isOpen()),
                    n = (0, a.useStateFromStores)([i.default], () => i.default.hasLayers()),
                    [d, c] = l.useState(!1),
                    f = (0, o.useWindowDispatch)();
                return l.useEffect(() => {
                    function e() {
                        c(!0)
                    }

                    function t() {
                        c(!1)
                    }
                    return f.subscribe(r.ComponentActions.POPOUT_SHOW, e), f.subscribe(r.ComponentActions.POPOUT_HIDE, t), () => {
                        f.unsubscribe(r.ComponentActions.POPOUT_SHOW, e), f.unsubscribe(r.ComponentActions.POPOUT_HIDE, t)
                    }
                }, [f]), e || t || d || n
            }
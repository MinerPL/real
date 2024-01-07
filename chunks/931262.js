            "use strict";
            l.r(t), l.d(t, {
                useCollectiblesShopRouting: function() {
                    return c
                }
            }), l("313619"), l("654714"), l("287168"), l("956660"), l("222007");
            var a, s, r = l("884691"),
                n = l("90915"),
                o = l("54239"),
                i = l("393414"),
                u = l("49111");

            function c() {
                let {
                    search: e
                } = (0, n.useLocation)(), t = (0, n.useParams)(), l = r.useMemo(() => new URLSearchParams(e), [e]), a = l.get("source"), s = null != a ? parseInt(a, 10) : null, c = r.useCallback(() => {
                    if (0 === s) {
                        (0, i.back)(), (0, o.pushLayer)(u.Layers.USER_SETTINGS);
                        return
                    }
                    if ((0, i.currentRouteHasBackNavigation)()) {
                        (0, i.back)();
                        return
                    }(0, i.transitionTo)(u.Routes.APP)
                }, [s]);
                return {
                    onClose: c,
                    source: s,
                    ...t
                }
            }(s = a || (a = {}))[s.SETTINGS = 0] = "SETTINGS", s[s.CHANGELOG = 1] = "CHANGELOG", s[s.DM_LIST = 2] = "DM_LIST"
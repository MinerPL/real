            "use strict";
            var r = n("884691"),
                o = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                a = r.useState,
                i = r.useEffect,
                s = r.useLayoutEffect,
                c = r.useDebugValue;

            function l(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !o(e, n)
                } catch (e) {
                    return !0
                }
            }
            var u = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
                return t()
            } : function(e, t) {
                var n = t(),
                    r = a({
                        inst: {
                            value: n,
                            getSnapshot: t
                        }
                    }),
                    o = r[0].inst,
                    u = r[1];
                return s(function() {
                    o.value = n, o.getSnapshot = t, l(o) && u({
                        inst: o
                    })
                }, [e, n, t]), i(function() {
                    return l(o) && u({
                        inst: o
                    }), e(function() {
                        l(o) && u({
                            inst: o
                        })
                    })
                }, [e]), c(n), n
            };
            t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : u
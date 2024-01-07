            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                },
                useGetOrFetchApplication: function() {
                    return u
                }
            });
            var l = n("884691"),
                i = n("446674"),
                r = n("233736"),
                s = n("651057"),
                a = n("299285");

            function o(e) {
                let t = l.useRef([]);
                return l.useEffect(() => {
                    !(0, r.areArraysShallowEqual)(e, t.current) && (s.default.fetchApplications(e, !1), t.current = e)
                }, [e]), (0, i.useStateFromStoresArray)([a.default], () => e.map(e => a.default.getApplication(e)))
            }

            function u(e) {
                return o(null != e ? [e] : [])[0]
            }
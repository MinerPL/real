            "use strict";
            n.r(t), n.d(t, {
                useListHasSingleMessageRequest: function() {
                    return u
                },
                useListHasSingleSpamMessageRequest: function() {
                    return d
                }
            });
            var a = n("884691"),
                s = n("446674"),
                i = n("288518"),
                l = n("486503"),
                r = n("260488"),
                o = n("452229");

            function u() {
                let e = (0, r.useMessageRequestsCount)(),
                    t = a.useRef(e),
                    n = (0, s.useStateFromStores)([i.default], () => i.default.isReady()),
                    l = a.useRef(n);
                return a.useEffect(() => {
                    n && !l.current && (l.current = !0, t.current = e)
                }, [n, e]), t.current <= 1 && 1 === e
            }

            function d() {
                let e = (0, o.useSpamMessageRequestCount)(),
                    t = a.useRef(e),
                    n = (0, s.useStateFromStores)([l.default], () => l.default.isReady()),
                    i = a.useRef(n);
                return a.useEffect(() => {
                    n && !i.current && (i.current = !0, t.current = e)
                }, [n, e]), t.current <= 1 && 1 === e
            }
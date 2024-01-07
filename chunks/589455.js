            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            }), a("222007");
            var s = a("884691"),
                n = a("405665"),
                l = a("77078");
            let r = "undefined" == typeof ResizeObserver ? n.ResizeObserver : ResizeObserver,
                i = new Map,
                o = new r(e => {
                    e.forEach(e => {
                        var t;
                        let {
                            target: a
                        } = e;
                        null === (t = i.get(a)) || void 0 === t || t(e)
                    })
                });
            var u = () => {
                let e = s.useRef(null),
                    [t, a] = s.useState(400),
                    n = s.useCallback(() => {
                        null !== e.current && a(e.current.clientWidth)
                    }, [a, e]);
                return (0, l.useResizeObserverSubscription)({
                    ref: e,
                    key: "forum-container",
                    onUpdate: n,
                    resizeObserver: o,
                    listenerMap: i
                }), {
                    containerRef: e,
                    containerWidth: t
                }
            }
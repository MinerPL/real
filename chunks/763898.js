            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("884691");

            function a() {
                let e = i.useRef(null);
                return null === e.current && (e.current = new AbortController), i.useEffect(() => () => {
                    var t;
                    null === (t = e.current) || void 0 === t || t.abort()
                }, []), e.current.signal
            }
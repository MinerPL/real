            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var r = n("884691"),
                i = n("775560"),
                l = n("862337");

            function o(e, t) {
                let [n, o] = (0, r.useState)(e), s = (0, i.useLazyValue)(() => new l.Timeout);
                (0, r.useEffect)(() => () => s.stop(), [s]);
                let a = (0, r.useCallback)(n => {
                    o(n), n !== e && s.start(t, () => o(e))
                }, [t, e, s]);
                return [n, a]
            }
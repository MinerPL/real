            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007");
            var r = n("884691"),
                i = n("775560"),
                o = n("862337");

            function l(e, t) {
                let [n, l] = (0, r.useState)(e), s = (0, i.useLazyValue)(() => new o.Timeout);
                (0, r.useEffect)(() => () => s.stop(), [s]);
                let a = (0, r.useCallback)(n => {
                    l(n), n !== e && s.start(t, () => l(e))
                }, [t, e, s]);
                return [n, a]
            }
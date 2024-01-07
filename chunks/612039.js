            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007");
            var s = n("884691"),
                i = n("775560"),
                a = n("862337");

            function l(e, t) {
                let [n, l] = (0, s.useState)(e), r = (0, i.useLazyValue)(() => new a.Timeout);
                (0, s.useEffect)(() => () => r.stop(), [r]);
                let u = (0, s.useCallback)(n => {
                    l(n), n !== e && r.start(t, () => l(e))
                }, [t, e, r]);
                return [n, u]
            }
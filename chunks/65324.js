            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            }), l("222007"), l("70102");
            var i = l("37983"),
                s = l("884691"),
                n = l("446674"),
                a = l("206230"),
                r = l("491605"),
                u = l("210721"),
                d = l("78345");

            function o(e) {
                let {
                    giftStyle: t,
                    className: l,
                    shouldAnimate: o = !0,
                    defaultAnimationState: c,
                    idleAnimationState: E
                } = e, _ = (0, n.useStateFromStores)([a.default], () => a.default.useReducedMotion), [f, S] = s.useState(c), C = s.useRef((0, u.getGiftAnimationData)(t, f)), [h, p] = s.useState(null == E), [m, I] = s.useState(!1), [g, T] = s.useState(-1), v = () => {
                    C.current = (0, u.getGiftAnimationData)(t, f), T(e => e + 1)
                }, O = () => {
                    p(!1), I(!0), T(-1), S(c)
                };
                s.useEffect(() => {
                    null == E && S(c)
                }, [E, c]), s.useEffect(() => {
                    if (null != E && g >= 0) {
                        O();
                        return
                    }
                    v()
                }, [t, E]), s.useEffect(() => {
                    (!m || null == E) && v()
                }, [f]), s.useEffect(() => {
                    m && (p(null == E), I(!1), v())
                }, [m]);
                if (!d.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, i.jsx)(r.default, {
                    importData: C.current,
                    shouldAnimate: !_ && o,
                    className: l,
                    versionKey: g,
                    onComplete: null != E ? () => {
                        null != E && (S(E), p(!0))
                    } : void 0,
                    loop: h
                })
            }
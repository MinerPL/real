            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007"), n("70102");
            var i = n("37983"),
                r = n("884691"),
                s = n("446674"),
                l = n("206230"),
                o = n("491605"),
                u = n("210721"),
                a = n("78345");

            function c(e) {
                let {
                    giftStyle: t,
                    className: n,
                    shouldAnimate: c = !0,
                    defaultAnimationState: d,
                    idleAnimationState: f
                } = e, E = (0, s.useStateFromStores)([l.default], () => l.default.useReducedMotion), [_, I] = r.useState(d), p = r.useRef((0, u.getGiftAnimationData)(t, _)), [h, S] = r.useState(null == f), [T, N] = r.useState(!1), [C, v] = r.useState(-1), g = () => {
                    p.current = (0, u.getGiftAnimationData)(t, _), v(e => e + 1)
                }, A = () => {
                    S(!1), N(!0), v(-1), I(d)
                };
                r.useEffect(() => {
                    null == f && I(d)
                }, [f, d]), r.useEffect(() => {
                    if (null != f && C >= 0) {
                        A();
                        return
                    }
                    g()
                }, [t, f]), r.useEffect(() => {
                    (!T || null == f) && g()
                }, [_]), r.useEffect(() => {
                    T && (S(null == f), N(!1), g())
                }, [T]);
                if (!a.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, i.jsx)(o.default, {
                    importData: p.current,
                    shouldAnimate: !E && c,
                    className: n,
                    versionKey: C,
                    onComplete: null != f ? () => {
                        null != f && (I(f), S(!0))
                    } : void 0,
                    loop: h
                })
            }
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007"), n("70102");
            var i = n("37983"),
                r = n("884691"),
                l = n("446674"),
                o = n("206230"),
                s = n("491605"),
                u = n("210721"),
                a = n("78345");

            function c(e) {
                let {
                    giftStyle: t,
                    className: n,
                    shouldAnimate: c = !0,
                    defaultAnimationState: d,
                    idleAnimationState: f
                } = e, E = (0, l.useStateFromStores)([o.default], () => o.default.useReducedMotion), [p, _] = r.useState(d), h = r.useRef((0, u.getGiftAnimationData)(t, p)), [I, S] = r.useState(null == f), [C, T] = r.useState(!1), [v, g] = r.useState(-1), N = () => {
                    h.current = (0, u.getGiftAnimationData)(t, p), g(e => e + 1)
                }, m = () => {
                    S(!1), T(!0), g(-1), _(d)
                };
                r.useEffect(() => {
                    null == f && _(d)
                }, [f, d]), r.useEffect(() => {
                    if (null != f && v >= 0) {
                        m();
                        return
                    }
                    N()
                }, [t, f]), r.useEffect(() => {
                    (!C || null == f) && N()
                }, [p]), r.useEffect(() => {
                    C && (S(null == f), T(!1), N())
                }, [C]);
                if (!a.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, i.jsx)(s.default, {
                    importData: h.current,
                    shouldAnimate: !E && c,
                    className: n,
                    versionKey: v,
                    onComplete: null != f ? () => {
                        null != f && (_(f), S(!0))
                    } : void 0,
                    loop: I
                })
            }
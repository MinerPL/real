            "use strict";
            n.r(t), n.d(t, {
                PopoutCSSAnimator: function() {
                    return h
                }
            }), n("222007");
            var i, r, s = n("37983"),
                a = n("884691"),
                o = n("414456"),
                l = n.n(o),
                u = n("862337"),
                c = n("413197"),
                d = n("685551");
            (r = i || (i = {}))[r.TRANSLATE = 1] = "TRANSLATE", r[r.SCALE = 2] = "SCALE", r[r.FADE = 3] = "FADE";
            let f = Object.freeze({
                    1: d.translate,
                    2: d.scale,
                    3: d.fade
                }),
                E = Object.freeze({
                    top: d.animatorTop,
                    bottom: d.animatorBottom,
                    left: d.animatorLeft,
                    right: d.animatorRight,
                    center: d.animatorCenter,
                    window_center: d.animatorCenter
                });

            function h(e) {
                let {
                    position: t,
                    type: n,
                    children: i
                } = e, {
                    reducedMotion: r
                } = a.useContext(c.AccessibilityPreferencesContext), o = r.enabled ? 3 : n, [h, p] = a.useState(null != t), [_] = a.useState(() => new u.Timeout);
                return a.useEffect(() => () => _.stop(), [_]), a.useEffect(() => {
                    null != t && _.start(10, () => p(!0))
                }, [t, _]), (0, s.jsx)("div", {
                    className: l(null != t ? E[t] : null, {
                        [f[o]]: null != t,
                        [d.didRender]: h
                    }),
                    children: i
                })
            }
            h.Types = i
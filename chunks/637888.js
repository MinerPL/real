            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("843762");
            var s = n("37983"),
                a = n("884691"),
                i = n("819855"),
                r = n("77078"),
                l = n("488284"),
                u = n("560528"),
                o = n("242777"),
                d = n("336406"),
                c = n("58608"),
                f = n("49111"),
                p = n("838623"),
                m = n("844389"),
                g = n("392518"),
                h = n("414298"),
                x = n("815143"),
                N = n("134072");

            function T(e) {
                let {
                    movDark: t = o,
                    movLight: n = d,
                    mp4Dark: a = p,
                    mp4Light: i = h,
                    pngDark: r = m,
                    pngLight: l = x,
                    webmDark: c = g,
                    webmLight: T = N
                } = e, E = (0, u.getChromeVersion)(), b = [(0, s.jsx)("source", {
                    src: a,
                    type: "video/mp4"
                }, "mp4"), (0, s.jsx)("img", {
                    alt: "",
                    src: r
                }, "png")], _ = [(0, s.jsx)("source", {
                    src: i,
                    type: "video/mp4"
                }, "mp4"), (0, s.jsx)("img", {
                    alt: "",
                    src: l
                }, "png")];
                return (E > 52 || -1 === E) && (b.unshift((0, s.jsx)("source", {
                    src: c,
                    type: "video/webm"
                }, "webm")), _.unshift((0, s.jsx)("source", {
                    src: T,
                    type: "video/webm"
                }, "webm"))), (0, u.supportsHEVCAlpha)() && (b.unshift((0, s.jsx)("source", {
                    src: t,
                    type: "video/mp4"
                }, "hevc")), _.unshift((0, s.jsx)("source", {
                    src: n,
                    type: "video/mp4"
                }, "hevc"))), {
                    [f.ThemeTypes.DARK]: b,
                    [f.ThemeTypes.LIGHT]: _
                }
            }
            let E = l.default.getAppSpinnerSources(),
                b = null != E ? T(E) : null,
                _ = T({});
            var I = e => {
                var t;
                let {
                    loop: n = !0,
                    autoPlay: l = !0,
                    setRef: u,
                    className: o,
                    onReady: d
                } = e, {
                    theme: p
                } = (0, r.useThemeContext)(), {
                    reducedMotion: m
                } = a.useContext(r.AccessibilityPreferencesContext), g = _;
                null != b && (g = b);
                let h = (0, i.isThemeDark)(p) ? f.ThemeTypes.DARK : f.ThemeTypes.LIGHT,
                    x = null !== (t = g[h]) && void 0 !== t ? t : g[f.ThemeTypes.DARK];
                return (0, s.jsx)(c.default, {
                    ref: u,
                    onLoadedData: d,
                    className: o,
                    loop: !m.enabled && n,
                    autoPlay: !m.enabled && l,
                    playsInline: !0,
                    "data-testid": "app-spinner",
                    children: x
                }, p)
            }
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return M
                }
            }), s("843762");
            var a = s("37983"),
                n = s("884691"),
                l = s("819855"),
                i = s("77078"),
                r = s("488284"),
                u = s("560528"),
                d = s("242777"),
                o = s("336406"),
                c = s("58608"),
                E = s("49111"),
                T = s("838623"),
                _ = s("844389"),
                f = s("392518"),
                L = s("414298"),
                S = s("815143"),
                I = s("134072");

            function p(e) {
                let {
                    movDark: t = d,
                    movLight: s = o,
                    mp4Dark: n = T,
                    mp4Light: l = L,
                    pngDark: i = _,
                    pngLight: r = S,
                    webmDark: c = f,
                    webmLight: p = I
                } = e, A = (0, u.getChromeVersion)(), C = [(0, a.jsx)("source", {
                    src: n,
                    type: "video/mp4"
                }, "mp4"), (0, a.jsx)("img", {
                    alt: "",
                    src: i
                }, "png")], m = [(0, a.jsx)("source", {
                    src: l,
                    type: "video/mp4"
                }, "mp4"), (0, a.jsx)("img", {
                    alt: "",
                    src: r
                }, "png")];
                return (A > 52 || -1 === A) && (C.unshift((0, a.jsx)("source", {
                    src: c,
                    type: "video/webm"
                }, "webm")), m.unshift((0, a.jsx)("source", {
                    src: p,
                    type: "video/webm"
                }, "webm"))), (0, u.supportsHEVCAlpha)() && (C.unshift((0, a.jsx)("source", {
                    src: t,
                    type: "video/mp4"
                }, "hevc")), m.unshift((0, a.jsx)("source", {
                    src: s,
                    type: "video/mp4"
                }, "hevc"))), {
                    [E.ThemeTypes.DARK]: C,
                    [E.ThemeTypes.LIGHT]: m
                }
            }
            let A = r.default.getAppSpinnerSources(),
                C = null != A ? p(A) : null,
                m = p({});
            var M = e => {
                var t;
                let {
                    loop: s = !0,
                    autoPlay: r = !0,
                    setRef: u,
                    className: d,
                    onReady: o
                } = e, {
                    theme: T
                } = (0, i.useThemeContext)(), {
                    reducedMotion: _
                } = n.useContext(i.AccessibilityPreferencesContext), f = m;
                null != C && (f = C);
                let L = (0, l.isThemeDark)(T) ? E.ThemeTypes.DARK : E.ThemeTypes.LIGHT,
                    S = null !== (t = f[L]) && void 0 !== t ? t : f[E.ThemeTypes.DARK];
                return (0, a.jsx)(c.default, {
                    ref: u,
                    onLoadedData: o,
                    className: d,
                    loop: !_.enabled && s,
                    autoPlay: !_.enabled && r,
                    playsInline: !0,
                    "data-testid": "app-spinner",
                    children: S
                }, T)
            }
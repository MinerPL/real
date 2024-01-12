            "use strict";
            n.r(t), n.d(t, {
                OAuth2Page: function() {
                    return v
                },
                OAuth2Modal: function() {
                    return E
                }
            }), n("222007");
            var s = n("37983"),
                i = n("884691"),
                r = n("414456"),
                a = n.n(r),
                o = n("516256"),
                d = n("77078"),
                u = n("69927"),
                l = n("554054"),
                f = n("831588"),
                _ = n("439932"),
                c = n("49111"),
                g = n("289382"),
                m = n("782340"),
                h = n("316618");

            function v(e) {
                let {
                    children: t,
                    wrapperClassName: n,
                    embedded: r
                } = e, [o, v] = i.useState(g.WaveStates.INITIAL), E = i.useCallback(e => {
                    v(t => Math.max(t, e))
                }, []);
                return (0, u.usePageTitle)({
                    location: m.default.Messages.OAUTH2_TITLE
                }), (0, s.jsx)(d.ThemeContextProvider, {
                    theme: c.ThemeTypes.DARK,
                    children: (0, s.jsx)(l.default, {
                        embedded: r,
                        className: a((0, _.getThemeClass)(c.ThemeTypes.DARK), h.wave),
                        splash: (0, f.getArtForPath)(),
                        waveState: o,
                        showLogo: !0,
                        updateWaveState: E,
                        children: (0, s.jsx)("div", {
                            className: a(h.oauth2Wrapper, n),
                            children: t
                        })
                    })
                })
            }

            function E(e) {
                let {
                    children: t,
                    transitionState: n,
                    ...i
                } = e;
                return (0, s.jsx)(o.ModalRoot, {
                    size: o.ModalSize.DYNAMIC,
                    transitionState: n,
                    className: h.oauth2Wrapper,
                    ...i,
                    children: t
                })
            }
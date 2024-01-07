            "use strict";
            n.r(t), n.d(t, {
                OAuth2Page: function() {
                    return T
                },
                OAuth2Modal: function() {
                    return C
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                l = n("414456"),
                s = n.n(l),
                r = n("516256"),
                u = n("77078"),
                o = n("69927"),
                d = n("554054"),
                c = n("831588"),
                _ = n("439932"),
                E = n("49111"),
                f = n("289382"),
                h = n("782340"),
                p = n("316618");

            function T(e) {
                let {
                    children: t,
                    wrapperClassName: n,
                    embedded: l
                } = e, [r, T] = a.useState(f.WaveStates.INITIAL), C = a.useCallback(e => {
                    T(t => Math.max(t, e))
                }, []);
                return (0, o.usePageTitle)({
                    location: h.default.Messages.OAUTH2_TITLE
                }), (0, i.jsx)(u.ThemeContextProvider, {
                    theme: E.ThemeTypes.DARK,
                    children: (0, i.jsx)(d.default, {
                        embedded: l,
                        className: s((0, _.getThemeClass)(E.ThemeTypes.DARK), p.wave),
                        splash: (0, c.getArtForPath)(),
                        waveState: r,
                        showLogo: !0,
                        updateWaveState: C,
                        children: (0, i.jsx)("div", {
                            className: s(p.oauth2Wrapper, n),
                            children: t
                        })
                    })
                })
            }

            function C(e) {
                let {
                    children: t,
                    transitionState: n,
                    ...a
                } = e;
                return (0, i.jsx)(r.ModalRoot, {
                    size: r.ModalSize.DYNAMIC,
                    transitionState: n,
                    className: p.oauth2Wrapper,
                    ...a,
                    children: t
                })
            }
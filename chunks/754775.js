            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983"),
                s = n("884691"),
                r = n("669491"),
                i = n("77078"),
                l = n("462274"),
                u = n("181832"),
                o = n("981184"),
                d = n("506885"),
                c = n("217513"),
                f = n("845579"),
                E = n("249941"),
                h = function(e) {
                    let {
                        style: t,
                        src: n,
                        backgroundSrc: h,
                        userId: p,
                        pulseSpeakingIndicator: S = !1,
                        speaking: _ = !1,
                        ...C
                    } = e, m = null != h ? h : n, g = (0, l.default)(m, r.default.unsafe_rawColors.PRIMARY_800.css), T = (0, u.useCallBannerBackgroundExperiment)(!0, "VideoBackground-web").enabled, A = (0, c.default)(null != p ? p : ""), I = null == A ? void 0 : A.getBannerURL({
                        size: 1024,
                        canAnimate: f.GifAutoPlay.getSetting()
                    });
                    if (s.useEffect(() => {
                            null != p && T && (0, d.default)(p, void 0, {
                                dispatchWait: !0
                            })
                        }, [T, p]), null == n) return null;
                    let v = (0, a.jsx)(i.Avatar, {
                            className: E.avatarWrapper,
                            src: n,
                            ...C
                        }),
                        M = {
                            ...t,
                            backgroundColor: g
                        };
                    return null != I && _ && T && (M.backgroundImage = "url(".concat(I, ")"), M.backgroundSize = "cover"), (0, a.jsx)("div", {
                        style: M,
                        className: E.background,
                        children: S ? (0, a.jsx)(o.default, {
                            shouldAnimate: _,
                            children: v
                        }) : v
                    })
                }
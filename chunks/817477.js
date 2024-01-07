            "use strict";
            n.r(t), n.d(t, {
                EmbedIFrameWithLoadingBackground: function() {
                    return C
                }
            }), n("222007"), n("313619"), n("654714"), n("287168"), n("956660");
            var i = n("37983"),
                a = n("884691"),
                l = n("414456"),
                o = n.n(l),
                r = n("841076"),
                s = n("748820"),
                d = n("446674"),
                u = n("292687"),
                c = n("614818"),
                p = n("161778"),
                f = n("659500"),
                m = n("157945"),
                h = n("828466"),
                v = n("954016"),
                P = n("49111"),
                I = n("165544");

            function S(e) {
                let {
                    url: t,
                    className: n,
                    style: l,
                    onLoad: o,
                    shouldRefocus: I,
                    queryParams: S,
                    allowPopups: C = !1,
                    referrerPolicy: g = "origin"
                } = e, y = (0, d.useStateFromStores)([u.default], () => u.default.getWindow(P.PopoutWindowKeys.CHANNEL_CALL_POPOUT)), E = (0, r.useMemoOne)(() => (0, s.v4)(), [t]), T = a.useRef(null), A = (0, m.default)(T, I, null == y ? window : y), x = {
                    ...S,
                    frame_id: E,
                    platform: v.ActivityPlatform.DESKTOP
                }, [N, _] = a.useState(!1), M = p.default.theme, j = {
                    ...l
                };
                return M === P.ThemeTypes.LIGHT ? j.colorScheme = "light" : j.colorScheme = "dark", a.useEffect(() => (f.ComponentDispatch.dispatch(P.ComponentActions.IFRAME_MOUNT, {
                    id: E
                }), () => {
                    f.ComponentDispatch.dispatch(P.ComponentActions.IFRAME_UNMOUNT, {
                        id: E
                    })
                }), [E]), f.ComponentDispatch.subscribe(P.ComponentActions.MANUAL_IFRAME_RESIZING, e => {
                    let {
                        resizing: t
                    } = e;
                    _(t)
                }), N && (j.pointerEvents = "none"), null != t ? (0, i.jsx)("iframe", {
                    style: j,
                    allow: "autoplay; encrypted-media",
                    referrerPolicy: g,
                    onLoad: function(e) {
                        var n;
                        null == o || o(e.target), T.current = e.target, A(!0), null === (n = e.target.contentWindow) || void 0 === n || n.postMessage([c.default.HELLO, x], null != t ? t : "")
                    },
                    sandbox: (0, h.default)({
                        allowPopups: C
                    }),
                    className: n,
                    src: "".concat(t, "?").concat(new URLSearchParams(x))
                }) : null
            }

            function C(e) {
                let {
                    onLoad: t
                } = e, [n, l] = a.useState(!1), r = a.useCallback(e => {
                    l(!0), null == t || t(e)
                }, [t]);
                return (0, i.jsxs)("div", {
                    className: I.fillParent,
                    children: [!n && (0, i.jsx)("div", {
                        className: o(I.fillParent, I.iframePlaceholder)
                    }), (0, i.jsx)("div", {
                        className: o(I.fillParent, n ? void 0 : I.hiddenIframeContainer),
                        children: (0, i.jsx)(S, {
                            ...e,
                            onLoad: r
                        })
                    })]
                })
            }
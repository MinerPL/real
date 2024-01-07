            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            }), n("222007"), n("70102");
            var l = n("627445"),
                o = n.n(l),
                u = n("917351"),
                i = n.n(u),
                s = n("288661"),
                r = n("446674"),
                a = n("913144"),
                d = n("605250"),
                c = n("773336"),
                S = n("50885"),
                E = n("563680"),
                _ = n("49111");
            let T = {},
                f = {},
                p = {},
                O = {},
                h = {},
                I = new Set,
                U = () => C.emitChange(),
                v = i.debounce(U, 150);

            function A(e) {
                let t = p[e];
                null != t && !t.closed && (T[e] = {
                    x: t.screenX,
                    y: t.screenY,
                    width: t.innerWidth,
                    height: t.innerHeight,
                    alwaysOnTop: !!c.isPlatformEmbedded && f[e]
                })
            }

            function m(e) {
                let t = p[e];
                null != t && (!t.closed && A(e), t.close(), ! function(e) {
                    let t = p[e];
                    o(null != t, "Popout window was null during unmount"), t.removeEventListener("focus", U), t.removeEventListener("blur", U), t.removeEventListener("resize", v);
                    let n = O[e];
                    o(null != n, "Window root was null while unmounting"), n.unmount(), delete p[e], delete f[e], delete h[e], delete O[e]
                }(e), C.emitChange())
            }

            function N(e) {
                let {
                    data: t
                } = e;
                if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
                let n = t.discordPopoutEvent;
                if (null != n.key) switch (n.type) {
                    case _.PopoutEventTypes.LOADED:
                        var l;
                        return l = n.key, void(I.has(l) && (! function(e) {
                            let t = p[e],
                                n = h[e];
                            if (null == t) {
                                new(0, d.default)("PopoutWindowStore").warn("Failed to open window", e);
                                return
                            }
                            let l = t.document;
                            (0, E.subscribeDocumentToFullScreenChange)(l, U), t.addEventListener("focus", U), t.addEventListener("blur", U), t.addEventListener("resize", v), ! function(e, t) {
                                let n = t.document,
                                    l = document.querySelectorAll('link[rel="stylesheet"]'),
                                    u = "".concat(window.location.protocol, "//").concat(window.location.host);
                                for (let e of l) {
                                    if (!e.href.startsWith(u)) continue;
                                    let t = n.createElement("link");
                                    t.href = e.href, t.rel = e.rel, t.integrity = e.integrity, o(null != n.head, "Document head was null"), n.head.appendChild(t)
                                }
                            }(0, t);
                            let u = (0, s.createRoot)(l.getElementById("app-mount"));
                            o(null != u, "No render target for popout!"), O[e] = u, u.render(n(e))
                        }(l), I.delete(l), C.emitChange()));
                    case _.PopoutEventTypes.UNLOADED:
                        return m(n.key)
                }
            }

            function w() {
                for (let e of Object.keys(p)) {
                    let t = p[e];
                    null != t && t.close()
                }
            }
            class P extends r.default.PersistedStore {
                initialize(e) {
                    window.addEventListener("message", N), window.addEventListener("beforeunload", w), T = null != e ? e : {}
                }
                getWindow(e) {
                    return p[e]
                }
                getWindowState(e) {
                    return T[e]
                }
                getWindowKeys() {
                    return Object.keys(p)
                }
                getWindowOpen(e) {
                    let t = p[e];
                    return null != t && !t.closed
                }
                getIsAlwaysOnTop(e) {
                    return !!f[e]
                }
                getWindowFocused(e) {
                    var t, n;
                    let l = p[e];
                    return null !== (n = null == l ? void 0 : null === (t = l.document) || void 0 === t ? void 0 : t.hasFocus()) && void 0 !== n && n
                }
                getState() {
                    return T
                }
                unmountWindow(e) {
                    return m(e)
                }
            }
            P.displayName = "PopoutWindowStore", P.persistKey = "PopoutWindowStore";
            let C = new P(a.default, {
                POPOUT_WINDOW_OPEN: function(e) {
                    let {
                        key: t,
                        features: n,
                        render: l
                    } = e;
                    if (c.isPlatformEmbedded && !S.default.supportsFeature(_.NativeFeatures.POPOUT_WINDOWS)) throw Error("Popout windows not supported on this native module version!");
                    let o = p[t];
                    if (null != o && !o.closed) return c.isPlatformEmbedded ? S.default.focus(t) : o.focus(), !1;
                    let {
                        defaultWidth: u,
                        defaultHeight: i,
                        defaultAlwaysOnTop: s = !1,
                        ...r
                    } = n, a = r, d = s, E = T[t];
                    if (null != E) {
                        let {
                            width: e,
                            height: t,
                            x: n,
                            y: l,
                            alwaysOnTop: o
                        } = E;
                        d = null != o ? o : s, a = {
                            width: null != e && 0 !== e ? e : u,
                            height: null != t && 0 !== t ? t : i,
                            left: n,
                            top: l,
                            ...a
                        }
                    }
                    let O = window.open(_.Routes.POPOUT_WINDOW, t, function(e) {
                        let t = "";
                        for (let n of Object.keys(e)) {
                            let l = e[n];
                            void 0 !== l && ("boolean" == typeof l && (l = l ? "yes" : "no"), t += "".concat(n, "=").concat(l, ","))
                        }
                        return t
                    }(a));
                    O.windowKey = t, null == O || O.focus(), p[t] = O, h[t] = l, c.isPlatformEmbedded && (S.default.setAlwaysOnTop(t, d), f[t] = d, S.default.isAlwaysOnTop(t).then(e => f[t] = e)), I.add(t)
                },
                POPOUT_WINDOW_CLOSE: function(e) {
                    let {
                        key: t
                    } = e, n = p[t];
                    null != n && !n.closed && (A(t), n.close())
                },
                POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function(e) {
                    let {
                        key: t,
                        alwaysOnTop: n
                    } = e;
                    c.isPlatformEmbedded && (S.default.setAlwaysOnTop(t, n), f[t] = n, S.default.isAlwaysOnTop(t).then(e => f[t] = e))
                },
                LOGOUT: w
            });
            var L = C
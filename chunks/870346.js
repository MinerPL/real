            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            }), n("222007"), n("70102");
            var l = n("627445"),
                o = n.n(l),
                u = n("917351"),
                i = n.n(u),
                r = n("288661"),
                s = n("446674"),
                a = n("913144"),
                d = n("605250"),
                c = n("773336"),
                S = n("50885"),
                _ = n("563680"),
                E = n("49111");
            let T = {},
                O = {},
                f = {},
                p = {},
                I = {},
                h = new Set,
                N = () => C.emitChange(),
                A = i.debounce(N, 150);

            function U(e) {
                let t = f[e];
                null != t && !t.closed && (T[e] = {
                    x: t.screenX,
                    y: t.screenY,
                    width: t.innerWidth,
                    height: t.innerHeight,
                    alwaysOnTop: !!c.isPlatformEmbedded && O[e]
                })
            }

            function P(e) {
                let t = f[e];
                null != t && (!t.closed && U(e), t.close(), ! function(e) {
                    let t = f[e];
                    o(null != t, "Popout window was null during unmount"), t.removeEventListener("focus", N), t.removeEventListener("blur", N), t.removeEventListener("resize", A);
                    let n = p[e];
                    o(null != n, "Window root was null while unmounting"), n.unmount(), delete f[e], delete O[e], delete I[e], delete p[e]
                }(e), C.emitChange())
            }

            function v(e) {
                let {
                    data: t
                } = e;
                if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
                let n = t.discordPopoutEvent;
                if (null != n.key) switch (n.type) {
                    case E.PopoutEventTypes.LOADED:
                        var l;
                        return l = n.key, void(h.has(l) && (! function(e) {
                            let t = f[e],
                                n = I[e];
                            if (null == t) {
                                new(0, d.default)("PopoutWindowStore").warn("Failed to open window", e);
                                return
                            }
                            let l = t.document;
                            (0, _.subscribeDocumentToFullScreenChange)(l, N), t.addEventListener("focus", N), t.addEventListener("blur", N), t.addEventListener("resize", A), ! function(e, t) {
                                let n = t.document,
                                    l = document.querySelectorAll('link[rel="stylesheet"]'),
                                    u = "".concat(window.location.protocol, "//").concat(window.location.host);
                                for (let e of l) {
                                    if (!e.href.startsWith(u)) continue;
                                    let t = n.createElement("link");
                                    t.href = e.href, t.rel = e.rel, t.integrity = e.integrity, o(null != n.head, "Document head was null"), n.head.appendChild(t)
                                }
                            }(0, t);
                            let u = (0, r.createRoot)(l.getElementById("app-mount"));
                            o(null != u, "No render target for popout!"), p[e] = u, u.render(n(e))
                        }(l), h.delete(l), C.emitChange()));
                    case E.PopoutEventTypes.UNLOADED:
                        return P(n.key)
                }
            }

            function m() {
                for (let e of Object.keys(f)) {
                    let t = f[e];
                    null != t && t.close()
                }
            }
            class D extends s.default.PersistedStore {
                initialize(e) {
                    window.addEventListener("message", v), window.addEventListener("beforeunload", m), T = null != e ? e : {}
                }
                getWindow(e) {
                    return f[e]
                }
                getWindowState(e) {
                    return T[e]
                }
                getWindowKeys() {
                    return Object.keys(f)
                }
                getWindowOpen(e) {
                    let t = f[e];
                    return null != t && !t.closed
                }
                getIsAlwaysOnTop(e) {
                    return !!O[e]
                }
                getWindowFocused(e) {
                    var t, n;
                    let l = f[e];
                    return null !== (n = null == l ? void 0 : null === (t = l.document) || void 0 === t ? void 0 : t.hasFocus()) && void 0 !== n && n
                }
                getState() {
                    return T
                }
                unmountWindow(e) {
                    return P(e)
                }
            }
            D.displayName = "PopoutWindowStore", D.persistKey = "PopoutWindowStore";
            let C = new D(a.default, {
                POPOUT_WINDOW_OPEN: function(e) {
                    let {
                        key: t,
                        features: n,
                        render: l
                    } = e;
                    if (c.isPlatformEmbedded && !S.default.supportsFeature(E.NativeFeatures.POPOUT_WINDOWS)) throw Error("Popout windows not supported on this native module version!");
                    let o = f[t];
                    if (null != o && !o.closed) return c.isPlatformEmbedded ? S.default.focus(t) : o.focus(), !1;
                    let {
                        defaultWidth: u,
                        defaultHeight: i,
                        defaultAlwaysOnTop: r = !1,
                        ...s
                    } = n, a = s, d = r, _ = T[t];
                    if (null != _) {
                        let {
                            width: e,
                            height: t,
                            x: n,
                            y: l,
                            alwaysOnTop: o
                        } = _;
                        d = null != o ? o : r, a = {
                            width: null != e && 0 !== e ? e : u,
                            height: null != t && 0 !== t ? t : i,
                            left: n,
                            top: l,
                            ...a
                        }
                    }
                    let p = window.open(E.Routes.POPOUT_WINDOW, t, function(e) {
                        let t = "";
                        for (let n of Object.keys(e)) {
                            let l = e[n];
                            void 0 !== l && ("boolean" == typeof l && (l = l ? "yes" : "no"), t += "".concat(n, "=").concat(l, ","))
                        }
                        return t
                    }(a));
                    p.windowKey = t, null == p || p.focus(), f[t] = p, I[t] = l, c.isPlatformEmbedded && (S.default.setAlwaysOnTop(t, d), O[t] = d, S.default.isAlwaysOnTop(t).then(e => O[t] = e)), h.add(t)
                },
                POPOUT_WINDOW_CLOSE: function(e) {
                    let {
                        key: t
                    } = e, n = f[t];
                    null != n && !n.closed && (U(t), n.close())
                },
                POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function(e) {
                    let {
                        key: t,
                        alwaysOnTop: n
                    } = e;
                    c.isPlatformEmbedded && (S.default.setAlwaysOnTop(t, n), O[t] = n, S.default.isAlwaysOnTop(t).then(e => O[t] = e))
                },
                LOGOUT: m
            });
            var w = C
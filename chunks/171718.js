            "use strict";
            let i, r;
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007"), n("808653");
            var s = n("95410"),
                a = n("843455");
            let o = "dQw4w9WgXcQ:";

            function l(e) {
                return [...e].reduce((e, t) => {
                    let [n, i] = t;
                    return e[n] = i, e
                }, {})
            }
            let u = null,
                c = window.DiscordNative;
            null != c && (u = c.safeStorage);
            let d = !1,
                f = {},
                E = {},
                h = !1,
                p = !1;

            function _() {
                if (h) {
                    s.default.remove(a.TOKEN_KEY), s.default.remove(a.TOKENS_KEY);
                    return
                }
                null != r ? s.default.set(a.TOKEN_KEY, r) : s.default.remove(a.TOKEN_KEY), s.default.set(a.TOKENS_KEY, E)
            }

            function S(e) {
                return null == e || 0 === e.length ? {
                    decryptedToken: null,
                    wasEncrypted: !1
                } : (null == u ? void 0 : u.isEncryptionAvailable()) && e.startsWith(o) ? {
                    decryptedToken: u.decryptString(e.substring(o.length)),
                    wasEncrypted: !0
                } : {
                    decryptedToken: e,
                    wasEncrypted: !1
                }
            }

            function m(e) {
                return (null == u ? void 0 : u.isEncryptionAvailable()) && !e.startsWith(o) ? "".concat(o).concat(u.encryptString(e)) : e
            }
            var T = {
                init() {
                    if (p) return;
                    r = s.default.get(a.TOKEN_KEY), E = s.default.get(a.TOKENS_KEY) || {};
                    let {
                        decryptedToken: e,
                        wasEncrypted: t
                    } = S(r);
                    d = t, i = e, f = l(Object.entries(E).map(e => {
                        let [t, n] = e, {
                            decryptedToken: i,
                            wasEncrypted: r
                        } = S(n);
                        return d = r || d, [t, i]
                    }).filter(e => {
                        let [t, n] = e;
                        return null != n
                    })), p = !0
                },
                getToken(e) {
                    return (this.init(), null != e) ? f[e] : i
                },
                setToken(e, t) {
                    if (null == e) {
                        this.removeToken(t);
                        return
                    }
                    i = e, null != t && (f[t] = e), d ? this.encryptAndStoreTokens() : (r = i, E = f, _())
                },
                hideToken() {
                    !h && (h = !0, _())
                },
                showToken() {
                    h && (h = !1, _())
                },
                removeToken(e) {
                    let t = i;
                    null != e && (t = f[e], delete f[e], delete E[e]), t === i && (i = null, r = null), _()
                },
                encryptAndStoreTokens() {
                    (null == u ? void 0 : u.isEncryptionAvailable()) ? (null != i && (r = m(i)), E = l(Object.entries(f).map(e => {
                        let [t, n] = e;
                        return [t, m(n)]
                    })), d = !0) : (r = i, E = f), _()
                }
            }
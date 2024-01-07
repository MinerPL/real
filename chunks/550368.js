            "use strict";
            n.r(t), n.d(t, {
                getAssetFromImageURL: function() {
                    return I
                },
                getAssetImage: function() {
                    return g
                },
                getAssets: function() {
                    return A
                },
                fetchAssetIds: function() {
                    return y
                },
                getAssetIds: function() {
                    return v
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var i = n("627445"),
                a = n.n(i),
                l = n("917351"),
                s = n.n(l),
                r = n("872717"),
                u = n("913144"),
                o = n("605250"),
                d = n("407063"),
                c = n("49111");
            let _ = "https://i.scdn.co/image/",
                E = (e, t, n) => "https://static-cdn.jtvnw.net/previews-ttv/live_user_".concat(e, "-").concat(t, "x").concat(n, ".jpg"),
                f = /https:\/\/static-cdn\.jtvnw\.net\/previews-ttv\/live_user_(.+)-\{width\}x\{height\}.jpg/,
                h = e => "https://i.ytimg.com/vi/".concat(e, "/hqdefault_live.jpg"),
                p = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/,
                T = {
                    [c.PlatformTypes.SPOTIFY]: {
                        deserialize: e => "".concat(_).concat(encodeURIComponent(e)),
                        serialize: e => e.split(_)[1]
                    },
                    [c.PlatformTypes.TWITCH]: {
                        deserialize: (e, t) => E(encodeURIComponent(e), t[0], t[1]),
                        serialize: e => {
                            let t = e.match(f);
                            return null != t ? t[1] : null
                        }
                    },
                    [c.PlatformTypes.YOUTUBE]: {
                        deserialize: e => h(encodeURIComponent(e)),
                        serialize: e => {
                            let t = e.match(p);
                            return null != t ? t[1] : null
                        }
                    },
                    mp: {
                        deserialize: e => (a(null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, "MEDIA_PROXY_ENDPOINT not configured"), new URL(e, location.protocol + window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT).toString()),
                        serialize: e => e
                    }
                },
                C = {},
                m = {};
            async function S(e) {
                let {
                    body: t
                } = await r.default.get({
                    url: c.Endpoints.APPLICATION_ASSETS(e),
                    oldFormErrors: !0
                });
                return C[e] = {
                    assets: s.keyBy(t, "name"),
                    lastUpdated: Date.now()
                }
            }

            function I(e, t) {
                let n = T[e].serialize(t);
                return n ? "".concat(e, ":").concat(n.toString()) : null
            }

            function g(e, t, n) {
                if (null != t && t.includes(":")) {
                    let [e, i] = t.split(":");
                    if (e === c.PlatformTypes.TWITCH) {
                        if (null == n || "number" == typeof n) {
                            new(0, o.default)("ApplicationAssetUtils").warn("getAssetImage: size must === [number, number] for Twitch");
                            return
                        }
                        return T[c.PlatformTypes.TWITCH].deserialize(i, n)
                    }
                    return Object.prototype.hasOwnProperty.call(T, e) ? T[e].deserialize(i) : void 0
                }
                if (null == e || null == t) return;
                let i = "number" == typeof n ? "?size=".concat((0, d.getBestMediaProxySize)(n)) : "";
                return null != window.GLOBAL_ENV.CDN_HOST ? "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/app-assets/").concat(e, "/").concat(t, ".png").concat(i) : "".concat(r.default.getAPIBaseURL(), "/applications/").concat(e, "/app-assets/").concat(t, ".png").concat(i)
            }
            async function A(e) {
                let {
                    assets: t
                } = await

                function(e) {
                    var t;
                    let n = C[e];
                    return null == n || (t = n.lastUpdated, Date.now() - t > 36e5) ? S(e) : Promise.resolve(n)
                }(e);
                return t
            }
            async function N(e, t) {
                let n = t.filter(e => null != e && !Object.prototype.hasOwnProperty.call(m, e) && null == m[e]);
                if (0 === n.length) return;
                let {
                    body: i
                } = await r.default.post({
                    url: c.Endpoints.APPLICATION_EXTERNAL_ASSETS(e),
                    body: {
                        urls: n
                    },
                    oldFormErrors: !0
                });
                for (let {
                        url: e,
                        external_asset_path: t
                    }
                    of i) m[e] = t
            }

            function O(e, t) {
                let n = 0,
                    i = e.filter(e => (null == e ? void 0 : e.startsWith("http:")) || (null == e ? void 0 : e.startsWith("https:")));
                if (i.length > 0)
                    for (let i = 0; i < e.length; i++) {
                        let a = e[i];
                        if (null == a) continue;
                        let l = Object.prototype.hasOwnProperty.call(m, a) ? m[a] : void 0;
                        null != l && (t[i] = I("mp", l), n++)
                    }
                return n === e.length
            }

            function R(e, t, n, i) {
                let a = !1;
                for (let l = 0; l < e.length; l++) {
                    let s = e[l];
                    if (null == s || null != t[l]) continue;
                    let r = Object.prototype.hasOwnProperty.call(n, s) && n[s];
                    if (!r) {
                        if (null == i || i <= 0) {
                            t[l] = null;
                            continue
                        }
                        a = !0
                    }
                    t[l] = r.id
                }
                return a
            }
            async function y(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                u.default.dispatch({
                    type: "APPLICATION_ASSETS_FETCH",
                    applicationId: e
                });
                let i = [],
                    a = t.filter(e => (null == e ? void 0 : e.startsWith("http:")) || (null == e ? void 0 : e.startsWith("https:")));
                a.length > 0 && await N(e, a);
                let l = O(t, i);
                if (l) return u.default.dispatch({
                    type: "APPLICATION_ASSETS_FETCH_SUCCESS",
                    applicationId: e
                }), i;
                let s = await A(e),
                    r = R(t, i, s, n);
                return r ? S(e).then(() => y(e, t, n - 1)) : (u.default.dispatch({
                    type: "APPLICATION_ASSETS_FETCH_SUCCESS",
                    applicationId: e
                }), i)
            }

            function v(e, t) {
                var n;
                let i = [],
                    a = O(t, i);
                if (a) return i;
                let l = null === (n = C[e]) || void 0 === n ? void 0 : n.assets;
                return null == l ? i : (R(t, i, l), i)
            }
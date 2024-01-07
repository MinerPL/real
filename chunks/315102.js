            "use strict";
            let i;
            n.r(t), n.d(t, {
                DEFAULT_AVATARS: function() {
                    return p
                },
                SUPPORTS_WEBP: function() {
                    return _
                },
                getEmojiURL: function() {
                    return T
                },
                getUserAvatarURL: function() {
                    return C
                },
                getGuildMemberAvatarURLSimple: function() {
                    return v
                },
                getGuildMemberAvatarURL: function() {
                    return A
                },
                getUserBannerURL: function() {
                    return R
                },
                getAvatarDecorationURL: function() {
                    return N
                },
                getGuildMemberBannerURL: function() {
                    return O
                },
                getVideoFilterAssetURL: function() {
                    return w
                },
                isAnimatedIconHash: function() {
                    return x
                },
                isVideoAssetHash: function() {
                    return F
                },
                isAnimatedImageURL: function() {
                    return V
                },
                default: function() {
                    return H
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var r = n("552442"),
                s = n.n(r),
                a = n("522632"),
                o = n("249654"),
                l = n("234251"),
                u = n("407063"),
                c = n("240481"),
                d = n("773336"),
                f = n("49111"),
                E = n("680894"),
                h = n("363577");
            i = n("523096").default;
            let p = i.DEFAULT_AVATARS;
            i.DEFAULT_GROUP_DM_AVATARS;
            let _ = i.canUseWebp(),
                S = (0, d.isAndroid)();

            function m(e) {
                let t, {
                    endpoint: n,
                    path: i,
                    id: r,
                    hash: s,
                    size: o,
                    canAnimate: l = !1,
                    keepAspectRatio: c,
                    format: d = null
                } = e;
                if (null == r || null == s) return;
                let f = null != d ? d : l && x(s) ? "gif" : "jpg";
                l && F(s) && (f = "mp4");
                let E = window.GLOBAL_ENV.CDN_HOST;
                if (null != E ? ("jpg" === f && (f = _ ? "webp" : "png"), t = "".concat(location.protocol, "//").concat(E, "/").concat(i, "/").concat(r, "/").concat(s, ".").concat(f)) : t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + n(r, s, f), "mp4" === f) return t;
                let h = {};
                return null != o && (h.size = (0, u.getBestMediaProxySize)(o * (0, u.getDevicePixelRatio)())), null != c && (h.keep_aspect_ratio = c), t + "?".concat(a.stringify(h))
            }

            function T(e) {
                let {
                    id: t,
                    animated: n,
                    size: i,
                    forcePNG: r = !1
                } = e, s = _ && !r ? "webp" : "png", a = _ && !S ? "&quality=lossless" : "";
                return null != window.GLOBAL_ENV.CDN_HOST ? "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/emojis/").concat(t, ".").concat(n ? "gif" : s, "?size=").concat((0, u.getBestMediaProxySize)(i * (0, u.getDevicePixelRatio)())).concat(a) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.Endpoints.EMOJI(t, n ? "gif" : s)
            }

            function g(e, t) {
                if (null == e && null == t) return p[0];
                let n = (0, c.parseInteger)(t, 0);
                return n > 0 ? p[n % 5] : null != e ? p[s(e).shiftRight(22).mod(6).toJSNumber()] : p[0]
            }

            function I(e) {
                let {
                    id: t,
                    avatar: n,
                    discriminator: r,
                    bot: s
                } = e, a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.AVATAR_SIZE, l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                if (s && t !== E.CLYDE_AI_USER_ID) {
                    let e = i.BOT_AVATARS[n];
                    if (e) return e;
                    if (null == n && "0000" === r) return p[0]
                }
                return m({
                    endpoint: f.Endpoints.AVATAR,
                    path: "avatars",
                    id: t,
                    hash: n,
                    size: o,
                    canAnimate: a,
                    format: l
                })
            }

            function C(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.AVATAR_SIZE,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return null !== (t = I(e, n, i, r)) && void 0 !== t ? t : g(e.id, e.discriminator)
            }

            function v(e) {
                let t, {
                        guildId: n,
                        userId: i,
                        avatar: r,
                        canAnimate: s = !1,
                        size: o = f.AVATAR_SIZE
                    } = e,
                    l = s && x(r) ? "gif" : "jpg",
                    {
                        CDN_HOST: c
                    } = window.GLOBAL_ENV;
                return null != c ? ("jpg" === l && (l = _ ? "webp" : "png"), t = "".concat(location.protocol, "//").concat(c).concat(f.Endpoints.GUILD_MEMBER_AVATAR(n, i, r, l))) : t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.Endpoints.GUILD_MEMBER_AVATAR(n, i, r, l), t + "?".concat(a.stringify({
                    size: (0, u.getBestMediaProxySize)(o * (0, u.getDevicePixelRatio)())
                }))
            }

            function A(e) {
                let {
                    userId: t,
                    avatar: n,
                    guildId: i
                } = e, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return null == n ? null : v({
                    userId: t,
                    avatar: n,
                    guildId: i,
                    canAnimate: r
                })
            }

            function R(e) {
                let t, {
                    id: n,
                    banner: i,
                    canAnimate: r,
                    size: s
                } = e;
                if (null == i) return;
                let a = window.GLOBAL_ENV.CDN_HOST,
                    o = r && x(i) ? "gif" : "png";
                return t = (null != a ? "".concat(location.protocol, "//").concat(a, "/banners/").concat(n, "/").concat(i, ".").concat(o) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.Endpoints.USER_BANNER(n, i, o)) + "?size=".concat((0, u.getBestMediaProxySize)(s * (0, u.getDevicePixelRatio)()))
            }

            function N(e) {
                let {
                    avatarDecoration: t,
                    size: n,
                    canAnimate: i = !1
                } = e;
                if (null == t) return;
                let {
                    CDN_HOST: r,
                    API_ENDPOINT: s
                } = window.GLOBAL_ENV, a = f.Endpoints.AVATAR_DECORATION_PRESETS(t.asset), o = new URL(null != r ? "".concat(location.protocol, "//").concat(r).concat(a) : "".concat(location.protocol).concat(s).concat(a));
                return o.searchParams.set("size", "".concat((0, u.getBestMediaProxySize)(n * (0, u.getDevicePixelRatio)()))), o.searchParams.set("passthrough", "".concat(i && (0, l.isAnimatedAvatarDecoration)(t.asset))), o.toString()
            }

            function O(e) {
                let t, {
                    id: n,
                    guildId: i,
                    banner: r,
                    canAnimate: s,
                    size: a
                } = e;
                if (null == r || null == i) return;
                let o = window.GLOBAL_ENV.CDN_HOST,
                    l = s && x(r) ? "gif" : "png",
                    c = f.Endpoints.GUILD_MEMBER_BANNER(i, n, r, l);
                return t = (null != o ? "".concat(location.protocol, "//").concat(o).concat(c) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c) + "?size=".concat((0, u.getBestMediaProxySize)(a * (0, u.getDevicePixelRatio)()))
            }

            function D(e) {
                let t, {
                    id: n,
                    splash: i,
                    size: r
                } = e;
                if (null == i) return null;
                null == r && (r = window.screen.width * (0, u.getDevicePixelRatio)()), r = (0, u.getBestMediaProxySize)(r);
                let s = window.GLOBAL_ENV.CDN_HOST;
                return t = (null != s ? "".concat(location.protocol, "//").concat(s, "/splashes/").concat(n, "/").concat(i, ".jpg") : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.Endpoints.GUILD_SPLASH(n, i)) + "?size=".concat(r)
            }

            function y(e) {
                let t, {
                        id: n,
                        banner: i
                    } = e,
                    r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (null == i) return null;
                let s = (0, u.getBestMediaProxySize)(240 * (0, u.getDevicePixelRatio)()),
                    a = _ ? "webp" : "jpg",
                    o = r && x(i) ? "gif" : a,
                    l = window.GLOBAL_ENV.CDN_HOST;
                return t = (null != l ? "".concat(location.protocol, "//").concat(l, "/banners/").concat(n, "/").concat(i, ".").concat(o) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.Endpoints.GUILD_BANNER(n, i, o)) + "?size=".concat(s), "jpg" === o && (t += "&quality=lossless"), t
            }

            function P(e) {
                let t, {
                    id: n,
                    homeHeader: i
                } = e;
                if (null == i) return null;
                let r = (0, u.getBestMediaProxySize)(1096 * (0, u.getDevicePixelRatio)()),
                    s = window.GLOBAL_ENV.CDN_HOST;
                return t = (null != s ? "".concat(location.protocol, "//").concat(s, "/home-headers/").concat(n, "/").concat(i, ".png") : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.Endpoints.GUILD_HOME_HEADER(n, i)) + "?size=".concat(r)
            }

            function L(e) {
                let t, {
                    id: n,
                    splash: i,
                    size: r
                } = e;
                if (null == i) return null;
                null == r && (r = window.screen.width * (0, u.getDevicePixelRatio)()), r = (0, u.getBestMediaProxySize)(r);
                let s = window.GLOBAL_ENV.CDN_HOST;
                return t = (null != s ? "".concat(location.protocol, "//").concat(s, "/discovery-splashes/").concat(n, "/").concat(i, ".jpg") : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.Endpoints.GUILD_DISCOVERY_SPLASH(n, i)) + "?size=".concat(r)
            }

            function b(e) {
                let {
                    id: t,
                    icon: n,
                    size: i,
                    canAnimate: r = !1
                } = e;
                return m({
                    endpoint: f.Endpoints.GUILD_ICON,
                    path: "icons",
                    id: t,
                    hash: n,
                    size: i,
                    canAnimate: r
                })
            }

            function M(e) {
                let {
                    id: t,
                    icon: n,
                    size: i = f.AVATAR_SIZE,
                    canAnimate: r = !1
                } = e;
                return m({
                    endpoint: f.Endpoints.GUILD_TEMPLATE_ICON,
                    path: "guild-templates",
                    id: t,
                    hash: n,
                    size: i,
                    canAnimate: r
                })
            }

            function U(e) {
                let {
                    id: t,
                    icon: n,
                    size: i = f.AVATAR_SIZE,
                    bot: r,
                    botIconFirst: s,
                    fallbackAvatar: a = !0
                } = e;
                if (null != r && s) {
                    let e = I(r, !1, i);
                    if (null != e) return e
                }
                if (null != n) return m({
                    endpoint: f.Endpoints.APPLICATION_ICON,
                    path: "app-icons",
                    id: t,
                    hash: n,
                    size: i,
                    canAnimate: !1
                });
                if (null != r) {
                    let e = I(r, !1, i);
                    if (null != e) return e
                }
                if (a) return h
            }

            function G(e) {
                let {
                    id: t,
                    hash: n,
                    size: i = f.AVATAR_SIZE,
                    keepAspectRatio: r = !1
                } = e;
                return m({
                    endpoint: f.Endpoints.APPLICATION_ICON,
                    path: "app-icons",
                    id: t,
                    hash: n,
                    size: i,
                    canAnimate: !1,
                    keepAspectRatio: r
                })
            }

            function w(e) {
                let {
                    userId: t,
                    assetId: n,
                    assetHash: i,
                    size: r,
                    canAnimate: s = !0
                } = e;
                return m({
                    endpoint: (e, r, s) => f.Endpoints.VIDEO_FILTER_ASSET_STORAGE(t, n, i, s),
                    path: "video-filter-assets/".concat(t),
                    id: n,
                    hash: i,
                    size: r,
                    canAnimate: s
                })
            }

            function k(e) {
                var t, n, r;
                let {
                    id: s,
                    icon: a,
                    applicationId: l,
                    size: u
                } = e;
                if (null != l) return null !== (t = U({
                    id: l,
                    icon: a,
                    size: u
                })) && void 0 !== t ? t : i.DEFAULT_CHANNEL_ICON;
                return null !== (n = m({
                    endpoint: f.Endpoints.CHANNEL_ICON,
                    path: "channel-icons",
                    id: s,
                    hash: a,
                    canAnimate: !1,
                    size: u
                })) && void 0 !== n ? n : (r = s, i.DEFAULT_GROUP_DM_AVATARS[o.default.extractTimestamp(r) % i.DEFAULT_GROUP_DM_AVATARS.length])
            }

            function x(e) {
                return null != e && e.startsWith("a_")
            }

            function F(e) {
                return null != e && e.startsWith("v_")
            }

            function V(e) {
                return null != e && x(function(e) {
                    let t;
                    try {
                        {
                            let n = new URL(e);
                            t = n.pathname
                        }
                        let n = t.split("/");
                        return n.pop()
                    } catch (e) {
                        return null
                    }
                }(e))
            }

            function B(e) {
                return "number" == typeof e ? e : {
                    uri: null != e ? e : void 0
                }
            }
            var H = {
                getUserAvatarURL: C,
                getDefaultAvatarURL: g,
                getGuildMemberAvatarURL: A,
                getGuildMemberAvatarURLSimple: v,
                getGuildMemberAvatarSource: function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = A(e, n);
                    return null != i ? B(i) : t.getAvatarSource(e.guildId, n)
                },
                getGuildMemberBannerURL: O,
                getUserBannerURL: R,
                getAvatarDecorationURL: N,
                hasAnimatedGuildIcon: function(e) {
                    return x(null == e ? void 0 : e.icon)
                },
                isAnimatedIconHash: x,
                getUserAvatarSource(e, t, n) {
                    let i = C(e, t, n);
                    return B(i)
                },
                getGuildIconURL: b,
                getGuildSplashURL: D,
                getGuildSplashSource: function(e) {
                    return B(D(e))
                },
                getGuildDiscoverySplashURL: L,
                getGuildDiscoverySplashSource: function(e) {
                    return B(L(e))
                },
                getGuildBannerURL: y,
                getGuildHomeHeaderURL: P,
                getResourceChannelIconURL: function(e) {
                    let {
                        channelId: t,
                        icon: n
                    } = e;
                    return null == n ? null : m({
                        endpoint: f.Endpoints.GUILD_RESOURCE_CHANNELS_ICON,
                        path: "resource-channels",
                        id: t,
                        hash: n,
                        size: f.AVATAR_SIZE,
                        canAnimate: !0
                    })
                },
                getNewMemberActionIconURL: function(e) {
                    let {
                        channelId: t,
                        icon: n
                    } = e;
                    return null == n ? null : m({
                        endpoint: f.Endpoints.GUILD_NEW_MEMBER_ACTIONS_ICON,
                        path: "new-member-actions",
                        id: t,
                        hash: n,
                        size: f.AVATAR_SIZE,
                        canAnimate: !0
                    })
                },
                getGuildTemplateIconURL: M,
                getChannelIconURL: k,
                getEmojiURL: T,
                getApplicationIconURL: U,
                getGameAssetURL: G,
                getVideoFilterAssetURL: w,
                getGameAssetSource(e) {
                    let t = G(e);
                    return B(t)
                },
                getGuildIconSource(e) {
                    let t = b(e);
                    return B(t)
                },
                getGuildTemplateIconSource(e) {
                    let t = M(e);
                    return B(t)
                },
                getGuildBannerSource(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = y(e, t);
                    return B(n)
                },
                getGuildHomeHeaderSource(e) {
                    let t = P(e);
                    return B(t)
                },
                getChannelIconSource(e) {
                    let t = k(e);
                    return B(t)
                },
                getApplicationIconSource(e) {
                    let t = U(e);
                    return B(t)
                },
                makeSource: B,
                getAnimatableSourceWithFallback(e, t) {
                    let n = t(e);
                    if (!(0, d.isAndroid)() || !e || "number" == typeof n) return n;
                    {
                        let e = t(!1);
                        return "number" != typeof e && e.uri === n.uri ? e : [n, {
                            ...e,
                            isForceCached: !0
                        }]
                    }
                }
            }
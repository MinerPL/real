            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("222007"), n("781738");
            var s, i = n("446674"),
                r = n("95410"),
                a = n("913144"),
                o = n("253981"),
                d = n("48703"),
                u = n("450484");
            let l = "MaskedLinkStore",
                f = new Set,
                _ = new Set,
                c = null === (s = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === s ? void 0 : s.replace("//", "");

            function g(e) {
                let t = (0, d.getHostname)(e);
                switch (t) {
                    case window.GLOBAL_ENV.CDN_HOST:
                    case window.GLOBAL_ENV.INVITE_HOST:
                    case window.GLOBAL_ENV.GIFT_CODE_HOST:
                    case window.GLOBAL_ENV.GUILD_TEMPLATE_HOST:
                    case c:
                    case location.hostname:
                        return !0;
                    default:
                        return u.SPOTIFY_HOSTNAMES.includes(t) || o.default.isDiscordHostname(t) || f.has(t)
                }
            }

            function m(e) {
                let t = (0, d.getProtocol)(e);
                return _.has(t)
            }
            class h extends i.default.Store {
                initialize() {
                    var e;
                    let t = null !== (e = r.default.get(l)) && void 0 !== e ? e : {};
                    if (Array.isArray(t)) f = new Set(null != t ? Array.from(t) : null), _ = new Set;
                    else {
                        let {
                            trustedDomains: e,
                            trustedProtocols: n
                        } = t;
                        f = new Set(null != e ? Array.from(e) : null), _ = new Set(null != n ? Array.from(n) : null)
                    }
                }
                isTrustedDomain(e) {
                    return g(e)
                }
                isTrustedProtocol(e) {
                    return m(e)
                }
            }
            h.displayName = "MaskedLinkStore";
            var v = new h(a.default, {
                MASKED_LINK_ADD_TRUSTED_DOMAIN: function(e) {
                    let {
                        url: t
                    } = e;
                    if (g(t)) return !1;
                    f.add((0, d.getHostname)(t)), r.default.set(l, {
                        trustedDomains: f,
                        trustedProtocols: _
                    })
                },
                MASKED_LINK_ADD_TRUSTED_PROTOCOL: function(e) {
                    let {
                        url: t
                    } = e;
                    if (m(t)) return !1;
                    _.add((0, d.getProtocol)(t)), r.default.set(l, {
                        trustedDomains: f,
                        trustedProtocols: _
                    })
                }
            })
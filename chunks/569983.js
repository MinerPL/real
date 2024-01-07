            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007"), n("781738");
            var i, a = n("446674"),
                l = n("95410"),
                s = n("913144"),
                r = n("253981"),
                u = n("48703"),
                o = n("450484");
            let d = "MaskedLinkStore",
                c = new Set,
                _ = new Set,
                E = null === (i = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === i ? void 0 : i.replace("//", "");

            function f(e) {
                let t = (0, u.getHostname)(e);
                switch (t) {
                    case window.GLOBAL_ENV.CDN_HOST:
                    case window.GLOBAL_ENV.INVITE_HOST:
                    case window.GLOBAL_ENV.GIFT_CODE_HOST:
                    case window.GLOBAL_ENV.GUILD_TEMPLATE_HOST:
                    case E:
                    case location.hostname:
                        return !0;
                    default:
                        return o.SPOTIFY_HOSTNAMES.includes(t) || r.default.isDiscordHostname(t) || c.has(t)
                }
            }

            function h(e) {
                let t = (0, u.getProtocol)(e);
                return _.has(t)
            }
            class p extends a.default.Store {
                initialize() {
                    var e;
                    let t = null !== (e = l.default.get(d)) && void 0 !== e ? e : {};
                    if (Array.isArray(t)) c = new Set(null != t ? Array.from(t) : null), _ = new Set;
                    else {
                        let {
                            trustedDomains: e,
                            trustedProtocols: n
                        } = t;
                        c = new Set(null != e ? Array.from(e) : null), _ = new Set(null != n ? Array.from(n) : null)
                    }
                }
                isTrustedDomain(e) {
                    return f(e)
                }
                isTrustedProtocol(e) {
                    return h(e)
                }
            }
            p.displayName = "MaskedLinkStore";
            var T = new p(s.default, {
                MASKED_LINK_ADD_TRUSTED_DOMAIN: function(e) {
                    let {
                        url: t
                    } = e;
                    if (f(t)) return !1;
                    c.add((0, u.getHostname)(t)), l.default.set(d, {
                        trustedDomains: c,
                        trustedProtocols: _
                    })
                },
                MASKED_LINK_ADD_TRUSTED_PROTOCOL: function(e) {
                    let {
                        url: t
                    } = e;
                    if (h(t)) return !1;
                    _.add((0, u.getProtocol)(t)), l.default.set(d, {
                        trustedDomains: c,
                        trustedProtocols: _
                    })
                }
            })
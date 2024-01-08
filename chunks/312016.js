            "use strict";
            n.r(t), n.d(t, {
                remainingPathFromDiscordHostMatch: function() {
                    return F
                },
                default: function() {
                    return w
                },
                parseURLSafely: function() {
                    return V
                },
                findCodedLink: function() {
                    return H
                }
            }), n("781738"), n("222007"), n("424973");
            var i, a, l, s, r, u, o = n("746379"),
                d = n("810793");
            n("355025");
            var c = n("9294");
            n("42793");
            var _ = n("337543"),
                E = n("655518"),
                f = n("253981"),
                h = n("139514"),
                p = n("49111");
            let T = /^\/([a-zA-Z0-9-]+)$/,
                C = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
                m = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?$/,
                S = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
                I = /^\/application-directory\/([0-9-]+)\/?$/,
                g = /^\/activities\/([0-9-]+)\/?$/,
                A = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
                N = /^\/channels\/([0-9]+)\/shop$/,
                O = /^\/clyde-profiles\/([0-9-]+)\/?$/,
                R = G(window.GLOBAL_ENV.INVITE_HOST),
                y = G(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
                v = G(null !== (i = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== i ? i : "//canary.".concat(p.PRIMARY_DOMAIN)),
                M = G("//canary.".concat(p.PRIMARY_DOMAIN)),
                D = G("//ptb.".concat(p.PRIMARY_DOMAIN)),
                L = G("discordapp.com"),
                U = G("discord.com"),
                P = [E.default.escape(null !== (a = R.host) && void 0 !== a ? a : ""), E.default.escape(null !== (l = y.host) && void 0 !== l ? l : ""), E.default.escape(null !== (s = v.host) && void 0 !== s ? s : ""), E.default.escape(null !== (r = L.host) && void 0 !== r ? r : ""), E.default.escape(null !== (u = U.host) && void 0 !== u ? u : "")].filter(Boolean),
                b = RegExp("((https?://[^ ]*)|^|[^/][^/.])(".concat(P.join("|"), ")"), "g");

            function G(e) {
                if (null == e) return {
                    host: null,
                    pathPrefix: null
                };
                if (e.indexOf("/") >= 0) {
                    let t = (0, o.parse)(e, void 0, !0);
                    return {
                        host: t.host,
                        pathPrefix: t.pathname
                    }
                }
                return {
                    host: e,
                    pathPrefix: null
                }
            }

            function k(e, t) {
                var n, i, a;
                if ((null === (n = t.host) || void 0 === n ? void 0 : n.replace(/^www[.]/i, "")) !== e.host) return null;
                let l = null !== (i = t.pathname) && void 0 !== i ? i : "",
                    s = null !== (a = e.pathPrefix) && void 0 !== a ? a : "";
                if (!l.startsWith(s)) return null;
                let r = l.substring(s.length);
                return "" === r ? null : r
            }

            function F(e) {
                var t, n, i, a;
                return null !== (a = null !== (i = null !== (n = null !== (t = k(v, e)) && void 0 !== t ? t : k(M, e)) && void 0 !== n ? n : k(D, e)) && void 0 !== i ? i : k(L, e)) && void 0 !== a ? a : k(U, e)
            }

            function w(e) {
                if (null == e) return [];
                let t = new Set,
                    n = [];
                e = e.replace(b, (e, t, n, i) => null == n ? "".concat(t, "http://").concat(i) : e);
                let i = e.match(f.default.URL_REGEX);
                if (null == i) return [];
                for (let e of i) {
                    var a, l, s, r;
                    if (n.length >= 10) break;
                    let i = V(e);
                    if (null == i || null == i.pathname) continue;
                    let u = k(R, i),
                        o = k(y, i),
                        E = null !== (r = null !== (s = null !== (l = null !== (a = k(v, i)) && void 0 !== a ? a : k(M, i)) && void 0 !== l ? l : k(D, i)) && void 0 !== s ? s : k(L, i)) && void 0 !== r ? r : k(U, i),
                        f = (e, i) => {
                            !t.has(i) && (t.add(i), n.push({
                                type: e,
                                code: i
                            }))
                        };
                    if ((null == u ? void 0 : u.match(T)) != null) {
                        let e = (0, c.generateInviteKeyFromUrlParams)(u.substring(1), i.search);
                        _.default.getInvite(e), f(h.CodedLinkType.INVITE, e)
                    }(null == o ? void 0 : o.match(T)) != null && f(h.CodedLinkType.TEMPLATE, o.substring(1));
                    let p = null == E ? void 0 : E.match(m);
                    if (null != p) {
                        let e = p[1].toUpperCase();
                        if (e === h.CodedLinkType.INVITE) {
                            let e = (0, c.generateInviteKeyFromUrlParams)(p[2], i.search);
                            f(h.CodedLinkType.INVITE, e)
                        } else f(e, p[2])
                    }(null == E ? void 0 : E.match(C)) != null && f(h.CodedLinkType.CHANNEL_LINK, E.replace("/channels/", ""));
                    let P = function(e) {
                        if (null == e) return null;
                        let t = e.match(S);
                        return null != t && t.length >= 4 ? {
                            guildId: t[1],
                            guildEventId: t[2],
                            recurrenceId: t[4]
                        } : null
                    }(i.pathname);
                    null != P && f(h.CodedLinkType.EVENT, "".concat(P.guildId, "-").concat(P.guildEventId) + (null != P.recurrenceId ? "-".concat(P.recurrenceId) : ""));
                    let b = null == E ? void 0 : E.match(I);
                    if (null != b) {
                        let e = b[1];
                        f(h.CodedLinkType.APP_DIRECTORY_PROFILE, e)
                    }
                    let G = null == E ? void 0 : E.match(O);
                    if (null != G) {
                        let e = G[1];
                        f(h.CodedLinkType.CLYDE_PROFILE, e)
                    }
                    let F = null == E ? void 0 : E.match(g),
                        {
                            activityBookmarkEmbedEnabled: w
                        } = d.ActivityBookmarkEmbedExperiment.getCurrentConfig({
                            location: "78afcf_1"
                        }, {
                            autoTrackExposure: !1
                        });
                    if (null != F && w) {
                        let e = F[1];
                        f(h.CodedLinkType.ACTIVITY_BOOKMARK, e)
                    }
                    let H = null == E ? void 0 : E.match(A);
                    null != H && f(h.CodedLinkType.GUILD_PRODUCT, "".concat(H[1], "-").concat(H[2]));
                    let x = null == E ? void 0 : E.match(N);
                    null != x && f(h.CodedLinkType.SERVER_SHOP, x[1])
                }
                return n
            }

            function V(e) {
                try {
                    return (0, o.parse)(e)
                } catch (e) {
                    return null
                }
            }

            function H(e) {
                return w(e)[0]
            }
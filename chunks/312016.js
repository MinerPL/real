            "use strict";
            n.r(t), n.d(t, {
                remainingPathFromDiscordHostMatch: function() {
                    return b
                },
                default: function() {
                    return x
                },
                parseURLSafely: function() {
                    return F
                },
                findCodedLink: function() {
                    return V
                }
            }), n("781738"), n("222007"), n("424973");
            var r, i, l, u, a, o, d = n("746379"),
                s = n("810793");
            n("355025");
            var E = n("9294");
            n("42793");
            var _ = n("337543"),
                c = n("655518"),
                I = n("253981"),
                S = n("139514"),
                T = n("49111");
            let f = /^\/([a-zA-Z0-9-]+)$/,
                p = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
                N = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?$/,
                C = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
                A = /^\/application-directory\/([0-9-]+)\/?$/,
                R = /^\/activities\/([0-9-]+)\/?$/,
                h = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
                O = /^\/channels\/([0-9]+)\/shop$/,
                L = /^\/clyde-profiles\/([0-9-]+)\/?$/,
                g = w(window.GLOBAL_ENV.INVITE_HOST),
                P = w(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
                m = w(null !== (r = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== r ? r : "//canary.".concat(T.PRIMARY_DOMAIN)),
                y = w("//canary.".concat(T.PRIMARY_DOMAIN)),
                v = w("//ptb.".concat(T.PRIMARY_DOMAIN)),
                D = w("discordapp.com"),
                U = w("discord.com"),
                M = [c.default.escape(null !== (i = g.host) && void 0 !== i ? i : ""), c.default.escape(null !== (l = P.host) && void 0 !== l ? l : ""), c.default.escape(null !== (u = m.host) && void 0 !== u ? u : ""), c.default.escape(null !== (a = D.host) && void 0 !== a ? a : ""), c.default.escape(null !== (o = U.host) && void 0 !== o ? o : "")].filter(Boolean),
                G = RegExp("((https?://[^ ]*)|^|[^/][^/.])(".concat(M.join("|"), ")"), "g");

            function w(e) {
                if (null == e) return {
                    host: null,
                    pathPrefix: null
                };
                if (e.indexOf("/") >= 0) {
                    let t = (0, d.parse)(e, void 0, !0);
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

            function B(e, t) {
                var n, r, i;
                if ((null === (n = t.host) || void 0 === n ? void 0 : n.replace(/^www[.]/i, "")) !== e.host) return null;
                let l = null !== (r = t.pathname) && void 0 !== r ? r : "",
                    u = null !== (i = e.pathPrefix) && void 0 !== i ? i : "";
                if (!l.startsWith(u)) return null;
                let a = l.substring(u.length);
                return "" === a ? null : a
            }

            function b(e) {
                var t, n, r, i;
                return null !== (i = null !== (r = null !== (n = null !== (t = B(m, e)) && void 0 !== t ? t : B(y, e)) && void 0 !== n ? n : B(v, e)) && void 0 !== r ? r : B(D, e)) && void 0 !== i ? i : B(U, e)
            }

            function x(e) {
                if (null == e) return [];
                let t = new Set,
                    n = [];
                e = e.replace(G, (e, t, n, r) => null == n ? "".concat(t, "http://").concat(r) : e);
                let r = e.match(I.default.URL_REGEX);
                if (null == r) return [];
                for (let e of r) {
                    var i, l, u, a;
                    if (n.length >= 10) break;
                    let r = F(e);
                    if (null == r || null == r.pathname) continue;
                    let o = B(g, r),
                        d = B(P, r),
                        c = null !== (a = null !== (u = null !== (l = null !== (i = B(m, r)) && void 0 !== i ? i : B(y, r)) && void 0 !== l ? l : B(v, r)) && void 0 !== u ? u : B(D, r)) && void 0 !== a ? a : B(U, r),
                        I = (e, r) => {
                            !t.has(r) && (t.add(r), n.push({
                                type: e,
                                code: r
                            }))
                        };
                    if ((null == o ? void 0 : o.match(f)) != null) {
                        let e = (0, E.generateInviteKeyFromUrlParams)(o.substring(1), r.search);
                        _.default.getInvite(e), I(S.CodedLinkType.INVITE, e)
                    }(null == d ? void 0 : d.match(f)) != null && I(S.CodedLinkType.TEMPLATE, d.substring(1));
                    let T = null == c ? void 0 : c.match(N);
                    if (null != T) {
                        let e = T[1].toUpperCase();
                        if (e === S.CodedLinkType.INVITE) {
                            let e = (0, E.generateInviteKeyFromUrlParams)(T[2], r.search);
                            I(S.CodedLinkType.INVITE, e)
                        } else I(e, T[2])
                    }(null == c ? void 0 : c.match(p)) != null && I(S.CodedLinkType.CHANNEL_LINK, c.replace("/channels/", ""));
                    let M = function(e) {
                        if (null == e) return null;
                        let t = e.match(C);
                        return null != t && t.length >= 4 ? {
                            guildId: t[1],
                            guildEventId: t[2],
                            recurrenceId: t[4]
                        } : null
                    }(r.pathname);
                    null != M && I(S.CodedLinkType.EVENT, "".concat(M.guildId, "-").concat(M.guildEventId) + (null != M.recurrenceId ? "-".concat(M.recurrenceId) : ""));
                    let G = null == c ? void 0 : c.match(A);
                    if (null != G) {
                        let e = G[1];
                        I(S.CodedLinkType.APP_DIRECTORY_PROFILE, e)
                    }
                    let w = null == c ? void 0 : c.match(L);
                    if (null != w) {
                        let e = w[1];
                        I(S.CodedLinkType.CLYDE_PROFILE, e)
                    }
                    let b = null == c ? void 0 : c.match(R),
                        {
                            activityBookmarkEmbedEnabled: x
                        } = s.ActivityBookmarkEmbedExperiment.getCurrentConfig({
                            location: "78afcf_1"
                        }, {
                            autoTrackExposure: !1
                        });
                    if (null != b && x) {
                        let e = b[1];
                        I(S.CodedLinkType.ACTIVITY_BOOKMARK, e)
                    }
                    let V = null == c ? void 0 : c.match(h);
                    null != V && I(S.CodedLinkType.GUILD_PRODUCT, "".concat(V[1], "-").concat(V[2]));
                    let H = null == c ? void 0 : c.match(O);
                    null != H && I(S.CodedLinkType.SERVER_SHOP, H[1])
                }
                return n
            }

            function F(e) {
                try {
                    return (0, d.parse)(e)
                } catch (e) {
                    return null
                }
            }

            function V(e) {
                return x(e)[0]
            }
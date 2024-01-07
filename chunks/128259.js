            "use strict";
            n.r(t), n.d(t, {
                isLinkTrusted: function() {
                    return y
                },
                handleClick: function() {
                    return v
                }
            });
            var i = n("463928"),
                a = n.n(i),
                l = n("404118"),
                s = n("145292"),
                r = n("545158"),
                u = n("195052"),
                o = n("352266"),
                d = n("630869"),
                c = n("537025"),
                _ = n("765089"),
                E = n("647374"),
                f = n("91984"),
                h = n("835174"),
                p = n("566271"),
                T = n("42203"),
                C = n("305961"),
                m = n("569983"),
                S = n("48703"),
                I = n("377253"),
                g = n("27618"),
                A = n("18494"),
                N = n("599110"),
                O = n("49111"),
                R = n("782340");

            function y(e, t) {
                var n;
                let i = T.default.getChannel(A.default.getChannelId());
                return !!(null == i || i.type !== O.ChannelTypes.DM || g.default.isFriend(null !== (n = i.getRecipientId()) && void 0 !== n ? n : "")) && e === t
            }

            function v(e, t) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                    {
                        trusted: g,
                        onClick: y,
                        onConfirm: v,
                        shouldConfirm: M,
                        messageId: L,
                        channelId: D
                    } = e,
                    U = a.sanitizeUrl(e.href);
                if (null == U) {
                    null != t && t.preventDefault(), l.default.show({
                        title: R.default.Messages.HOLD_UP,
                        body: R.default.Messages.MALFORMED_LINK_BODY.format({
                            url: e.href
                        }),
                        isDismissable: !0
                    });
                    return
                }
                let P = null,
                    b = !1,
                    G = L,
                    k = D,
                    F = null;
                if (null != L && null != D) {
                    var w, H, x;
                    let e = I.default.getMessage(D, L),
                        t = T.default.getBasicChannel(D);
                    P = null !== (x = null == t ? void 0 : t.guild_id) && void 0 !== x ? x : null;
                    let n = C.default.getGuild(P),
                        i = (null == e ? void 0 : null === (w = e.messageReference) || void 0 === w ? void 0 : w.guild_id) != null && (null == e ? void 0 : e.webhookId) != null && (null == e ? void 0 : e.hasFlag(O.MessageFlags.IS_CROSSPOST)) && null != P;
                    i && (null == e ? void 0 : null === (H = e.messageReference) || void 0 === H ? void 0 : H.guild_id) != null ? (G = e.messageReference.message_id, k = e.messageReference.channel_id, F = e.messageReference.guild_id) : F = P;
                    let a = (null == t ? void 0 : t.type) === O.ChannelTypes.GUILD_ANNOUNCEMENT && (null == n ? void 0 : n.hasFeature(O.GuildFeatures.COMMUNITY)) === !0,
                        l = (null == e ? void 0 : e.hasFlag(O.MessageFlags.EPHEMERAL)) === !0;
                    b = null != e && !l && (i || a)
                }
                let V = T.default.getChannel(A.default.getChannelId()),
                    B = C.default.getGuild(null == V ? void 0 : V.getGuildId());
                if (null != V && null != B && B.hasFeature(O.GuildFeatures.DISCOVERABLE) && N.default.track(O.AnalyticEvents.URL_CLICKED, {
                        url_domain: (0, S.getHostname)(U),
                        guild_id: B.id,
                        channel_id: V.id
                    }), _.default.trackLinkClicked(U), null != y) {
                    if (y(t)) return
                } else {
                    let {
                        default: e
                    } = n("572544"), a = e(U, {
                        skipExtensionCheck: void 0,
                        analyticsLocations: i
                    });
                    if (null != a && a(t)) return
                }
                let Y = () => {
                        if (b && _.default.trackAnnouncementMessageLinkClicked({
                                messageId: G,
                                channelId: D,
                                guildId: P,
                                sourceChannelId: k,
                                sourceGuildId: F
                            }), null != v) {
                            v();
                            return
                        }(0, r.default)(U)
                    },
                    K = o.default.isBlockedDomain(U);
                if (null !== K) {
                    null == t || t.preventDefault(), u.default.show(U);
                    return
                }
                if (null != (0, p.isSuspiciousDownload)(U)) {
                    null == t || t.preventDefault(), h.default.show(U);
                    return
                }
                if ((0, c.shouldShowLinkNotDiscordWarning)(U)) {
                    null == t || t.preventDefault(), d.default.show(U);
                    return
                }
                let j = "function" == typeof g ? g() : g,
                    W = (0, S.getProtocol)(U),
                    z = !("http:" === W || "https:" === W);
                if (!z && (j || m.default.isTrustedDomain(U)) || z && m.default.isTrustedProtocol(U)) {
                    null == t || null != M && M ? Y() : b && _.default.trackAnnouncementMessageLinkClicked({
                        messageId: G,
                        channelId: D,
                        guildId: P,
                        sourceChannelId: k,
                        sourceGuildId: F
                    });
                    return
                }
                if (null != t && t.preventDefault(), z) f.default.show({
                    url: U,
                    trustUrl: s.trustProtocol,
                    onConfirm: Y,
                    isProtocol: !0
                });
                else {
                    let e = (0, E.punycodeLink)(U),
                        t = null != e ? e.displayTarget : U;
                    f.default.show({
                        url: t,
                        trustUrl: s.trustDomain,
                        onConfirm: Y,
                        isProtocol: !1
                    })
                }
            }
            "use strict";
            n.r(t), n.d(t, {
                countEmoji: function() {
                    return S
                },
                default: function() {
                    return I
                },
                getEmojiColors: function() {
                    return A
                },
                getEmojiUrl: function() {
                    return D
                }
            }), n("222007"), n("781738");
            var s = n("736271"),
                i = n("858619"),
                r = n("153043"),
                a = n("166465"),
                o = n("233069"),
                d = n("957255"),
                u = n("697218"),
                l = n("315102"),
                f = n("61069"),
                _ = n("103603"),
                c = n("719923"),
                g = n("49111"),
                m = n("958706");
            let h = new Set([m.EmojiDisabledReasons.PREMIUM_LOCKED, m.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED]),
                v = new Set([m.EmojiDisabledReasons.PREMIUM_LOCKED, m.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE, m.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED, m.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE]),
                E = new Set([m.EmojiDisabledReasons.DISALLOW_EXTERNAL, m.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE, m.EmojiDisabledReasons.ONLY_GUILD_EMOJIS_ALLOWED]);

            function p(e) {
                switch (e.type) {
                    case i.EmojiTypes.GUILD:
                    case i.EmojiTypes.PACK:
                        return !0;
                    default:
                        return null != e.guildId || null != e.packId
                }
            }

            function y(e) {
                let t = e.type === i.EmojiTypes.PACK || e.type === i.EmojiTypes.UNICODE && null != e.packId;
                return t ? e : null
            }

            function T(e, t) {
                return null != e && null != t && (!p(e) || null == y(e) && t === e.guildId)
            }

            function C(e) {
                var t;
                let {
                    emoji: n,
                    channel: i,
                    intention: l,
                    forceIncludeExternalGuilds: f
                } = e;
                if (l === m.EmojiIntention.COMMUNITY_CONTENT_ONLY && null == n.guildId) return m.EmojiDisabledReasons.ONLY_GUILD_EMOJIS_ALLOWED;
                if (!p(n)) return null;
                let _ = null !== (t = e.guildId) && void 0 !== t ? t : null == i ? void 0 : i.getGuildId(),
                    h = null != i && (0, o.isGuildTextChannelType)(i.type),
                    v = null != i && (0, o.isGuildVocalChannelType)(i.type),
                    E = T(n, _),
                    C = d.default.can(g.Permissions.USE_EXTERNAL_EMOJIS, i),
                    S = function(e, t) {
                        var n;
                        if (!t || null == e) return !1;
                        let s = y(e);
                        if (null == s) return !1;
                        let i = a.default.getPackByPackId({
                            packId: null !== (n = s.packId) && void 0 !== n ? n : ""
                        });
                        if (null == i) return !1;
                        let r = a.default.getSortedPackIds()[0];
                        return i.id === r
                    }(n, e.canViewAndUsePackEmoji);
                if (l === m.EmojiIntention.COMMUNITY_CONTENT || l === m.EmojiIntention.COMMUNITY_CONTENT_ONLY) return E && n.available ? null : m.EmojiDisabledReasons.DISALLOW_EXTERNAL;
                if (!(0, m.isExternalEmojiAllowedForIntention)(l) && !T(n, _) && !f || (h || v) && !E && !C) return m.EmojiDisabledReasons.DISALLOW_EXTERNAL;
                if (!n.available) return m.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE;
                let I = u.default.getCurrentUser();
                if (!c.default.canUseEmojisEverywhere(I) && !E && !S) {
                    if (l === m.EmojiIntention.STATUS) return m.EmojiDisabledReasons.PREMIUM_LOCKED;
                    if (!n.managed) return m.EmojiDisabledReasons.PREMIUM_LOCKED
                }
                if ((0, r.isUnusableRoleSubscriptionEmoji)(n, null != _ ? _ : void 0)) return (0, s.shouldHideGuildPurchaseEntryPoints)(n.guildId) ? m.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE : m.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED;
                return !n.animated || c.default.canUseAnimatedEmojis(I) || (0, r.isPurchasableRoleSubscriptionEmoji)(n) ? null : m.EmojiDisabledReasons.PREMIUM_LOCKED
            }

            function S(e, t) {
                let n = 0,
                    s = 0,
                    r = 0,
                    a = 0,
                    o = 0,
                    d = 0;
                return e.forEach(e => {
                    null != e.id ? (e.type === i.EmojiTypes.GUILD && (e.guildId === t ? e.managed ? a++ : s++ : e.managed ? o++ : r++), e.animated && d++) : n++
                }), {
                    unicode: n,
                    custom: s,
                    customExternal: r,
                    managed: a,
                    managedExternal: o,
                    animated: d
                }
            }
            var I = {
                sanitizeEmojiName(e) {
                    for (e = e.replace(m.EMOJI_RE, "").slice(0, m.EMOJI_MAX_LENGTH); e.length < 2;) e += "_";
                    return e
                },
                filterUnsupportedEmojis: f.default.filterUnsupportedEmojis,
                getURL: f.default.getURL,
                isInternalEmojiForGuildId: T,
                getEmojiUnavailableReason: C,
                isCustomEmoji: p,
                isEmojiFiltered(e) {
                    let {
                        emoji: t,
                        channel: n,
                        intention: s,
                        canViewAndUsePackEmoji: i,
                        guildId: r
                    } = e, a = C({
                        emoji: t,
                        channel: n,
                        intention: s,
                        guildId: r,
                        canViewAndUsePackEmoji: i
                    });
                    return E.has(a)
                },
                isEmojiPremiumLocked(e) {
                    let {
                        emoji: t,
                        channel: n,
                        intention: s,
                        canViewAndUsePackEmoji: i,
                        guildId: r
                    } = e, a = C({
                        emoji: t,
                        channel: n,
                        guildId: r,
                        intention: s,
                        canViewAndUsePackEmoji: i
                    });
                    return h.has(a)
                },
                isEmojiFilteredOrLocked(e) {
                    let {
                        emoji: t,
                        channel: n,
                        intention: s,
                        canViewAndUsePackEmoji: i
                    } = e;
                    return this.isEmojiFiltered({
                        emoji: t,
                        channel: n,
                        intention: s,
                        canViewAndUsePackEmoji: i
                    }) || this.isEmojiPremiumLocked({
                        emoji: t,
                        channel: n,
                        intention: s,
                        canViewAndUsePackEmoji: i
                    })
                },
                isEmojiDisabled(e) {
                    let {
                        emoji: t,
                        channel: n,
                        intention: s,
                        canViewAndUsePackEmoji: i
                    } = e, r = C({
                        emoji: t,
                        channel: n,
                        intention: s,
                        canViewAndUsePackEmoji: i
                    });
                    return v.has(r)
                },
                isFileTooBig: e => e.size > 2097152,
                isDataTooBig: e => (0, _.dataUriFileSize)(e) > m.EMOJI_MAX_FILESIZE
            };
            async function A(e) {
                return await f.default.getEmojiColors(e)
            }

            function D(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    {
                        id: n,
                        name: s,
                        animated: i
                    } = e;
                return null != n ? l.default.getEmojiURL({
                    id: n,
                    size: t,
                    animated: null != i && i
                }) : f.default.getURL(s)
            }
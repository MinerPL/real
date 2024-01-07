            "use strict";
            n.r(s), n.d(s, {
                countEmoji: function() {
                    return p
                },
                default: function() {
                    return D
                },
                getEmojiColors: function() {
                    return P
                },
                getEmojiUrl: function() {
                    return C
                }
            }), n("222007"), n("781738");
            var i = n("736271"),
                r = n("858619"),
                o = n("153043"),
                t = n("166465"),
                a = n("233069"),
                f = n("957255"),
                _ = n("697218"),
                d = n("315102"),
                u = n("61069"),
                g = n("103603"),
                m = n("719923"),
                v = n("49111"),
                c = n("958706");
            let h = new Set([c.EmojiDisabledReasons.PREMIUM_LOCKED, c.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED]),
                l = new Set([c.EmojiDisabledReasons.PREMIUM_LOCKED, c.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE, c.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED, c.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE]),
                y = new Set([c.EmojiDisabledReasons.DISALLOW_EXTERNAL, c.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE, c.EmojiDisabledReasons.ONLY_GUILD_EMOJIS_ALLOWED]);

            function V(e) {
                switch (e.type) {
                    case r.EmojiTypes.GUILD:
                    case r.EmojiTypes.PACK:
                        return !0;
                    default:
                        return null != e.guildId || null != e.packId
                }
            }

            function k(e) {
                let s = e.type === r.EmojiTypes.PACK || e.type === r.EmojiTypes.UNICODE && null != e.packId;
                return s ? e : null
            }

            function b(e, s) {
                return null != e && null != s && (!V(e) || null == k(e) && s === e.guildId)
            }

            function w(e) {
                var s;
                let {
                    emoji: n,
                    channel: r,
                    intention: d,
                    forceIncludeExternalGuilds: u
                } = e;
                if (d === c.EmojiIntention.COMMUNITY_CONTENT_ONLY && null == n.guildId) return c.EmojiDisabledReasons.ONLY_GUILD_EMOJIS_ALLOWED;
                if (!V(n)) return null;
                let g = null !== (s = e.guildId) && void 0 !== s ? s : null == r ? void 0 : r.getGuildId(),
                    h = null != r && (0, a.isGuildTextChannelType)(r.type),
                    l = null != r && (0, a.isGuildVocalChannelType)(r.type),
                    y = b(n, g),
                    w = f.default.can(v.Permissions.USE_EXTERNAL_EMOJIS, r),
                    p = function(e, s) {
                        var n;
                        if (!s || null == e) return !1;
                        let i = k(e);
                        if (null == i) return !1;
                        let r = t.default.getPackByPackId({
                            packId: null !== (n = i.packId) && void 0 !== n ? n : ""
                        });
                        if (null == r) return !1;
                        let o = t.default.getSortedPackIds()[0];
                        return r.id === o
                    }(n, e.canViewAndUsePackEmoji);
                if (d === c.EmojiIntention.COMMUNITY_CONTENT || d === c.EmojiIntention.COMMUNITY_CONTENT_ONLY) return y && n.available ? null : c.EmojiDisabledReasons.DISALLOW_EXTERNAL;
                if (!(0, c.isExternalEmojiAllowedForIntention)(d) && !b(n, g) && !u || (h || l) && !y && !w) return c.EmojiDisabledReasons.DISALLOW_EXTERNAL;
                if (!n.available) return c.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE;
                let D = _.default.getCurrentUser();
                if (!m.default.canUseEmojisEverywhere(D) && !y && !p) {
                    if (d === c.EmojiIntention.STATUS) return c.EmojiDisabledReasons.PREMIUM_LOCKED;
                    if (!n.managed) return c.EmojiDisabledReasons.PREMIUM_LOCKED
                }
                if ((0, o.isUnusableRoleSubscriptionEmoji)(n, null != g ? g : void 0)) return (0, i.shouldHideGuildPurchaseEntryPoints)(n.guildId) ? c.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE : c.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED;
                return !n.animated || m.default.canUseAnimatedEmojis(D) || (0, o.isPurchasableRoleSubscriptionEmoji)(n) ? null : c.EmojiDisabledReasons.PREMIUM_LOCKED
            }

            function p(e, s) {
                let n = 0,
                    i = 0,
                    o = 0,
                    t = 0,
                    a = 0,
                    f = 0;
                return e.forEach(e => {
                    null != e.id ? (e.type === r.EmojiTypes.GUILD && (e.guildId === s ? e.managed ? t++ : i++ : e.managed ? a++ : o++), e.animated && f++) : n++
                }), {
                    unicode: n,
                    custom: i,
                    customExternal: o,
                    managed: t,
                    managedExternal: a,
                    animated: f
                }
            }
            var D = {
                sanitizeEmojiName(e) {
                    for (e = e.replace(c.EMOJI_RE, "").slice(0, c.EMOJI_MAX_LENGTH); e.length < 2;) e += "_";
                    return e
                },
                filterUnsupportedEmojis: u.default.filterUnsupportedEmojis,
                getURL: u.default.getURL,
                isInternalEmojiForGuildId: b,
                getEmojiUnavailableReason: w,
                isCustomEmoji: V,
                isEmojiFiltered(e) {
                    let {
                        emoji: s,
                        channel: n,
                        intention: i,
                        canViewAndUsePackEmoji: r,
                        guildId: o
                    } = e, t = w({
                        emoji: s,
                        channel: n,
                        intention: i,
                        guildId: o,
                        canViewAndUsePackEmoji: r
                    });
                    return y.has(t)
                },
                isEmojiPremiumLocked(e) {
                    let {
                        emoji: s,
                        channel: n,
                        intention: i,
                        canViewAndUsePackEmoji: r,
                        guildId: o
                    } = e, t = w({
                        emoji: s,
                        channel: n,
                        guildId: o,
                        intention: i,
                        canViewAndUsePackEmoji: r
                    });
                    return h.has(t)
                },
                isEmojiFilteredOrLocked(e) {
                    let {
                        emoji: s,
                        channel: n,
                        intention: i,
                        canViewAndUsePackEmoji: r
                    } = e;
                    return this.isEmojiFiltered({
                        emoji: s,
                        channel: n,
                        intention: i,
                        canViewAndUsePackEmoji: r
                    }) || this.isEmojiPremiumLocked({
                        emoji: s,
                        channel: n,
                        intention: i,
                        canViewAndUsePackEmoji: r
                    })
                },
                isEmojiDisabled(e) {
                    let {
                        emoji: s,
                        channel: n,
                        intention: i,
                        canViewAndUsePackEmoji: r
                    } = e, o = w({
                        emoji: s,
                        channel: n,
                        intention: i,
                        canViewAndUsePackEmoji: r
                    });
                    return l.has(o)
                },
                isFileTooBig: e => e.size > 2097152,
                isDataTooBig: e => (0, g.dataUriFileSize)(e) > c.EMOJI_MAX_FILESIZE
            };
            async function P(e) {
                return await u.default.getEmojiColors(e)
            }

            function C(e) {
                let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    {
                        id: n,
                        name: i,
                        animated: r
                    } = e;
                return null != n ? d.default.getEmojiURL({
                    id: n,
                    size: s,
                    animated: null != r && r
                }) : u.default.getURL(i)
            }
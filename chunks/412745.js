            "use strict";
            n.r(t), n.d(t, {
                EmojiPopoutType: function() {
                    return i
                },
                getEmojiPopoutData: function() {
                    return E
                }
            });
            var l, r, u, i, o = n("365058"),
                a = n("782340");
            (l = u || (u = {})).DEFAULT = "Custom Emoji Popout", l.CROSS_SERVER = "Custom Emoji Popout (Cross-Server)", l.UPSELL_CURRENT_SERVER_JOINED = "Custom Emoji Popout (Upsell Joined Current-Server)", l.UPSELL_CROSS_SERVER_JOINED = "Custom Emoji Popout (Upsell Joined Cross-Server)", l.UPSELL_CROSS_SERVER_JOINABLE = "Custom Emoji Popout (Upsell Not-Joined Cross-Server)", l.UPSELL_CROSS_SERVER_UNJOINABLE = "Custom Emoji Popout (Soft Upsell)", (r = i || (i = {})).GET_PREMIUM_INVENTORY_DISABLED = "GET_PREMIUM_INVENTORY_DISABLED", r.GET_PREMIUM_INVENTORY_ENABLED = "GET_PREMIUM_INVENTORY_ENABLED", r.JOIN_GUILD = "JOIN_GUILD", r.ADD_PACK = "ADD_PACK", r.REMOVE_PACK = "REMOVE_PACK", r.UNAVAILABLE = "UNAVAILABLE";
            let s = e => {
                    let {
                        isPremium: t,
                        hasJoinedEmojiSourceGuild: n,
                        isUnusableRoleSubscriptionEmoji: l,
                        emojiComesFromCurrentGuild: r,
                        isDiscoverable: u
                    } = e, i = "Custom Emoji Popout";
                    return t && !n && u ? i = "Custom Emoji Popout (Cross-Server)" : t || !n || l ? !t && !n && (i = u ? "Custom Emoji Popout (Upsell Not-Joined Cross-Server)" : "Custom Emoji Popout (Soft Upsell)") : i = r ? "Custom Emoji Popout (Upsell Joined Current-Server)" : "Custom Emoji Popout (Upsell Joined Cross-Server)", i
                },
                d = e => {
                    let {
                        isPremium: t,
                        hasJoinedEmojiSourceGuild: n,
                        isUnusableRoleSubscriptionEmoji: l,
                        isDiscoverable: r,
                        emojiComesFromCurrentGuild: u,
                        userIsRoleSubscriber: i,
                        isRoleSubscriptionEmoji: o,
                        shouldHideRoleSubscriptionCTA: s,
                        packCollectionData: d,
                        onOpenPremiumSettings: c
                    } = e, E = null, _ = (null == d ? void 0 : d.collectEnabled) === !0, f = (null == d ? void 0 : d.viewAndUseEnabled) === !0, I = (null == d ? void 0 : d.collectedPack) != null;
                    if ((_ || f && I) && !n) {
                        let e = _ && (null == d ? void 0 : d.showTryPacksModalAndV2Copy) === !0;
                        return e ? I ? a.default.Messages.EMOJI_POPOUT_ADDED_PACK_DESCRIPTION : a.default.Messages.INVENTORY_EMOJI_FROM_ADDABLE_PACK : null
                    }
                    return E = t ? n ? o ? s && l ? a.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : l ? i ? a.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : a.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : a.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_SUBSCRIBED_DESCRIPTION : u ? a.default.Messages.EMOJI_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION : a.default.Messages.EMOJI_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION : r ? a.default.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : a.default.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_PRIVATE_GUILD_DESCRIPTION : n ? s && l ? a.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : l ? i ? a.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : a.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : u ? a.default.Messages.EMOJI_POPOUT_CURRENT_GUILD_DESCRIPTION : a.default.Messages.EMOJI_POPOUT_JOINED_GUILD_DESCRIPTION : r ? a.default.Messages.EMOJI_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : a.default.Messages.EMOJI_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
                        openPremiumSettings: c
                    })
                },
                c = e => {
                    let {
                        isPremium: t,
                        hasJoinedEmojiSourceGuild: n,
                        isUnusableRoleSubscriptionEmoji: l,
                        isDiscoverable: r,
                        packCollectionData: u
                    } = e, i = (null == u ? void 0 : u.collectEnabled) === !0, s = (null == u ? void 0 : u.viewAndUseEnabled) === !0, d = (null == u ? void 0 : u.collectedPack) != null, c = (null == u ? void 0 : u.showTryPacksModalAndV2Copy) === !0, E = !i && !d, _ = !n && r;
                    if ((E || !s) && t && _) return {
                        type: "JOIN_GUILD",
                        text: a.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON,
                        description: null
                    };
                    if (!t && (n && !l || (E || !s) && _)) return {
                        type: "GET_PREMIUM_INVENTORY_DISABLED",
                        text: a.default.Messages.EMOJI_POPOUT_PREMIUM_CTA,
                        description: null
                    };
                    if (i && !n && !d && t) return {
                        type: "ADD_PACK",
                        text: a.default.Messages.INVENTORY_ADD_PACK,
                        description: c ? a.default.Messages.INVENTORY_ADD_PACK_WITHOUT_JOINING_V2.format({
                            maxPacks: o.INVENTORY_MAX_PACKS
                        }) : a.default.Messages.INVENTORY_ADD_PACK_WITHOUT_JOINING
                    };
                    else if (!i || n || d || t) {
                        if (i && !n && d) return {
                            type: "REMOVE_PACK",
                            text: a.default.Messages.INVENTORY_REMOVE_PACK,
                            description: c ? null : a.default.Messages.INVENTORY_REMOVE_PACK_DESCRIPTION
                        }
                    } else {
                        var f;
                        let e = (null !== (f = null == u ? void 0 : u.numPacksCollected) && void 0 !== f ? f : 0) >= o.INVENTORY_MAX_FREE_PACKS,
                            t = e ? a.default.Messages.INVENTORY_ADD_NITRO_DESCRIPTION_WITH_PLURAL.format({
                                maxFreePacks: o.INVENTORY_MAX_FREE_PACKS,
                                maxPacks: o.INVENTORY_MAX_PACKS
                            }) : a.default.Messages.INVENTORY_ADD_PACK_NON_NITRO.format({
                                maxFreePacks: o.INVENTORY_MAX_FREE_PACKS,
                                maxPacks: o.INVENTORY_MAX_PACKS
                            });
                        return {
                            type: e ? "GET_PREMIUM_INVENTORY_ENABLED" : "ADD_PACK",
                            text: e ? a.default.Messages.EMOJI_POPOUT_PREMIUM_CTA : a.default.Messages.INVENTORY_ADD_PACK,
                            description: t
                        }
                    }
                    return {
                        type: "UNAVAILABLE",
                        text: null,
                        description: null
                    }
                },
                E = e => {
                    let t = d(e),
                        n = s(e),
                        l = c(e);
                    return {
                        ...l,
                        emojiDescription: t,
                        analyticsType: n
                    }
                }
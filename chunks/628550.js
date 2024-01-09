            "use strict";
            s.r(t), s.d(t, {
                PerksDiscoverabilityCardTypes: function() {
                    return n
                },
                default: function() {
                    return j
                }
            });
            var a, n, r = s("65597"),
                l = s("151426"),
                i = s("79112"),
                u = s("812204"),
                o = s("685665"),
                d = s("18346"),
                c = s("21526"),
                _ = s("38766"),
                E = s("42887"),
                I = s("521012"),
                f = s("701909"),
                T = s("719923"),
                S = s("184684"),
                R = s("646718"),
                p = s("49111"),
                A = s("397336"),
                m = s("782340"),
                N = s("571685"),
                g = s("994679"),
                P = s("620826"),
                C = s("333078"),
                O = s("156591"),
                M = s("913204"),
                h = s("174433"),
                L = s("62414"),
                x = s("613697"),
                v = s("907511"),
                U = s("165870"),
                D = s("443646");
            (a = n || (n = {})).AVATAR_DECORATIONS = "avatarDecorations", a.CLIENT_THEMES = "clientThemes", a.CLIPS = "clips", a.EARLY_ACCESS = "earlyAccess", a.ENTRANCE_SOUNDS = "entranceSounds", a.PROFILE_EFFECTS = "profileEffects", a.PROFILES = "profiles", a.REMIXING = "remixing", a.SERVER_BOOSTS = "serverBoosts", a.SPECIAL_MEMBER_PRICING = "specialMemberPricing", a.SPECIAL_SHOP_PERKS = "specialShopPerks", a.UNLIMITED_SUPER_REACTIONS = "unlimitedSuperReactions", a.UPCOMING_DROP_UNTIMED = "upcomingDropUntimed";
            var j = () => {
                let {
                    analyticsLocations: e
                } = (0, o.default)(u.default.PREMIUM_MARKETING_PERK_CARD), t = (0, r.default)([I.default], () => I.default.getPremiumTypeSubscription()), s = null != t ? T.default.getPremiumPlanItem(t) : null, a = null != s ? T.default.getSkuIdForPlan(s.planId) : null, n = a === R.PremiumSubscriptionSKUs.TIER_2, {
                    flipped: j
                } = (0, S.useWhatsNewAvatarDecoRollout)(), {
                    flipped: b
                } = (0, S.useWhatsNewProfileFXRollout)(), G = (0, d.default)(E.default), y = (0, _.default)({
                    scrollPosition: A.ProfileCustomizationScrollPositions.TRY_IT_OUT,
                    analyticsLocations: e
                }), B = () => {
                    (0, c.openCollectiblesShop)({
                        analyticsLocations: e,
                        analyticsSource: u.default.PREMIUM_MARKETING_PERK_CARD
                    })
                }, k = {
                    avatarDecorations: n ? {
                        name: "avatarDecorations",
                        title: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
                        subtitle: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_SUB,
                        description: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_SUB,
                        descriptionCta: m.default.Messages.VISIT_THE_SHOP_CTA,
                        onCtaClick: B,
                        pillText: m.default.Messages.EARLY_ACCESS,
                        perkImage: C,
                        canReveal: j,
                        dismissibleContentType: l.DismissibleContent.WHATS_NEW_AVATAR_DECOS_FLIP
                    } : {
                        name: "avatarDecorations",
                        title: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
                        subtitle: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_NON_SUB,
                        description: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_NON_SUB,
                        pillText: m.default.Messages.EARLY_ACCESS,
                        perkImage: C,
                        canReveal: j,
                        dismissibleContentType: l.DismissibleContent.WHATS_NEW_AVATAR_DECOS_FLIP
                    },
                    clientThemes: {
                        name: "clientThemes",
                        title: m.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_TITLE,
                        subtitle: m.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_SUBTITLE,
                        description: m.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_DESCRIPTION,
                        descriptionCta: m.default.Messages.TAKE_ME_THERE,
                        onCtaClick: () => {
                            i.default.open(p.UserSettingsSections.APPEARANCE, null, {
                                openWithoutBackstack: !0,
                                analyticsLocations: e
                            })
                        },
                        perkImage: N
                    },
                    clips: n ? {
                        name: "clips",
                        title: m.default.Messages.CLIPS,
                        subtitle: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
                        description: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_SUB,
                        descriptionCta: G ? m.default.Messages.TAKE_ME_THERE : m.default.Messages.LEARN_MORE,
                        pillText: m.default.Messages.EARLY_ACCESS,
                        onCtaClick: G ? () => {
                            i.default.open(p.UserSettingsSections.CLIPS, null, {
                                openWithoutBackstack: !0,
                                analyticsLocations: e
                            })
                        } : () => {
                            window.open(f.default.getArticleURL(p.HelpdeskArticles.CLIPS), "_blank")
                        },
                        perkImage: O
                    } : {
                        name: "clips",
                        title: m.default.Messages.CLIPS,
                        subtitle: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
                        description: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_NON_SUB,
                        pillText: m.default.Messages.EARLY_ACCESS,
                        perkImage: O
                    },
                    earlyAccess: n ? {
                        name: "earlyAccess",
                        title: m.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
                        subtitle: m.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE,
                        description: m.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
                        perkImage: M
                    } : {
                        name: "earlyAccess",
                        title: m.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
                        subtitle: m.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE,
                        description: m.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
                        isPremiumGetCta: !0,
                        perkImage: M
                    },
                    entranceSounds: n ? {
                        name: "entranceSounds",
                        title: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
                        subtitle: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
                        description: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
                        descriptionCta: m.default.Messages.TAKE_ME_THERE,
                        onCtaClick: () => {
                            i.default.open(p.UserSettingsSections.VOICE, A.SOUNDBOARD_SUBSECTION, {
                                openWithoutBackstack: !0,
                                analyticsLocations: e
                            })
                        },
                        perkImage: h
                    } : {
                        name: "entranceSounds",
                        title: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
                        subtitle: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
                        description: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
                        perkImage: h
                    },
                    profileEffects: n ? {
                        name: "profileEffects",
                        title: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
                        subtitle: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
                        description: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_SUB,
                        descriptionCta: m.default.Messages.VISIT_THE_SHOP_CTA,
                        onCtaClick: B,
                        pillText: m.default.Messages.EARLY_ACCESS,
                        perkImage: x,
                        canReveal: b,
                        dismissibleContentType: l.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP
                    } : {
                        name: "profileEffects",
                        title: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
                        subtitle: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
                        description: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_NON_SUB,
                        pillText: m.default.Messages.EARLY_ACCESS,
                        perkImage: x,
                        canReveal: b,
                        dismissibleContentType: l.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP
                    },
                    profiles: {
                        name: "profiles",
                        title: m.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_TITLE,
                        subtitle: m.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_SUBTITLE,
                        description: m.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_DESCRIPTION,
                        descriptionCta: m.default.Messages.TAKE_ME_THERE,
                        onCtaClick: y,
                        perkImage: g
                    },
                    remixing: n ? {
                        name: "remixing",
                        title: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
                        subtitle: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
                        description: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_SUB,
                        perkImage: v,
                        pillText: m.default.Messages.EARLY_ACCESS
                    } : {
                        name: "remixing",
                        title: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
                        subtitle: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
                        description: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_NON_SUB,
                        perkImage: v,
                        pillText: m.default.Messages.EARLY_ACCESS
                    },
                    serverBoosts: {
                        name: "serverBoosts",
                        title: m.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_TITLE,
                        subtitle: m.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_SUBTITLE,
                        description: m.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_DESCRIPTION,
                        descriptionCta: m.default.Messages.TAKE_ME_THERE,
                        onCtaClick: () => {
                            i.default.open(p.UserSettingsSections.GUILD_BOOSTING, null, {
                                openWithoutBackstack: !0,
                                analyticsLocations: e
                            })
                        },
                        perkImage: P
                    },
                    specialMemberPricing: n ? {
                        name: "specialMemberPricing",
                        title: m.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
                        subtitle: m.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE,
                        description: m.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
                        descriptionCta: m.default.Messages.VISIT_THE_SHOP_CTA,
                        onCtaClick: B,
                        perkImage: U
                    } : {
                        name: "specialMemberPricing",
                        title: m.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
                        subtitle: m.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE,
                        description: m.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
                        isPremiumGetCta: !0,
                        perkImage: U
                    },
                    specialShopPerks: n ? {
                        name: "specialShopPerks",
                        title: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
                        subtitle: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
                        description: m.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
                        descriptionCta: m.default.Messages.VISIT_THE_SHOP_CTA,
                        onCtaClick: B,
                        perkImage: U
                    } : {
                        name: "specialShopPerks",
                        title: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
                        subtitle: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
                        description: m.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
                        descriptionCta: m.default.Messages.VISIT_THE_SHOP_CTA,
                        onCtaClick: B,
                        perkImage: U
                    },
                    unlimitedSuperReactions: n ? {
                        name: "unlimitedSuperReactions",
                        title: m.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
                        subtitle: m.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
                        description: m.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_SUB,
                        perkImage: D
                    } : {
                        name: "unlimitedSuperReactions",
                        title: m.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
                        subtitle: m.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
                        description: m.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_NON_SUB,
                        isPremiumGetCta: !0,
                        perkImage: D
                    },
                    upcomingDropUntimed: {
                        name: "upcomingDropUntimed",
                        title: m.default.Messages.NEW_DROP,
                        pillText: m.default.Messages.COMING_SOON,
                        backgroundImage: L
                    }
                };
                return k
            }
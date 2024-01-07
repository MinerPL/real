            "use strict";
            s.r(t), s.d(t, {
                customRoleIconUpsellPerks: function() {
                    return x
                },
                guildBannerUpsellPerks: function() {
                    return A
                },
                animatedGuildBannerUpsellPerks: function() {
                    return B
                },
                vanityUrlUpsellPerks: function() {
                    return G
                },
                guildInviteUpsellPerks: function() {
                    return m
                },
                guildBoostingPerks: function() {
                    return H
                },
                premiumProgressBarUpsellPerks: function() {
                    return D
                }
            });
            var l = s("669491"),
                n = s("245307"),
                a = s("571658"),
                o = s("118503"),
                r = s("110006"),
                i = s("682344"),
                c = s("238521"),
                u = s("394832"),
                d = s("290581"),
                f = s("595086"),
                _ = s("885541"),
                E = s("49111");
            s("646718");
            var R = s("782340");
            let M = () => ({
                    color: l.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
                    icon: c.default,
                    description: R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_CUSTOM_INVITE
                }),
                I = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.default.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
                    return {
                        color: e,
                        icon: r.default,
                        description: R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ANIMATED_ICON
                    }
                },
                P = () => ({
                    color: l.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
                    icon: c.default,
                    description: R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_GUILD_BANNER
                }),
                C = () => ({
                    color: l.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
                    icon: r.default,
                    description: R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ANIMATED_GUILD_BANNER
                }),
                L = () => ({
                    color: l.default.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
                    icon: i.default,
                    description: R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ROLE_ICON
                }),
                U = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.default.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
                    return {
                        color: e,
                        icon: f.default,
                        description: R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_STICKERS
                    }
                },
                v = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.default.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
                        s = 0,
                        n = 0;
                    switch (e) {
                        case E.BoostedGuildTiers.TIER_1:
                            s = 15, n = 100;
                            break;
                        case E.BoostedGuildTiers.TIER_2:
                            s = 30, n = 150;
                            break;
                        case E.BoostedGuildTiers.TIER_3:
                            s = 60, n = 250
                    }
                    return {
                        color: t,
                        icon: f.default,
                        description: R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_STICKERS_AND_EMOJIS.format({
                            numStickers: s,
                            numEmojis: n
                        })
                    }
                },
                h = () => ({
                    color: l.default.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
                    icon: d.default,
                    description: R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_VANITY_URL
                }),
                p = () => ({
                    icon: n.default,
                    description: R.default.Messages.PREMIUM_GUILD_USER_FEATURE_PROFILE_BADGE
                }),
                S = () => ({
                    icon: o.default,
                    color: l.default.unsafe_rawColors.PREMIUM_PERK_PINK.css,
                    description: R.default.Messages.PREMIUM_GUILD_USER_FEATURE_BOOST_CRYSTAL
                }),
                g = () => ({
                    icon: i.default,
                    color: l.default.unsafe_rawColors.PREMIUM_PERK_YELLOW.css,
                    description: R.default.Messages.PREMIUM_GUILD_USER_FEATURE_SPECIAL_ROLE
                }),
                T = () => ({
                    color: l.default.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
                    icon: a.default,
                    description: R.default.Messages.PREMIUM_GUILD_USER_FEATURE_OTHERS
                }),
                N = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_OTHER;
                    return {
                        color: l.default.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
                        icon: a.default,
                        description: e
                    }
                },
                w = () => ({
                    color: l.default.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
                    icon: _.default,
                    description: R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_FILE_UPLOAD_TIER_3
                }),
                O = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css;
                    return {
                        color: e,
                        icon: u.default,
                        description: R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_SCREEN_SHARE_1080P
                    }
                };

            function x() {
                return [L(), P(), U(), N()]
            }

            function A() {
                return [L(), v(E.BoostedGuildTiers.TIER_2), O(), N()]
            }

            function B() {
                return [v(E.BoostedGuildTiers.TIER_3, l.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css), w(), h(), N()]
            }

            function G() {
                return [h(), C(), v(E.BoostedGuildTiers.TIER_3), N()]
            }

            function m() {
                return [M(), U(), I(), N()]
            }

            function H() {
                return [U(), N()]
            }

            function D() {
                return [S(), g(), p(), T()]
            }
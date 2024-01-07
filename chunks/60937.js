            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("424973");
            var l = n("65597"),
                a = n("590260"),
                s = n("677315"),
                i = n("875229"),
                r = n("466818"),
                o = n("698882"),
                u = n("290886"),
                d = n("363176"),
                c = n("903724"),
                f = n("178517"),
                h = n("796618"),
                C = n("49111");

            function p(e) {
                let t = (0, s.useGuildHomeExperiment)(e),
                    n = (0, f.default)(e),
                    p = (0, i.useCanReviewGuildMemberApplications)(e.id),
                    m = (0, c.useShowRoleSubscriptionsInChannelList)(e.id),
                    E = (0, a.useGuildShopVisibleInGuild)(e),
                    g = (0, u.useCanSeeOnboardingHome)(e.id),
                    I = (0, l.default)([o.default], () => o.default.getNewMemberActions(e.id), [e.id]),
                    S = (0, d.default)(e.id),
                    _ = (0, r.useCanAccessMemberSafetyPage)(e.id),
                    N = [],
                    T = e.hasFeature(C.GuildFeatures.HUB),
                    A = e.hasFeature(C.GuildFeatures.COMMUNITY),
                    L = e.hasFeature(C.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
                return T && N.push(h.ChannelListCommunityRow.GUILD_HUB_HEADER_OPTIONS), g && S && null != I && I.length > 0 ? N.push(h.ChannelListCommunityRow.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && N.push(h.ChannelListCommunityRow.GUILD_PREMIUM_PROGRESS_BAR), !T && (t || g) && N.push(h.ChannelListCommunityRow.GUILD_HOME), n && N.push(h.ChannelListCommunityRow.GUILD_SCHEDULED_EVENTS), !T && A && N.push(h.ChannelListCommunityRow.CHANNELS_AND_ROLES), m && N.push(h.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS), E && N.push(h.ChannelListCommunityRow.GUILD_SHOP), p && N.push(h.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS), _ && (A || L) && N.push(h.ChannelListCommunityRow.GUILD_MOD_DASH_MEMBER_SAFETY), N
            }
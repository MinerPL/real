            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var i = n("203288"),
                a = n("590260"),
                l = n("677315"),
                s = n("875229"),
                r = n("466818"),
                u = n("471706"),
                o = n("290886"),
                d = n("903724"),
                c = n("120252"),
                _ = n("42203"),
                E = n("305961"),
                f = n("449008"),
                h = n("361572"),
                p = n("49111"),
                T = n("724210");
            async function C(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e, C = E.default.getGuild(t);
                if (null == C && t !== p.ME) return !1;
                if (null == n) return !0;
                if ((0, T.isStaticChannelRoute)(n)) switch (n) {
                    case T.StaticChannelRoute.ROLE_SUBSCRIPTIONS:
                        return (0, d.areRoleSubscriptionsVisibleInGuild)(t);
                    case T.StaticChannelRoute.GUILD_SHOP:
                        return (0, a.isGuildShopVisibleInGuild)(C);
                    case T.StaticChannelRoute.MEMBER_APPLICATIONS:
                        return (0, s.canReviewGuildMemberApplications)(t);
                    case T.StaticChannelRoute.GUILD_HOME:
                        return (0, l.canSeeGuildHome)(t) || (0, o.canSeeOnboardingHome)(t);
                    case T.StaticChannelRoute.CHANNEL_BROWSER:
                        return null != C && C.hasFeature(p.GuildFeatures.COMMUNITY);
                    case T.StaticChannelRoute.GUILD_ONBOARDING:
                        return u.default.shouldShowOnboarding(t);
                    case T.StaticChannelRoute.CUSTOMIZE_COMMUNITY:
                        return null != C && C.hasFeature(p.GuildFeatures.COMMUNITY);
                    case T.StaticChannelRoute.MEMBER_SAFETY:
                        return (0, r.canAccessMemberSafetyPage)(t);
                    default:
                        (0, f.assertNever)(n)
                }
                let m = _.default.getChannel(n);
                return (null != m || (await c.default.loadThread(n), null != (m = _.default.getChannel(n)))) && ((0, h.canViewChannel)(m) || i.default.isChannelGatedAndVisible(t, n))
            }
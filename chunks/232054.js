            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var s = n("203288"),
                i = n("590260"),
                r = n("677315"),
                a = n("875229"),
                o = n("466818"),
                d = n("471706"),
                u = n("290886"),
                l = n("903724"),
                f = n("120252"),
                _ = n("42203"),
                c = n("305961"),
                g = n("449008"),
                m = n("361572"),
                h = n("49111"),
                v = n("724210");
            async function E(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e, E = c.default.getGuild(t);
                if (null == E && t !== h.ME) return !1;
                if (null == n) return !0;
                if ((0, v.isStaticChannelRoute)(n)) switch (n) {
                    case v.StaticChannelRoute.ROLE_SUBSCRIPTIONS:
                        return (0, l.areRoleSubscriptionsVisibleInGuild)(t);
                    case v.StaticChannelRoute.GUILD_SHOP:
                        return (0, i.isGuildShopVisibleInGuild)(E);
                    case v.StaticChannelRoute.MEMBER_APPLICATIONS:
                        return (0, a.canReviewGuildMemberApplications)(t);
                    case v.StaticChannelRoute.GUILD_HOME:
                        return (0, r.canSeeGuildHome)(t) || (0, u.canSeeOnboardingHome)(t);
                    case v.StaticChannelRoute.CHANNEL_BROWSER:
                        return null != E && E.hasFeature(h.GuildFeatures.COMMUNITY);
                    case v.StaticChannelRoute.GUILD_ONBOARDING:
                        return d.default.shouldShowOnboarding(t);
                    case v.StaticChannelRoute.CUSTOMIZE_COMMUNITY:
                        return null != E && E.hasFeature(h.GuildFeatures.COMMUNITY);
                    case v.StaticChannelRoute.MEMBER_SAFETY:
                        return (0, o.canAccessMemberSafetyPage)(t);
                    default:
                        (0, g.assertNever)(n)
                }
                let p = _.default.getChannel(n);
                return (null != p || (await f.default.loadThread(n), null != (p = _.default.getChannel(n)))) && ((0, m.canViewChannel)(p) || s.default.isChannelGatedAndVisible(t, n))
            }
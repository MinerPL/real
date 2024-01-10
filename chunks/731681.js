            "use strict";
            n.r(t), n.d(t, {
                ConnectedChannelNotices: function() {
                    return s
                },
                default: function() {
                    return m
                }
            });
            var a, s, i = n("884691"),
                l = n("446674"),
                r = n("583367"),
                o = n("650509"),
                u = n("933326"),
                d = n("73675"),
                c = n("568500"),
                E = n("534222"),
                f = n("341563"),
                _ = n("702411"),
                h = n("226511"),
                C = n("735201"),
                T = n("957255"),
                I = n("833781"),
                S = n("572182"),
                N = n("201952"),
                A = n("427459"),
                p = n("49111");

            function m(e) {
                var t;
                let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                    {
                        lastFetchedAt: a
                    } = (0, l.useStateFromStoresObject)([C.default], () => ({
                        appliedGuildBoosts: C.default.getAppliedGuildBoostsForGuild(n),
                        lastFetchedAt: C.default.getLastFetchedAtForGuild(n)
                    })),
                    {
                        lastDismissedGracePeriod: s,
                        isGracePeriodVisible: m
                    } = (0, l.useStateFromStoresObject)([I.default], () => ({
                        lastDismissedGracePeriod: I.default.getLastDismissedGracePeriodForGuild(n),
                        isGracePeriodVisible: I.default.isVisible(n)
                    })),
                    g = (0, l.useStateFromStores)([h.default], () => h.default.isVisible(e)),
                    R = (0, l.useStateFromStores)([N.default], () => N.default.isVisible(e)),
                    O = (0, l.useStateFromStores)([T.default], () => T.default.can(p.Permissions.ADMINISTRATOR, e)),
                    L = null != s && Date.now() - s <= p.GRACE_PERIOD_CHANNEL_NOTICE_SHOW_DELAY,
                    v = null != e ? e.premiumSubscriberCount : 0,
                    M = (0, A.getGuildTierFromAppliedBoostCount)(v, n) !== p.BoostedGuildTiers.NONE,
                    P = null != a && Date.now() - a <= 432e5,
                    D = !P && !L && O && M,
                    y = (0, c.useGuildHasLiveChannelNotice)(n),
                    x = (0, l.useStateFromStores)([S.default], () => S.default.isVisible(e)),
                    b = _.default.useShouldShowChannelNotice(n),
                    U = (0, o.useUnseenEndedApplicationSubscriptionEntitlements)(e),
                    {
                        enableStudyGroup: G
                    } = (0, f.useHubStudyGroupExperiment)(e),
                    j = U.length > 0,
                    k = G && !(null == e ? void 0 : e.hasFeature(p.GuildFeatures.HUB)),
                    {
                        canSeeUpcomingEventsNotices: w
                    } = d.default.useExperiment({
                        guildId: n,
                        location: "useVisibleConnectedNotice"
                    }, {
                        autoTrackExposure: !1
                    }),
                    F = null != (0, E.useGuildUpcomingEventsNotice)(n);
                if (i.useEffect(() => {
                        u.default.getGuildEventsForCurrentUser(n)
                    }, [n]), i.useEffect(() => {
                        let e = -1;
                        return D && (e = window.setTimeout(() => {
                            null != n && (0, r.fetchAppliedGuildBoostsForGuild)(n)
                        }, 3e4 * Math.random())), () => {
                            window.clearTimeout(e)
                        }
                    }, [n, D]), g) return 0;
                if (m) return 1;
                if (R) return 2;
                else if (y || w && null != F) return 3;
                else if (x) return 4;
                else if (b) return 5;
                else if (j) return 6;
                else if (k) return 7;
                return null
            }(a = s || (s = {}))[a.ENABLE_PUBLIC_GUILD = 0] = "ENABLE_PUBLIC_GUILD", a[a.APPLIED_GUILD_BOOST_GRACE_PERIOD = 1] = "APPLIED_GUILD_BOOST_GRACE_PERIOD", a[a.MAX_MEMBER_COUNT = 2] = "MAX_MEMBER_COUNT", a[a.GUILD_LIVE_CHANNEL = 3] = "GUILD_LIVE_CHANNEL", a[a.GUILD_MFA_WARNING = 4] = "GUILD_MFA_WARNING", a[a.COMMANDS_MIGRATION = 5] = "COMMANDS_MIGRATION", a[a.APPLICATION_SUBSCRIPTION_EXPIRATION = 6] = "APPLICATION_SUBSCRIPTION_EXPIRATION", a[a.HUB_STUDY_ROOM = 7] = "HUB_STUDY_ROOM"
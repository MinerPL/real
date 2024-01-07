            "use strict";
            n.r(t), n.d(t, {
                useCanGuildFeedFeatureChannel: function() {
                    return f
                }
            });
            var a = n("316693"),
                l = n("446674"),
                i = n("886484"),
                u = n("677315"),
                r = n("305961"),
                s = n("957255"),
                d = n("49111");
            let o = a.default.combine(d.Permissions.VIEW_CHANNEL, d.Permissions.MANAGE_MESSAGES, d.Permissions.READ_MESSAGE_HISTORY);

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = e.getGuildId(),
                    a = (0, l.useStateFromStores)([s.default], () => s.default.can(o, e), [e]),
                    f = (0, l.useStateFromStores)([r.default], () => r.default.getGuild(n), [n]),
                    c = (0, u.useGuildHomeExperiment)(f, !1);
                return !!(a && null !== n && c && (null != e.parentChannelThreadType && d.ChannelTypesSets.GUILD_THREADS_ONLY.has(e.parentChannelThreadType) || t) && (0, i.isChannelAvailableInGuildFeed)(e)) || !1
            }
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("446674"),
                l = n("191145"),
                s = n("305961"),
                i = n("957255"),
                r = n("567469"),
                u = n("998716"),
                o = n("923510"),
                d = n("819450"),
                c = n("49111");

            function f(e) {
                var t;
                let n = (0, a.useStateFromStores)([l.default], () => l.default.getStageVideoLimitBoostUpsellDismissed(e.id), [e.id]),
                    f = (0, r.useActualStageSpeakerCount)(e.id),
                    h = (0, r.useStageParticipantsCount)(e.id, u.StageChannelParticipantNamedIndex.AUDIENCE),
                    p = (0, d.useStageHasMedia)(e.id),
                    m = (0, a.useStateFromStores)([s.default], () => s.default.getGuild(e.guild_id), [e.guild_id]),
                    E = (0, a.useStateFromStores)([i.default], () => i.default.can(o.MODERATE_STAGE_CHANNEL_PERMISSIONS, e), [e]),
                    C = null !== (t = null == m ? void 0 : m.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
                    S = !(null == m ? void 0 : m.isCommunity()) && C > c.MAX_STAGE_VIDEO_USER_LIMIT_TIER3;
                return p && !n && E && !S && f + h >= C
            }
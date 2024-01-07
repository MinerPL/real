            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return M
                }
            });
            var u = l("37983");
            l("884691");
            var a = l("446674"),
                n = l("77078"),
                r = l("305961"),
                d = l("697218"),
                i = l("800762"),
                s = l("244480"),
                o = l("619395"),
                f = l("325861"),
                c = l("77445"),
                E = l("130563"),
                _ = l("782340");

            function M(e) {
                var t;
                let l = (0, E.default)(),
                    M = null == l ? void 0 : l.id,
                    S = null == l ? void 0 : l.guild_id,
                    m = (0, a.useStateFromStores)([r.default], () => r.default.getGuild(S), [S]),
                    A = (0, a.useStateFromStores)([i.default], () => null != M ? i.default.getVoiceStateForChannel(M, e.id) : null, [M, e.id]),
                    g = (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id,
                    R = (0, c.default)(),
                    C = (0, a.useStateFromStores)([f.default], () => f.default.getPermissionsForUser(e.id, M), [M, e.id]),
                    T = (0, o.useCanModerateRequestToSpeak)(M);
                if (null == l || null == m || null == A || C.speaker) return null;
                let N = () => {
                    g ? (0, s.audienceAckRequestToSpeak)(l, !1) : (0, s.inviteUserToStage)(l, e.id)
                };
                return T ? (0, u.jsx)(n.MenuItem, {
                    id: "invite-speaker",
                    label: g ? _.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : _.default.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
                    action: N
                }) : R && g ? (0, u.jsx)(n.MenuItem, {
                    id: "invite-speaker",
                    label: _.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                    action: N
                }) : null
            }
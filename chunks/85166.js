            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                l = n("77078"),
                r = n("42203"),
                s = n("305961"),
                u = n("957255"),
                o = n("697218"),
                d = n("244480"),
                c = n("325861"),
                E = n("49111"),
                _ = n("782340");

            function I(e, t, n) {
                var I;
                let T = r.default.getChannel(n),
                    f = (0, a.useStateFromStores)([s.default], () => s.default.getGuild(t), [t]),
                    S = (0, a.useStateFromStores)([c.default], () => c.default.getPermissionsForUser(e.id, n), [n, e.id]),
                    N = (null === (I = o.default.getCurrentUser()) || void 0 === I ? void 0 : I.id) === e.id,
                    p = (0, a.useStateFromStores)([u.default], () => null != n && u.default.canWithPartialContext(E.Permissions.MUTE_MEMBERS, {
                        channelId: n
                    }), [n]);
                return null != T && null != f && (p || N) && S.speaker ? (0, i.jsx)(l.MenuItem, {
                    id: "audience",
                    label: N ? _.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : _.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
                    action: () => {
                        N ? (0, d.moveSelfToAudience)(T) : (0, d.moveUserToAudience)(e, T)
                    }
                }) : null
            }
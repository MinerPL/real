            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
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
                f = n("782340");

            function _(e, t, n) {
                var _;
                let I = r.default.getChannel(n),
                    T = (0, a.useStateFromStores)([s.default], () => s.default.getGuild(t), [t]),
                    S = (0, a.useStateFromStores)([c.default], () => c.default.getPermissionsForUser(e.id, n), [n, e.id]),
                    N = (null === (_ = o.default.getCurrentUser()) || void 0 === _ ? void 0 : _.id) === e.id,
                    p = (0, a.useStateFromStores)([u.default], () => null != n && u.default.canWithPartialContext(E.Permissions.MUTE_MEMBERS, {
                        channelId: n
                    }), [n]);
                return null != I && null != T && (p || N) && S.speaker ? (0, i.jsx)(l.MenuItem, {
                    id: "audience",
                    label: N ? f.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : f.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
                    action: () => {
                        N ? (0, d.moveSelfToAudience)(I) : (0, d.moveUserToAudience)(e, I)
                    }
                }) : null
            }
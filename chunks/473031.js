            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                i = n("922770"),
                a = n("267567"),
                r = n("998716"),
                s = n("834052"),
                d = n("42203"),
                o = n("957255"),
                c = n("945956"),
                f = n("697218"),
                E = n("374021"),
                v = n("398604"),
                S = n("152475"),
                g = n("202358"),
                h = n("598639"),
                m = n("189443"),
                N = n("841363"),
                C = n("822516"),
                _ = n("93550"),
                T = n("617347"),
                p = n("369404"),
                I = n("49111");

            function x(e) {
                var t;
                let {
                    guildEvent: n,
                    guildId: x,
                    truncate: G,
                    onActionTaken: R,
                    className: D,
                    isNew: L
                } = e, {
                    id: U,
                    guild_id: y,
                    channel_id: M,
                    creator_id: A,
                    name: V,
                    description: j,
                    entity_type: P,
                    image: O,
                    recurrence_rule: F
                } = n, b = (0, C.getNextRecurrenceIdInEvent)(n), k = (0, u.useStateFromStores)([v.default], () => v.default.isInterestedInEventRecurrence(U, b), [U, b]), H = (0, u.useStateFromStores)([a.default], () => a.default.isLurking(y), [y]), w = (0, u.useStateFromStores)([s.default], () => s.default.getStageInstanceByChannel(M), [M]), B = (0, u.useStateFromStores)([d.default], () => d.default.getChannel(M), [M]), W = (0, u.useStateFromStores)([f.default], () => f.default.getUser(A), [A]), {
                    speakers: z
                } = (0, g.default)({
                    id: M,
                    data: {
                        guild: null,
                        instance: w,
                        speakers: [],
                        participantCount: 0
                    },
                    context: {
                        guildId: y,
                        instance: w
                    }
                }), Y = (0, u.useStateFromStores)([c.default], () => c.default.getChannelId()), K = (0, v.isGuildScheduledEventActive)(n), q = Y === M && null != Y && K, Z = z.filter(e => e.type === r.StageChannelParticipantTypes.VOICE), J = Z.length, X = (0, u.useStateFromStores)([o.default], () => o.default.can(I.Permissions.CONNECT, B), [B]), Q = (0, S.default)(n), {
                    isMember: $,
                    guild: ee
                } = (0, h.default)(y, U), et = (0, p.default)({
                    guild: ee,
                    channel: B,
                    guildScheduledEvent: n,
                    isActive: K,
                    recurrenceId: b,
                    onActionTaken: R
                }), en = (0, i.default)(x), el = H ? void 0 : e => (0, E.openGuildEventDetails)({
                    eventId: U,
                    parentGuildId: x,
                    recurrenceId: e
                });
                return (0, l.jsx)(T.default, {
                    guild: ee,
                    channel: B,
                    creator: W,
                    name: V,
                    entityType: P,
                    description: null != j ? j : void 0,
                    location: null !== (t = (0, N.getLocationFromEvent)(n)) && void 0 !== t ? t : void 0,
                    imageSource: null != O ? (0, _.default)(n) : void 0,
                    imageLocation: T.GuildEventBodyImageLocation.THUMBNAIL,
                    isActive: K,
                    isUserLurking: H,
                    isJoined: q,
                    isMember: $,
                    isHub: en,
                    speakers: Z,
                    canConnect: X,
                    speakerCount: J,
                    rsvped: k,
                    canInvite: Q,
                    ...et,
                    className: D,
                    onClick: el,
                    truncate: G,
                    isNew: L,
                    guildEventId: U,
                    recurrenceRule: (0, m.recurrenceRuleFromServer)(F),
                    recurrenceId: b
                })
            }
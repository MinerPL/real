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
  N = n("598639"),
  h = n("189443"),
  m = n("841363"),
  C = n("822516"),
  T = n("93550"),
  I = n("617347"),
  p = n("369404"),
  _ = n("49111");

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
    guild_id: M,
    channel_id: y,
    creator_id: A,
    name: V,
    description: j,
    entity_type: P,
    image: O,
    recurrence_rule: b
  } = n, F = (0, C.getNextRecurrenceIdInEvent)(n), k = (0, u.useStateFromStores)([v.default], () => v.default.isInterestedInEventRecurrence(U, F), [U, F]), H = (0, u.useStateFromStores)([a.default], () => a.default.isLurking(M), [M]), w = (0, u.useStateFromStores)([s.default], () => s.default.getStageInstanceByChannel(y), [y]), B = (0, u.useStateFromStores)([d.default], () => d.default.getChannel(y), [y]), z = (0, u.useStateFromStores)([f.default], () => f.default.getUser(A), [A]), {
    speakers: W
  } = (0, g.default)({
    id: y,
    data: {
      guild: null,
      instance: w,
      speakers: [],
      participantCount: 0
    },
    context: {
      guildId: M,
      instance: w
    }
  }), Y = (0, u.useStateFromStores)([c.default], () => c.default.getChannelId()), K = (0, v.isGuildScheduledEventActive)(n), q = Y === y && null != Y && K, Z = W.filter(e => e.type === r.StageChannelParticipantTypes.VOICE), J = Z.length, X = (0, u.useStateFromStores)([o.default], () => o.default.can(_.Permissions.CONNECT, B), [B]), Q = (0, S.default)(n), {
    isMember: $,
    guild: ee
  } = (0, N.default)(M, U), et = (0, p.default)({
    guild: ee,
    channel: B,
    guildScheduledEvent: n,
    isActive: K,
    recurrenceId: F,
    onActionTaken: R
  }), en = (0, i.default)(x), el = H ? void 0 : e => (0, E.openGuildEventDetails)({
    eventId: U,
    parentGuildId: x,
    recurrenceId: e
  });
  return (0, l.jsx)(I.default, {
    guild: ee,
    channel: B,
    creator: z,
    name: V,
    entityType: P,
    description: null != j ? j : void 0,
    location: null !== (t = (0, m.getLocationFromEvent)(n)) && void 0 !== t ? t : void 0,
    imageSource: null != O ? (0, T.default)(n) : void 0,
    imageLocation: I.GuildEventBodyImageLocation.THUMBNAIL,
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
    recurrenceRule: (0, h.recurrenceRuleFromServer)(b),
    recurrenceId: F
  })
}
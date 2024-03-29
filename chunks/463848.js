"use strict";
l.r(t), l.d(t, {
  UserActivityTypes: function() {
    return C
  },
  default: function() {
    return N
  }
});
var n = l("37983"),
  a = l("884691"),
  s = l("446674"),
  i = l("77078"),
  r = l("871388"),
  o = l("152311"),
  u = l("532602"),
  d = l("299285"),
  c = l("699209"),
  f = l("769791"),
  m = l("373469"),
  p = l("42203"),
  E = l("305961"),
  T = l("957255"),
  _ = l("800762"),
  S = l("313873"),
  h = l("599110"),
  I = l("474293"),
  A = l("49111"),
  g = l("804354");

function v(e) {
  let {
    type: t,
    source: l,
    activity: a,
    applicationStream: s,
    user: r,
    guildId: d,
    channelId: c,
    onAction: f,
    isEmbedded: m = (0, o.default)(a),
    actionColor: p
  } = e;
  return (0, n.jsx)(u.default, {
    className: (0, I.getClass)(g, "actions", t),
    type: t,
    source: l,
    activity: a,
    applicationStream: s,
    user: r,
    guildId: d,
    look: i.Button.Looks.FILLED,
    color: null != p ? p : i.Button.Colors.PRIMARY,
    channelId: c,
    onAction: f,
    isEmbedded: m
  })
}
let C = S.default.Types;
var N = function(e) {
  let {
    activity: t,
    user: l,
    useStoreStream: i = !0,
    showActions: o = !0,
    hideHeader: u = !1,
    ...I
  } = e, g = (0, s.useStateFromStores)([_.default, p.default], () => {
    var e;
    return p.default.getChannel(null === (e = _.default.getVoiceStateForUser(l.id)) || void 0 === e ? void 0 : e.channelId)
  }), {
    enableHangStatus: C
  } = c.HangStatusExperiment.useExperiment({
    guildId: null == g ? void 0 : g.guild_id,
    location: "UserActivityContainer"
  }), N = (0, s.useStateFromStores)([m.default], () => i ? m.default.getAnyStreamForUser(l.id) : null), y = C && T.default.can(A.Permissions.CONNECT, g), O = (null == t ? void 0 : t.type) === A.ActivityTypes.HANG_STATUS && y ? g : null, M = (0, s.useStateFromStores)([E.default, _.default, p.default], () => {
    var e, n;
    return (0, r.default)(t, A.ActivityFlags.EMBEDDED) ? E.default.getGuild(null === (e = p.default.getChannel(null === (n = _.default.getVoiceStateForSession(l.id, null == t ? void 0 : t.session_id)) || void 0 === n ? void 0 : n.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null != O ? E.default.getGuild(O.getGuildId()) : null
  }), x = (0, s.useStateFromStores)([E.default], () => null != N ? E.default.getGuild(N.guildId) : null), R = (0, s.useStateFromStores)([d.default], () => {
    if (null != t) return null != t.application_id ? d.default.getApplication(t.application_id) : d.default.getApplicationByName(t.name);
    return null
  });
  return (a.useEffect(() => {
    (null == t ? void 0 : t.type) === A.ActivityTypes.HANG_STATUS && y && h.default.track(A.AnalyticEvents.VIEW_HANG_STATUS, {
      source: "UserProfilePopout",
      guild_id: null == O ? void 0 : O.guild_id,
      channel_id: null == O ? void 0 : O.id
    })
  }, [null == t ? void 0 : t.type, y, O]), (null == t ? void 0 : t.type) !== A.ActivityTypes.HANG_STATUS || y) ? (0, n.jsx)(S.default, {
    ...I,
    activity: t,
    user: l,
    application: R,
    hideHeader: u,
    activityGuild: null != M ? M : x,
    renderActions: o ? () => (0, n.jsx)(v, {
      ...I,
      applicationStream: N,
      activity: t,
      user: l
    }) : null,
    onOpenSpotifyTrack: f.openTrack,
    onOpenSpotifyArtist: f.openArtist,
    onOpenSpotifyAlbum: f.openAlbum
  }) : null
}
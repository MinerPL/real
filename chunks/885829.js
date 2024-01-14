"use strict";
i.r(t), i.d(t, {
  maybeJoinEmbeddedActivity: function() {
    return T
  }
});
var n = i("404118"),
  l = i("651057"),
  a = i("299285"),
  u = i("645999"),
  r = i("653047"),
  d = i("42203"),
  o = i("305961"),
  s = i("957255"),
  c = i("697218"),
  f = i("800762"),
  _ = i("191225"),
  E = i("706508"),
  I = i("501260"),
  A = i("782340");
async function T(e) {
  var t;
  let {
    channelId: i,
    applicationId: T,
    instanceId: C,
    inputApplication: v,
    analyticsLocations: S,
    embeddedActivitiesManager: N
  } = e, h = _.default.getEmbeddedActivitiesForChannel(i), p = h.find(e => e.applicationId === T && (null == C || e.instanceId === C)), y = v;
  if (null == y) {
    let e = await l.default.fetchApplication(T);
    y = r.default.createFromServer(e)
  }
  if (null == p || null == y) return;
  let D = c.default.getCurrentUser(),
    O = (0, I.default)({
      userId: null == D ? void 0 : D.id,
      application: y,
      channelId: i,
      currentUser: D,
      isActivitiesEnabledForCurrentPlatform: !0,
      ChannelStore: d.default,
      VoiceStateStore: f.default,
      PermissionStore: s.default,
      GuildStore: o.default
    }),
    g = _.default.getSelfEmbeddedActivityForChannel(i),
    L = null == g ? void 0 : g.applicationId,
    m = null != L && null !== (t = a.default.getApplication(L)) && void 0 !== t ? t : void 0;
  ! function(e) {
    let {
      embeddedActivityJoinability: t,
      handleCanJoin: i
    } = e;
    switch (t) {
      case I.EmbeddedActivityJoinability.CAN_JOIN:
        null == i || i();
        break;
      case I.EmbeddedActivityJoinability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
        (0, u.showActivitiesInvalidPermissionsAlert)();
        break;
      case I.EmbeddedActivityJoinability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
        n.default.show({
          title: A.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
          body: A.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
          hideActionSheet: !1
        });
        break;
      case I.EmbeddedActivityJoinability.ACTIVITY_NOT_SUPPORTED_ON_OS:
        n.default.show({
          title: A.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
          body: A.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS,
          hideActionSheet: !1
        });
        break;
      case I.EmbeddedActivityJoinability.ACTIVITY_AGE_GATED:
        n.default.show({
          title: A.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
          body: A.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE,
          hideActionSheet: !1
        });
        break;
      case I.EmbeddedActivityJoinability.NO_CHANNEL_CONNECT_PERMISSION:
      case I.EmbeddedActivityJoinability.CHANNEL_FULL:
      case I.EmbeddedActivityJoinability.NO_CHANNEL:
      case I.EmbeddedActivityJoinability.NO_USER:
        n.default.show({
          title: A.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
          body: A.default.Messages.ACTIVITIES_GENERIC_LAUNCH_FAILURE_DIALOG_BODY,
          hideActionSheet: !1
        })
    }
  }({
    embeddedActivityJoinability: O,
    handleCanJoin: async function e() {
      null != p && await (0, E.default)({
        applicationId: p.applicationId,
        currentEmbeddedApplication: m,
        activityChannelId: i,
        locationObject: {},
        embeddedActivitiesManager: N,
        analyticsLocations: S
      })
    }
  })
}
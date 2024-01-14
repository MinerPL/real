"use strict";
i.r(t), i.d(t, {
  default: function() {
    return p
  }
});
var n = i("645999"),
  l = i("42203"),
  a = i("305961"),
  u = i("957255"),
  r = i("697218"),
  d = i("659500"),
  o = i("427953"),
  s = i("898065"),
  c = i("550766"),
  f = i("191225"),
  _ = i("544805"),
  E = i("370507"),
  I = i("943349"),
  A = i("420444"),
  T = i("541473"),
  C = i("407908"),
  v = i("578708"),
  S = i("702173"),
  N = i("954016"),
  h = i("49111");

function p(e) {
  let {
    activityItem: t,
    currentActivity: i,
    locationObject: o,
    channelId: s,
    guildId: c,
    embeddedActivitiesManager: A,
    analyticsLocations: T
  } = e, C = a.default.getGuild(c), v = r.default.getCurrentUser(), N = f.default.getConnectedActivityChannelId(), p = l.default.getChannel(N);
  if (null == C && !(0, S.isPrivateChannelWithEnabledActivities)(s) || null == v || null == t) return Promise.resolve(!1);
  let {
    application: D,
    activity: O
  } = t;
  if (null == D) return Promise.resolve(!1);
  if (null == s) return d.ComponentDispatch.dispatch(h.ComponentActions.SHOW_ACTIVITIES_CHANNEL_SELECTOR, {
    applicationId: D.id
  }), Promise.resolve(!1);
  let g = null != s ? (0, I.getEmbeddedActivityLaunchability)({
    channelId: s,
    ChannelStore: l.default,
    GuildStore: a.default,
    PermissionStore: u.default
  }) : I.EmbeddedActivityLaunchability.NO_CHANNEL;
  if (g !== I.EmbeddedActivityLaunchability.CAN_LAUNCH) return g === I.EmbeddedActivityLaunchability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION && (0, n.showActivitiesInvalidPermissionsAlert)(), Promise.resolve(!1);
  let L = function() {
    let {
      bypassChangeVcModal: e
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      bypassChangeVcModal: !1
    }, t = O.requires_age_gate && null == v.nsfwAllowed;
    return t ? new Promise(t => {
      (0, _.confirmActivityAgeGate)({
        application: D,
        onAgree: () => t(y({
          channelId: s,
          guildId: null == C ? void 0 : C.id,
          locationObject: o,
          application: D,
          analyticsLocations: T,
          bypassChangeVcModal: e
        })),
        onDisagree: () => t(!1)
      })
    }) : y({
      channelId: s,
      guildId: null == C ? void 0 : C.id,
      locationObject: o,
      application: D,
      analyticsLocations: T,
      bypassChangeVcModal: e
    })
  };
  return null != i ? new Promise(e => {
    (0, E.default)(i, p, () => {
      A.leaveActivity({
        channelId: s,
        applicationId: i.id
      }), e(L({
        bypassChangeVcModal: !0
      }))
    }, () => e(!1))
  }) : L()
}
async function y(e) {
  let {
    channelId: t,
    guildId: i,
    locationObject: n,
    application: a,
    analyticsLocations: u,
    bypassChangeVcModal: d
  } = e, f = r.default.getCurrentUser(), _ = l.default.getChannel(t);
  if (null == f || null == _) return !1;
  let E = (0, A.default)(t),
    I = N.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(_.type);
  if (E) {
    let e = await (0, T.default)({
      channelId: t,
      bypassChangeModal: d
    });
    if (!e) return !1
  } else if (!(0, o.isActivitiesInTextEnabled)(_, "handleStartEmbeddedActivity") || !I) return !1;
  return c.startEmbeddedActivity(t, a.id, u), (0, v.default)(i, t), (0, C.default)({
    type: h.AnalyticsGameOpenTypes.LAUNCH,
    userId: f.id,
    applicationId: a.id,
    locationObject: n,
    analyticsLocations: u
  }), s.markActivityUsed(a.id), !0
}
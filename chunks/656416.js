"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
  }
});
var a = s("37983"),
  l = s("884691"),
  r = s("446674"),
  i = s("77078"),
  o = s("463848"),
  n = s("373469"),
  u = s("824563"),
  d = s("765698"),
  c = s("453649"),
  f = s("49111"),
  S = s("260787"),
  m = s("568719");

function x(e) {
  let {
    user: t
  } = e, s = (0, r.useStateFromStores)([n.default], () => null != n.default.getAnyStreamForUser(t.id)), x = (0, r.useStateFromStores)([u.default], () => u.default.getActivities(t.id)), T = l.useMemo(() => x.filter(e => e.type !== f.ActivityTypes.CUSTOM_STATUS), [x]), p = l.useMemo(() => s ? T.find(e => e.type === f.ActivityTypes.PLAYING) : null, [T, s]), v = l.useMemo(() => T.filter(e => e !== p), [p, T]), h = (0, c.useGetVoiceChannelInfoForVoiceActivitySection)(t.id), A = null != h && !s, {
    showVoiceActivityInProfile: E
  } = d.VoiceActivityProfileExperiment.useExperiment({
    location: "user profile modal"
  }, {
    autoTrackExposure: A
  });
  return (0, a.jsxs)(i.ScrollerThin, {
    className: m.listScroller,
    fade: !0,
    children: [E && A ? (0, a.jsx)("div", {
      className: S.voiceActivity,
      children: (0, a.jsx)(c.default, {
        ...h,
        color: S.actionColor
      })
    }) : null, s ? (0, a.jsx)(o.default, {
      type: o.UserActivityTypes.PROFILE_V2,
      user: t,
      source: "Profile Modal",
      className: S.userProfileActivity,
      activity: p,
      actionColor: S.actionColor
    }) : null, v.map(e => (0, a.jsx)(o.default, {
      type: o.UserActivityTypes.PROFILE_V2,
      activity: e,
      user: t,
      useStoreStream: !1,
      source: "Profile Modal",
      className: S.userProfileActivity,
      actionColor: S.actionColor
    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
  })
}
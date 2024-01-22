"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("65597"),
  i = n("84339"),
  r = n("427953"),
  o = n("550766"),
  u = n("191225"),
  d = n("420444"),
  c = n("294926"),
  f = n("272505");

function h(e) {
  let {
    maxHeight: t
  } = e, {
    connectedChannelId: n,
    connectedActivity: h,
    activityPanelMode: p
  } = (0, s.useStateFromStoresObject)([u.default], () => {
    var e;
    let t = u.default.getConnectedActivityChannelId();
    return {
      connectedChannelId: t,
      connectedActivity: null != t && null !== (e = u.default.getSelfEmbeddedActivityForChannel(t)) && void 0 !== e ? e : void 0,
      activityPanelMode: u.default.getActivityPanelMode()
    }
  }), m = (0, r.useIsActivitiesInTextEnabled)(n, "ActivityPanelUI"), E = (0, i.default)(n);
  if (l.useEffect(() => {
      null == n && null != E ? (0, o.updateActivityPanelMode)(f.ActivityPanelModes.ACTION_BAR) : null != n && null == E && (0, o.updateFocusedActivityLayout)(f.FocusedActivityLayouts.RESIZABLE)
    }, [n, E]), !m) return null;
  let C = null == h ? void 0 : h.applicationId;
  return p !== f.ActivityPanelModes.PANEL || null == C ? null : null == n || null == h || (0, d.default)(n) || null == C ? null : (0, a.jsx)(c.default, {
    maxHeight: t,
    connectedChannelId: n
  })
}
"use strict";
a.r(t), a.d(t, {
  default: function() {
    return A
  }
});
var n = a("37983");
a("884691");
var l = a("446674"),
  i = a("77078"),
  u = a("86878"),
  r = a("686470"),
  d = a("568307"),
  s = a("535974"),
  c = a("602043"),
  o = a("780009"),
  f = a("860285"),
  I = a("782340");

function A(e, t) {
  let a = (0, l.useStateFromStores)([d.default], () => d.default.getRunningVerifiedApplicationIds().includes(e.id), [e.id]),
    A = (0, l.useStateFromStores)([r.default, f.default, s.default, u.default], () => (0, c.isLaunchable)({
      LibraryApplicationStore: r.default,
      LaunchableGameStore: f.default,
      DispatchApplicationStore: s.default,
      ConnectedAppsStore: u.default,
      applicationId: e.id,
      branchId: e.branchId
    }), [e.branchId, e.id]);
  return a || !A ? null : (0, n.jsx)(i.MenuItem, {
    id: "launch",
    label: I.default.Messages.APPLICATION_CONTEXT_MENU_LAUNCH,
    action: () => o.playApplication(e.id, e, {
      analyticsParams: {
        location: t
      }
    })
  })
}
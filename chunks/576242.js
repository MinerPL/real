"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("37983");
n("884691");
var r = n("550766"),
  s = n("893011"),
  l = n("981913"),
  i = n("782340");

function u(e) {
  let {
    channelId: t,
    applicationId: n,
    centerButton: u = !1,
    ...o
  } = e, d = u ? l.CenterControlButton : l.default;
  return (0, a.jsx)(d, {
    ...o,
    onClick: () => {
      (0, r.stopEmbeddedActivity)({
        channelId: t,
        applicationId: n
      })
    },
    iconComponent: s.default,
    label: i.default.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY
  })
}
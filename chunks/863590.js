"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("37983");
n("884691");
var l = n("414456"),
  s = n.n(l),
  i = n("77078"),
  r = n("614175"),
  o = n("181114"),
  u = n("82636"),
  d = n("981913"),
  c = n("782340"),
  f = n("808554");

function h(e) {
  let t, {
      isActivityActive: n,
      ...l
    } = e,
    {
      enabled: h
    } = r.ActivitiesGameNightExperiment.useExperiment({
      location: "9ab33d_1"
    }, {
      autoTrackExposure: !1
    });
  return h ? (0, a.jsxs)(o.default, {
    disabled: l.disabled,
    onClick: l.onClick,
    onMouseEnter: l.onMouseEnter,
    onMouseLeave: l.onMouseLeave,
    look: i.Button.Looks.BLANK,
    size: i.Button.Sizes.XLARGE,
    className: s(f.gameNightButton, {
      [f.gameNightActivityIsActive]: n && !l.disabled
    }),
    innerClassName: f.gameNightButtonInner,
    children: [(0, a.jsx)(u.default, {
      className: f.gameNightRocket
    }), c.default.Messages.EMBEDDED_ACTIVITIES_GAME_NIGHT]
  }) : (0, a.jsx)(d.CenterControlButton, {
    isActive: n,
    color: t,
    iconComponent: u.default,
    ...l
  })
}
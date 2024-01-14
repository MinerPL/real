"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("37983");
s("884691");
var n = s("446674"),
  l = s("77078"),
  i = s("168067"),
  r = s("405069"),
  o = s("870696"),
  d = s("157246");

function u(e) {
  let {
    className: t
  } = e, s = (0, n.useStateFromStores)([o.default], () => o.default.getSoundpack()), {
    allowAprilFoolsSoundpack: u
  } = i.default.useExperiment({
    location: "a96548_1"
  }, {
    autoTrackExposure: !1
  });
  if (!u) return null;
  let c = u ? (0, d.getSoundpackOptionsAprilFools2023)() : [];
  return (0, a.jsx)(l.SingleSelect, {
    className: t,
    onChange: e => (0, r.setSoundpack)(e),
    value: s,
    options: c
  })
}
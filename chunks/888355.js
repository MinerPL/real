"use strict";
n.r(t), n.d(t, {
  useIsDMsToClydeEnabled: function() {
    return u
  }
});
var i = n("446674"),
  a = n("862205"),
  l = n("305961"),
  r = n("980215");
let s = (0, a.createExperiment)({
  kind: "user",
  id: "2023-05_clyde_ai_dm",
  label: "DMs to Clyde",
  defaultConfig: {
    isDMsToClydeEnabled: !1
  },
  treatments: [{
    id: 1,
    label: "enable dms to clyde",
    config: {
      isDMsToClydeEnabled: !0
    }
  }]
});

function u() {
  let {
    isDMsToClydeEnabled: e
  } = s.useExperiment({
    location: "dbd3ac_1"
  }, {
    autoTrackExposure: !1
  }), t = (0, i.useStateFromStoresArray)([l.default], () => l.default.getGuildIds()), n = t.some(e => (0, r.getClydeExperimentEnabled)(l.default.getGuild(e)));
  return e && n
}
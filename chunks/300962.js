"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var a = s("862205"),
  n = s("697218"),
  l = s("764364");
let i = (0, a.createExperiment)({
  kind: "user",
  id: "2023-11_nitro_tab_holdout",
  label: "Nitro Tab Holdout",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: !0
    }
  }]
});
var r = function() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    s = n.default.getCurrentUser(),
    a = (0, l.isPremium)(s);
  return i.useExperiment({
    location: "experiment_hook"
  }, {
    autoTrackExposure: e,
    disable: t || !a
  })
}
"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
});
var a = s("862205"),
  n = s("697218"),
  r = s("764364");
let l = (0, a.createExperiment)({
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
var i = function() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    s = n.default.getCurrentUser(),
    a = (0, r.isPremium)(s);
  return l.useExperiment({
    location: "experiment_hook"
  }, {
    autoTrackExposure: e,
    disable: t || !a
  })
}
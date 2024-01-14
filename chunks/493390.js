"use strict";
a.r(t), a.d(t, {
  openProfileEffectModal: function() {
    return r
  }
});
var l = a("37983");
a("884691");
var s = a("77078");
let r = e => {
  let {
    analyticsLocations: t,
    initialSelectedEffectId: r
  } = e;
  (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await a.el("889793").then(a.bind(a, "889793"));
    return a => (0, l.jsx)(e, {
      ...a,
      initialSelectedEffectId: r,
      analyticsLocations: t
    })
  }, {})
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var l = n("37983");
n("884691");
var i = n("77078"),
  r = n("599110"),
  o = n("49111");

function s(e) {
  r.default.track(o.AnalyticEvents.OPEN_MODAL, {
    type: o.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
    location: e
  }), (0, i.openModalLazy)(async () => {
    let {
      default: e
    } = await n.el("122846").then(n.bind(n, "122846"));
    return t => (0, l.jsx)(e, {
      ...t
    })
  })
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("162771"),
  i = n("599110"),
  r = n("49111");

function o(e) {
  let t = l.default.getGuildId();
  i.default.track(r.AnalyticEvents.OPEN_MODAL, {
    type: "Clyde Profile Apply",
    location_page: "Embed Apply",
    clyde_profile_id: e.clyde_profile_id,
    guild_id: t
  }), (0, s.openModalLazy)(async () => {
    let {
      default: t
    } = await n.el("882317").then(n.bind(n, "882317"));
    return n => (0, a.jsx)(t, {
      ...n,
      clydeProfile: e
    })
  })
}
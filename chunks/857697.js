"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("37983");
n("884691");
var l = n("77078"),
  a = n("162771"),
  i = n("599110"),
  r = n("49111");

function o(e) {
  let t = a.default.getGuildId();
  i.default.track(r.AnalyticEvents.OPEN_MODAL, {
    type: "Clyde Profile Apply",
    location_page: "Embed Apply",
    clyde_profile_id: e.clyde_profile_id,
    guild_id: t
  }), (0, l.openModalLazy)(async () => {
    let {
      default: t
    } = await n.el("882317").then(n.bind(n, "882317"));
    return n => (0, s.jsx)(t, {
      ...n,
      clydeProfile: e
    })
  })
}
"use strict";
l.r(t), l.d(t, {
  default: function() {
    return r
  }
});
var n = l("37983");
l("884691");
var a = l("77078"),
  s = l("599110"),
  i = l("49111");

function r(e) {
  s.default.track(i.AnalyticEvents.OPEN_MODAL, {
    type: "Clyde Share Profile",
    location_page: "Profile Popout",
    guild_id: e
  }), (0, a.openModalLazy)(async () => {
    let {
      default: t
    } = await l.el("736139").then(l.bind(l, "736139"));
    return l => (0, n.jsx)(t, {
      ...l,
      guildId: e
    })
  })
}
"use strict";
l.r(r), l.d(r, {
  default: function() {
    return a
  }
});
var t = l("37983");
l("884691");
var o = l("77078"),
  i = l("599110"),
  n = l("49111");

function a(e) {
  i.default.track(n.AnalyticEvents.OPEN_MODAL, {
    type: "Edit Clyde Profile",
    location_page: "Profile Popout",
    guild_id: e
  }), (0, o.openModalLazy)(async () => {
    let {
      default: r
    } = await l.el("485261").then(l.bind(l, "485261"));
    return l => (0, t.jsx)(r, {
      ...l,
      guildId: e
    })
  })
}
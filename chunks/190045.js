"use strict";
r.r(t), r.d(t, {
  default: function() {
    return s
  }
});
var l = r("37983");
r("884691");
var i = r("77078"),
  o = r("599110"),
  n = r("49111");

function s(e) {
  o.default.track(n.AnalyticEvents.OPEN_MODAL, {
    type: "Edit Clyde Profile",
    location_page: "Profile Popout",
    guild_id: e
  }), (0, i.openModalLazy)(async () => {
    let {
      default: t
    } = await r.el("485261").then(r.bind(r, "485261"));
    return r => (0, l.jsx)(t, {
      ...r,
      guildId: e
    })
  })
}
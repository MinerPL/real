"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var s = n("37983");
n("884691");
var l = n("77078"),
  a = n("305961");

function i(e) {
  let {
    onCloseCallback: t,
    analyticsLocations: i,
    ...r
  } = e;
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await n.el("341334").then(n.bind(n, "341334"));
    return t => (0, s.jsx)(e, {
      ...t,
      ...r,
      analyticsLocations: i,
      guildCount: a.default.getGuildCount(),
      "aria-labelledby": "nitro-guild-cap-upsell"
    })
  }, {
    onCloseCallback: t
  })
}
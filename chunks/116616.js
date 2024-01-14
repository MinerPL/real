"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("305961");

function i(e) {
  let {
    onCloseCallback: t,
    analyticsLocations: i,
    ...r
  } = e;
  (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await n.el("341334").then(n.bind(n, "341334"));
    return t => (0, a.jsx)(e, {
      ...t,
      ...r,
      analyticsLocations: i,
      guildCount: l.default.getGuildCount(),
      "aria-labelledby": "nitro-guild-cap-upsell"
    })
  }, {
    onCloseCallback: t
  })
}
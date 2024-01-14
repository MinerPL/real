"use strict";
l.r(t), l.d(t, {
  openDisableCommunication: function() {
    return u
  },
  openEnableCommunication: function() {
    return i
  }
});
var a = l("37983");
l("884691");
var n = l("77078");

function u(e, t, u) {
  (0, n.openModalLazy)(async () => {
    let {
      default: n
    } = await l.el("693120").then(l.bind(l, "693120"));
    return l => (0, a.jsx)(n, {
      guildId: e,
      userId: t,
      anaylticsLocations: u,
      ...l
    })
  })
}

function i(e, t, u) {
  (0, n.openModalLazy)(async () => {
    let {
      default: n
    } = await l.el("750331").then(l.bind(l, "750331"));
    return l => (0, a.jsx)(n, {
      guildId: e,
      userId: t,
      anaylticsLocations: u,
      ...l
    })
  })
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var l = n("37983");
n("884691");
var i = n("77078"),
  r = n("592407"),
  o = n("49111");

function s(e) {
  r.default.open(e, o.GuildSettingsSections.SOUNDBOARD), (0, i.openModalLazy)(async () => {
    let {
      default: t
    } = await n.el("823749").then(n.bind(n, "823749"));
    return n => (0, l.jsx)(t, {
      ...n,
      guildId: e
    })
  })
}
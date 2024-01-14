"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
});
var l = a("37983");
a("884691");
var n = a("77078"),
  s = a("70025"),
  u = a("334683"),
  i = a("842672"),
  d = a("782340");

function r(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    r = (0, u.default)(e),
    o = (0, i.default)();
  return r ? (0, l.jsx)(n.MenuItem, {
    id: "create-event",
    label: d.default.Messages.SCHEDULE_EVENT,
    icon: t ? s.default : void 0,
    action: () => {
      (0, n.openModalLazy)(async () => {
        let {
          default: t
        } = await a.el("590942").then(a.bind(a, "590942"));
        return a => (0, l.jsx)(t, {
          ...a,
          guildId: e
        })
      }, o)
    }
  }) : null
}
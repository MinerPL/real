"use strict";
n.r(t), n.d(t, {
  handleInaccessiblePage: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  i = n("393414"),
  l = n("476108"),
  r = n("923959"),
  o = n("18494"),
  u = n("49111");

function d(e, t) {
  if ((0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("657233").then(n.bind(n, "657233"));
      return t => (0, a.jsx)(e, {
        ...t
      })
    }), o.default.getChannelId(e) === t) {
    var d;
    (0, i.replaceWith)(u.Routes.CHANNEL(e, null === (d = r.default.getDefaultChannel(e)) || void 0 === d ? void 0 : d.id))
  } else(0, i.replaceWith)(l.default.defaultRoute)
}
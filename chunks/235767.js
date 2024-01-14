"use strict";
l.r(t), l.d(t, {
  default: function() {
    return p
  }
});
var n = l("37983");
l("884691");
var a = l("414456"),
  s = l.n(a),
  i = l("446674"),
  r = l("77078"),
  o = l("697218"),
  u = l("987772"),
  d = l("158998"),
  c = l("473591"),
  f = l("782340"),
  m = l("189590");

function p(e) {
  let {
    userId: t,
    guildId: l,
    className: a
  } = e, p = (0, i.useStateFromStores)([c.default], () => c.default.getSettings(l)), E = (0, i.useStateFromStores)([o.default], () => o.default.getUser(null != t ? t : null == p ? void 0 : p.last_edited_by));
  return null == E ? null : (0, n.jsxs)("div", {
    className: s(a, m.container),
    children: [(0, n.jsx)(u.default, {
      color: "var(--interactive-active)",
      width: 12,
      height: 12
    }), (0, n.jsx)(r.Text, {
      color: "text-normal",
      variant: "text-xs/medium",
      children: f.default.Messages.CLYDE_LAST_EDITED_BY_TAG.format({
        username: d.default.getUserTag(E, {
          decoration: "auto"
        })
      })
    })]
  })
}
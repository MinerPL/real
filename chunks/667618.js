"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
});
var n = l("37983");
l("884691");
var a = l("968194"),
  s = l("128259"),
  i = l("253981"),
  r = l("295999");

function o(e) {
  let {
    activity: t,
    color: l,
    user: o,
    look: u
  } = e;
  if ((null == t ? void 0 : t.buttons) == null || t.buttons.length < 1) return null;
  async function d(e, t, l) {
    try {
      let n = await (0, a.getMetadata)(e, t);
      if (null == n || !Array.isArray(n.button_urls)) return;
      let r = n.button_urls[l];
      if ("string" != typeof r) return;
      let o = i.default.safeParseWithQuery(r);
      if (null == o || null == o.protocol || null == o.hostname) return;
      (0, s.handleClick)({
        href: i.default.format(o),
        trusted: !1
      })
    } catch (e) {}
  }
  return (0, n.jsx)(n.Fragment, {
    children: t.buttons.map((e, a) => (0, n.jsx)(r.default, {
      color: l,
      look: u,
      onClick: () => d(t, o.id, a),
      children: e
    }, "customButton-".concat(a)))
  })
}
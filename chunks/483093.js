"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
});
var n = l("37983");
l("884691");
var a = l("414456"),
  s = l.n(a),
  i = l("77078"),
  r = l("782340"),
  o = l("569313");

function u(e) {
  let {
    className: t,
    src: l,
    unicodeEmoji: a,
    name: u,
    size: d = 20,
    enableTooltip: c = !0,
    enableHeight: f = !0,
    onClick: m
  } = e;
  if (null == l && null == a) return null;
  let p = e => {
    let c = (0, n.jsx)("img", {
      alt: "",
      "aria-label": r.default.Messages.ROLE_ICON_ALT_TEXT.format({
        name: u
      }),
      className: s(o.roleIcon, t, {
        [o.clickable]: null != m
      }),
      height: f ? d : void 0,
      src: l,
      width: d,
      ...e
    });
    return (null != a && (c = (0, n.jsx)("img", {
      alt: "",
      "aria-label": a.allNamesString,
      className: s(o.roleIcon, t, {
        [o.clickable]: null != m
      }),
      height: f ? d : void 0,
      src: a.url,
      width: d,
      ...e
    })), null == m) ? (0, n.jsx)(i.FocusRing, {
      children: c
    }) : (0, n.jsx)(i.Clickable, {
      onClick: m,
      tag: "span",
      children: c
    })
  };
  return (0, n.jsx)(i.Tooltip, {
    text: u,
    "aria-label": !1,
    shouldShow: c,
    children: e => p(e)
  })
}
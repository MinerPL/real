"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
});
var n = l("37983");
l("884691");
var r = l("414456"),
  i = l.n(r),
  s = l("746379"),
  a = l.n(s),
  o = l("590787");
let d = RegExp("^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)");

function u(e) {
  let {
    className: t,
    embed: {
      url: l,
      thumbnail: r
    }
  } = e;
  if (null == l || null == r) return null;
  let s = null,
    u = null;
  try {
    let e = a.parse(l, !0);
    s = e.host, u = e.pathname
  } catch (e) {
    return null
  }
  if (!d.test(null != s ? s : "") || null == u) return null;
  let {
    width: c,
    height: m
  } = r;
  return (0, n.jsx)("iframe", {
    className: i(o.embedAmazonMusic, t),
    src: l,
    style: {
      width: Math.min(c, 500),
      height: Math.min(m, 400)
    },
    frameBorder: 0,
    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
  })
}
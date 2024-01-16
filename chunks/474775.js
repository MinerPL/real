"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
}), s("222007"), s("781738");
var a = s("37983");
s("884691");
var n = s("597755"),
  l = s.n(n),
  i = s("77078"),
  r = s("49671"),
  o = s("172588");

function d() {
  var e, t, s, n, d;
  let u = window.GLOBAL_ENV.RELEASE_CHANNEL,
    c = (e = "adda9d1a454141f1d483692f281bd85904ca50b2", e.substring(0, 7)),
    S = null === r.default || void 0 === r.default ? void 0 : r.default.remoteApp.getVersion(),
    E = null === r.default || void 0 === r.default ? void 0 : null === (t = (s = r.default.remoteApp).getBuildNumber) || void 0 === t ? void 0 : t.call(s),
    f = null === r.default || void 0 === r.default ? void 0 : null === (n = (d = r.default.remoteApp).getAppArch) || void 0 === n ? void 0 : n.call(d),
    T = function() {
      var e;
      let t = null == l ? void 0 : null === (e = l.os) || void 0 === e ? void 0 : e.toString();
      if (null == t || null == r.default) return null;
      let s = r.default.os.release,
        [a, n, i] = s.split(".").map(e => parseInt(e, 10));
      return t.includes("Windows 10") && void 0 !== i && i >= 22e3 && (t = t.replace("Windows 10", "Windows 11")), t.includes("OS X 10.15.7") && void 0 !== a && a >= 20 && (t = "macOS ".concat(a - 9)), "".concat(t, " (").concat(s, ")")
    }();
  return (0, a.jsxs)("div", {
    className: o.info,
    children: [(0, a.jsxs)(i.Text, {
      tag: "span",
      className: o.line,
      variant: "text-xs/normal",
      color: "text-muted",
      children: [u, " ", "259219", " ", (0, a.jsxs)("span", {
        className: o.versionHash,
        children: ["(", c, ")"]
      })]
    }), " ", null != S ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(i.Text, {
        tag: "span",
        className: o.line,
        variant: "text-xs/normal",
        color: "text-muted",
        children: ["Host ", S, " ", null != f ? (0, a.jsxs)("span", {
          className: o.appArch,
          children: [f.toLowerCase(), " "]
        }) : null, null != E ? (0, a.jsxs)("span", {
          children: ["(", E, ")"]
        }) : null]
      }), " "]
    }) : null, null != T ? (0, a.jsx)(i.Text, {
      tag: "span",
      className: o.line,
      variant: "text-xs/normal",
      color: "text-muted",
      children: T
    }) : null]
  })
}
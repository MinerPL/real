"use strict";
n.r(t), n.d(t, {
  getIconComponent: function() {
    return s
  },
  pxToRem: function() {
    return u
  },
  getCommandQuery: function() {
    return o
  }
});
var i = n("524768"),
  a = n("991630"),
  l = n("943161"),
  r = n("317041");
let s = e => e.type === i.ApplicationCommandSectionType.BUILT_IN ? l.default : a.default;

function u(e) {
  return "".concat(e / 16, "rem")
}

function o(e, t) {
  let n = t,
    i = !1,
    a = t.indexOf(":");
  if (a >= 0) {
    let e = t.lastIndexOf(" ", a);
    e >= 0 ? (t = t.substring(0, e), i = !0) : t = t.substring(0, a)
  } else t = t.substring(0, t.length);
  let l = t.split(" ", r.MAX_SUBCOMMAND_LEVEL + 1);
  return l.length > r.MAX_SUBCOMMAND_LEVEL && (i = !0, l.pop()), t = l.join(" "), (n.length > t.length || t.endsWith(" ")) && (i = !0, t = t.trimEnd()), {
    text: t,
    parts: l,
    hasSpaceTerminator: i
  }
}
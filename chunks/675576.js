"use strict";
var a = this && this.__importDefault || function(e) {
  return e && e.__esModule ? e : {
    default: e
  }
};
Object.defineProperty(t, "__esModule", {
  value: !0
});
let n = a(r("467058")),
  s = a(r("82508")),
  o = a(r("687473")),
  i = "twhZNwxI1aFG3r4";

function u(e) {
  for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) r[a - 1] = arguments[a];
  let s = "";
  for (let t = 0; t < e.length; t++)
    if (s += e[t], t < r.length) {
      let e = r[t],
        a = !1;
      if (o.default(e).value && (e = o.default(e).value, a = !0), e && e[i] || a) {
        let t = s.split("\n"),
          r = t[t.length - 1].search(/\S/),
          n = r > 0 ? " ".repeat(r) : "";
        (a ? JSON.stringify(e, null, 2) : e[i]).split("\n").forEach((e, t) => {
          t > 0 ? s += "\n" + n + e : s += e
        })
      } else if ("string" == typeof e && e.includes("\n")) {
        let t = s.match(/(?:^|\n)( *)$/);
        if ("string" == typeof e) {
          let r = t ? t[1] : "";
          s += e.split("\n").map((e, t) => (e = i + e, 0 === t ? e : "".concat(r).concat(e))).join("\n")
        } else s += e
      } else s += e
    } return (s = n.default(s)).split(i).join("")
}
u.pretty = e => s.default(e) ? {
  [i]: JSON.stringify(e, null, 2)
} : e, t.default = u
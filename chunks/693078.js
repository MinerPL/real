"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("781738");
var s = n("627445"),
  i = n.n(s),
  r = n("132710"),
  a = n.n(r);
let o = /\n{2,}$/,
  d = /(?:^|\n)( *)$/,
  u = "(?:[*-]|\\d+\\.)",
  l = "( *)(" + u + ") +",
  f = RegExp("^" + l),
  _ = RegExp(l + "[^\\n]*(?:\\n(?!\\1" + u + " )[^\\n]*)*(\n|$)", "gm"),
  c = / *\n$/,
  g = RegExp("^( *)(" + u + ") [\\s\\S]+?(?:\\n(?! )(?!\\1" + u + " )|$)"),
  m = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/,
  h = e => e.map(e => ("text" === e.type && null != e.content && (e.content = e.content.replace(/\n+\s*$/, "")), e)),
  v = {
    ...a.defaultRules.list,
    requiredFirstCharacters: " *-0123456789".split(""),
    match: (e, t) => {
      if (!t.allowList || t._listLevel >= 11) return null;
      let n = null == t.prevCapture ? "" : t.prevCapture[0],
        s = d.exec(n);
      return null == s || m.test(s[0]) ? null : g.exec(e)
    },
    parse: (e, t, n) => {
      let s = e[2],
        r = s.length > 1,
        a = e[0].replace(o, "\n").match(_);
      i(null != a, "markup list items can not be parsed.");
      let d = !1,
        u = a.map((e, s) => {
          let i;
          let r = f.exec(e),
            o = null != r ? r[0].length : 0,
            u = RegExp("^ {1," + o + "}", "gm"),
            l = e.replace(u, "").replace(f, ""),
            _ = s === a.length - 1,
            g = -1 !== l.indexOf("\n\n"),
            m = g || _ && d;
          d = m;
          let v = n.inline,
            E = n._list,
            p = n._listLevel;
          n._list = !0, n._listLevel = (null != p ? p : 0) + 1, m ? (n.inline = !1, i = l.replace(c, "\n\n")) : (n.inline = !0, i = l.replace(c, ""));
          let y = h(t(i, {
            ...n,
            allowHeading: !1
          }));
          return n.inline = v, n._list = E, n._listLevel = p, y
        });
      return {
        ordered: r,
        start: r ? Math.min(1e9, Math.max(1, +s)) : void 0,
        items: u
      }
    }
  };
var E = v
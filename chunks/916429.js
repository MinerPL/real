"use strict";
n.r(t), n.d(t, {
  parseSelectedSyntax: function() {
    return d
  },
  toggleMarkdownStyle: function() {
    return h
  },
  toggleBlockStyle: function() {
    return E
  }
}), n("222007");
var l = n("627445"),
  i = n.n(l),
  r = n("83800"),
  o = n("939563"),
  s = n("385887");
let a = new Set(["*", "_", "~", "`", "|"]),
  u = {
    bold: "**",
    italics: "*",
    underline: "__",
    strikethrough: "~~",
    inlineCode: "`",
    spoiler: "||"
  };

function d(e, t, n) {
  if (null == e.selection) return {
    before: {},
    after: {}
  };
  let l = c(e, t),
    i = c(e, n);
  for (let e in l) !(e in i) && delete l[e];
  for (let e in i) !(e in l) && delete i[e];
  return {
    before: l,
    after: i
  }
}

function c(e, t) {
  let [n] = s.EditorUtils.node(e, t.path);
  if (!s.TextUtils.isText(n)) return {};
  let l = n.text,
    i = t.offset;
  for (let e = i - 1; e >= 0 && a.has(l.charAt(e)); e--) i--;
  let r = t.offset;
  for (let e = r; e < l.length && a.has(l.charAt(e)); e++) r++;
  let o = l.substring(i, r),
    u = {};
  return p({
    result: u,
    text: o,
    startIndex: i,
    syntax: "***",
    type1: "italics",
    type2: "bold"
  }), p({
    result: u,
    text: o,
    startIndex: i,
    syntax: "___",
    type1: "italics",
    type2: "underline"
  }), f(u, o, i, "**", "bold"), f(u, o, i, "*", "italics"), f(u, o, i, "_", "italics"), f(u, o, i, "__", "underline"), f(u, o, i, "`", "inlineCode"), f(u, o, i, "~~", "strikethrough"), f(u, o, i, "||", "spoiler"), u
}

function f(e, t, n, l, i) {
  let r = m(t, l);
  r >= 0 && (e[i] = {
    chars: l,
    location: n + r
  })
}

function p(e) {
  let {
    result: t,
    text: n,
    startIndex: l,
    syntax: i,
    type1: r,
    type2: o
  } = e, s = m(n, i);
  s >= 0 && (t[r] = {
    chars: i.substring(0, 1),
    location: s + l
  }, t[o] = {
    chars: i.substring(1),
    location: s + l + 1
  })
}

function m(e, t) {
  let n = e.indexOf(t);
  if (n >= 0) {
    let l = t.charAt(0);
    if (n > 0 && e.charAt(n - 1) === l || n < e.length - 1 && e.charAt(n + t.length) === l) return -1
  }
  return n
}

function h(e, t) {
  r.HistoryUtils.withSingleEntry(e, () => {
    s.EditorUtils.withoutNormalizing(e, () => {
      i(null != e.selection, "Editor has no selection");
      let [n, l] = s.RangeUtils.edges(e.selection), r = d(e, n, l), a = r.before[t], c = r.after[t], f = s.EditorUtils.node(e, n.path), p = s.EditorUtils.node(e, l.path);
      if (null == f || null == p || !s.TextUtils.isText(f[0]) || !s.TextUtils.isText(p[0])) return;
      let m = s.PathUtils.equals(f[1], p[1]);
      if (null != a && null != c) {
        let t = {
            path: n.path,
            offset: a.location
          },
          i = {
            path: l.path,
            offset: c.location
          };
        o.SlateTransforms.delete(e, {
          at: i,
          distance: c.chars.length
        }), o.SlateTransforms.delete(e, {
          at: t,
          distance: a.chars.length
        });
        let r = n.offset,
          u = l.offset;
        !s.PointUtils.isBefore(n, t) && (r -= a.chars.length), m && !s.PointUtils.isBefore(l, t) && (u -= a.chars.length), s.PointUtils.isAfter(l, i) && (u -= c.chars.length), o.SlateTransforms.select(e, {
          anchor: {
            path: n.path,
            offset: Math.max(0, r)
          },
          focus: {
            path: l.path,
            offset: Math.max(0, u)
          }
        })
      } else {
        let i = u[t];
        o.SlateTransforms.insertText(e, i, {
          at: l
        }), o.SlateTransforms.insertText(e, i, {
          at: n
        });
        let r = f[0].text.length + i.length,
          s = p[0].text.length + (m ? 2 * i.length : i.length);
        o.SlateTransforms.select(e, {
          anchor: {
            path: n.path,
            offset: Math.min(r, n.offset + i.length)
          },
          focus: {
            path: l.path,
            offset: Math.min(s, l.offset + (m ? i.length : 0))
          }
        })
      }
    })
  }), s.EditorUtils.focus(e)
}

function E(e, t) {
  let n = e.selection;
  if (null == n) return;
  let l = !0;
  for (let [i, r] of s.EditorUtils.blocks(e))("line" === i.type || i.type === t) && s.RangeUtils.includes(n, r) && (l = l && i.type === t);
  s.EditorUtils.withoutNormalizing(e, () => {
    for (let [i, r] of s.EditorUtils.blocks(e)) s.RangeUtils.includes(n, r) && (l || "line" !== i.type ? l && i.type === t && o.SlateTransforms.setNodes(e, {
      type: "line"
    }, {
      at: r
    }) : o.SlateTransforms.setNodes(e, {
      type: t
    }, {
      at: r
    }))
  }), s.EditorUtils.focus(e)
}
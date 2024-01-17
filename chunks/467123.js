"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  },
  isPointInCodeBlock: function() {
    return y
  },
  hasOpenPlainTextCodeBlock: function() {
    return x
  }
}), n("222007"), n("70102"), n("424973"), n("781738");
var l = n("436443"),
  i = n("693566"),
  r = n.n(i),
  o = n("718517"),
  s = n("86256"),
  a = n("83800"),
  u = n("970153"),
  d = n("939563"),
  c = n("385887"),
  f = n("566819");
let p = new Set(["line"]),
  m = l.default.listLanguages(),
  h = {};
for (let e of m) {
  e = e.toLowerCase();
  let t = l.default.getLanguage(e);
  if (null == t) continue;
  let n = t.aliases;
  if (h[e] = e, null != n)
    for (let t of n) h[t.toLowerCase()] = e
}
let E = /^[a-z0-9_+\-.#]+$/,
  S = /^[a-z0-9_+\-.#]+$/i;
for (let e in h)
  if (null == e.match(E)) throw Error("Language name does not match regex: ".concat(e));

function g(e) {
  let {
    onChange: t
  } = e, n = null;
  return e.onChange = () => {
    c.EditorUtils.richValue(e) !== n && (a.HistoryUtils.withMergedEntry(e, () => {
      c.EditorUtils.withoutNormalizing(e, () => (function(e) {
        let t = function(e) {
          let t = [],
            n = null;
          for (let l of c.EditorUtils.blocks(e)) {
            let i = null != n && (n.isInCodeBlock || n.opensCodeBlock),
              r = null != n && (n.isStyledCodeBlockLine || n.opensCodeBlockOnOwnLine),
              o = null != n && (n.opensCodeBlock || !n.closesCodeBlock) ? n.lang : null;
            n = function(e, t, n, l, i) {
              var r;
              let o = function(e) {
                  let t;
                  let [n, l] = e;
                  if (!p.has(n.type)) return [];
                  let i = [],
                    r = /\\|```/g;
                  for (let e = 0; e < n.children.length; e++) {
                    let o = n.children[e];
                    if (c.TextUtils.isText(o))
                      for (r.lastIndex = 0; null != (t = r.exec(o.text));) {
                        if ("\\" === t[0]) {
                          r.lastIndex += 1;
                          continue
                        }
                        i.push({
                          path: c.PathUtils.child(l, e),
                          offset: t.index
                        })
                      }
                  }
                  return i
                }(t),
                s = o[0],
                a = o[o.length - 1],
                u = null;
              if (null != a) {
                let [t] = c.EditorUtils.node(e, a.path);
                u = t.text.substring(a.offset + 3)
              }
              let d = n && null != s,
                f = n && 0 === o.length,
                m = l && 0 === o.length,
                E = d ? o.slice(1) : o,
                g = E.length % 2 == 1,
                C = g && (null == u || "" === u || null != u.match(S)),
                T = C && null != u && null !== (r = h[u.toLowerCase()]) && void 0 !== r ? r : null;
              return {
                blockEntry: t,
                wasInCodeBlock: n,
                isInCodeBlock: f,
                isStyledCodeBlockLine: m,
                lang: g || d ? T : i,
                hljsTypes: null,
                closesCodeBlock: d,
                opensCodeBlock: g,
                opensCodeBlockOnOwnLine: C
              }
            }(e, l, i, r, o), t.push(n)
          }
          return function(e) {
            let t = [],
              n = !1;
            for (let i of e) {
              let r = i === e[e.length - 1];
              if ((i.closesCodeBlock || r) && (n && r && !i.closesCodeBlock && t.push(i), n = !1, t.length > 0)) {
                let e = t.map(e => (0, u.serializeDescendant)(e.blockEntry[0])).join("\n"),
                  n = t[0],
                  i = n.lang;
                if (null != i && null != l.default.getLanguage(i)) {
                  let n = function(e, t) {
                    let n = "".concat(e, "-").concat(t),
                      l = v.get(n);
                    if (null != l) return l;
                    let i = s.default.highlight(t, e, !1);
                    if (null == i || i.illegal) return null;
                    let r = i.value.split("\n");
                    return v.set(n, r), r
                  }(e, i);
                  if (null != n && n.length === t.length) {
                    let e = [];
                    for (let l = 0; l < t.length; l++) {
                      let i;
                      let r = n[l].replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'"),
                        o = [],
                        s = 0,
                        a = 0;
                      for (; null != (i = C.exec(r));) {
                        let t = i.index + i[0].length,
                          n = i.index - a;
                        i.index > a && (e.length > 0 && o.push({
                          types: [...e],
                          start: s,
                          end: s + n
                        }), s += n), "</span>" === i[0] ? e.pop() : e.push(i[1]), a = t
                      }
                      if (e.length > 0) {
                        let t = r.length - a;
                        o.push({
                          types: [...e],
                          start: s,
                          end: s + t
                        })
                      }
                      t[l].hljsTypes = o
                    }
                  } else
                    for (let e = 0; e < t.length; e++) t[e].hljsTypes = null
                }
                t = []
              }
              n && t.push(i), i.opensCodeBlock && (n = !0)
            }
          }(t), t
        }(e);
        (function(e, t) {
          for (let n of t) {
            let [t, l] = n.blockEntry, i = function(e) {
              return e.isStyledCodeBlockLine || e.wasInCodeBlock ? {
                lang: e.lang,
                wasInCodeBlock: e.wasInCodeBlock,
                isInCodeBlock: e.isInCodeBlock,
                isStyledCodeBlockLine: e.isStyledCodeBlockLine,
                hljsTypes: e.hljsTypes
              } : null
            }(n);
            (null == t ? void 0 : t.codeBlockState) != i && d.SlateTransforms.setNodes(e, {
              codeBlockState: i
            }, {
              at: l
            })
          }
        })(e, t)
      })(e))
    }), n = c.EditorUtils.richValue(e)), t()
  }, e
}
let C = /(?:<span class="([^"]*)">)|(?:<\/span>)/g,
  T = {
    max: 1 / 0,
    maxAge: 1 * o.default.Millis.MINUTE,
    updateAgeOnGet: !0
  },
  v = new r(T);

function y(e, t) {
  let n = 0;
  for (let i of c.EditorUtils.nodes(e, {
      at: {
        anchor: {
          path: f.FIRST_TEXT_PATH,
          offset: 0
        },
        focus: t
      },
      mode: "lowest",
      match: e => c.TextUtils.isText(e)
    })) {
    var l;
    let e = i[0].text;
    c.PathUtils.equals(i[1], t.path) && (e = e.substring(0, t.offset));
    let r = e.match(/```/g);
    n += null !== (l = null == r ? void 0 : r.length) && void 0 !== l ? l : 0
  }
  return n % 2 != 0
}

function x(e) {
  if (null == e.selection) return !1;
  let t = c.RangeUtils.start(e.selection);
  return y(e, t)
}
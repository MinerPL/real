"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  },
  isPointInCodeBlock: function() {
    return T
  },
  hasOpenPlainTextCodeBlock: function() {
    return v
  }
}), n("222007"), n("70102"), n("424973"), n("781738");
var l = n("436443"),
  i = n("693566"),
  r = n.n(i),
  o = n("86256"),
  s = n("83800"),
  a = n("970153"),
  u = n("939563"),
  d = n("385887"),
  c = n("566819");
let f = new Set(["line"]),
  p = l.default.listLanguages(),
  m = {};
for (let e of p) {
  e = e.toLowerCase();
  let t = l.default.getLanguage(e);
  if (null == t) continue;
  let n = t.aliases;
  if (m[e] = e, null != n)
    for (let t of n) m[t.toLowerCase()] = e
}
let h = /^[a-z0-9_+\-.#]+$/,
  E = /^[a-z0-9_+\-.#]+$/i;
for (let e in m)
  if (null == e.match(h)) throw Error("Language name does not match regex: ".concat(e));

function S(e) {
  let {
    onChange: t
  } = e, n = null;
  return e.onChange = () => {
    d.EditorUtils.richValue(e) !== n && (s.HistoryUtils.withMergedEntry(e, () => {
      d.EditorUtils.withoutNormalizing(e, () => (function(e) {
        let t = function(e) {
          let t = [],
            n = null;
          for (let l of d.EditorUtils.blocks(e)) {
            let i = null != n && (n.isInCodeBlock || n.opensCodeBlock),
              r = null != n && (n.isStyledCodeBlockLine || n.opensCodeBlockOnOwnLine),
              o = null != n && (n.opensCodeBlock || !n.closesCodeBlock) ? n.lang : null;
            n = function(e, t, n, l, i) {
              var r;
              let o = function(e) {
                  let t;
                  let [n, l] = e;
                  if (!f.has(n.type)) return [];
                  let i = [],
                    r = /\\|```/g;
                  for (let e = 0; e < n.children.length; e++) {
                    let o = n.children[e];
                    if (d.TextUtils.isText(o))
                      for (r.lastIndex = 0; null != (t = r.exec(o.text));) {
                        if ("\\" === t[0]) {
                          r.lastIndex += 1;
                          continue
                        }
                        i.push({
                          path: d.PathUtils.child(l, e),
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
                let [t] = d.EditorUtils.node(e, a.path);
                u = t.text.substring(a.offset + 3)
              }
              let c = n && null != s,
                p = n && 0 === o.length,
                h = l && 0 === o.length,
                S = c ? o.slice(1) : o,
                g = S.length % 2 == 1,
                C = g && (null == u || "" === u || null != u.match(E)),
                T = C && null != u && null !== (r = m[u.toLowerCase()]) && void 0 !== r ? r : null;
              return {
                blockEntry: t,
                wasInCodeBlock: n,
                isInCodeBlock: p,
                isStyledCodeBlockLine: h,
                lang: g || c ? T : i,
                hljsTypes: null,
                closesCodeBlock: c,
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
                let e = t.map(e => (0, a.serializeDescendant)(e.blockEntry[0])).join("\n"),
                  n = t[0],
                  i = n.lang;
                if (null != i && null != l.default.getLanguage(i)) {
                  let n = function(e, t) {
                    let n = "".concat(e, "-").concat(t),
                      l = C.get(n);
                    if (null != l) return l;
                    let i = o.default.highlight(t, e, !1);
                    if (null == i || i.illegal) return null;
                    let r = i.value.split("\n");
                    return C.set(n, r), r
                  }(e, i);
                  if (null != n && n.length === t.length) {
                    let e = [];
                    for (let l = 0; l < t.length; l++) {
                      let i;
                      let r = n[l].replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'"),
                        o = [],
                        s = 0,
                        a = 0;
                      for (; null != (i = g.exec(r));) {
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
            (null == t ? void 0 : t.codeBlockState) != i && u.SlateTransforms.setNodes(e, {
              codeBlockState: i
            }, {
              at: l
            })
          }
        })(e, t)
      })(e))
    }), n = d.EditorUtils.richValue(e)), t()
  }, e
}
let g = /(?:<span class="([^"]*)">)|(?:<\/span>)/g,
  C = new r({
    max: 1 / 0,
    maxAge: 6e4,
    updateAgeOnGet: !0
  });

function T(e, t) {
  let n = 0;
  for (let i of d.EditorUtils.nodes(e, {
      at: {
        anchor: {
          path: c.FIRST_TEXT_PATH,
          offset: 0
        },
        focus: t
      },
      mode: "lowest",
      match: e => d.TextUtils.isText(e)
    })) {
    var l;
    let e = i[0].text;
    d.PathUtils.equals(i[1], t.path) && (e = e.substring(0, t.offset));
    let r = e.match(/```/g);
    n += null !== (l = null == r ? void 0 : r.length) && void 0 !== l ? l : 0
  }
  return n % 2 != 0
}

function v(e) {
  if (null == e.selection) return !1;
  let t = d.RangeUtils.start(e.selection);
  return T(e, t)
}
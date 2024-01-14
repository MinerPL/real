"use strict";

function n(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
      return Object.getOwnPropertyDescriptor(r, t).enumerable
    }))), n.forEach(function(e) {
      (function(t, e, r) {
        e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r
      })(t, e, r[e])
    })
  }
  return t
}
r("424973");
var i = r("258310"),
  o = r("706621"),
  a = r("117811"),
  u = r("768232"),
  s = r("839361"),
  c = r("935621"),
  l = r("568355"),
  f = r("707736"),
  p = r("646601"),
  h = r("639745"),
  d = f("draft_tree_data_support"),
  g = d ? u : a,
  y = p.List,
  v = p.Repeat;
t.exports = {
  insertAtomicBlock: function(t, e, r) {
    var a = t.getCurrentContent(),
      u = t.getSelection(),
      f = s.removeRange(a, u, "backward"),
      p = f.getSelectionAfter(),
      h = s.splitBlock(f, p),
      m = h.getSelectionAfter(),
      _ = s.setBlockType(h, m, "atomic"),
      b = o.create({
        entity: e
      }),
      S = {
        key: l(),
        type: "atomic",
        text: r,
        characterList: y(v(b, r.length))
      },
      w = {
        key: l(),
        type: "unstyled"
      };
    d && (S = n({}, S, {
      nextSibling: w.key
    }), w = n({}, w, {
      prevSibling: S.key
    }));
    var k = [new g(S), new g(w)],
      x = i.createFromArray(k),
      C = s.replaceWithFragment(_, m, x),
      E = C.merge({
        selectionBefore: u,
        selectionAfter: C.getSelectionAfter().set("hasFocus", !0)
      });
    return c.push(t, E, "insert-fragment")
  },
  moveAtomicBlock: function(t, e, r, n) {
    var i, o = t.getCurrentContent(),
      a = t.getSelection();
    if ("before" === n || "after" === n) {
      var u = o.getBlockForKey("before" === n ? r.getStartKey() : r.getEndKey());
      i = h(o, e, u, n)
    } else {
      var l = s.removeRange(o, r, "backward"),
        f = l.getSelectionAfter(),
        p = l.getBlockForKey(f.getFocusKey());
      if (0 === f.getStartOffset()) i = h(l, e, p, "before");
      else if (f.getEndOffset() === p.getLength()) i = h(l, e, p, "after");
      else {
        var d = s.splitBlock(l, f),
          g = d.getSelectionAfter(),
          y = d.getBlockForKey(g.getFocusKey());
        i = h(d, e, y, "before")
      }
    }
    var v = i.merge({
      selectionBefore: a,
      selectionAfter: i.getSelectionAfter().set("hasFocus", !0)
    });
    return c.push(t, v, "move-block")
  }
}
"use strict";
n.r(t), n.d(t, {
  SlateTransforms: function() {
    return s
  }
}), n("106442"), n("175143"), n("222007");
var l = n("987295"),
  i = n("640830"),
  r = n("385887"),
  o = n("566819");
let s = {
  ...l.Transforms,
  resetSelectionToStart(e) {
    l.Transforms.select(e, r.EditorUtils.start(e, []))
  },
  resetSelectionToEnd(e) {
    l.Transforms.select(e, r.EditorUtils.end(e, []))
  },
  delete(e, t) {
    let {
      at: n,
      distance: i,
      unit: o,
      reverse: s = !1,
      select: a = !1,
      bounds: u,
      voids: d
    } = t;
    if (null == n) {
      if (null == e.selection) return;
      n = e.selection
    }
    let [c, f] = r.RangeUtils.isRange(n) ? r.RangeUtils.edges(n) : r.EditorUtils.edges(e, n);
    if (null != i || null != o) {
      var p, m, h;
      if (s) {
        let t = null !== (p = r.EditorUtils.before(e, c, {
          distance: i,
          unit: o
        })) && void 0 !== p ? p : r.EditorUtils.start(e, []);
        if ("character" === o && (null != i ? i : 1) === 1 && r.PathUtils.equals(c.path, f.path)) {
          let n = r.EditorUtils.leaf(e, c.path),
            l = null != n ? n[0].text : "";
          l.length > 0 && null != l[l.length - 1].match(/[\u0E00-\u0E7F]/) && (t = null !== (m = r.EditorUtils.before(e, c, {
            distance: i,
            unit: "offset"
          })) && void 0 !== m ? m : r.EditorUtils.start(e, []))
        }
        c = t
      } else f = null !== (h = r.EditorUtils.after(e, f, {
        distance: i,
        unit: o
      })) && void 0 !== h ? h : r.EditorUtils.end(e, [])
    }
    if (null != u) {
      let [e, t] = r.RangeUtils.edges(u);
      r.PointUtils.isBefore(c, e) && (c = e), r.PointUtils.isAfter(f, t) && (f = t)
    }!r.PointUtils.equals(c, f) && (l.Transforms.delete(e, {
      at: {
        anchor: c,
        focus: f
      },
      hanging: !0,
      voids: d
    }), a && r.EditorUtils.hasPath(e, c.path) && l.Transforms.select(e, c))
  },
  textToText(e, t, n) {
    var i;
    let o = r.EditorUtils.getSelectionOverlap(e, n),
      [s, a] = r.RangeUtils.edges(n),
      d = null !== (i = r.EditorUtils.before(e, s)) && void 0 !== i ? i : r.EditorUtils.start(e, []),
      c = r.EditorUtils.after(e, a);
    r.RangeUtils.isExpanded(n) && l.Transforms.delete(e, {
      at: n,
      voids: !0
    }), l.Transforms.insertText(e, t, {
      at: d
    }), d = null != d ? d : r.EditorUtils.start(e, []), c = null != c ? c : r.EditorUtils.end(e, []), u(e, o, d, c, c)
  },
  textToVoid(e, t, n) {
    let i = r.EditorUtils.getSelectionOverlap(e, n),
      o = r.RangeUtils.start(n),
      s = r.PathUtils.next(o.path),
      a = {
        path: r.PathUtils.next(s),
        offset: 0
      };
    l.Transforms.delete(e, {
      at: n,
      voids: !0
    }), 0 === o.offset && l.Transforms.insertNodes(e, [{
      text: ""
    }], {
      at: o.path
    }), l.Transforms.insertNodes(e, [t], {
      at: o
    }), (!r.EditorUtils.hasPath(e, a.path) || !r.TextUtils.isText(r.EditorUtils.node(e, a.path)[0])) && l.Transforms.insertNodes(e, [{
      text: ""
    }], {
      at: a.path
    }), u(e, i, o, a, a)
  },
  textToInline(e, t, n) {
    let i = r.EditorUtils.getSelectionOverlap(e, n),
      o = t.children[t.children.length - 1],
      s = r.RangeUtils.start(n),
      a = r.PathUtils.next(s.path),
      d = {
        path: r.PathUtils.child(a, t.children.length - 1),
        offset: r.TextUtils.isText(o) ? o.text.length : 0
      };
    l.Transforms.delete(e, {
      at: n,
      voids: !0
    }), 0 === s.offset && l.Transforms.insertNodes(e, [{
      text: ""
    }], {
      at: s.path
    }), l.Transforms.insertNodes(e, [t], {
      at: s
    }), u(e, i, s, d, d)
  },
  voidToText(e, t, n) {
    var i;
    let o = r.EditorUtils.getSelectionOverlap(e, n),
      s = null !== (i = r.EditorUtils.before(e, n)) && void 0 !== i ? i : r.EditorUtils.start(e, []),
      a = {
        path: s.path,
        offset: s.offset + t.length
      };
    l.Transforms.delete(e, {
      at: n,
      voids: !0
    }), l.Transforms.insertText(e, t, {
      at: s
    }), u(e, o, s, s, a)
  },
  removeInline(e, t) {
    var n;
    let i = r.EditorUtils.getSelectionOverlap(e, t),
      o = null !== (n = r.EditorUtils.before(e, t)) && void 0 !== n ? n : r.EditorUtils.start(e, []);
    l.Transforms.delete(e, {
      at: t,
      voids: !0
    }), u(e, i, o, o, o)
  },
  removeInlineChildren(e, t) {
    let [n, i] = t, o = r.EditorUtils.getSelectionOverlap(e, i), s = {
      path: r.PathUtils.child(i, 0),
      offset: 0
    };
    r.EditorUtils.withoutNormalizing(e, () => {
      for (let t = n.children.length - 1; t >= 0; t--) l.Transforms.removeNodes(e, {
        at: r.PathUtils.child(i, t),
        voids: !0
      })
    }), u(e, o, null, s, null)
  },
  selectCommandOption(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      o = i.getCommandBlock(e);
    if (null != o)
      for (let i = 0; i < o[0].children.length; i++) {
        let s = o[0].children[i];
        if (r.NodeUtils.isType(s, "applicationCommandOption") && s.optionName === t) {
          n ? l.Transforms.select(e, [0, i]) : l.Transforms.select(e, r.EditorUtils.end(e, [0, i]));
          return
        }
      }
  },
  selectPreviousCommandOption(e) {
    let t = i.getCommandBlock(e);
    if (null == t) return;
    let n = null != e.selection ? e.selection.focus.path : r.EditorUtils.end(e, o.FIRST_BLOCK_PATH).path,
      s = i.getCurrentCommandOption(e),
      a = r.EditorUtils.previous(e, {
        at: n,
        match: e => e !== (null == s ? void 0 : s[0]) && r.NodeUtils.isType(e, "applicationCommandOption")
      });
    null != a ? l.Transforms.select(e, a[1]) : r.PathUtils.isAfter(n, o.FIRST_TEXT_PATH) && l.Transforms.select(e, r.EditorUtils.end(e, o.FIRST_TEXT_PATH))
  },
  selectNextCommandOption(e) {
    let t = i.getCommandBlock(e);
    if (null == t) return;
    let n = null != e.selection ? e.selection.focus.path : r.EditorUtils.start(e, o.FIRST_BLOCK_PATH).path,
      a = i.getCurrentCommandOption(e),
      u = r.EditorUtils.next(e, {
        at: n,
        match: e => e !== (null == a ? void 0 : a[0]) && r.NodeUtils.isType(e, "applicationCommandOption")
      });
    null != u ? l.Transforms.select(e, u[1]) : s.resetSelectionToEnd(e)
  },
  insertCommandOption(e, t) {
    s.resetSelectionToEnd(e), s.insertNodes(e, [{
      type: "applicationCommandOption",
      optionName: t.name,
      optionDisplayName: t.displayName,
      optionType: t.type,
      children: [{
        text: ""
      }]
    }])
  },
  keyboardMove(e, t) {
    let {
      reverse: n = !1,
      unit: i = "character",
      edge: o
    } = null != t ? t : {}, s = e.selection;
    if (null == s) return;
    if (void 0 === o && r.RangeUtils.isExpanded(s)) {
      l.Transforms.collapse(e, {
        edge: n ? "start" : "end"
      });
      return
    }
    let a = r.EditorUtils.leaf(e, s.anchor.path);
    if (null == a) return;
    let u = n ? r.EditorUtils.before : r.EditorUtils.after,
      d = s.focus;
    for (; null != d;) {
      let t = i;
      n || s.focus.offset !== a[0].text.length ? n && 0 === s.focus.offset && (t = "offset") : t = "offset";
      let l = u(e, d, {
        unit: t
      });
      if (null == l || r.PointUtils.equals(d, l)) {
        d = void 0;
        break
      }
      if (d = l, null == r.EditorUtils.getParentVoid(e, d)) break
    }
    null != d && ("focus" === o ? l.Transforms.setSelection(e, {
      focus: d
    }) : l.Transforms.setSelection(e, {
      focus: d,
      anchor: d
    }))
  }
};

function a(e, t, n, l, i) {
  switch (t) {
    case "start":
      return n;
    case "inside":
      return l;
    case "end":
      return i
  }
  return e
}

function u(e, t, n, l, i) {
  var r, o;
  if (null == t.anchor && null == t.focus) return;
  let u = a(null === (r = e.selection) || void 0 === r ? void 0 : r.anchor, t.anchor, n, l, i),
    d = a(null === (o = e.selection) || void 0 === o ? void 0 : o.focus, t.focus, n, l, i);
  if (null != u && null != d) s.select(e, {
    anchor: u,
    focus: d
  })
}
"use strict";
r("424973");

function n(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t
}
var i = r("183576"),
  o = r("212416"),
  a = r("439007"),
  u = r("455562"),
  s = r("646601"),
  c = s.OrderedSet,
  l = s.Record,
  f = s.Stack,
  p = l({
    allowUndo: !0,
    currentContent: null,
    decorator: null,
    directionMap: null,
    forceSelection: !1,
    inCompositionMode: !1,
    inlineStyleOverride: null,
    lastChangeType: null,
    nativelyRenderedContent: null,
    redoStack: f(),
    selection: null,
    treeMap: null,
    undoStack: f()
  }),
  h = function() {
    e.createEmpty = function(t) {
      return e.createWithContent(o.createFromText(""), t)
    }, e.createWithContent = function(t, r) {
      if (0 === t.getBlockMap().count()) return e.createEmpty(r);
      var n = t.getBlockMap().first().getKey();
      return e.create({
        currentContent: t,
        undoStack: f(),
        redoStack: f(),
        decorator: r || null,
        selection: u.createEmpty(n)
      })
    }, e.create = function(t) {
      var r = t.currentContent,
        i = t.decorator;
      return new e(new p(function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
            return Object.getOwnPropertyDescriptor(r, t).enumerable
          }))), i.forEach(function(e) {
            n(t, e, r[e])
          })
        }
        return t
      }({}, t, {
        treeMap: g(r, i),
        directionMap: a.getDirectionMap(r)
      })))
    }, e.set = function(t, r) {
      return new e(t.getImmutable().withMutations(function(e) {
        var n = e.get("decorator"),
          o = n;
        null === r.decorator ? o = null : r.decorator && (o = r.decorator);
        var a = r.currentContent || t.getCurrentContent();
        if (o !== n) {
          var u, s = e.get("treeMap");
          u = o && n ? function(t, e, r, n, o) {
            return r.merge(e.toSeq().filter(function(e) {
              return n.getDecorations(e, t) !== o.getDecorations(e, t)
            }).map(function(e) {
              return i.generate(t, e, n)
            }))
          }(a, a.getBlockMap(), s, o, n) : g(a, o), e.merge({
            decorator: o,
            treeMap: u,
            nativelyRenderedContent: null
          });
          return
        }
        a !== t.getCurrentContent() && e.set("treeMap", function(t, e, r, n) {
          var o = t.getCurrentContent().set("entityMap", r),
            a = o.getBlockMap();
          return t.getImmutable().get("treeMap").merge(e.toSeq().filter(function(t, e) {
            return t !== a.get(e)
          }).map(function(t) {
            return i.generate(o, t, n)
          }))
        }(t, a.getBlockMap(), a.getEntityMap(), o)), e.merge(r)
      }))
    };
    var t = e.prototype;

    function e(t) {
      n(this, "_immutable", void 0), this._immutable = t
    }
    return t.toJS = function() {
      return this.getImmutable().toJS()
    }, t.getAllowUndo = function() {
      return this.getImmutable().get("allowUndo")
    }, t.getCurrentContent = function() {
      return this.getImmutable().get("currentContent")
    }, t.getUndoStack = function() {
      return this.getImmutable().get("undoStack")
    }, t.getRedoStack = function() {
      return this.getImmutable().get("redoStack")
    }, t.getSelection = function() {
      return this.getImmutable().get("selection")
    }, t.getDecorator = function() {
      return this.getImmutable().get("decorator")
    }, t.isInCompositionMode = function() {
      return this.getImmutable().get("inCompositionMode")
    }, t.mustForceSelection = function() {
      return this.getImmutable().get("forceSelection")
    }, t.getNativelyRenderedContent = function() {
      return this.getImmutable().get("nativelyRenderedContent")
    }, t.getLastChangeType = function() {
      return this.getImmutable().get("lastChangeType")
    }, t.getInlineStyleOverride = function() {
      return this.getImmutable().get("inlineStyleOverride")
    }, e.setInlineStyleOverride = function(t, r) {
      return e.set(t, {
        inlineStyleOverride: r
      })
    }, t.getCurrentInlineStyle = function() {
      var t = this.getInlineStyleOverride();
      if (null != t) return t;
      var e = this.getCurrentContent(),
        r = this.getSelection();
      return r.isCollapsed() ? function(t, e) {
        var r = e.getStartKey(),
          n = e.getStartOffset(),
          i = t.getBlockForKey(r);
        return n > 0 ? i.getInlineStyleAt(n - 1) : i.getLength() ? i.getInlineStyleAt(0) : y(t, r)
      }(e, r) : function(t, e) {
        var r = e.getStartKey(),
          n = e.getStartOffset(),
          i = t.getBlockForKey(r);
        return n < i.getLength() ? i.getInlineStyleAt(n) : n > 0 ? i.getInlineStyleAt(n - 1) : y(t, r)
      }(e, r)
    }, t.getBlockTree = function(t) {
      return this.getImmutable().getIn(["treeMap", t])
    }, t.isSelectionAtStartOfContent = function() {
      var t = this.getCurrentContent().getBlockMap().first().getKey();
      return this.getSelection().hasEdgeWithin(t, 0, 0)
    }, t.isSelectionAtEndOfContent = function() {
      var t = this.getCurrentContent().getBlockMap().last(),
        e = t.getLength();
      return this.getSelection().hasEdgeWithin(t.getKey(), e, e)
    }, t.getDirectionMap = function() {
      return this.getImmutable().get("directionMap")
    }, e.acceptSelection = function(t, e) {
      return d(t, e, !1)
    }, e.forceSelection = function(t, e) {
      return !e.getHasFocus() && (e = e.set("hasFocus", !0)), d(t, e, !0)
    }, e.moveSelectionToEnd = function(t) {
      var r = t.getCurrentContent().getLastBlock(),
        n = r.getKey(),
        i = r.getLength();
      return e.acceptSelection(t, new u({
        anchorKey: n,
        anchorOffset: i,
        focusKey: n,
        focusOffset: i,
        isBackward: !1
      }))
    }, e.moveFocusToEnd = function(t) {
      var r = e.moveSelectionToEnd(t);
      return e.forceSelection(r, r.getSelection())
    }, e.push = function(t, r, n) {
      var i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
      if (t.getCurrentContent() === r) return t;
      var o = a.getDirectionMap(r, t.getDirectionMap());
      if (!t.getAllowUndo()) return e.set(t, {
        currentContent: r,
        directionMap: o,
        lastChangeType: n,
        selection: r.getSelectionAfter(),
        forceSelection: i,
        inlineStyleOverride: null
      });
      var u = t.getSelection(),
        s = t.getCurrentContent(),
        c = t.getUndoStack(),
        l = r;
      u !== s.getSelectionAfter() || function(t, e) {
        return e !== t.getLastChangeType() || "insert-characters" !== e && "backspace-character" !== e && "delete-character" !== e
      }(t, n) ? (c = c.push(s), l = l.set("selectionBefore", u)) : ("insert-characters" === n || "backspace-character" === n || "delete-character" === n) && (l = l.set("selectionBefore", s.getSelectionBefore()));
      var p = t.getInlineStyleOverride(); - 1 === ["adjust-depth", "change-block-type", "split-block"].indexOf(n) && (p = null);
      var h = {
        currentContent: l,
        directionMap: o,
        undoStack: c,
        redoStack: f(),
        lastChangeType: n,
        selection: r.getSelectionAfter(),
        forceSelection: i,
        inlineStyleOverride: p
      };
      return e.set(t, h)
    }, e.undo = function(t) {
      if (!t.getAllowUndo()) return t;
      var r = t.getUndoStack(),
        n = r.peek();
      if (!n) return t;
      var i = t.getCurrentContent(),
        o = a.getDirectionMap(n, t.getDirectionMap());
      return e.set(t, {
        currentContent: n,
        directionMap: o,
        undoStack: r.shift(),
        redoStack: t.getRedoStack().push(i),
        forceSelection: !0,
        inlineStyleOverride: null,
        lastChangeType: "undo",
        nativelyRenderedContent: null,
        selection: i.getSelectionBefore()
      })
    }, e.redo = function(t) {
      if (!t.getAllowUndo()) return t;
      var r = t.getRedoStack(),
        n = r.peek();
      if (!n) return t;
      var i = t.getCurrentContent(),
        o = a.getDirectionMap(n, t.getDirectionMap());
      return e.set(t, {
        currentContent: n,
        directionMap: o,
        undoStack: t.getUndoStack().push(i),
        redoStack: r.shift(),
        forceSelection: !0,
        inlineStyleOverride: null,
        lastChangeType: "redo",
        nativelyRenderedContent: null,
        selection: n.getSelectionAfter()
      })
    }, t.getImmutable = function() {
      return this._immutable
    }, e
  }();

function d(t, e, r) {
  return h.set(t, {
    selection: e,
    forceSelection: r,
    nativelyRenderedContent: null,
    inlineStyleOverride: null
  })
}

function g(t, e) {
  return t.getBlockMap().map(function(r) {
    return i.generate(t, r, e)
  }).toOrderedMap()
}

function y(t, e) {
  var r = t.getBlockMap().reverse().skipUntil(function(t, r) {
    return r === e
  }).skip(1).skipUntil(function(t, e) {
    return t.getLength()
  }).first();
  return r ? r.getInlineStyleAt(r.getLength() - 1) : c()
}
t.exports = h
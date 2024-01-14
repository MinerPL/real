"use strict";
r("424973"), r("860677");
var n = r("839361"),
  i = r("935621"),
  o = r("881854"),
  a = r("401816"),
  u = r("477768"),
  s = r("497205"),
  c = r("893147"),
  l = r("160026"),
  f = o.isBrowser("Firefox");

function p(t, e, r, o, a) {
  var u = n.replaceText(t.getCurrentContent(), t.getSelection(), e, r, o);
  return i.push(t, u, "insert-characters", a)
}
t.exports = function(t, e) {
  void 0 !== t._pendingStateFromBeforeInput && (t.update(t._pendingStateFromBeforeInput), t._pendingStateFromBeforeInput = void 0);
  var r = t._latestEditorState,
    n = e.data;
  if (n) {
    if (t.props.handleBeforeInput && u(t.props.handleBeforeInput(n, r, e.timeStamp))) {
      e.preventDefault();
      return
    }
    var o, h = r.getSelection(),
      d = h.getStartOffset(),
      g = h.getAnchorKey();
    if (!h.isCollapsed()) {
      e.preventDefault(), t.update(p(r, n, r.getCurrentInlineStyle(), a(r.getCurrentContent(), r.getSelection()), !0));
      return
    }
    var y = p(r, n, r.getCurrentInlineStyle(), a(r.getCurrentContent(), r.getSelection()), !1),
      v = !1;
    if (v = s(t._latestCommittedEditorState), !v) {
      var m = r.getBlockTree(g),
        _ = y.getBlockTree(g);
      v = m.size !== _.size || m.zip(_).some(function(t) {
        var e = t[0],
          r = t[1],
          i = e.get("start"),
          o = i + (i >= d ? n.length : 0),
          a = e.get("end"),
          u = a + (a >= d ? n.length : 0),
          s = r.get("start"),
          c = r.get("end"),
          l = r.get("decoratorKey");
        return e.get("decoratorKey") !== l || e.get("leaves").size !== r.get("leaves").size || o !== s || u !== c || null != l && c - s != a - i
      })
    }
    if (!v) {
      ;
      o = n, v = f && ("'" == o || "/" == o)
    }
    if (!v && (v = c(y.getDirectionMap()).get(g) !== c(r.getDirectionMap()).get(g)), v) {
      e.preventDefault(), y = i.set(y, {
        forceSelection: !0
      }), t.update(y);
      return
    }
    y = i.set(y, {
      nativelyRenderedContent: y.getCurrentContent()
    }), t._pendingStateFromBeforeInput = y, l(function() {
      void 0 !== t._pendingStateFromBeforeInput && (t.update(t._pendingStateFromBeforeInput), t._pendingStateFromBeforeInput = void 0)
    })
  }
}
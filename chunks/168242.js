"use strict";
r("424973");
var n = r("839361"),
  i = r("742609"),
  o = r("935621"),
  a = r("881854"),
  u = r("211383").notEmptyKey,
  s = r("817018"),
  c = r("65994"),
  l = r("893147"),
  f = a.isEngine("Gecko");
t.exports = function(t, e) {
  void 0 !== t._pendingStateFromBeforeInput && (t.update(t._pendingStateFromBeforeInput), t._pendingStateFromBeforeInput = void 0);
  var r, a, p, h, d = t.editor.ownerDocument.defaultView.getSelection(),
    g = d.anchorNode,
    y = d.isCollapsed;
  if (!((null == g ? void 0 : g.nodeType) !== Node.TEXT_NODE && (null == g ? void 0 : g.nodeType) !== Node.ELEMENT_NODE)) {
    if (g.nodeType === Node.TEXT_NODE && (null !== g.previousSibling || null !== g.nextSibling)) {
      var v = g.parentNode;
      g.nodeValue = v.textContent;
      for (var m = v.firstChild; null !== m; m = m.nextSibling) m !== g && v.removeChild(m)
    }
    var _ = g.textContent,
      b = t._latestEditorState,
      S = l(s(g)),
      w = i.decode(S),
      k = w.blockKey,
      x = w.decoratorKey,
      C = w.leafKey,
      E = b.getBlockTree(k).getIn([x, "leaves", C]),
      O = E.start,
      D = E.end,
      K = b.getCurrentContent(),
      T = K.getBlockForKey(k),
      M = T.getText().slice(O, D);
    if (_.endsWith("\n\n") && (_ = _.slice(0, -1)), _ === M) {
      var A = e.nativeEvent.inputType;
      if (A) {
        var I = function(t, e) {
          if ("deleteContentBackward" === t) return c(e);
          return e
        }(A, b);
        I !== b && (t.restoreEditorDOM(), t.update(I))
      }
      return
    }
    var B = b.getSelection(),
      L = B.merge({
        anchorOffset: O,
        focusOffset: D,
        isBackward: !1
      }),
      R = T.getEntityAt(O),
      N = u(R) ? K.getEntity(R) : null,
      F = "MUTABLE" === (null != N ? N.getMutability() : null),
      z = n.replaceText(K, L, _, T.getInlineStyleAt(O), F ? T.getEntityAt(O) : null);
    if (f) r = d.anchorOffset, h = (p = O + Math.min(r, a = d.focusOffset)) + Math.abs(r - a), r = p, a = h;
    else {
      var P = _.length - M.length;
      p = B.getStartOffset(), h = B.getEndOffset(), r = y ? h + P : p, a = h + P
    }
    var j = z.merge({
      selectionBefore: K.getSelectionAfter(),
      selectionAfter: B.merge({
        anchorOffset: r,
        focusOffset: a
      })
    });
    t.update(o.push(b, j, F ? "spellcheck-change" : "apply-entity"))
  }
}
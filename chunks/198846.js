"use strict";
r("424973");
var n = r("839361"),
  i = r("935621"),
  o = r("628366"),
  a = r("499071"),
  u = r("265943"),
  s = r("297183");
t.exports = function(t, e) {
  var r, c = t._latestEditorState,
    l = c.getSelection(),
    f = e.target;
  if (l.isCollapsed()) {
    e.preventDefault();
    return
  }
  s(f) && (r = u(o.getScrollParent(f)));
  var p = a(c);
  t.setClipboard(p), t.setMode("cut"), setTimeout(function() {
    t.restoreEditorDOM(r), t.exitCurrentMode(), t.update(function(t) {
      var e = n.removeRange(t.getCurrentContent(), t.getSelection(), "forward");
      return i.push(t, e, "remove-range")
    }(c))
  }, 0)
}
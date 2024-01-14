"use strict";
var r, a, o, i, l, u = n("289275"),
  s = n("362776"),
  c = n("453084").f,
  d = n("693858").set,
  f = n("772305"),
  p = n("708670"),
  h = n("381535"),
  m = n("970114"),
  y = n("111878"),
  MutationObserver = u.MutationObserver || u.WebKitMutationObserver,
  v = u.document,
  g = u.process,
  Promise = u.Promise,
  b = c(u, "queueMicrotask"),
  _ = b && b.value;
if (!_) {
  var k = new f,
    C = function() {
      var e, t;
      for (y && (e = g.domain) && e.exit(); t = k.get();) try {
        t()
      } catch (e) {
        throw k.head && r(), e
      }
      e && e.enter()
    };
  p || y || m || !MutationObserver || !v ? !h && Promise && Promise.resolve ? ((i = Promise.resolve(void 0)).constructor = Promise, l = s(i.then, i), r = function() {
    l(C)
  }) : y ? r = function() {
    g.nextTick(C)
  } : (d = s(d, u), r = function() {
    d(C)
  }) : (a = !0, o = v.createTextNode(""), new MutationObserver(C).observe(o, {
    characterData: !0
  }), r = function() {
    o.data = a = !a
  }), _ = function(e) {
    !k.head && r(), k.add(e)
  }
}
e.exports = _
"use strict";
var r = n("714919"),
  a = n("418689"),
  o = n("389316"),
  i = n("522552"),
  l = n("574756"),
  u = n("268540"),
  s = n("729853"),
  c = n("651780"),
  d = n("54704"),
  f = o && o.prototype;
if (r({
    target: "Promise",
    proto: !0,
    real: !0,
    forced: !!o && i(function() {
      f.finally.call({
        then: function() {}
      }, function() {})
    })
  }, {
    finally: function(e) {
      var t = s(this, l("Promise")),
        n = u(e);
      return this.then(n ? function(n) {
        return c(t, e()).then(function() {
          return n
        })
      } : e, n ? function(n) {
        return c(t, e()).then(function() {
          throw n
        })
      } : e)
    }
  }), !a && u(o)) {
  var p = l("Promise").prototype.finally;
  f.finally !== p && d(f, "finally", p, {
    unsafe: !0
  })
}
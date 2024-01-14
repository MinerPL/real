"use strict";
var r = n("859514"),
  i = n("868822"),
  o = n("727204"),
  a = n("379792"),
  s = n("952643"),
  c = n("585034");
r({
  target: "Promise",
  stat: !0,
  forced: n("683229")
}, {
  allSettled: function(e) {
    var t = this,
      n = a.f(t),
      r = n.resolve,
      u = n.reject,
      d = s(function() {
        var n = o(t.resolve),
          a = [],
          s = 0,
          u = 1;
        c(e, function(e) {
          var o = s++,
            c = !1;
          u++, i(n, t, e).then(function(e) {
            !c && (c = !0, a[o] = {
              status: "fulfilled",
              value: e
            }, --u || r(a))
          }, function(e) {
            !c && (c = !0, a[o] = {
              status: "rejected",
              reason: e
            }, --u || r(a))
          })
        }), --u || r(a)
      });
    return d.error && u(d.value), n.promise
  }
})
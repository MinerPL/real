"use strict";
var r = n("714919"),
  a = n("761300"),
  o = n("338867"),
  i = n("95536"),
  l = n("160474"),
  u = n("130170");
r({
  target: "Promise",
  stat: !0,
  forced: n("76950")
}, {
  all: function(e) {
    var t = this,
      n = i.f(t),
      r = n.resolve,
      s = n.reject,
      c = l(function() {
        var n = o(t.resolve),
          i = [],
          l = 0,
          c = 1;
        u(e, function(e) {
          var o = l++,
            u = !1;
          c++, a(n, t, e).then(function(e) {
            !u && (u = !0, i[o] = e, --c || r(i))
          }, s)
        }), --c || r(i)
      });
    return c.error && s(c.value), n.promise
  }
})
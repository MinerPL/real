"use strict";
var r = n("714919"),
  a = n("418689"),
  o = n("51494").CONSTRUCTOR,
  i = n("389316"),
  l = n("574756"),
  u = n("268540"),
  s = n("54704"),
  c = i && i.prototype;
if (r({
    target: "Promise",
    proto: !0,
    forced: o,
    real: !0
  }, {
    catch: function(e) {
      return this.then(void 0, e)
    }
  }), !a && u(i)) {
  var d = l("Promise").prototype.catch;
  c.catch !== d && s(c, "catch", d, {
    unsafe: !0
  })
}
t.exports = function(t) {
  var e = !0,
    s = !0,
    r = !1;
  if ("function" == typeof t) {
    try {
      t.call("f", function(t, s, r) {
        "object" != typeof r && (e = !1)
      }), t.call([null], function() {
        "use strict";
        s = "string" == typeof this
      }, "x")
    } catch (t) {
      r = !0
    }
    return !r && e && s
  }
  return !1
}
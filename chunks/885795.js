"use strict";
s("70102");
var r = s("966810"),
  i = SyntaxError,
  n = "object" == typeof StopIteration ? StopIteration : null;
t.exports = function(t) {
  if (!n) throw new i("this environment lacks StopIteration");
  r.set(t, "[[Done]]", !1);
  var e = {
    next: function() {
      var t = r.get(this, "[[Iterator]]"),
        e = r.get(t, "[[Done]]");
      try {
        return {
          done: e,
          value: e ? void 0 : t.next()
        }
      } catch (e) {
        if (r.set(t, "[[Done]]", !0), e !== n) throw e;
        return {
          done: !0,
          value: void 0
        }
      }
    }
  };
  return r.set(e, "[[Iterator]]", t), e
}
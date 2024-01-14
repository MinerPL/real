"use strict";
var r = n("714919"),
  a = n("95536");
r({
  target: "Promise",
  stat: !0
}, {
  withResolvers: function() {
    var e = a.f(this);
    return {
      promise: e.promise,
      resolve: e.resolve,
      reject: e.reject
    }
  }
})
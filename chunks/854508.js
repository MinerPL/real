"use strict";
var n = r("859514"),
  o = r("503486"),
  i = r("18563"),
  c = r("814026"),
  u = TypeError,
  s = Object.defineProperty,
  a = o.self !== o;
try {
  if (c) {
    var f = Object.getOwnPropertyDescriptor(o, "self");
    (a || !f || !f.get || !f.enumerable) && i(o, "self", {
      get: function() {
        return o
      },
      set: function(t) {
        if (this !== o) throw u("Illegal invocation");
        s(o, "self", {
          value: t,
          writable: !0,
          configurable: !0,
          enumerable: !0
        })
      },
      configurable: !0,
      enumerable: !0
    })
  } else n({
    global: !0,
    simple: !0,
    forced: a
  }, {
    self: o
  })
} catch (t) {}
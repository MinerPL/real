"use strict";
n.r(t), n.d(t, {
  reflectionCreate: function() {
    return o
  }
}), n("222007");
var r = n("804094"),
  a = n("54341");

function o(e) {
  let t = {};
  for (let n of (Object.defineProperty(t, a.MESSAGE_TYPE, {
      enumerable: !1,
      value: e
    }), e.fields)) {
    let e = n.localName;
    if (!n.opt) {
      if (n.oneof) t[n.oneof] = {
        oneofKind: void 0
      };
      else if (n.repeat) t[e] = [];
      else switch (n.kind) {
        case "scalar":
          t[e] = (0, r.reflectionScalarDefault)(n.T, n.L);
          break;
        case "enum":
          t[e] = 0;
          break;
        case "map":
          t[e] = {}
      }
    }
  }
  return t
}
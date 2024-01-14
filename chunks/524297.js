"use strict";
n.r(t), n.d(t, {
  createRPCCommand: function() {
    return s
  }
});
var a = n("61141");

function s(e, t) {
  var n;
  let {
    scope: s,
    handler: i
  } = t, l = {
    scope: s,
    handler: i
  }, r = null === (n = a.RPCCommandSchemas[e]) || void 0 === n ? void 0 : n.request, o = null;
  return null != r && (l.validation = function(e) {
    return null == o && (o = r(e)), o
  }), l
}
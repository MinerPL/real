"use strict";
var r = s("37549")("%TypeError%"),
  i = s("737891"),
  n = s("504187"),
  c = s("971043"),
  o = s("701222"),
  f = s("604050"),
  u = s("300344"),
  a = s("6943"),
  d = s("552302"),
  p = s("865435");
t.exports = function(t, e, s) {
  if ("Object" !== p(t)) throw new r("Assertion failed: Type(O) is not Object");
  if (!u(e)) throw new r("Assertion failed: IsPropertyKey(P) is not true");
  var b = i({
    Type: p,
    IsDataDescriptor: f,
    IsAccessorDescriptor: o
  }, s) ? s : d(s);
  if (!i({
      Type: p,
      IsDataDescriptor: f,
      IsAccessorDescriptor: o
    }, b)) throw new r("Assertion failed: Desc is not a valid Property Descriptor");
  return n(f, a, c, t, e, b)
}
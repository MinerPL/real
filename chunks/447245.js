var Symbol = n("330206"),
  r = Object.prototype,
  i = r.hasOwnProperty,
  o = r.toString,
  a = Symbol ? Symbol.toStringTag : void 0;
t.exports = function(t) {
  var e = i.call(t, a),
    n = t[a];
  try {
    t[a] = void 0;
    var r = !0
  } catch (t) {}
  var u = o.call(t);
  return r && (e ? t[a] = n : delete t[a]), u
}
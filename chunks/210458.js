var n = r("293300"),
  o = r("694496"),
  a = r("747185");
e.exports = function(e) {
  var t = o(e);
  return 1 == t.length && t[0][2] ? a(t[0][0], t[0][1]) : function(r) {
    return r === e || n(r, e, t)
  }
}
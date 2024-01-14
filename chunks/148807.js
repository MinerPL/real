var n = r("543066"),
  o = 1 / 0;
e.exports = function(e) {
  if ("string" == typeof e || n(e)) return e;
  var t = e + "";
  return "0" == t && 1 / e == -o ? "-0" : t
}
s("70102");
var r = s("483366"),
  i = s("285162");
t.exports = function(t, e, s) {
  var n = !0,
    c = !0;
  if ("function" != typeof t) throw TypeError("Expected a function");
  return i(s) && (n = "leading" in s ? !!s.leading : n, c = "trailing" in s ? !!s.trailing : c), r(t, e, {
    leading: n,
    maxWait: e,
    trailing: c
  })
}
r("424973");
var n = r("952133"),
  o = r("752166"),
  a = r("790686"),
  i = Object.prototype.hasOwnProperty;
e.exports = function(e) {
  if (!n(e)) return a(e);
  var t = o(e),
    r = [];
  for (var u in e) !("constructor" == u && (t || !i.call(e, u))) && r.push(u);
  return r
}
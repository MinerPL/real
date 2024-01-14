var e = n("843879"),
  o = n("169160"),
  i = n("927794"),
  u = n("979334"),
  a = n("898346");

function c(t) {
  var r = -1,
    n = null == t ? 0 : t.length;
  for (this.clear(); ++r < n;) {
    var e = t[r];
    this.set(e[0], e[1])
  }
}
c.prototype.clear = e, c.prototype.delete = o, c.prototype.get = i, c.prototype.has = u, c.prototype.set = a, t.exports = c
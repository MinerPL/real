var e = n("74590");
t.exports = function(t, r) {
  var n = e(this, t),
    o = n.size;
  return n.set(t, r), this.size += n.size == o ? 0 : 1, this
}
var r = s("446825").Buffer;
t.exports = function(t, e) {
  for (var s = Math.min(t.length, e.length), i = new r(s), n = 0; n < s; ++n) i[n] = t[n] ^ e[n];
  return i
}
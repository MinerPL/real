t.exports = function(t, e, s) {
  switch (s.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, s[0]);
    case 2:
      return t.call(e, s[0], s[1]);
    case 3:
      return t.call(e, s[0], s[1], s[2])
  }
  return t.apply(e, s)
}
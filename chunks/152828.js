var e = "\ud800-\udfff",
  r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
  f = "\ud83c[\udffb-\udfff]",
  o = "[^" + e + "]",
  i = "(?:\ud83c[\udde6-\uddff]){2}",
  c = "[\ud800-\udbff][\udc00-\udfff]",
  a = "(?:" + r + "|" + f + ")?",
  d = "[\\ufe0e\\ufe0f]?",
  x = "(?:\\u200d(?:" + [o, i, c].join("|") + ")" + d + a + ")*",
  s = RegExp(f + "(?=" + f + ")|" + ("(?:" + [o + r + "?", r, i, c, "[" + e + "]"].join("|") + ")") + (d + a + x), "g");
t.exports = function(t) {
  return t.match(s) || []
}
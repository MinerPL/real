var e = "\ud800-\udfff",
  r = "\\u2700-\\u27bf",
  f = "a-z\\xdf-\\xf6\\xf8-\\xff",
  o = "A-Z\\xc0-\\xd6\\xd8-\\xde",
  i = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
  c = "['’]",
  a = "[" + i + "]",
  d = "[" + f + "]",
  x = "[^" + e + i + "\\d+" + r + f + o + "]",
  s = "(?:\ud83c[\udde6-\uddff]){2}",
  p = "[\ud800-\udbff][\udc00-\udfff]",
  v = "[" + o + "]",
  l = "(?:" + d + "|" + x + ")",
  g = "(?:" + c + "(?:d|ll|m|re|s|t|ve))?",
  b = "(?:" + c + "(?:D|LL|M|RE|S|T|VE))?",
  h = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\ud83c[\udffb-\udfff])?",
  j = "[\\ufe0e\\ufe0f]?",
  y = "(?:\\u200d(?:" + ["[^" + e + "]", s, p].join("|") + ")" + j + h + ")*",
  m = "(?:" + ["[" + r + "]", s, p].join("|") + ")" + (j + h + y),
  E = RegExp([v + "?" + d + "+" + g + "(?=" + [a, v, "$"].join("|") + ")", "(?:" + v + "|" + x + ")+" + b + "(?=" + [a, v + l, "$"].join("|") + ")", v + "?" + l + "+" + g, v + "+" + b, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", m].join("|"), "g");
t.exports = function(t) {
  return t.match(E) || []
}
u("781738");
var e = u("954328"),
  r = u("890305"),
  f = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
  o = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
t.exports = function(t) {
  return (t = r(t)) && t.replace(f, e).replace(o, "")
}
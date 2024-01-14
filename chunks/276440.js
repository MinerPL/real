t = n.nmd(t);
var e = n("447414"),
  o = "object" == typeof r && r && !r.nodeType && r,
  i = o && "object" == typeof t && t && !t.nodeType && t,
  u = i && i.exports === o && e.process,
  a = function() {
    try {
      var t = i && i.require && i.require("util").types;
      if (t) return t;
      return u && u.binding && u.binding("util")
    } catch (t) {}
  }();
t.exports = a
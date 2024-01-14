e = r.nmd(e);
"use strict";
r("781738");
void 0 !== e && (e.exports = function(e) {
  var t = void 0;
  t = "string" == typeof e ? [e] : e.raw;
  for (var r = "", a = 0; a < t.length; a++) r += t[a].replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`"), a < (arguments.length <= 1 ? 0 : arguments.length - 1) && (r += arguments.length <= a + 1 ? void 0 : arguments[a + 1]);
  var n = r.split("\n"),
    s = null;
  return n.forEach(function(e) {
    var t = e.match(/^(\s+)\S+/);
    if (t) {
      var r = t[1].length;
      s = s ? Math.min(s, r) : r
    }
  }), null !== s && (r = n.map(function(e) {
    return " " === e[0] ? e.slice(s) : e
  }).join("\n")), (r = r.trim()).replace(/\\n/g, "\n")
})
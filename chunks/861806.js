"use strict";
n("854508"), n("424973"), e.exports = function(e, t, r, o, a, i) {
  var s, c, l, u, d = [],
    p = r.type;
  if ("keypress" === p && !(r.code && "Arrow" === r.code.slice(0, 5)) && (this.callbacks["any-character"] || []).forEach(function(e) {
      d.push(e)
    }), !this.callbacks[e]) return d;
  for (l = n("275750"), "keyup" === p && l(e) && (t = [e]), s = 0; s < this.callbacks[e].length; ++s) {
    if (c = this.callbacks[e][s], !!o || !c.seq || this.sequenceLevels[c.seq] === c.level) {
      if (p === c.action && (u = n("164788"), "keypress" === p && !r.metaKey && !r.ctrlKey || u(t, c.modifiers))) {
        var f = !o && c.combo === a,
          m = o && c.seq === o && c.level === i;
        (f || m) && this.callbacks[e].splice(s, 1), d.push(c)
      }
    }
  }
  return d
}
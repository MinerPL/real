"use strict";
n("854508"), n("781738"), e.exports = function(e, t, n, r, o) {
  this.directMap[e + ":" + n] = t;
  var a, i = (e = e.replace(/\s+/g, " ")).split(" ");
  if (i.length > 1) {
    this.bindSequence(e, i, t, n);
    return
  }
  a = this.getKeyInfo(e, n), this.callbacks[a.key] = this.callbacks[a.key] || [], this.getMatches(a.key, a.modifiers, {
    type: a.action
  }, r, e, o), this.callbacks[a.key][r ? "unshift" : "push"]({
    callback: t,
    modifiers: a.modifiers,
    action: a.action,
    seq: r,
    level: o,
    combo: e
  })
}
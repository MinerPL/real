"use strict";
var n = r("706621"),
  i = r("646601").List;
t.exports = function(t, e) {
  return i(t.map(function(t, r) {
    var i = e[r];
    return n.create({
      style: t,
      entity: i
    })
  }))
}
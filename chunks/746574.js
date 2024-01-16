"use strict";
n.r(t), n.d(t, {
  moveItemFromTo: function() {
    return o
  },
  default: function() {
    return i
  }
}), n("424973"), n("222007");
var l = n("917351"),
  r = n.n(l),
  a = n("605250");
let s = new a.default("DragAndDropUtils");

function u(e) {
  let {
    oldOrdering: t,
    newOrdering: n,
    idGetter: l,
    existingPositionGetter: r,
    ascending: a = !0
  } = e, u = n.length;
  if (t.length !== u) return s.warn("Arrays are not of the same length!", t, n), [];
  let o = t.map(l).sort().join(":"),
    i = n.map(l).sort().join(":");
  if (o !== i) return s.warn("Object IDs in the old ordering and the new ordering are not the same.", o, i), [];
  let c = {};
  for (let e = 0; e < u; e++) c[l(t[e])] = r(t[e]);
  let d = [];
  for (let e = 0; e < u; e++) {
    let t = l(n[e]),
      s = c[t],
      o = a ? e : u - 1 - e;
    (s !== o || r(n[e]) !== o) && d.push({
      id: t,
      position: o
    })
  }
  return !a && d.reverse(), d
}

function o(e, t, n) {
  let l = e[t],
    r = [...e];
  return r.splice(t, 1), r.splice(n, 0, l), r
}
var i = {
  moveItemFromTo: o,
  calculatePositionDeltas: u,
  getPositionUpdates: function(e) {
    let {
      objectArray: t,
      fromPosition: n,
      toPosition: l,
      idGetter: a,
      existingPositionGetter: s,
      ascending: i = !0
    } = e;
    !Array.isArray(t) && (t = r.values(t));
    let c = o(t, n, l);
    return u({
      oldOrdering: t,
      newOrdering: c,
      idGetter: a,
      existingPositionGetter: s,
      ascending: i
    })
  }
}
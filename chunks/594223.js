"use strict";
r.r(e), r.d(e, {
  buildPoslist: function() {
    return a
  }
}), r("424973");
var n = r("737912"),
  i = r("871111");

function a(t, e, r, a, o, s) {
  for (var u = [], d = 0; d < t.length; d++) {
    var y = void 0,
      c = void 0,
      h = t[d];
    h < 0 ? (y = Math.floor(h / e.length), c = (0, i.pymod)(h, e.length)) : (y = Math.floor((h - 1) / e.length), c = (0, i.pymod)(h - 1, e.length));
    for (var l = [], f = r; f < a; f++) {
      var p = s[f];
      (0, i.isPresent)(p) && l.push(p)
    }
    var m = void 0;
    m = y < 0 ? l.slice(y)[0] : l[y];
    var b = e[c],
      v = (0, n.fromOrdinal)(o.yearordinal + m),
      w = (0, n.combine)(v, b);
    !(0, i.includes)(u, w) && u.push(w)
  }
  return (0, n.sort)(u), u
}
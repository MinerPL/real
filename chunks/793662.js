"use strict";
var r = n("761300");
e.exports = function(e, t, n) {
  for (var a, o, i = n ? e : e.iterator, l = e.next; !(a = r(l, i)).done;)
    if (void 0 !== (o = t(a.value))) return o
}
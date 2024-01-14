"use strict";

function n(t, e) {
  return !!e && (t === e.documentElement || t === e.body)
}
t.exports = {
  getTop: function(t) {
    var e = t.ownerDocument;
    return n(t, e) ? e.body.scrollTop || e.documentElement.scrollTop : t.scrollTop
  },
  setTop: function(t, e) {
    var r = t.ownerDocument;
    n(t, r) ? r.body.scrollTop = r.documentElement.scrollTop = e : t.scrollTop = e
  },
  getLeft: function(t) {
    var e = t.ownerDocument;
    return n(t, e) ? e.body.scrollLeft || e.documentElement.scrollLeft : t.scrollLeft
  },
  setLeft: function(t, e) {
    var r = t.ownerDocument;
    n(t, r) ? r.body.scrollLeft = r.documentElement.scrollLeft = e : t.scrollLeft = e
  }
}
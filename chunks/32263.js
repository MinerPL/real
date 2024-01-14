"use strict";
r.r(t), r.d(t, {
  default: function() {
    return n
  }
});
var n = function() {
  var e = function(e, t) {
    return e.length === t.length ? e > t ? 1 : -1 : e.length - t.length
  };
  return {
    onProcessStyle: function(t, r) {
      if ("style" !== r.type) return t;
      for (var n = {}, i = Object.keys(t).sort(e), o = 0; o < i.length; o++) n[i[o]] = t[i[o]];
      return n
    }
  }
}
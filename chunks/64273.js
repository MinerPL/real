"use strict";

function r(e) {
  return function(t, n) {
    var r;
    if ("formatting" === (null != n && n.context ? String(n.context) : "standalone") && e.formattingValues) {
      var a = e.defaultFormattingWidth || e.defaultWidth,
        o = null != n && n.width ? String(n.width) : a;
      r = e.formattingValues[o] || e.formattingValues[a]
    } else {
      var i = e.defaultWidth,
        s = null != n && n.width ? String(n.width) : e.defaultWidth;
      r = e.values[s] || e.values[i]
    }
    return r[e.argumentCallback ? e.argumentCallback(t) : t]
  }
}
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007")
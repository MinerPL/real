"use strict";
r.r(t), r.d(t, {
  default: function() {
    return s
  }
});
var n = /;\n/,
  i = function(e) {
    for (var t = {}, r = e.split(n), i = 0; i < r.length; i++) {
      var o = (r[i] || "").trim();
      if (!!o) {
        var s = o.indexOf(":");
        if (-1 !== s) {
          var a = o.substr(0, s).trim(),
            u = o.substr(s + 1).trim();
          t[a] = u
        }
      }
    }
    return t
  },
  o = function(e) {
    "string" == typeof e.style && (e.style = i(e.style))
  },
  s = function() {
    return {
      onProcessRule: o
    }
  }
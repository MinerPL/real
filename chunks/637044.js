"use strict";
var r = n("714919"),
  a = n("574756"),
  o = n("522552"),
  i = n("289011"),
  l = n("723786"),
  u = n("243889"),
  URL = a("URL");
r({
  target: "URL",
  stat: !0,
  forced: !(u && o(function() {
    URL.canParse()
  }))
}, {
  canParse: function(e) {
    var t = i(arguments.length, 1),
      n = l(e),
      r = t < 2 || void 0 === arguments[1] ? void 0 : l(arguments[1]);
    try {
      return new URL(n, r), !0
    } catch (e) {
      return !1
    }
  }
})
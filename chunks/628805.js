"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("394846"),
  s = n("446674"),
  i = n("913144");
let l = !1;
class r extends s.default.Store {
  getIsOpen() {
    return !a.isMobile || l
  }
}
r.displayName = "MobileWebSidebarStore";
var o = new r(i.default, {
  MOBILE_WEB_SIDEBAR_OPEN: function() {
    l = !0
  },
  MOBILE_WEB_SIDEBAR_CLOSE: function() {
    l = !1
  }
})
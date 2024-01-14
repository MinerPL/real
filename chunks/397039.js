"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("913144"),
  s = {
    closeSidebar() {
      a.default.dispatch({
        type: "MOBILE_WEB_SIDEBAR_CLOSE"
      })
    },
    openSidebar() {
      a.default.dispatch({
        type: "MOBILE_WEB_SIDEBAR_OPEN"
      })
    }
  }
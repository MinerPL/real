"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("70102");
var i = n("446674"),
  o = n("913144");
let l = null;
class a extends i.default.Store {
  getCurrentPath() {
    return null != l ? l.pathname : null
  }
  getCurrentRoute() {
    return function(e) {
      let t = null != e && null != e.search ? e.search : "";
      return null != e ? "".concat(e.pathname).concat(t) : null
    }(l)
  }
  reset() {
    throw Error("Should not reset the store this way outside of a test environment")
  }
}
a.displayName = "ApplicationStoreLocationStore";
var u = new a(o.default, {
  APPLICATION_STORE_LOCATION_CHANGE: function(e) {
    let {
      location: t
    } = e;
    l = {
      ...t
    }
  },
  APPLICATION_STORE_RESET_NAVIGATION: function() {
    l = null
  }
})
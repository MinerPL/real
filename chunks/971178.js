"use strict";
s.r(t), s.d(t, {
  updateLocation: function() {
    return n
  }
});
var a = s("913144");

function n(e) {
  a.default.wait(() => a.default.dispatch({
    type: "APPLICATION_STORE_LOCATION_CHANGE",
    location: e
  }))
}
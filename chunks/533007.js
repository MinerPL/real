"use strict";
n.r(t), n.d(t, {
  setDevice: function() {
    return s
  },
  ignoreDevice: function() {
    return i
  },
  neverShowModal: function() {
    return d
  }
});
var a = n("913144");

function s(e, t, n) {
  a.default.dispatch({
    type: "CONNECTED_DEVICE_SET",
    displayName: e,
    connectedDevicePreference: t,
    location: n
  })
}

function i(e) {
  a.default.dispatch({
    type: "CONNECTED_DEVICE_IGNORE",
    displayName: e
  })
}

function d() {
  a.default.dispatch({
    type: "CONNECTED_DEVICE_NEVER_SHOW_MODAL"
  })
}
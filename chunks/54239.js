"use strict";
n.r(t), n.d(t, {
  pushLayer: function() {
    return i
  },
  popLayer: function() {
    return r
  },
  popAllLayers: function() {
    return a
  }
});
var s = n("913144");

function i(e) {
  s.default.dispatch({
    type: "LAYER_PUSH",
    component: e
  })
}

function r() {
  s.default.dispatch({
    type: "LAYER_POP"
  })
}

function a() {
  s.default.dispatch({
    type: "LAYER_POP_ALL"
  })
}
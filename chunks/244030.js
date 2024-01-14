"use strict";
n.r(t), n.d(t, {
  show: function() {
    return o
  },
  hide: function() {
    return l
  }
});
var i = n("913144");

function o() {
  i.default.dispatch({
    type: "SHOW_KEYBOARD_SHORTCUTS"
  })
}

function l() {
  i.default.dispatch({
    type: "HIDE_KEYBOARD_SHORTCUTS"
  })
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("781738");
var r = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};

function a(e) {
  return e.replace(/left|right|bottom|top/g, function(e) {
    return r[e]
  })
}
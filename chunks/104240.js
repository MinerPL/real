"use strict";

function i(e) {
  let t = e.getContext("2d");
  return null == t ? null : {
    render: e => {
      t.putImageData(e, 0, 0)
    }
  }
}
n.r(t), n.d(t, {
  initRenderingContext2D: function() {
    return i
  }
})
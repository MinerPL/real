"use strict";
n.r(t), n.d(t, {
  setRtcLogMarker: function() {
    return l
  }
});
var a = n("913144");

function l() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
  console.log("[callscope] Issue marker pressed."), a.default.dispatch({
    type: "RTC_LOG_MARKER",
    marker: e
  })
}
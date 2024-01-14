"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
});
var a = s("913144"),
  n = {
    startSpeedTest() {
      a.default.dispatch({
        type: "RTC_SPEED_TEST_START_TEST"
      })
    },
    stopSpeedTest() {
      a.default.dispatch({
        type: "RTC_SPEED_TEST_STOP_TEST"
      })
    }
  }
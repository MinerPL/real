"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var i = n("913144"),
  a = {
    startTyping(e) {
      i.default.dispatch({
        type: "TYPING_START_LOCAL",
        channelId: e
      })
    },
    stopTyping(e) {
      i.default.dispatch({
        type: "TYPING_STOP_LOCAL",
        channelId: e
      })
    }
  }
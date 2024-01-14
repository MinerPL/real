"use strict";
n.r(t), n.d(t, {
  removeAutomodMessageNotice: function() {
    return a
  }
});
var s = n("913144");

function a(e) {
  s.default.dispatch({
    type: "REMOVE_AUTOMOD_MESSAGE_NOTICE",
    messageId: e
  })
}
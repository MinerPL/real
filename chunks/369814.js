"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var i = n("748820");

function a(e) {
  return {
    channelId: e,
    sessionId: (0, i.v4)()
  }
}
var l = new class e {
  getForumChannelSessionId(e) {
    return null == this.session && (this.session = a(e)), this.session.channelId !== e && (this.session = a(e)), this.session.sessionId
  }
}
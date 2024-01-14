"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var l = n("913144"),
  a = n("970728"),
  s = n("883029"),
  i = {
    acceptInvite(e) {
      let t = a.default.getInviteContext("Desktop Invite Modal", e);
      a.default.acceptInvite({
        inviteKey: e.code,
        context: t,
        callback: e => {
          null != e && null != e.guild && null != e.channel && !__OVERLAY__ && a.default.transitionToInvite(e)
        }
      }).then(() => this.close(), e => {
        l.default.dispatch({
          type: "INVITE_MODAL_ERROR",
          message: (0, s.getInviteError)(e.code)
        })
      })
    },
    close() {
      l.default.dispatch({
        type: "INVITE_MODAL_CLOSE"
      })
    }
  }
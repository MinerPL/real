"use strict";
n.r(t), n.d(t, {
  JUMP_TO_FIRST_UNREAD: function() {
    return a
  }
});
var i = n("819689"),
  o = n("660478"),
  l = n("18494");
let a = {
  binds: ["shift+pageup"],
  comboKeysBindGlobal: !0,
  action() {
    let e = l.default.getChannelId();
    if (null != e) {
      let t = o.default.ackMessageId(e);
      null != t && o.default.getOldestUnreadTimestamp(e) > 0 && i.default.jumpToMessage({
        channelId: e,
        messageId: t,
        offset: 1,
        context: "Keyboard Shortcut"
      })
    }
    return !1
  }
}
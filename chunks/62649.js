"use strict";
E.r(_), E.d(_, {
  default: function() {
    return i
  }
}), E("222007");
var t = E("689988"),
  o = E("42203"),
  n = E("612278");
class r extends t.default {
  handleChannelPreload(e) {
    let {
      channelId: _
    } = e, E = o.default.getChannel(_);
    null != E && E.isForumLikeChannel() && (0, n.preloadForumThreads)(E)
  }
  constructor(...e) {
    super(...e), this.actions = {
      CHANNEL_PRELOAD: this.handleChannelPreload
    }
  }
}
var i = new r
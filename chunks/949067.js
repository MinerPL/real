"use strict";
n.r(t), n.d(t, {
  useLongestChannelMessageBeforeReply: function() {
    return l
  }
}), n("222007");
var s = n("446674"),
  a = n("377253");

function l(e, t) {
  return (0, s.useStateFromStores)([a.default], () => {
    if (null == t) return;
    let n = a.default.getMessages(e),
      s = n.findOldest(e => e.author.id === t);
    if (null == s) return;
    let l = n.toArray();
    for (let e of l) {
      if (e.author.id !== t) break;
      e.content.length > (null == s ? void 0 : s.content.length) && (s = e)
    }
    return s
  }, [e, t])
}
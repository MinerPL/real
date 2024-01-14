"use strict";
n.r(t), n.d(t, {
  useMessageRemindersLoader: function() {
    return u
  }
}), n("222007");
var l = n("884691"),
  a = n("446674"),
  s = n("819689"),
  i = n("42203"),
  r = n("377253"),
  o = n("931318");

function u(e) {
  let t = (0, a.useStateFromStoresArray)([i.default, r.default], () => e.filter(e => null != i.default.getChannel(e.channelId)).map(e => r.default.getMessage(e.channelId, e.messageId)).filter(e => null != e)),
    n = e.filter(e => null == r.default.getMessage(e.channelId, e.messageId)),
    [u, d] = l.useState(0 === n.length);
  return l.useEffect(() => {
    (0, o.fetchAndUpdateSavedMessages)()
  }, []), l.useEffect(() => {
    !u && (n.forEach(e => {
      try {
        s.default.fetchMessages({
          channelId: e.channelId,
          limit: 1,
          jump: {
            messageId: e.messageId,
            flash: !1,
            offset: 1
          }
        })
      } catch {}
    }), d(!0))
  }, [n, u]), t
}
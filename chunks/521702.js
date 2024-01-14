"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("884691"),
  s = n("446674"),
  i = n("42203"),
  l = n("697218"),
  r = n("460929"),
  o = n("486503");

function u() {
  let e = (0, s.useStateFromStores)([i.default], () => i.default.getPrivateChannelsVersion()),
    t = (0, s.useStateFromStoresArray)([i.default, o.default], () => {
      let e = i.default.getMutablePrivateChannels(),
        t = Array.from(o.default.getSpamChannelIds()).map(t => e[t]).filter(e => null != e);
      return (0, r.sortChannelIds)(t)
    }, [e]),
    n = (0, s.useStateFromStoresObject)([l.default], () => {
      let e = {};
      return t.forEach(t => {
        let n = l.default.getUser(t.recipients[0]);
        null != n && (e[t.id] = n)
      }), e
    }, [t]),
    u = a.useMemo(() => t.map(e => ({
      channel: e,
      user: n[e.id]
    })), [t, n]);
  return u
}
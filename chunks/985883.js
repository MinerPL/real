"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("884691"),
  l = n("841098"),
  a = n("845579"),
  i = n("209346"),
  r = n("641126"),
  o = n("849197"),
  u = n("905206"),
  d = n("973799");

function c(e, t) {
  var n;
  let c = (0, o.useInteractivePollMessage)(e),
    f = (0, r.useChannelPollInteractions)(c.getChannelId()),
    E = f[c.id],
    _ = (0, d.default)(null === (n = c.poll) || void 0 === n ? void 0 : n.expiry),
    T = a.AnimateEmoji.useSetting(),
    I = (0, i.useUserEligibleForPolls)("poll_message_data"),
    m = (0, l.default)(),
    N = null != t ? t : m;
  return s.useMemo(() => (0, u.default)(c, I, E, {
    animateEmoji: T,
    theme: N,
    formattedExpirationLabel: _
  }), [T, c, E, _, N, I])
}
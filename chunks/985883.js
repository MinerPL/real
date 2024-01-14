"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("884691"),
  s = n("841098"),
  l = n("845579"),
  i = n("209346"),
  r = n("641126"),
  o = n("849197"),
  u = n("905206"),
  d = n("973799");

function c(e, t) {
  var n;
  let c = (0, o.useInteractivePollMessage)(e),
    f = (0, r.useChannelPollInteractions)(c.getChannelId()),
    m = f[c.id],
    E = (0, d.default)(null === (n = c.poll) || void 0 === n ? void 0 : n.expiry),
    _ = l.AnimateEmoji.useSetting(),
    h = (0, i.useUserEligibleForPolls)("poll_message_data"),
    p = (0, s.default)(),
    I = null != t ? t : p;
  return a.useMemo(() => (0, u.default)(c, h, m, {
    animateEmoji: _,
    theme: I,
    formattedExpirationLabel: E
  }), [_, c, m, E, I, h])
}
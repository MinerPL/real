"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var s = n("37983"),
  l = n("884691"),
  a = n("446674"),
  i = n("305961"),
  r = n("105017"),
  o = n("568734"),
  u = n("843257"),
  d = n("531034"),
  c = n("49111");

function f(e) {
  var t, n;
  let {
    channel: f,
    message: E
  } = e, _ = null !== (n = null === (t = E.roleSubscriptionData) || void 0 === t ? void 0 : t.is_renewal) && void 0 !== n && n, T = _ ? (0, d.getRenewButtonLabels)() : (0, d.getJoinButtonLabels)(), I = f.guild_id, m = (0, a.useStateFromStores)([i.default], () => {
    var e;
    return null === (e = i.default.getGuild(I)) || void 0 === e ? void 0 : e.systemChannelFlags
  }, [I]), N = null != m && (0, o.hasFlag)(m, c.SystemChannelFlags.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES), p = l.useMemo(() => (0, u.getRoleSubscriptionPurchaseSystemMessageEventProperties)(f, E), [f, E]);
  return N ? null : (0, s.jsx)(r.default, {
    channel: f,
    message: E,
    buttonLabels: T,
    stickers: d.STICKERS,
    event: c.AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED,
    eventProperties: p
  })
}
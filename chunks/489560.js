"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007"), n("424973");
var a = n("37983"),
  s = n("884691"),
  i = n("446674"),
  l = n("299285"),
  r = n("963662"),
  o = n("592407"),
  u = n("524503"),
  d = n("650509"),
  c = n("49111"),
  f = n("782340"),
  E = n("630159");

function _(e) {
  let {
    guild: t
  } = e, n = (0, d.useUnseenEndedApplicationSubscriptionEntitlements)(t), _ = () => (0, u.dismissApplicationSubscriptionExpirationNotice)(t.id), h = s.useMemo(() => new Set(n.map(e => e.applicationId)), [n]), C = (0, i.useStateFromStoresArray)([l.default], () => {
    let e = [];
    for (let t of h) {
      let n = l.default.getApplication(t);
      null != n && e.push(n)
    }
    return e
  }, [h]);
  if (0 === C.length) return null;
  let I = "";
  return I = 1 === C.length ? f.default.Messages.ONE_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT.format({
    a: C[0].name
  }) : 2 === C.length ? f.default.Messages.TWO_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT.format({
    a: C[0].name,
    b: C[1].name
  }) : 3 === C.length ? f.default.Messages.THREE_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT.format({
    a: C[0].name,
    b: C[1].name,
    c: C[2].name
  }) : f.default.Messages.MORE_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT, (0, a.jsx)(r.default, {
    guild: t,
    onDismissed: _,
    message: I,
    type: c.ChannelNoticeTypes.APPLICATION_SUBSCRIPTION_EXPIRATION,
    image: E,
    onClick: () => {
      _(), o.default.open(t.id, c.GuildSettingsSections.INTEGRATIONS)
    },
    imageMarginTop: 6,
    imageMarginX: 46,
    cta: f.default.Messages.APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CTA
  })
}
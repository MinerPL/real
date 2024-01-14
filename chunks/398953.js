"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("77078"),
  l = n("450911"),
  r = n("716241"),
  o = n("456353"),
  u = n("599110"),
  d = n("49111"),
  c = n("782340");

function E(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    {
      priorityMembers: n,
      partiedMembers: E
    } = e,
    f = s.useContext(u.AnalyticsContext),
    _ = n.map(e => {
      let {
        user: t
      } = e;
      return t.id
    }),
    h = 1 === E.length && 1 === n.length,
    C = n.length - E.length > 0;
  return (h || t) && !C && 0 !== _.length ? (0, a.jsx)(i.MenuItem, {
    id: "message",
    action: function() {
      l.default.openPrivateChannel(_).then(t => r.default.trackWithMetadata(d.AnalyticEvents.ACTIVITY_FEED_DM_VISITED, {
        source: {
          ...f.location,
          object: d.AnalyticsObjects.LIST_ITEM
        },
        channel_id: t,
        recipient_id: "string" == typeof _ ? _ : _[0],
        af_recently_played: !1,
        ...(0, o.getPartyMetadata)(e)
      }))
    },
    label: c.default.Messages.SEND_DM
  }) : null
}
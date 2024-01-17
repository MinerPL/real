"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var l = n("37983");
n("884691");
var i = n("77078"),
  r = n("139375"),
  s = n("419830"),
  o = n("990745"),
  a = n("449008"),
  u = n("432153"),
  c = n("677795"),
  d = n("782340"),
  f = n("856972");

function E(e) {
  let {
    channelId: t
  } = e, n = (0, u.useChannelWithTemplateFallback)(t);
  if (null == n) return (0, l.jsx)(l.Fragment, {
    children: "[".concat(d.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETED_CHANNEL_LABEL, "]")
  });
  let a = n.isMediaChannel() ? o.default : (0, s.getSimpleChannelIconComponent)(n.type);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(i.HiddenVisually, {
      children: (0, r.default)({
        channel: n
      })
    }), (0, l.jsxs)("div", {
      "aria-hidden": !0,
      children: [null != a && (0, l.jsx)(a, {
        className: f.icon,
        "aria-hidden": !0
      }), n.name]
    })]
  })
}

function _(e) {
  switch (e.ref_type) {
    case c.GuildRoleSubscriptionBenefitTypes.CHANNEL:
      return (0, l.jsx)(E, {
        channelId: e.ref_id
      });
    case c.GuildRoleSubscriptionBenefitTypes.INTANGIBLE:
      return e.name;
    default:
      (0, a.assertNever)(e)
  }
}
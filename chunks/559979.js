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
  a = n("990745"),
  o = n("449008"),
  u = n("432153"),
  d = n("677795"),
  c = n("782340"),
  f = n("856972");

function E(e) {
  let {
    channelId: t
  } = e, n = (0, u.useChannelWithTemplateFallback)(t);
  if (null == n) return (0, l.jsx)(l.Fragment, {
    children: "[".concat(c.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETED_CHANNEL_LABEL, "]")
  });
  let o = n.isMediaChannel() ? a.default : (0, s.getSimpleChannelIconComponent)(n.type);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(i.HiddenVisually, {
      children: (0, r.default)({
        channel: n
      })
    }), (0, l.jsxs)("div", {
      "aria-hidden": !0,
      children: [null != o && (0, l.jsx)(o, {
        className: f.icon,
        "aria-hidden": !0
      }), n.name]
    })]
  })
}

function _(e) {
  switch (e.ref_type) {
    case d.GuildRoleSubscriptionBenefitTypes.CHANNEL:
      return (0, l.jsx)(E, {
        channelId: e.ref_id
      });
    case d.GuildRoleSubscriptionBenefitTypes.INTANGIBLE:
      return e.name;
    default:
      (0, o.assertNever)(e)
  }
}
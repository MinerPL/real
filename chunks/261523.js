"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
});
var n = l("37983");
l("884691");
var a = l("77078"),
  s = l("899604"),
  i = l("999203"),
  r = l("777003"),
  o = l("782340"),
  u = l("391119"),
  d = l("814076");

function c(e) {
  var t;
  let {
    user: l,
    guildId: c
  } = e, {
    botUpgraded: f,
    activeSubscriptionListing: m
  } = (0, i.default)({
    user: l,
    guildId: c
  }), p = null == m ? void 0 : null === (t = m.sku_benefits) || void 0 === t ? void 0 : t.benefits;
  return null != c && f && null != p && 0 !== p.length ? (0, n.jsxs)(r.default, {
    children: [(0, n.jsx)(a.Heading, {
      variant: "eyebrow",
      className: d.title,
      children: o.default.Messages.BOT_PROFILE_BENEFITS_HEADING
    }), (0, n.jsx)("div", {
      className: u.benefitsContainer,
      children: p.map((e, t) => (0, n.jsx)(s.default, {
        showsDescription: !1,
        emojiContainerClassName: u.emojiContainer,
        nameTextVariant: "text-sm/normal",
        nameTextColor: "text-normal",
        benefit: e
      }, "".concat(e.name).concat(t)))
    })]
  }) : null
}
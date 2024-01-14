"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
});
var n = a("37983");
a("884691");
var s = a("77078"),
  i = a("559317"),
  l = a("701909"),
  u = a("49111"),
  d = a("782340");

function r(e) {
  let {
    listing: t,
    transitionState: a,
    onClose: r,
    ...o
  } = e;
  return (0, n.jsx)(i.default, {
    sku_id: t.id,
    sku_name: t.name,
    guild_id: t.guild_id,
    header: d.default.Messages.GUILD_SHOP_REPORT_MODAL_HEADER.format({
      listingName: t.name
    }),
    transitionState: a,
    onClose: r,
    ...o,
    children: (0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      children: d.default.Messages.GUILD_SHOP_REPORT_MODAL_BODY.format({
        listingName: t.name,
        monetizationTermsUrl: l.default.getArticleURL(u.HelpdeskArticles.CREATOR_TERMS),
        communityGuidelinesUrl: u.MarketingURLs.GUIDELINES
      })
    })
  })
}
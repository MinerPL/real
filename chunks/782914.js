"use strict";
n.r(e), n.d(e, {
  getCreatorMonetizationAcceptTermsCheckboxText: function() {
    return r
  }
});
var a = n("701909"),
  i = n("49111"),
  o = n("782340");

function r() {
  return o.default.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_V2_ACCEPT_TERMS_CHECKBOX.format({
    fullTermsUrl: a.default.getArticleURL(i.HelpdeskArticles.CREATOR_TERMS),
    creatorRevenuePolicyUrl: a.default.getArticleURL(i.HelpdeskArticles.CREATOR_POLICY)
  })
}